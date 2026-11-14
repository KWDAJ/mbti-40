// ===== BGM 模块（人格专属） =====
const Music = (function() {
  let audio = null;
  let _currentSrc = '';
  let _failedSrc = '';          // 加载失败过的音源，避免来回重试
  let _autoMutedPlay = false;   // 本次会话是"静音偷跑"状态，等首次用户手势时解封

  const USER_PREF_KEY = 'mbti_music_pref_v1';   // { userPaused: bool, muted: bool }

  // 人格→音乐文件映射（26 个已有专属曲；剩下的 14 个还在生成，用默认曲兜底）
  const BGM_MAP = {
    INTJ: 'music/intj.mp3',
    INTP: 'music/intp.mp3',
    ENTP: 'music/entp.mp3',
    ESTP: 'music/estp.mp3',
    INFJ: 'music/infj.mp3',
    INFP: 'music/infp.mp3',
    ENFP: 'music/enfp.mp3',
    ENFJ: 'music/enfj.mp3',
    ISTJ: 'music/istj.mp3',
    ENTJ: 'music/entj.mp3',
    ISFJ: 'music/isfj.mp3',
    ESTJ: 'music/estj.mp3',
    HYBRID_SN_TF: 'music/hybrid_sn_tf.mp3',
    // 11-14 这批补上的 13 首
    ESFJ: 'music/esfj.mp3',
    ISTP: 'music/istp.mp3',
    ISFP: 'music/isfp.mp3',
    ESFP: 'music/esfp.mp3',
    HYBRID_EI: 'music/hybrid_ei.mp3',
    HYBRID_SN: 'music/hybrid_sn.mp3',
    HYBRID_TF: 'music/hybrid_tf.mp3',
    HYBRID_JP: 'music/hybrid_jp.mp3',
    HYBRID_EI_SN: 'music/hybrid_ei_sn.mp3',
    HYBRID_EI_TF: 'music/hybrid_ei_tf.mp3',
    HYBRID_EI_JP: 'music/hybrid_ei_jp.mp3',
    ENMEA_4: 'music/enmea_4.mp3',
    ENMEA_9: 'music/enmea_9.mp3',
    // ===== 还没生成的 14 个：大五 OCEAN（10）+ 九型 7/8 + 交叉（2）=====
    OCEAN_O_MAX: null, OCEAN_O_MIN: null,
    OCEAN_C_MAX: null, OCEAN_C_MIN: null,
    OCEAN_A_MAX: null, OCEAN_A_MIN: null,
    OCEAN_N_MIN: null, OCEAN_N_MAX: null,
    OCEAN_O_C_MAX: null, OCEAN_A_N_MAX: null,
    ENMEA_7: null, ENMEA_8: null,
    INTJ_OCEAN_C_MINUS: null, ENFP_OCEAN_C_PLUS: null,
  };
  const DEFAULT_BGM = 'bgm.mp3?v=1';

  function _savePref(p) {
    try { localStorage.setItem(USER_PREF_KEY, JSON.stringify(p)); } catch(e) {}
  }
  function _loadPref() {
    try { return JSON.parse(localStorage.getItem(USER_PREF_KEY) || '{}') || {}; } catch(e) { return {}; }
  }

  function ensureAudio() {
    if (audio) return audio;
    audio = new Audio(_currentSrc || DEFAULT_BGM);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.31;
    audio.addEventListener('error', () => {
      // 专属曲加载失败（404 / 网络断）：退回主题曲，别让人以为"没声音"
      console.warn('BGM 加载失败', _currentSrc);
      if (_failedSrc === _currentSrc) return;   // 已经退过一次，别来回弹
      _failedSrc = _currentSrc;
      if (_currentSrc && _currentSrc !== DEFAULT_BGM) {
        _currentSrc = DEFAULT_BGM;
        audio.src = DEFAULT_BGM;
        if (!_loadPref().userPaused) {
          audio.muted = false;
          audio.volume = 0.31;
          audio.play().catch(() => {});
        }
      }
      document.dispatchEvent(new CustomEvent('musicstate'));
    });
    audio.addEventListener('play',   syncUI);
    audio.addEventListener('pause',  syncUI);
    audio.addEventListener('volumechange', syncUI);
    _currentSrc = _currentSrc || DEFAULT_BGM;
    return audio;
  }

  // 同步按钮状态 / 波动条 / _currentMode——统一以 audio 的真实状态为准
  function syncUI() {
    const btn = document.getElementById('musicBtn');
    const bars = document.getElementById('musicBars');
    if (!btn) return;
    const playing = !!(audio && !audio.paused);
    const muted   = !!(audio && audio.muted);
    if (playing) { btn.classList.add('playing'); btn.classList.remove('muted'); bars?.classList.remove('hidden'); }
    else         { btn.classList.remove('playing'); btn.classList.add('muted'); bars?.classList.add('hidden'); }
    if (muted)   btn.classList.add('muted');   else btn.classList.remove('muted');
    Music._currentMode = playing ? 'playing' : 'muted';
    // 结果页那行"正在播放…"跟着真实播放状态走
    document.dispatchEvent(new CustomEvent('musicstate'));
  }

  // 切换到指定人格的专属 BGM：只换 src，复用同一个实例，不加时间戳
  function switchTo(mbtiCode) {
    const src = BGM_MAP[mbtiCode] || DEFAULT_BGM;
    if (_currentSrc === src) return;
    _currentSrc = src;
    if (!audio) return;
    const wasPlaying = !audio.paused;
    const prevVolume = audio.volume;
    const prevMuted  = audio.muted;
    audio.pause();
    audio.src = src;
    audio.volume = prevVolume;
    audio.muted  = prevMuted;
    if (wasPlaying) audio.play().catch(() => {});
  }

  // 用户意图：开始播放（不再管自动播放策略）
  function play() {
    const a = ensureAudio();
    _autoMutedPlay = false;
    _savePref({ userPaused: false, muted: false });
    a.muted = false;
    a.volume = 0.31;
    a.preload = 'auto';
    a.play().catch(() => {});
  }

  // 用户意图：暂停
  function stop() {
    if (audio) audio.pause();
    _autoMutedPlay = false;
    _savePref({ userPaused: true, muted: false });
  }

  // 把自动播放解封（首次用户交互时调用）
  function _unmute() {
    if (!audio || !audio.muted) return;
    // 还在 _autoMutedPlay 状态下才解封：用户一旦手动静音过，就尊重他的选择
    if (_autoMutedPlay) {
      _autoMutedPlay = false;
      audio.muted = false;
      _savePref({ userPaused: false, muted: false });
    }
  }

  // 解封：只绑"能授予用户手势权限"的事件（滚轮/滚动在 Chrome 里不算，绑了反而会让音乐被中途掐停）
  // 点页面任何一个位置都算首手势，都会把音乐真正开起来
  const UNLOCK_EVENTS = ['click','touchend','pointerdown','mousedown','keydown'];
  function _bindUnlock() {
    const unlock = () => {
      _unmute();
      // 连"静音偷跑"都被拦的情况：这次手势就是第一次真正的播放机会
      if (audio && audio.paused && !_loadPref().userPaused) {
        audio.muted = false;
        audio.volume = 0.31;
        audio.play().catch(() => {});
      }
      const hint = document.getElementById('musicHint');
      if (hint) hint.remove();
      UNLOCK_EVENTS.forEach(t => document.removeEventListener(t, unlock, true));
    };
    UNLOCK_EVENTS.forEach(t =>
      document.addEventListener(t, unlock, { capture: true, passive: true })
    );
    _showHint();
  }

  // 被拦截时给一句轻提示：滚动不会解锁，必须真实点一下
  function _showHint() {
    if (document.getElementById('musicHint')) return;
    const el = document.createElement('div');
    el.id = 'musicHint';
    el.textContent = '♪ 轻触屏幕，开启音乐';
    el.style.cssText = 'position:fixed;left:50%;bottom:96px;transform:translateX(-50%);padding:9px 18px;'
      + 'border-radius:999px;background:rgba(18,18,24,.86);color:#f5f5f7;font-size:13px;letter-spacing:.4px;'
      + 'z-index:99999;pointer-events:none;opacity:0;transition:opacity .45s;white-space:nowrap;';
    document.body.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = '1'; });
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => { if (el.parentNode) el.remove(); }, 600);
    }, 7000);
  }

  function init() {
    ensureAudio();
    _currentMode = 'playing';

    // 1. 先直接带声音自动播（浏览器若允许，一步到位）
    audio.muted  = false;
    audio.volume = 0.31;
    audio.play().then(() => {
      _autoMutedPlay = false;
      syncUI();
    }).catch(() => {
      // 2. 被浏览器拦截：静音偷跑，等首次用户手势立刻解封成有声
      audio.muted = true;
      _autoMutedPlay = true;
      // 不管静音能不能跑，都先绑上"点任意位置即开播"；连静音都被拦时这一下就是唯一机会
      _bindUnlock();
      audio.play().then(() => {
        syncUI();
      }).catch(() => {
        // 连静音播都被拦：保持实例可点，手势一来就开播
        _autoMutedPlay = false;
        audio.muted = false;
        _currentMode = 'muted';
        syncUI();
      });
    });

    syncUI();
  }

  // 进结果页：切到该人格的专属曲，并确保真的在响（除非用户自己按过暂停）
  function hasTrack(mbtiCode) {
    const src = mbtiCode && BGM_MAP[mbtiCode];
    return !!src && src !== _failedSrc;   // 加载失败的不算"有专属曲"
  }
  function isPlaying() {
    return !!(audio && !audio.paused && !audio.muted);
  }
  function enterResult(mbtiCode) {
    const src = BGM_MAP[mbtiCode] || DEFAULT_BGM;
    const a = ensureAudio();
    if (_currentSrc !== src) {
      _currentSrc = src;
      if (_failedSrc && _failedSrc !== src) _failedSrc = '';   // 换曲了，重试一次
      a.pause();
      a.src = src;
      a.load();
    }
    if (!_loadPref().userPaused) {
      a.muted = false;
      a.volume = 0.31;
      a.play().catch(() => {});
    }
    syncUI();
    document.dispatchEvent(new CustomEvent('musicstate'));
  }

  let _currentMode = 'muted';

  return {
    init, play, stop, switchTo, enterResult, hasTrack, isPlaying,
    get _currentMode() { return _currentMode; },
    set _currentMode(v) { _currentMode = v; },
    get currentSrc() { return _currentSrc; }
  };
})();

// 全局控制（按钮状态由 audio.play/pause 事件通过 syncUI 自动同步，这里只负责意图）
window.toggleMusic = function() {
  try {
    if (Music._currentMode === 'playing') Music.stop();
    else Music.play();
    // syncUI 在 play/stop 内部通过 audio 事件自动跑，不用手动改 class
  } catch (e) {
    console.warn('toggleMusic error', e);
  }
};

// ===== MBTI 测试应用 v4 =====
(function() {
  const ALL = MBTI_DATA.questions;
  const DIMS = ['EI', 'SN', 'TF', 'JP'];
  // 每个模式固定追加 16 道隐藏题（大五 4 维 × 2 + 九型 4 型 × 2）
  const MODE_CONFIG = {
    lite:    { name: '精简',  total: 22, perDim: 4, hidden: { OCEAN_O: 2, OCEAN_C: 2, OCEAN_A: 1, OCEAN_N: 1 } },
    quick:   { name: '快速',  total: 36, perDim: 5  },
    normal:  { name: '进阶',  total: 52, perDim: 9  },
    precise: { name: '精准',  total: 68, perDim: 13 },
    supreme: { name: '至尊',  total: 96, perDim: 20 }
  };
  const HIDDEN_DIMS = ['OCEAN_O', 'OCEAN_C', 'OCEAN_A', 'OCEAN_N', 'ENMEA_7', 'ENMEA_8', 'ENMEA_9', 'ENMEA_4'];
  // 本次测验里每个隐藏维度实际出了几道题（判定阈值按题量换算，精简模式只有 1 道）
  let hiddenQCounts = {};

  let testQuestions = [];
  let shuffledOptions = [];   // 每题对应的打乱后的选项索引
  let currentIndex = 0;
  // 每个维度一个加权净分：>0 偏左极，<0 偏右极
  // 维度里累计的题目数（用于算百分比）
  let dimScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  let dimCounts = { EI: 0, SN: 0, TF: 0, JP: 0 };
  let currentMode = 'normal';
  let answerHistory = [];     // 答案历史，存 { weight, dimension } 用于返回上一题

  // ===== 按维度均匀抽题 =====
  function selectQuestions(mode) {
    const cfg = MODE_CONFIG[mode];
    const byDim = {};
    DIMS.forEach(d => byDim[d] = ALL.filter(q => q.dimension === d));

    const picked = [];
    DIMS.forEach(d => {
      const pool = [...byDim[d]];
      shuffle(pool);
      picked.push(...pool.slice(0, cfg.perDim));
    });

    // 追加隐藏题：默认每个大五/九型维度 2 道（-4 ~ +4）；精简模式按 cfg.hidden 分配
    hiddenQCounts = {};
    HIDDEN_DIMS.forEach(d => {
      const n = cfg.hidden ? (cfg.hidden[d] || 0) : 2;
      hiddenQCounts[d] = n;            // 0 也记下来（表示这个模式不出这个维度的题）
      if (!n) return;
      const pool = shuffle(ALL.filter(q => q.dimension === d));
      picked.push(...pool.slice(0, n));
    });

    shuffle(picked);
    return picked;
  }

  // 随机打乱数组（返回新数组）
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ===== 页面切换 =====
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);

    // 给 body 加 class，让 CSS 知道当前页面（音乐按钮位置）
    document.body.classList.remove('home-active', 'test-active', 'result-active');
    document.body.classList.add(id + '-active');

    // 自动切换音乐风格（仅当用户已经开着音乐）
    if (Music._currentMode === 'playing') {
      if (id === 'home' || id === 'test') Music.switchTo(null);
      // result 页的音乐在 showResult 里按人格单独设置
    }
  }

  // ===== 更新公告 / 更新日志 =====
  // 每次改完往数组最前面插一条（版本号与 index.html 标题保持一致）
  const SITE_CHANGELOG = [
    {
      v: 0, date: '2026-11-14', time: '20:11:00',
      items: [
        { t: '修复', k: 'fix', x: '精简模式答到一半退出再「继续上次测试」，隐藏维度阈值会退回常规值，导致大五 4 个稀有型判不出来；已按已选题重算' },
        { t: '优化', k: 'opt', x: '结果页那行音乐说明跟着真实播放状态走：暂停时不再写「正在播放」，改成提示点右上角播放' },
        { t: '修复', k: 'fix', x: '专属曲加载失败（网络断/文件缺失）会自动退回主题曲，不会静静地没有声音' },
        { t: '优化', k: 'opt', x: '手机端分享弹层不再叠毛玻璃，打开分享图不再整屏重算模糊' }
      ]
    },
    {
      v: 46, date: '2026-11-14', time: '19:06:28',
      items: [
        { t: '新增', k: 'add', x: '新增「精简 22 题」模式：4 个大维各 4 题、大五 6 题，约 3 分钟出结果' },
        { t: '修复', k: 'fix', x: '测完进结果页常常听不到人格音乐：现在不论之前音乐开没开，进结果页直接换上这个型的专属曲并开始播' },
        { t: '新增', k: 'add', x: '结果页显示「正在播放 XX 的专属配乐」，没配乐的型会说明先放主题曲' },
        { t: '新增', k: 'add', x: '补齐 13 首人格专属配乐（ESFJ/ISTP/ISFP/ESFP、7 个混合型、九型 4 和 9），有专属曲的型增至 26 个' }
      ]
    },
    {
      v: 43, date: '2026-11-14', time: '18:43:05',
      items: [
        { t: '修复', k: 'fix', x: '进站后点页面任意位置就开始放音乐（原来只能点右上角音乐按钮，有的浏览器连静音偷跑都被拦）' },
        { t: '优化', k: 'opt', x: '公告栏每个版本后面加上具体时间，精确到时分秒' },
        { t: '优化', k: 'opt', x: '公告栏最多留 4 个版本，更早的收成一行说明，不再越拉越长' }
      ]
    },
    {
      v: 42, date: '2026-11-14', time: '18:23:57',
      items: [
        { t: '修复', k: 'fix', x: '分享弹层引用了已删除的动画名，打开时不再淡入；补回自己的动画（手机端也生效）' },
        { t: '修复', k: 'fix', x: '「无争调停者」正文里还剩两处英文「peace」，改为「平静」' },
        { t: '优化', k: 'opt', x: '公告栏按钮的读屏标签会跟着展开/收起状态变化' }
      ]
    },
    {
      v: 41, date: '2026-11-14', time: '12:59:26',
      items: [
        { t: '新增', k: 'add', x: '首页新增「更新公告」栏，可展开查看每个版本改了什么、修了什么' },
        { t: '新增', k: 'add', x: '版本号自动同步：文件内容一变，?v= 与标题版本一起 +1' }
      ]
    },
    {
      v: 40, date: '2026-11-14', time: '12:59:26',
      items: [
        { t: '修复', k: 'fix', x: '结果页大号人格代号不渲染（40 型通用），代号现在清晰可读' },
        { t: '修复', k: 'fix', x: '6 个类型代号对比度低于 3:1（最低 1.74），全部提到 4.5:1 以上' },
        { t: '修复', k: 'fix', x: '稀有型徽标与文字分析看起来不是同一个人：补上「底子代号 + 命中维度」说明' },
        { t: '修复', k: 'fix', x: '稀有型结果页缺隐藏维度：新增大五 / 九型「隐藏维度强度」卡' },
        { t: '修复', k: 'fix', x: '代号光晕写死蓝紫：改为跟随人格主色' },
        { t: '修复', k: 'fix', x: '手机端音乐按钮压住卡片：停靠标题栏右侧，滚动时淡出' },
        { t: '修复', k: 'fix', x: '点开人格详情时整屏闪一下：去掉整层淡入、卡片呼吸光与手机端毛玻璃' },
        { t: '优化', k: 'opt', x: '文案 5 处：「内 Peace 者」→「无争调停者」、职业「哲学家用」→「哲学家」、三条标语英文引号改「」' },
        { t: '优化', k: 'opt', x: '分享图：百分比移出条形、顶行补「底子 · 命中维度」，分享文案同步' }
      ]
    }
  ];

  // 公告栏最多留 4 个版本，更早的收成一行说明（避免越改越长）
  const NOTICE_MAX_VERSIONS = 4;

  // 站点当前版本号（取自 <title>）：公告栏里 v:0 的条目表示「就是现在这一版」，
  // 这样改完代码再升版，公告上的版本号会自动跟着标题走，不会出现标题 v46、公告写 v45
  function siteVersion() {
    const m = (document.title || '').match(/·\s*v(\d+)/);
    return m ? Number(m[1]) : 0;
  }

  function renderNoticeBoard() {
    const body = document.getElementById('nbBody');
    const latest = document.getElementById('nbLatest');
    if (!body || !SITE_CHANGELOG.length) return;
    const shown = SITE_CHANGELOG.slice(0, NOTICE_MAX_VERSIONS)
      .map(it => (it.v ? it : Object.assign({}, it, { v: siteVersion() })));
    const top = shown[0];
    if (latest) latest.textContent = `v${top.v} · ${top.items[0].x}`;
    const oldestShown = shown[shown.length - 1].v;
    body.innerHTML = shown.map(ver => `
      <div class="nb-ver">
        <div class="nb-ver-head">
          <span class="nb-ver-no">v${ver.v}</span>
          <span class="nb-ver-date">${ver.date}${ver.time ? ' ' + ver.time : ''}</span>
        </div>
        ${ver.items.map(it => `<div class="nb-li"><span class="nb-tag ${it.k}">${it.t}</span><span>${it.x}</span></div>`).join('')}
      </div>
    `).join('') + `<div class="nb-note">更早的版本（v1–v${oldestShown - 1}）：本站自上线起持续迭代，历史细节未逐条留档。</div>`;
  }
  window.toggleNotice = function() {
    const board = document.getElementById('noticeBoard');
    if (!board) return;
    board.classList.toggle('open');
    const isOpen = board.classList.contains('open');
    board.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    const head = board.querySelector('.nb-head');
    if (head) head.setAttribute('aria-label', isOpen ? '收起更新公告' : '展开更新公告');
  };

  // ===== 初始化预览 =====
  function initPreviewGrid() {
    const grid = document.getElementById('previewGrid');
    const codes = Object.keys(MBTI_DATA.personalities);
    // 按稀有度排序：16标准先 → 8混合中 → 16大五/九型放最后
    const rankOf = (code) => {
      if (/^[IESNTFJP]{4}$/.test(code)) return 0;        // INTJ ESFP 等
      if (code.startsWith('HYBRID')) return 1;            // HYBRID_XX
      return 2;                                            // OCEAN_ / ENMEA_ / INTJ_OCEAN_ 等稀有
    };
    codes.sort((a, b) => {
      const ra = rankOf(a), rb = rankOf(b);
      if (ra !== rb) return ra - rb;
      // 同 rank 内按字母序（美观）
      return a.localeCompare(b);
    });
    grid.innerHTML = codes.map((code, i) => {
      const p = MBTI_DATA.personalities[code];
      return `<div class="preview-item" onclick="showPersonalityDetail('${code}')" style="--hero:${p.heroColor};--i:${i}">
        <span class="icon">${p.heroIcon || '✨'}</span>
        <span class="code">${code}</span>
        <span class="name">${p.name}</span>
        <span class="preview-count" data-code="${code}">🌐 …</span>
      </div>`;
    }).join('');
  }

  // ===== 人格详情模态框 =====
  window.showPersonalityDetail = function(code) {
    const p = MBTI_DATA.personalities[code];
    if (!p) return;
    const modal = document.getElementById('personalityModal');
    const body = document.getElementById('personalityModalBody');
    const groupEmoji = { '分析家':'🧠','外交家':'💫','守卫者':'🛡️','探索家':'🎪','混合型':'✨' };

    body.innerHTML = `
      <div class="pm-hero" style="background: linear-gradient(135deg, ${p.heroColor}dd, ${p.heroColor}66);">
        <button class="pm-close" onclick="closePersonalityDetail()">✕</button>
        <div class="pm-icon">${p.heroIcon || '✨'}</div>
        <div class="pm-code">${code}</div>
        <div class="pm-name">${p.name}</div>
        <div class="pm-tagline">"${p.tagline}"</div>
        <div class="pm-meta">
          <span class="pm-chip">${groupEmoji[p.group] || '✨'} ${p.group || '人格'}</span>
          <span class="pm-chip">👥 人口占比 ${p.population || '~5%'}</span>
        </div>
      </div>
      <div class="pm-body">
        <div class="pm-section">
          <div class="pm-section-title">📖 人格描述</div>
          <p class="pm-desc">${p.description}</p>
        </div>
        <div class="pm-section">
          <div class="pm-section-title">🎯 核心特质</div>
          <div class="pm-tags">${(p.traits || []).map(t => `<span class="pm-tag">${t}</span>`).join('')}</div>
        </div>
        <div class="pm-row">
          <div class="pm-col">
            <div class="pm-section-title">💪 优势</div>
            <ul class="pm-list good">${(p.strengths || []).map(s => `<li>${s}</li>`).join('')}</ul>
          </div>
          <div class="pm-col">
            <div class="pm-section-title">⚠️ 盲点</div>
            <ul class="pm-list bad">${(p.weaknesses || []).map(w => `<li>${w}</li>`).join('')}</ul>
          </div>
        </div>
        ${p.loveStyle ? `<div class="pm-section">
          <div class="pm-section-title">💖 恋爱风格</div>
          <p class="pm-desc">${p.loveStyle}</p>
        </div>` : ''}
        ${p.workStyle ? `<div class="pm-section">
          <div class="pm-section-title">💼 工作风格</div>
          <p class="pm-desc">${p.workStyle}</p>
        </div>` : ''}
        <div class="pm-section">
          <div class="pm-section-title">🎓 适合职业</div>
          <div class="pm-tags">${(p.careers || []).map(c => `<span class="pm-tag blue">${c}</span>`).join('')}</div>
        </div>
        ${p.famous ? `<div class="pm-section">
          <div class="pm-section-title">🌟 代表人物</div>
          <p class="pm-desc">${p.famous}</p>
        </div>` : ''}
        <div id="personalityCountBadge" class="pm-count-badge">🌐 加载计数中...</div>
        <button class="pm-test-btn" onclick="closePersonalityDetail(); window.scrollTo(0, document.getElementById('home').offsetTop);">🔬 测测我是不是 ${p.name}</button>
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closePersonalityDetail = function() {
    document.getElementById('personalityModal').classList.remove('open');
    document.body.style.overflow = '';
  };
  // 点击遮罩关闭
  document.addEventListener('click', function(e) {
    if (e.target.id === 'personalityModal') window.closePersonalityDetail();
  });
  // Esc 关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') window.closePersonalityDetail();
  });

  // ===== 开始测试 =====
  window.startTest = function(mode) {
    if (typeof mode === 'string') currentMode = mode;
    testQuestions = selectQuestions(currentMode);

    // 每题打乱选项顺序（保留 weight 对应关系）
    shuffledOptions = testQuestions.map(q => {
      const idxs = [0, 1, 2, 3];
      shuffle(idxs);
      return idxs;
    });

    currentIndex = 0;
    _advancing = false;
    _finished = false;
    dimScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    dimCounts = { EI: 0, SN: 0, TF: 0, JP: 0 };
    answerHistory = [];
    clearProgress();
    renderHomeState();
    showPage('test');
    renderQuestion();
  };

  window.goHome = function() {
    showPage('home');
    renderHomeState();
  };

  // ===== 断点续测 + 本地历史 =====
  const PROGRESS_KEY = 'mbti_progress_v2';   // v2：题库换代，旧进度作废，避免旧题串进新题
  const HISTORY_KEY = 'mbti_history_v1';

  function readProgress() {
    try {
      const d = JSON.parse(localStorage.getItem(PROGRESS_KEY) || 'null');
      if (!d || !Array.isArray(d.ids) || !Array.isArray(d.orders) || !Array.isArray(d.answers)) return null;
      const total = (MODE_CONFIG[d.mode] && MODE_CONFIG[d.mode].total) || d.ids.length;
      const answered = d.answers.filter(Boolean).length;
      if (!(d.index > 0) || d.index >= total || answered < 1) return null;
      d.total = total;
      d.answered = answered;
      return d;
    } catch(e) { return null; }
  }

  function saveProgress() {
    try {
      if (!testQuestions.length) return;
      if (currentIndex >= testQuestions.length) return;
      if (!answerHistory.filter(Boolean).length) return;
      const data = {
        mode: currentMode,
        ids: testQuestions.map(q => ALL.indexOf(q)),
        orders: shuffledOptions,
        answers: answerHistory.map(a => a ? { weight: a.weight, dimension: a.dimension, origIdx: a.origIdx } : null),
        index: currentIndex,
        ts: Date.now()
      };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    } catch(e) {}
  }

  function clearProgress() {
    try { localStorage.removeItem(PROGRESS_KEY); } catch(e) {}
  }

  window.resumeTest = function() {
    const d = readProgress();
    if (!d) { renderHomeState(); return; }
    const qs = d.ids.map(i => ALL[i]);
    if (!qs.length || qs.some(q => !q)) { clearProgress(); renderHomeState(); return; }

    currentMode = d.mode;
    testQuestions = qs;
    // 续答时按已选题重建"每个隐藏维度出了几道题"：不重建的话阈值会退回每维 2 道，
    // 精简模式里只有 1 道题的 OCEAN_A / OCEAN_N 就永远够不到阈值（4 个大五稀有型+组合型判不出）
    hiddenQCounts = {};
    HIDDEN_DIMS.forEach(dim => { hiddenQCounts[dim] = 0; });
    qs.forEach(q => {
      if (Object.prototype.hasOwnProperty.call(hiddenQCounts, q.dimension)) hiddenQCounts[q.dimension] += 1;
    });
    shuffledOptions = d.orders.map(o => (Array.isArray(o) && o.length === 4) ? o : [0, 1, 2, 3]);
    answerHistory = d.answers.map(a => (a && typeof a.weight === 'number')
      ? { weight: a.weight, dimension: a.dimension, origIdx: (a.origIdx === undefined ? null : a.origIdx) }
      : null);
    currentIndex = Math.min(d.index, qs.length - 1);
    _finished = false;
    dimScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    dimCounts = { EI: 0, SN: 0, TF: 0, JP: 0 };
    answerHistory.forEach(a => {
      if (!a) return;
      dimScores[a.dimension] = (dimScores[a.dimension] || 0) + a.weight;
      dimCounts[a.dimension] = (dimCounts[a.dimension] || 0) + 1;
    });

    showPage('test');
    renderQuestion(true);
  };

  window.discardProgress = function() {
    clearProgress();
    renderHomeState();
  };

  function readHistory() {
    try {
      const arr = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      return Array.isArray(arr) ? arr.filter(x => x && x.code) : [];
    } catch(e) { return []; }
  }

  function pushHistory(code, name) {
    try {
      const list = readHistory().filter(x => x.code !== code);
      list.unshift({ code, name, mode: currentMode, ts: Date.now() });
      localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 20)));
    } catch(e) {}
  }

  function timeAgo(ts) {
    if (!ts) return '';
    const diff = Math.max(0, Date.now() - ts);
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return Math.floor(diff / 60000) + ' 分钟前';
    if (diff < 86400000) return Math.floor(diff / 3600000) + ' 小时前';
    return Math.floor(diff / 86400000) + ' 天前';
  }

  // 首页的「继续上次测试」+「我测过的类型」
  function renderHomeState() {
    const slot = document.getElementById('resumeSlot');
    if (slot) {
      const d = readProgress();
      if (!d) {
        slot.innerHTML = '';
      } else {
        const pct = Math.max(4, Math.round(d.answered / d.total * 100));
        const modeName = (MODE_CONFIG[d.mode] && MODE_CONFIG[d.mode].name) || '测试';
        slot.innerHTML = `
          <div class="resume-card">
            <div class="resume-main">
              <div class="resume-title">⏳ 上次的测试还没做完</div>
              <div class="resume-meta">${modeName}模式 · 已答 ${d.answered}/${d.total} 题 · ${timeAgo(d.ts)}</div>
              <div class="resume-bar"><div class="resume-fill" style="width:${pct}%"></div></div>
            </div>
            <div class="resume-actions">
              <button class="resume-go" onclick="resumeTest()">继续</button>
              <button class="resume-drop" onclick="discardProgress()" aria-label="放弃这次测试">✕</button>
            </div>
          </div>`;
      }
    }

    const hs = document.getElementById('historySlot');
    if (hs) {
      const list = readHistory();
      if (!list.length) {
        hs.innerHTML = '';
      } else {
        hs.innerHTML = `
          <div class="history-section">
            <div class="history-title">🕘 我测过的类型</div>
            <div class="history-chips">
              ${list.map(x => {
                const p = MBTI_DATA.personalities[x.code] || {};
                return `<button class="history-chip" style="--hero:${p.heroColor || '#667eea'}" onclick="showPersonalityDetail('${x.code}')">
                  <span class="hc-code">${x.code}</span>
                  <span class="hc-name">${p.name || ''}</span>
                </button>`;
              }).join('')}
            </div>
          </div>`;
      }
    }
  }

  // ===== 渲染问题 =====
  function renderQuestion(fromPrev) {
    const q = testQuestions[currentIndex];
    const order = shuffledOptions[currentIndex];
    const total = testQuestions.length;

    // 呼吸脉冲点（首次或切换时确保存在）
    const pf = document.getElementById('progressFill');
    if (pf && !pf.querySelector('.progress-pulse')) {
      pf.insertAdjacentHTML('beforeend', '<span class="progress-pulse"></span>');
    }
    pf.style.width = `${((currentIndex + 1) / total) * 100}%`;
    document.getElementById('progressText').textContent = `${currentIndex + 1} / ${total}`;

    const dimText = { EI: '能量方向 (E/I)', SN: '信息获取 (S/N)', TF: '决策方式 (T/F)', JP: '生活态度 (J/P)' };
    document.getElementById('questionDimension').textContent = dimText[q.dimension] || '人格倾向';

    const qArea = document.getElementById('questionArea');
    qArea.classList.remove('fade-in-up');
    void qArea.offsetWidth;
    qArea.classList.add('fade-in-up');
    document.getElementById('questionText').textContent = q.text;

    const labels = ['A', 'B', 'C', 'D'];
    const optionsArea = document.getElementById('optionsArea');
    optionsArea.innerHTML = order.map((origIdx, i) => {
      const opt = q.options[origIdx];
      const isSelected = fromPrev && answerHistory[currentIndex] && answerHistory[currentIndex].weight === opt.weight;
      return `<button class="option-btn${isSelected ? ' selected' : ''}" data-weight="${opt.weight}" data-orig-idx="${origIdx}" onclick="selectOption(this)">
        <span class="option-label">${labels[i]}.</span>
        <span class="option-text">${opt.text}</span>
      </button>`;
    }).join('');

    // 返回按钮
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
      prevBtn.style.display = currentIndex > 0 ? '' : 'none';
    }
  }

  // ===== 选择选项 =====
  let _advancing = false;   // 220ms 切题动画期间上锁，防止连点跳过题目
  let _finished = false;    // 已交卷：避免最后一题的残留按钮再被点到，触发 undefined 报错
  window.selectOption = function(btn) {
    if (_advancing || _finished) return;
    const q = testQuestions[currentIndex];
    if (!q) return;
    const weight = parseInt(btn.dataset.weight, 10);

    // 如果这题之前已经选过（返回过），先撤掉旧答案
    if (answerHistory[currentIndex]) {
      const old = answerHistory[currentIndex];
      dimScores[old.dimension] = (dimScores[old.dimension] || 0) - old.weight;
      dimCounts[old.dimension] = Math.max(0, (dimCounts[old.dimension] || 0) - 1);
    }

    // 隐藏维度（OCEAN_/ENMEA_）不在初始 dimScores 里，必须惰性初始化，否则会算出 NaN
    dimScores[q.dimension] = (dimScores[q.dimension] || 0) + weight;
    dimCounts[q.dimension] = (dimCounts[q.dimension] || 0) + 1;

    // 存答案历史
    answerHistory[currentIndex] = { weight, dimension: q.dimension, origIdx: btn.dataset.origIdx !== undefined ? parseInt(btn.dataset.origIdx, 10) : null };

    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    _advancing = true;
    setTimeout(() => {
      _advancing = false;
      currentIndex++;
      if (currentIndex < testQuestions.length) {
        saveProgress();
        renderQuestion();
      } else {
        _finished = true;
        showResult();
      }
    }, 220);
  };

  // ===== 返回上一题 =====
  window.prevQuestion = function() {
    if (_advancing || currentIndex === 0) return;
    currentIndex--;
    saveProgress();
    renderQuestion(true);  // true 表示从返回进入
  };

  // ===== 计算结果 =====
  // 返回 { baseCode, isHybrid, hybridDim, lookupCode }
  function calculateResult() {
    const prefs = {
      EI: dimPreference('EI'),
      SN: dimPreference('SN'),
      TF: dimPreference('TF'),
      JP: dimPreference('JP')
    };

    // 按中立程度排序的维度列表
    const ranked = DIMS.slice().sort((a, b) =>
      Math.abs(prefs[a] - 0.5) - Math.abs(prefs[b] - 0.5)
    );

    const r = [];
    r.push(dimScores.EI >= 0 ? 'E' : 'I');
    r.push(dimScores.SN >= 0 ? 'S' : 'N');
    r.push(dimScores.TF >= 0 ? 'T' : 'F');
    r.push(dimScores.JP >= 0 ? 'J' : 'P');
    const baseCode = r.join('');

    // 双维度混合：前两名都在 46%-54% 区间
    const NEUTRAL = 0.04;
    const top1 = ranked[0];
    const top2 = ranked[1];
    const top1Offset = Math.abs(prefs[top1] - 0.5);
    const top2Offset = Math.abs(prefs[top2] - 0.5);

    let isHybrid = false;
    let hybridDim = null;
    let hybridDim2 = null;
    let lookupCode = baseCode;

    if (top1Offset <= NEUTRAL && top2Offset <= NEUTRAL) {
      isHybrid = true;
      hybridDim = top1;
      hybridDim2 = top2;
      lookupCode = 'HYBRID_' + top1 + '_' + top2;
      if (!MBTI_DATA.personalities[lookupCode]) {
        lookupCode = 'HYBRID_' + top1;
        hybridDim2 = null;
      }
    } else if (top1Offset <= 0.02) {
      isHybrid = true;
      hybridDim = top1;
      lookupCode = 'HYBRID_' + top1;
    }

    // ===== 大五 OCEAN / 九型 判定（覆盖逻辑）=====
    const newCode = checkOCEANAndEnneagram(baseCode);
    if (newCode) {
      lookupCode = newCode;
      isHybrid = false;
      hybridDim = null;
      hybridDim2 = null;
    }

    return { baseCode, isHybrid, hybridDim, hybridDim2, lookupCode, prefs };
  }

  // ===== 大五 + 九型 分数计算 & 优先级判定 =====
  // 返回新 code 或 null
  function checkOCEANAndEnneagram(baseCode) {
    // 隐藏题每道权重 ±2，所以某维度的极端阈值 = 2 × 该维度这次出的题量
    // （常规模式每维 2 道 → 阈值 4；精简模式 OCEAN_O/C 2 道 → 4，A/N 1 道 → 2）
    // 题量未知（例如从外部直接喂 dimScores）时按常规的每维 2 道算，保持旧版判定
    const cnt = d => (hiddenQCounts[d] === undefined ? 2 : hiddenQCounts[d]);
    const on  = d => cnt(d) > 0;
    const th  = d => 2 * cnt(d);

    const O = dimScores.OCEAN_O || 0;
    const C = dimScores.OCEAN_C || 0;
    const A = dimScores.OCEAN_A || 0;
    const N = dimScores.OCEAN_N || 0;
    const E7 = dimScores.ENMEA_7 || 0;
    const E8 = dimScores.ENMEA_8 || 0;
    const E9 = dimScores.ENMEA_9 || 0;
    const E4 = dimScores.ENMEA_4 || 0;

    // ===== 优先级 1：MBTI × 大五交叉混合（INTJ_C- / ENFP_C+）=====
    if (on('OCEAN_C')) {
      if (baseCode === 'INTJ' && C <= -th('OCEAN_C')) return 'INTJ_OCEAN_C_MINUS';
      if (baseCode === 'ENFP' && C >= th('OCEAN_C')) return 'ENFP_OCEAN_C_PLUS';
    }

    // ===== 优先级 2：交叉型 O+C 和 A+N =====
    if (on('OCEAN_O') && on('OCEAN_C') && O >= th('OCEAN_O') && C >= th('OCEAN_C')) return 'OCEAN_O_C_MAX';
    if (on('OCEAN_A') && on('OCEAN_N') && A >= th('OCEAN_A') && N >= th('OCEAN_N')) return 'OCEAN_A_N_MAX';

    // ===== 优先级 3：九型极端（这个模式没出九型题就跳过）=====
    let enneaScores = [
      { code: 'ENMEA_7', s: E7, dim: 'ENMEA_7' },
      { code: 'ENMEA_8', s: E8, dim: 'ENMEA_8' },
      { code: 'ENMEA_9', s: E9, dim: 'ENMEA_9' },
      { code: 'ENMEA_4', s: E4, dim: 'ENMEA_4' }
    ].filter(x => on(x.dim)).sort((a, b) => Math.abs(b.s) - Math.abs(a.s));
    if (enneaScores.length && enneaScores[0].s >= th(enneaScores[0].dim)) return enneaScores[0].code;

    // ===== 优先级 4：大五单一维度极端 =====
    const big5 = [
      { code: 'OCEAN_O_MAX', dim: 'OCEAN_O', s: O, posOnly: true },
      { code: 'OCEAN_O_MIN', dim: 'OCEAN_O', s: O, negOnly: true },
      { code: 'OCEAN_C_MAX', dim: 'OCEAN_C', s: C, posOnly: true },
      { code: 'OCEAN_C_MIN', dim: 'OCEAN_C', s: C, negOnly: true },
      { code: 'OCEAN_A_MAX', dim: 'OCEAN_A', s: A, posOnly: true },
      { code: 'OCEAN_A_MIN', dim: 'OCEAN_A', s: A, negOnly: true },
      { code: 'OCEAN_N_MIN', dim: 'OCEAN_N', s: N, negOnly: true },
      { code: 'OCEAN_N_MAX', dim: 'OCEAN_N', s: N, posOnly: true }
    ];
    for (const item of big5) {
      if (!on(item.dim)) continue;
      if (item.posOnly && item.s >= th(item.dim)) return item.code;
      if (item.negOnly && item.s <= -th(item.dim)) return item.code;
    }

    // 没命中任何大五/九型，返回 null 继续 MBTI 判定
    return null;
  }

  // 计算每个维度的偏好度（0~1，0.5=中立）
  function dimPreference(d) {
    const maxAbs = Math.max(1, dimCounts[d] * 2);
    return (dimScores[d] + maxAbs) / (2 * maxAbs);
  }

  // ===== SVG 雷达图（4 顶点，每顶点代表一个维度左极）=====
  function generateRadarSVG() {
    // ===== 8 顶点环绕雷达图 =====
    // 角度每 45° 一个，从顶部 -90° 开始顺时针：
    // -90° E外向, -45° S感觉, 0° T思考, 45° J判断
    //  90° I内向, 135° N直觉, 180° F情感, 225° P感知
    const prefs = {
      E: dimPreference('EI'),
      S: dimPreference('SN'),
      T: dimPreference('TF'),
      J: dimPreference('JP')
    };
    // 每个顶点：字母、中文名、所属维度、该顶点的偏好值
    // 对立顶点的值 = 1 - 相邻顶点的值
    const axis = [
      { code: 'E', full: '外向',  dim: 'EI', value: prefs.E },
      { code: 'S', full: '感觉',  dim: 'SN', value: prefs.S },
      { code: 'T', full: '思考',  dim: 'TF', value: prefs.T },
      { code: 'J', full: '判断',  dim: 'JP', value: prefs.J },
      { code: 'I', full: '内向',  dim: 'EI', value: 1 - prefs.E },
      { code: 'N', full: '直觉',  dim: 'SN', value: 1 - prefs.S },
      { code: 'F', full: '情感',  dim: 'TF', value: 1 - prefs.T },
      { code: 'P', full: '感知',  dim: 'JP', value: 1 - prefs.J }
    ];

    const size = 380;
    const cx = size / 2, cy = size / 2;
    const R = 115;
    const gridLevels = 4;
    const n = 8;
    const angles = Array.from({ length: n }, (_, i) => -Math.PI / 2 + i * (Math.PI * 2 / n));

    function pt(i, r) {
      return [cx + r * Math.cos(angles[i]), cy + r * Math.sin(angles[i])];
    }

    // 网格线（八边形）
    let grid = '';
    for (let g = 1; g <= gridLevels; g++) {
      const r = R * g / gridLevels;
      const p = [];
      for (let i = 0; i < n; i++) p.push(pt(i, r).join(','));
      grid += `<polygon class="radar-grid" points="${p.join(' ')}"/>`;
    }

    // 轴线（从中心到每个顶点外）
    let axes = '';
    for (let i = 0; i < n; i++) {
      const [x, y] = pt(i, R * 1.35);
      axes += `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`;
    }

    // 数据多边形（8 顶点）
    const dataPts = axis.map((a, i) => pt(i, R * a.value).join(',')).join(' ');

    // 数据点
    let dots = axis.map((a, i) => {
      const [x, y] = pt(i, R * a.value);
      return `<circle class="radar-dot" cx="${x}" cy="${y}" r="5"/>`;
    }).join('');

    // 顶点标签（字母 + 中文名）
    let labels = '';
    for (let i = 0; i < n; i++) {
      const [x, y] = pt(i, R + 22);
      const a = axis[i];
      // 根据位置选择 anchor
      let anchor = 'middle';
      const aDeg = (angles[i] * 180 / Math.PI);
      if (aDeg > -67.5 && aDeg < 67.5) anchor = 'start';
      else if (aDeg > 112.5 || aDeg < -112.5) anchor = 'end';

      labels += `<text class="radar-label" x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle">
        <tspan font-weight="700" font-size="15" fill="#fff">${a.code}</tspan>
        <tspan font-size="9" fill="rgba(255,255,255,0.6)" dx="2"> ${a.full}</tspan>
      </text>`;
    }

    // 中心值（显示占比数字）
    const centerInfo = `<text x="${cx}" y="${cy - 10}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9">人格雷达</text>
      <text x="${cx}" y="${cy + 6}" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="8">8 维度环绕</text>`;

    return `
      <svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.65"/>
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.35"/>
          </linearGradient>
        </defs>
        ${grid}
        ${axes}
        <polygon class="radar-fill" points="${dataPts}" style="fill:url(#radarGrad)"/>
        ${dots}
        ${labels}
        ${centerInfo}
      </svg>
    `;
  }

  // ===== 数字滚动动画工具 =====
  function animateNumber(el, target, durationSec, delayMs) {
    if (!el) return;
    setTimeout(() => {
      const start = performance.now();
      const dur = durationSec * 1000;
      function tick(now) {
        const t = Math.min(1, (now - start) / dur);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(eased * target);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delayMs || 0);
  }

  // ===== 显示结果 =====
  // 结果页大号人格代号配色：深色主色在深底上对比不足时逐级提亮，保证可读
  function readableHeroColor(hex) {
    const h = String(hex || '#667eea').replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const or = parseInt(full.slice(0, 2), 16);
    const og = parseInt(full.slice(2, 4), 16);
    const ob = parseInt(full.slice(4, 6), 16);
    if (![or, og, ob].every(Number.isFinite)) return 'rgb(102,126,234)';
    const rel = c => { const v = c / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    const lum = (r, g, b) => 0.2126 * rel(r) + 0.7152 * rel(g) + 0.0722 * rel(b);
    const BG_LUM = 0.0075; // 结果页深底 rgb(15,15,26) 的相对亮度
    const contrast = (r, g, b) => (lum(r, g, b) + 0.05) / (BG_LUM + 0.05);
    let r = or, g = og, b = ob;
    for (let i = 0; i < 24 && contrast(r, g, b) < 4.5; i++) {
      r = Math.min(255, Math.round(r + (255 - r) * 0.12));
      g = Math.min(255, Math.round(g + (255 - g) * 0.12));
      b = Math.min(255, Math.round(b + (255 - b) * 0.12));
    }
    return `rgb(${r},${g},${b})`;
  }

  // ===== 稀有型：命中维度的人话标签（结果页徽标、说明行、分享图共用）=====
  const RARE_HIT_LABEL = {
    OCEAN_O_MAX: '大五 · 开放度极高',
    OCEAN_O_MIN: '大五 · 开放度极低',
    OCEAN_C_MAX: '大五 · 尽责性极高',
    OCEAN_C_MIN: '大五 · 尽责性极低',
    OCEAN_A_MAX: '大五 · 宜人性极高',
    OCEAN_A_MIN: '大五 · 宜人性极低',
    OCEAN_N_MAX: '大五 · 情绪敏感度极高',
    OCEAN_N_MIN: '大五 · 情绪敏感度极低',
    OCEAN_O_C_MAX: '大五 · 开放度与尽责性双高',
    OCEAN_A_N_MAX: '大五 · 宜人性与情绪敏感度双高',
    ENMEA_7: '九型 7 · 享乐型极端',
    ENMEA_8: '九型 8 · 挑战型极端',
    ENMEA_9: '九型 9 · 和平型极端',
    ENMEA_4: '九型 4 · 独特型极端',
    INTJ_OCEAN_C_MINUS: 'INTJ × 大五 · 尽责性极低',
    ENFP_OCEAN_C_PLUS: 'ENFP × 大五 · 尽责性极高'
  };
  function rareHitLabel(code) {
    return RARE_HIT_LABEL[code] || code;
  }

  // ===== 稀有型：隐藏维度强度（±4 分制，0 为中立）=====
  const HIDDEN_DIM_DEFS = [
    { code: 'OCEAN_O', name: '开放性', short: 'O' },
    { code: 'OCEAN_C', name: '尽责性', short: 'C' },
    { code: 'OCEAN_A', name: '宜人性', short: 'A' },
    { code: 'OCEAN_N', name: '情绪敏感度', short: 'N' },
    { code: 'ENMEA_7', name: '九型 7 · 享乐', short: '7' },
    { code: 'ENMEA_8', name: '九型 8 · 挑战', short: '8' },
    { code: 'ENMEA_9', name: '九型 9 · 和平', short: '9' },
    { code: 'ENMEA_4', name: '九型 4 · 独特', short: '4' }
  ];
  function hiddenLevelText(score) {
    if (score >= 3) return '极高';
    if (score >= 1) return '偏高';
    if (score <= -3) return '极低';
    if (score <= -1) return '偏低';
    return '中性';
  }
  function hiddenDimsHtml(hitCode) {
    // 命中维度：OCEAN_O_MAX/ENMEA_4 等 → 对应到 HIDDEN_DIM_DEFS 的 code
    const hitDims = [];
    if (/^OCEAN_(O|C|A|N)_/.test(hitCode)) hitDims.push('OCEAN_' + hitCode.split('_')[1]);
    if (hitCode === 'OCEAN_O_C_MAX') hitDims.push('OCEAN_O', 'OCEAN_C');
    if (hitCode === 'OCEAN_A_N_MAX') hitDims.push('OCEAN_A', 'OCEAN_N');
    if (/^ENMEA_/.test(hitCode)) hitDims.push(hitCode);
    if (hitCode === 'INTJ_OCEAN_C_MINUS' || hitCode === 'ENFP_OCEAN_C_PLUS') hitDims.push('OCEAN_C');

    const rows = HIDDEN_DIM_DEFS.map(function (d) {
      const score = dimScores[d.code] || 0;
      const pct = Math.max(0, Math.min(100, Math.round((score + 4) / 8 * 100)));
      const hit = hitDims.indexOf(d.code) >= 0;
      const pos = pct >= 50;
      const left = pos ? 50 : pct;
      const width = Math.abs(pct - 50);
      const color = hit ? '#f0b429' : 'rgba(160,170,255,0.75)';
      return `
        <div class="hd-row${hit ? ' hd-hit' : ''}">
          <div class="hd-head">
            <span>${d.name}${hit ? ' · 命中' : ''}</span>
            <span>${score > 0 ? '+' : ''}${score} · ${hiddenLevelText(score)}</span>
          </div>
          <div class="hd-track">
            <div class="hd-mid"></div>
            <div class="hd-fill" style="left:${left}%;width:${Math.max(width, 1)}%;background:${color};"></div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="result-section">
        <h3>隐藏维度强度</h3>
        <div class="hd-note">大五与九型各维度按 2 道隐藏题计分，范围 −4 ~ +4，中线为中立。金色为你本次命中的维度。</div>
        <div class="hidden-dims">${rows}</div>
      </div>`;
  }

  function showResult() {
    const res = calculateResult();
    const { baseCode, isHybrid, hybridDim, lookupCode } = res;
    const p = MBTI_DATA.personalities[lookupCode] || MBTI_DATA.personalities[baseCode] || {
      name: '探索者', tagline: '独特而复杂的个体', heroColor: '#888',
      strengths: [], weaknesses: [], description: '', careers: [], famous: ''
    };
    const heroText = readableHeroColor(p.heroColor);
    const content = document.getElementById('resultContent');

    // 字母动画（只显示 4 个核心字母；混合型额外显示标签）
    // 每个字母单独着色：.char 带 transform 会形成独立层叠上下文，
    // 父容器上的 background-clip: text 裁不到子元素，字母本体反而不可见
    // 入场后的发光颜色跟着主色走（CSS 里读 --char-glow），不再固定成蓝紫
    const glowRgb = /^rgb/.test(heroText) ? heroText.replace(/[^0-9,]/g, '') : null;
    const glowVars = glowRgb ? `--char-glow: rgba(${glowRgb}, 0.85); --char-glow-soft: rgba(${glowRgb}, 0.42);` : '';
    const codeHtml = baseCode.split('').map((c, i) =>
      `<span class="char" style="animation-delay: ${i * 0.12}s; color: ${heroText}; -webkit-text-fill-color: ${heroText}; ${glowVars}">${c}</span>`
    ).join('');
    const hybridBadgeHtml = isHybrid
      ? `<div style="margin-top:0.5rem;font-size:0.75rem;color:#c792ea;background:rgba(199,146,234,0.15);padding:4px 12px;border-radius:12px;display:inline-block;">🎯 混合型人格 · 某维度接近中立</div>`
      : '';
    const rareBadgeHtml = (!isHybrid && lookupCode !== baseCode)
      ? `<div style="margin-top:0.5rem;font-size:0.75rem;color:#f0b429;background:rgba(240,180,41,0.15);padding:4px 12px;border-radius:12px;display:inline-block;">✨ 稀有隐藏人格 · ${baseCode} 底子 · ${rareHitLabel(lookupCode)}（${lookupCode}）</div>`
      : '';
    // 稀有型专属：在画像前说明「代号是哪个、命中的是什么维度」，
    // 文中的其它类型名只是对照组，不是本人结果
    const rareNoteHtml = (!isHybrid && lookupCode !== baseCode)
      ? `<div style="font-size:0.75rem;line-height:1.7;color:#9aa0b5;border-left:2px solid rgba(240,180,41,0.45);padding-left:0.6rem;margin-bottom:0.8rem;">你的 MBTI 代号是 <b style="color:${heroText};">${baseCode}</b>，稀有维度命中 <b style="color:#f0b429;">${rareHitLabel(lookupCode)}</b>。下面是「${p.name}」的画像——文中出现的其它类型名只是对照坐标，不是你的结果。</div>`
      : '';

    // 维度进度条：preference 是左极占比
    const dims = [
      { code: 'EI', leftCode: 'E', rightCode: 'I', leftName: '外向', rightName: '内向' },
      { code: 'SN', leftCode: 'S', rightCode: 'N', leftName: '感觉', rightName: '直觉' },
      { code: 'TF', leftCode: 'T', rightCode: 'F', leftName: '思考', rightName: '情感' },
      { code: 'JP', leftCode: 'J', rightCode: 'P', leftName: '判断', rightName: '感知' }
    ];

    const dimBarsHtml = dims.map((d, i) => {
      const pref = dimPreference(d.code);
      const leftPct = Math.round(pref * 100);
      const rightPct = 100 - leftPct;
      const dominant = dimScores[d.code] >= 0 ? d.leftCode : d.rightCode;
      return `
        <div class="dimension-item" data-pct="${leftPct}">
          <div class="dimension-labels">
            <span class="left">${d.leftCode} <span class="dim-num" data-target="${leftPct}">0</span>%</span>
            <span class="right"><span class="dim-num-r" data-target="${rightPct}">0</span>% ${d.rightCode}</span>
          </div>
          <div class="dimension-bar">
            <div class="dimension-fill" style="width: 0%"></div>
          </div>
          <div style="font-size:0.7rem;color:var(--text-muted);text-align:center;margin-top:2px;">
            偏向 <b style="color:${dominant === d.leftCode ? '#667eea' : '#764ba2'}">${d.leftName} / ${d.rightName}</b>
          </div>
        </div>
      `;
    }).join('');

    const total = testQuestions.length;
    const modeLabel = MODE_CONFIG[currentMode]?.name || '普通';

    content.innerHTML = `
      <div class="result-hero">
        <div class="result-code">
          ${codeHtml}
        </div>
        <div class="result-name">${p.name}${isHybrid ? '（混合型）' : ''}</div>
        <div class="result-tagline">"${p.tagline}"</div>
        ${hybridBadgeHtml}${rareBadgeHtml}
        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
          测试模式：${modeLabel} · ${total} 题
        </div>
        <div class="result-music" id="resultMusic" data-code="${lookupCode}" data-name="${p.name}">
          ${Music.hasTrack(lookupCode)
            ? `<span class="rm-on">🎵 正在播放「${p.name}」专属配乐</span>`
            : `<span class="rm-none">🎵 该型的专属配乐还在生成，先放主题曲</span>`}
        </div>
      </div>

      <div class="result-section radar-section">
        <h3 style="align-self: flex-start;">人格雷达图</h3>
        <div class="radar-container">${generateRadarSVG()}</div>
      </div>

      <div class="result-section">
        <h3>性格维度分布</h3>
        <div class="dimension-bars">${dimBarsHtml}</div>
      </div>

      ${(!isHybrid && lookupCode !== baseCode) ? hiddenDimsHtml(lookupCode) : ''}

      <div class="result-section">
        <h3>你的特质</h3>
        ${rareNoteHtml}
        <p>${p.description}</p>
      </div>

      <div class="result-section">
        <h3>优势与弱点</h3>
        <div class="traits-grid">
          <div class="trait-item">
            <div class="trait-label">✨ 核心优势</div>
            <div class="trait-value" style="color:#4facfe;">${p.strengths.join('、')}</div>
          </div>
          <div class="trait-item">
            <div class="trait-label">⚠️ 需要注意</div>
            <div class="trait-value" style="color:#f5576c;">${p.weaknesses.join('、')}</div>
          </div>
        </div>
      </div>

      <div class="result-section">
        <h3>适合的职业方向</h3>
        <p>${p.careers.join(' · ')}</p>
      </div>

      <div class="result-section">
        <h3>代表人物</h3>
        <p>${p.famous}</p>
      </div>

      <div class="share-row">
        <button class="btn-action primary" onclick="window.startTest('${currentMode}')">🔄 再测一次</button>
        <button class="btn-action" onclick="shareResult('${lookupCode}', '${p.name.replace(/'/g, "\\'")}', '${baseCode}')">📷 生成分享图</button>
      </div>
    `;

    showPage('result');

    // ===== 维度条宽度动画 + 数字滚动 =====
    requestAnimationFrame(() => {
      document.querySelectorAll('.dimension-item').forEach((el, i) => {
        const pct = parseInt(el.dataset.pct, 10);
        const fill = el.querySelector('.dimension-fill');
        if (fill) {
          setTimeout(() => { fill.style.width = pct + '%'; }, 100 + i * 120);
        }
        // 数字滚动
        const leftNum = el.querySelector('.dim-num');
        const rightNum = el.querySelector('.dim-num-r');
        animateNumber(leftNum, pct, 0.8, 300 + i * 120);
        animateNumber(rightNum, 100 - pct, 0.8, 300 + i * 120);
      });
    });

    // 结果页直接响起这个人格的专属配乐（不再依赖"音乐已经开着"这个前提）
    try { Music.enterResult(lookupCode); } catch (e) { console.warn('result bgm error', e); }
    renderResultMusicLine();

    // ===== 测完 +1 计数 =====
    try { Counter.hit(lookupCode); } catch(e) {}

    // 完成测试：清掉断点、写入历史
    clearProgress();
    pushHistory(lookupCode, p.name);
  }

  // 结果页那行音乐说明：跟着真实播放状态走，别在暂停时还说"正在播放"
  function renderResultMusicLine() {
    const el = document.getElementById('resultMusic');
    if (!el) return;
    const code = el.dataset.code || '';
    const name = el.dataset.name || '';
    if (!Music.hasTrack(code)) {
      el.innerHTML = `<span class="rm-none">🎵 该型的专属配乐还在生成，先放主题曲</span>`;
      return;
    }
    el.innerHTML = Music.isPlaying()
      ? `<span class="rm-on">🎵 正在播放「${name}」专属配乐</span>`
      : `<span class="rm-off">🎵 「${name}」专属配乐已就绪 · 点右上角音乐按钮播放</span>`;
  }
  document.addEventListener('musicstate', renderResultMusicLine);
  // ===== 结果分享图（Canvas 1080×1440）=====
  let _shareBlob = null;
  let _shareCode = '';
  let _shareName = '';
  let _shareBase = '';

  function _hexAlpha(hex, a) {
    const h = String(hex || '#667eea').replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const n = parseInt(full.slice(0, 6), 16);
    if (!Number.isFinite(n)) return `rgba(102,126,234,${a})`;
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function _roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function _wrapText(ctx, text, maxWidth, maxLines) {
    const lines = [];
    let line = '';
    for (const ch of String(text || '')) {
      const test = line + ch;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = ch;
        if (lines.length === maxLines) break;
      } else {
        line = test;
      }
    }
    if (lines.length < maxLines && line) lines.push(line);
    if (lines.length === maxLines) {
      const last = lines[maxLines - 1];
      if (ctx.measureText(last).width > maxWidth - 20) {
        lines[maxLines - 1] = last.slice(0, -1) + '…';
      }
    }
    return lines;
  }

  function buildShareCard(code, baseCode) {
    const p = MBTI_DATA.personalities[code] || {};
    const W = 1080, H = 1440;
    const cv = document.createElement('canvas');
    cv.width = W;
    cv.height = H;
    const ctx = cv.getContext('2d');
    const hero = p.heroColor || '#667eea';
    const font = '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif';

    // 背景
    const bg = ctx.createLinearGradient(0, 0, W * 0.35, H);
    bg.addColorStop(0, '#191932');
    bg.addColorStop(0.55, '#141d38');
    bg.addColorStop(1, '#0b0b14');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // 主色光晕
    const glow = ctx.createRadialGradient(W / 2, 380, 0, W / 2, 380, 640);
    glow.addColorStop(0, _hexAlpha(hero, 0.55));
    glow.addColorStop(0.55, _hexAlpha(hero, 0.14));
    glow.addColorStop(1, _hexAlpha(hero, 0));
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, 1050);

    ctx.textAlign = 'center';

    // 顶部品牌
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.font = `500 28px ${font}`;
    ctx.fillText('MBTI 40 型人格测试', W / 2, 96);

    // 稀有型：在代号上方注明「底子代号 + 命中维度」，和结果页口径一致
    if (baseCode && baseCode !== code) {
      ctx.fillStyle = 'rgba(240,180,41,0.92)';
      ctx.font = `600 26px ${font}`;
      ctx.fillText(`✨ ${baseCode} 底子 · ${rareHitLabel(code)}`, W / 2, 138);
    }

    // 图标
    ctx.font = '92px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.fillText(p.heroIcon || '✨', W / 2, 236);

    // 人格代码（自动缩字号，长代码不溢出）
    const codeText = String(code);
    let codeSize = 148;
    ctx.font = `900 ${codeSize}px ${font}`;
    while (ctx.measureText(codeText).width > W - 150 && codeSize > 46) {
      codeSize -= 4;
      ctx.font = `900 ${codeSize}px ${font}`;
    }
    const codeGrad = ctx.createLinearGradient(W / 2 - 320, 300, W / 2 + 320, 470);
    codeGrad.addColorStop(0, '#ffffff');
    codeGrad.addColorStop(0.62, _hexAlpha(hero, 1));
    codeGrad.addColorStop(1, '#c9b6ff');
    ctx.fillStyle = codeGrad;
    ctx.fillText(codeText, W / 2, 400);

    // 名称
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 52px ${font}`;
    ctx.fillText(p.name || '人格类型', W / 2, 494);

    // 标语
    ctx.fillStyle = 'rgba(255,255,255,0.66)';
    ctx.font = `italic 30px ${font}`;
    const tagLines = _wrapText(ctx, `“${p.tagline || ''}”`, W - 240, 2);
    tagLines.forEach((l, i) => ctx.fillText(l, W / 2, 540 + i * 44));

    // 分隔线
    const lineY = 632;
    const divider = ctx.createLinearGradient(140, 0, W - 140, 0);
    divider.addColorStop(0, 'rgba(255,255,255,0)');
    divider.addColorStop(0.5, 'rgba(255,255,255,0.22)');
    divider.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.strokeStyle = divider;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(140, lineY);
    ctx.lineTo(W - 140, lineY);
    ctx.stroke();

    // 维度条
    const dimDefs = [
      { code: 'EI', l: 'E', r: 'I' },
      { code: 'SN', l: 'S', r: 'N' },
      { code: 'TF', l: 'T', r: 'F' },
      { code: 'JP', l: 'J', r: 'P' }
    ];
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = `600 26px ${font}`;
    ctx.textAlign = 'left';
    ctx.fillText('性格维度分布', 140, 700);

    let rowY = 748;
    dimDefs.forEach(d => {
      const pref = (typeof dimPreference === 'function') ? dimPreference(d.code) : 0.5;
      const pct = Math.round(pref * 100);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffffff';
      ctx.font = `800 34px ${font}`;
      ctx.fillText(d.l, 140, rowY + 26);

      ctx.textAlign = 'right';
      ctx.fillStyle = 'rgba(255,255,255,0.42)';
      ctx.fillText(d.r, W - 140, rowY + 26);

      // 条长右端预留百分比位置，避免 100% 数字压在填充条上
      const barX = 200, barW = W - 500, barH = 16, barY = rowY + 10;
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      _roundRect(ctx, barX, barY, barW, barH, barH / 2);
      ctx.fill();

      const fillW = Math.max(barH, barW * (pct / 100));
      const barGrad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
      barGrad.addColorStop(0, _hexAlpha(hero, 0.95));
      barGrad.addColorStop(1, 'rgba(201,182,255,0.9)');
      ctx.fillStyle = barGrad;
      _roundRect(ctx, barX, barY, fillW, barH, barH / 2);
      ctx.fill();

      // 百分比（画在条形右侧空白区，不与填充条重叠）
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.font = `600 22px ${font}`;
      ctx.textAlign = 'right';
      ctx.fillText(pct + '%', W - 200, rowY + 26);

      rowY += 82;
    });

    // 人口占比
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = `500 28px ${font}`;
    ctx.fillText(`👥 全球人口占比 ${p.population || '~5%'}`, W / 2, 1120);

    // 底部分隔
    const line2 = ctx.createLinearGradient(140, 0, W - 140, 0);
    line2.addColorStop(0, 'rgba(255,255,255,0)');
    line2.addColorStop(0.5, 'rgba(255,255,255,0.16)');
    line2.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.strokeStyle = line2;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(140, 1196);
    ctx.lineTo(W - 140, 1196);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = `700 40px ${font}`;
    ctx.fillText('来测测你是什么人格', W / 2, 1282);
    ctx.fillStyle = 'rgba(160,178,255,0.85)';
    ctx.font = `600 30px ${font}`;
    ctx.fillText('kwdaj.github.io/mbti-40', W / 2, 1340);
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.font = `400 24px ${font}`;
    ctx.fillText('40 种人格 · 400 道题库 · 三重测评体系', W / 2, 1388);

    // 边框
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 4;
    _roundRect(ctx, 24, 24, W - 48, H - 48, 40);
    ctx.stroke();

    return cv;
  }

  function _canvasToBlob(cv) {
    return new Promise(resolve => {
      try {
        if (cv.toBlob) cv.toBlob(b => resolve(b), 'image/png');
        else resolve(null);
      } catch(e) { resolve(null); }
    });
  }

  function closeShareCard() {
    const modal = document.getElementById('shareModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  window.closeShareCard = closeShareCard;

  window.shareResult = function(code, name, baseCode) {
    _shareCode = code;
    _shareName = name;
    _shareBase = baseCode || '';
    _shareBlob = null;

    const modal = document.getElementById('shareModal');
    const box = document.getElementById('sharePreview');
    const tip = document.getElementById('shareTip');
    if (!modal || !box) {
      copyToClipboard(`我是 MBTI ${code} ${name}！来测测你的人格类型吧！${location.origin}${location.pathname}`);
      return;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    box.innerHTML = '<div class="share-loading">正在生成分享图…</div>';
    if (tip) tip.textContent = '';
    const sysBtn = document.getElementById('shareSystemBtn');
    if (sysBtn) sysBtn.style.display = 'none';

    const cv = buildShareCard(code, _shareBase);
    _canvasToBlob(cv).then(blob => {
      _shareBlob = blob;
      box.innerHTML = '';
      const img = document.createElement('img');
      img.className = 'share-img';
      img.alt = `MBTI ${code} ${name} 分享图`;
      img.src = cv.toDataURL('image/png');
      box.appendChild(img);

      if (tip) tip.textContent = '长按图片可直接保存 · 或点下方按钮';
      if (sysBtn && blob && navigator.canShare) {
        try {
          const f = new File([blob], `MBTI-${code}.png`, { type: 'image/png' });
          sysBtn.style.display = navigator.canShare({ files: [f] }) ? '' : 'none';
        } catch(e) {}
      }
    }).catch(() => {
      box.innerHTML = '<div class="share-loading">生成失败，请重试</div>';
    });
  };

  // 分享弹层按钮
  function bindShareButtons() {
    const saveBtn = document.getElementById('shareSaveBtn');
    if (saveBtn) saveBtn.addEventListener('click', () => {
      if (!_shareBlob) { alert('图片还在生成，请稍等一下'); return; }
      const url = URL.createObjectURL(_shareBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `MBTI-${_shareCode}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    });

    const copyBtn = document.getElementById('shareCopyBtn');
    if (copyBtn) copyBtn.addEventListener('click', () => {
      copyToClipboard(`${_shareIntroText()}\n${location.origin}${location.pathname}`);
    });

    const sysBtn = document.getElementById('shareSystemBtn');
    if (sysBtn) sysBtn.addEventListener('click', async () => {
      if (!_shareBlob || !navigator.share) return;
      try {
        const f = new File([_shareBlob], `MBTI-${_shareCode}.png`, { type: 'image/png' });
        await navigator.share({
          files: [f],
          title: _shareIntroText(),
          text: _shareIntroText()
        });
      } catch(e) {}
    });

    const modal = document.getElementById('shareModal');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeShareCard(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeShareCard(); });
  }

  // 分享文案：稀有型用「底子代号 + 命中维度」，避免把全码当成 MBTI 类型
  function _shareIntroText() {
    if (_shareBase && _shareBase !== _shareCode) {
      return `我是 MBTI ${_shareBase} 底子 · ${_shareName}（稀有维度命中 ${rareHitLabel(_shareCode)}）！来测测你的人格类型吧！`;
    }
    return `我是 MBTI ${_shareCode} ${_shareName}！来测测你的人格类型吧！`;
  }

  // 供本地校验分享图用（不影响正常流程）
  window.__buildShareCard = buildShareCard;
  // 供本地校验"隐藏维度题量 / 阈值"用（只读）
  window.__hiddenQCounts = () => Object.assign({}, hiddenQCounts);

  function copyToClipboard(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); alert('已复制到剪贴板！\n\n' + text); }
    catch (e) { alert('复制失败'); }
    document.body.removeChild(ta);
  }

  // ===== Counter 模块：Trae（服务端代理）/ GitHub Pages（静态）双模式 =====
  const Counter = (function() {
    const LS_KEY = 'mbti_site_counts_v1';
    const DELTA_CACHE_KEY = 'mbti_deltas_cache_v1';
    const TOTALS_CACHE_KEY = 'mbti_totals_cache_v1';
    const PENDING_KEY = 'mbti_hit_pending_v1';
    const HIT_DAY_KEY = 'mbti_last_hit_day_v1';

    // 静态托管（GitHub Pages）模式：历史基线文件 + abacus 免费计数增量
    const STATIC_MODE = /(^|\.)github\.io$/i.test(location.hostname);
    const ABACUS = 'https://abacus.jasoncameron.dev';
    const NS = 'mbti40-live';
    const BASE_FILE = 'counts-baseline.json';
    const CACHE_TTL = 5 * 60 * 1000;   // 5 分钟内复用，避免频繁请求被限流
    const MAX_CONCURRENCY = 6;         // 限并发，40 个 key 一次性打出去很容易失败

    let _baseline = null;
    let _deltas = null;
    let _deltasAt = 0;
    let _pendingFlushing = false;

    function readLocal() { try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch(e) { return {}; } }
    function writeLocal(obj) { try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch(e) {} }
    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    // 本地日期 YYYY-MM-DD，用于「每设备每天每人格 +1」去重
    function localDay() {
      const d = new Date();
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    async function _readBaseline() {
      if (_baseline) return _baseline;
      try {
        const r = await fetch(BASE_FILE, { cache: 'no-store' });
        _baseline = r.ok ? await r.json() : {};
      } catch(e) { _baseline = {}; }
      return _baseline;
    }

    // 读取某人格自上线静态站以来的新增次数
    // 返回数字=成功；返回 null=读取失败（调用方必须回退缓存，绝不能当 0）
    async function _readDelta(code, attempts) {
      const tries = attempts || 3;
      for (let i = 0; i < tries; i++) {
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), 4000);   // 移动网络卡住时 4 秒就放弃，不拖住整批
        try {
          const r = await fetch(ABACUS + '/get/' + NS + '/' + encodeURIComponent(code), {
            cache: 'no-store', signal: ctl.signal
          });
          if (r.status === 404) return 0;          // key 未定义 = 还没人测过
          if (!r.ok) throw new Error('http ' + r.status);
          const j = await r.json();
          const v = Number(j && j.value);
          return Number.isFinite(v) ? v : 0;
        } catch(e) {
          if (i === tries - 1) return null;
          await sleep(160 * (i + 1) + Math.random() * 140);
        } finally {
          clearTimeout(timer);
        }
      }
      return null;
    }

    // 上一次成功拉到的增量（跨会话缓存），网络抖动时用它兜底
    function _loadDeltaCache() {
      if (_deltas) return;
      try {
        const c = JSON.parse(localStorage.getItem(DELTA_CACHE_KEY) || 'null');
        if (c && c.deltas && typeof c.deltas === 'object' && Date.now() - (c.ts || 0) < 7 * 864e5) {
          _deltas = c.deltas;
          _deltasAt = c.ts || 0;
        }
      } catch(e) {}
    }

    function _saveDeltaCache() {
      try {
        localStorage.setItem(DELTA_CACHE_KEY, JSON.stringify({ deltas: _deltas || {}, ts: _deltasAt || Date.now() }));
      } catch(e) {}
    }

    // 上次算出来的总数（基线+增量），用来让首页先秒出数字，再去后台校正
    function _loadTotalsCache() {
      try {
        const c = JSON.parse(localStorage.getItem(TOTALS_CACHE_KEY) || 'null');
        if (c && c.totals && typeof c.totals === 'object') return c;
      } catch(e) {}
      return null;
    }
    function _saveTotalsCache(totals) {
      try { localStorage.setItem(TOTALS_CACHE_KEY, JSON.stringify({ ts: Date.now(), totals })); } catch(e) {}
    }
    function cachedTotals() { return _loadTotalsCache(); }

    // 并发受限的 map
    async function _mapLimit(items, limit, fn) {
      const out = new Array(items.length);
      let cursor = 0;
      const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
        while (cursor < items.length) {
          const idx = cursor++;
          out[idx] = await fn(items[idx], idx);
        }
      });
      await Promise.all(workers);
      return out;
    }

    async function _readAllDeltas(force, onDelta) {
      _loadDeltaCache();
      if (!force && _deltas && Date.now() - _deltasAt < CACHE_TTL) {
        if (onDelta) Object.keys(_deltas).forEach(c => onDelta(c, _deltas[c]));
        return _deltas;
      }

      const codes = Object.keys(MBTI_DATA.personalities);
      const prev = _deltas || {};
      // 批量读取只用 2 次尝试：40 个 key 的失败重试会把首屏拖到十几秒
      const values = await _mapLimit(codes, MAX_CONCURRENCY, async c => {
        const v = await _readDelta(c, 2);
        if (v !== null && onDelta) onDelta(c, v);   // 谁先回来就先显示谁，不用等全部到齐
        return v;
      });

      const next = {};
      let okCount = 0;
      codes.forEach((c, i) => {
        const v = values[i];
        if (v === null) {
          next[c] = Number(prev[c]) || 0;   // 失败 → 保留上次的值，绝不归零
        } else {
          next[c] = v;
          okCount++;
        }
      });

      if (okCount > 0) {
        _deltas = next;
        _deltasAt = Date.now();
        _saveDeltaCache();
      } else if (!_deltas) {
        _deltas = next;
        _deltasAt = Date.now();
      }
      return _deltas;
    }

    // 从服务端代理读取全球计数（仅 Trae 部署可用）
    async function _readCloud() {
      if (STATIC_MODE) return null;
      try {
        const r = await fetch('/api/counts', { cache: 'no-store' });
        if (!r.ok) throw new Error('api read fail');
        const data = await r.json();
        return (data && typeof data === 'object') ? data : null;
      } catch(e) {
        return null;
      }
    }

    function _readPending() {
      try {
        const arr = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]');
        return Array.isArray(arr) ? arr : [];
      } catch(e) { return []; }
    }
    function _writePending(arr) {
      try { localStorage.setItem(PENDING_KEY, JSON.stringify(arr.slice(-40))); } catch(e) {}
    }

    // 上报一次 +1，带重试；返回是否成功
    async function _sendHit(code) {
      for (let i = 0; i < 3; i++) {
        try {
          const r = await fetch(ABACUS + '/hit/' + NS + '/' + encodeURIComponent(code));
          if (r.ok) {
            const j = await r.json();
            const v = Number(j && j.value);
            if (Number.isFinite(v)) {
              _deltas = _deltas || {};
              _deltas[code] = v;
              _deltasAt = Date.now();
              _saveDeltaCache();
            }
            return true;
          }
          if (r.status === 404) return true;
          throw new Error('http ' + r.status);
        } catch(e) {
          if (i === 2) return false;
          await sleep(200 * (i + 1) + Math.random() * 150);
        }
      }
      return false;
    }

    // 补发之前失败的上报（下次打开站点时自动执行）
    async function flushPending() {
      if (_pendingFlushing || !STATIC_MODE) return;
      const queue = _readPending();
      if (!queue.length) return;
      _pendingFlushing = true;
      const rest = [];
      for (const code of queue) {
        const ok = await _sendHit(code);
        if (!ok) rest.push(code);
        await sleep(80);
      }
      _writePending(rest);
      _pendingFlushing = false;
    }

    async function hit(code) {
      // 每设备每天每人格只 +1，防止刷新 / 重复点击刷量
      let day = {};
      try { day = JSON.parse(localStorage.getItem(HIT_DAY_KEY) || '{}'); } catch(e) { day = {}; }
      const today = localDay();
      if (day[code] === today) return;
      day[code] = today;
      try { localStorage.setItem(HIT_DAY_KEY, JSON.stringify(day)); } catch(e) {}

      // 本地先写（防远程挂了也不丢）
      const d = readLocal();
      d[code] = (d[code] || 0) + 1;
      writeLocal(d);

      if (STATIC_MODE) {
        const ok = await _sendHit(code);
        if (!ok) _writePending(_readPending().concat([code]));
        return;
      }

      // 再由服务端代理写入全球计数
      try {
        await fetch('/api/hit/' + encodeURIComponent(code), { method: 'POST' });
      } catch(e) {}
    }

    async function get(code) {
      if (STATIC_MODE) {
        const base = await _readBaseline();
        _loadDeltaCache();
        // 5 分钟内刚拉过全部增量，直接复用，不再为一次弹窗多发请求
        if (_deltas && Object.prototype.hasOwnProperty.call(_deltas, code) && Date.now() - _deltasAt < CACHE_TTL) {
          return (Number(base[code]) || 0) + (Number(_deltas[code]) || 0);
        }
        let delta = await _readDelta(code);
        if (delta === null) {
          delta = Number((_deltas && _deltas[code])) || 0;
        } else {
          _deltas = _deltas || {};
          _deltas[code] = delta;
        }
        return (Number(base[code]) || 0) + delta;
      }
      const data = await _readCloud();
      if (data && typeof data[code] === 'number') return data[code];
      return (readLocal()[code] || 0);
    }

    async function getAll(onEach, force) {
      const codes = Object.keys(MBTI_DATA.personalities);
      const out = {};
      if (STATIC_MODE) {
        const base = await _readBaseline();
        const total = (c, delta) => (Number(base[c]) || 0) + (Number(delta) || 0);
        const deltas = await _readAllDeltas(force === true, onEach ? (c, v) => onEach(c, total(c, v)) : null);
        for (const c of codes) out[c] = total(c, deltas[c]);
        _saveTotalsCache(out);
        return out;
      }
      const data = await _readCloud();
      if (data) {
        for (const c of codes) out[c] = data[c] || 0;
        return out;
      }
      // 回退到本地
      const d = readLocal();
      for (const c of codes) out[c] = d[c] || 0;
      return out;
    }

    async function resetLocal() { writeLocal({}); }

    return { hit, get, getAll, flushPending, resetLocal, cachedTotals };
  })();

  // 刷新首页预览卡片上的计数
  function setCountText(el, cnt) {
    if (!el) return;
    const next = `🌐 ${cnt}`;
    if (el.textContent !== next) el.textContent = next;
  }

  async function refreshPreviewCounts(isRetry) {
    // 先把 code → 节点 建好，后面每条回来直接写，不做重复查询
    const nodes = {};
    document.querySelectorAll('.preview-count').forEach(b => {
      const c = b.getAttribute('data-code');
      if (c) nodes[c] = b;
    });

    // 1) 上次的总数先铺上，避免长时间停在「🌐 …」
    const cached = Counter.cachedTotals();
    if (cached && cached.totals) {
      Object.keys(cached.totals).forEach(c => setCountText(nodes[c], cached.totals[c]));
    }

    try { Counter.flushPending(); } catch(e) {}

    let filled = 0;
    try {
      // 2) 每拉到一个就立刻显示一个（onEach），最后再用完整结果兜底一次
      const remote = await Counter.getAll((code, total) => {
        if (!nodes[code]) return;
        setCountText(nodes[code], total);
        filled++;
      }, isRetry === true);   // 重试时强制绕过 5 分钟缓存，真正再拉一次
      if (remote) {
        Object.keys(nodes).forEach(c => {
          if (typeof remote[c] === 'number') setCountText(nodes[c], remote[c]);
        });
      }
    } catch(e) {
      console.info('[Counter] remote unreachable, keep current numbers');
    }

    // 3) 一个都没拉到：标成 --，并延后重试一次（不阻塞首屏）
    if (!filled) {
      if (!isRetry) {
        Object.keys(nodes).forEach(c => setCountText(nodes[c], '--'));
        setTimeout(() => refreshPreviewCounts(true), 6000);
      }
    } else {
      const missing = Object.keys(nodes).filter(c => /…|--/.test(nodes[c].textContent));
      if (missing.length && !isRetry) {
        Object.keys(nodes).forEach(c => {
          if (/…/.test(nodes[c].textContent)) setCountText(nodes[c], '--');
        });
        setTimeout(() => refreshPreviewCounts(true), 6000);
      }
    }
  }

  // 详情模态框加载后，异步填充计数
  const _origShowDetail = window.showPersonalityDetail;
  window.showPersonalityDetail = async function(code) {
    _origShowDetail(code);
    const badge = document.getElementById('personalityCountBadge');
    // 先显示缓存值，再让网络结果覆盖
    const cached = Counter.cachedTotals();
    if (badge && cached && cached.totals && typeof cached.totals[code] === 'number') {
      badge.textContent = `🌐 本站已有 ${cached.totals[code]} 位访客测出`;
    }
    try {
      const cnt = await Counter.get(code);
      const el = document.getElementById('personalityCountBadge');
      if (el) el.textContent = `🌐 本站已有 ${cnt} 位访客测出`;
    } catch(e) {}
  };

  // ===== 管理员设置面板（5 连击 footer 打开）=====
  document.addEventListener('click', function(e) {
    const footer = document.getElementById('siteFooter');
    if (!footer || !footer.contains(e.target)) return;
    window._adminClicks = (window._adminClicks || 0) + 1;
    clearTimeout(window._adminClickTimer);
    window._adminClickTimer = setTimeout(() => window._adminClicks = 0, 1500);
    if (window._adminClicks >= 5) { window._adminClicks = 0; openAdminPanel(); }
  });

  function openAdminPanel() {
    const modal = document.createElement('div');
    modal.className = 'personality-modal open';
    modal.id = 'adminModal';
    modal.innerHTML = `<div class="pm-sheet" style="border-radius:20px;max-width:460px;">
      <div class="pm-body" style="padding:1.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
          <div style="font-size:1.1rem;font-weight:700;">⚙️ 管理员面板</div>
          <button class="pm-close" onclick="document.getElementById('adminModal').remove()">✕</button>
        </div>
        <div style="font-size:0.75rem;color:#888;margin-bottom:1rem;">入口：连续点击网站底部 Footer 5 次</div>

        <div class="pm-section">
          <div class="pm-section-title">🗑️ 一键清除本地所有人格计数</div>
          <button id="resetLocalBtn" class="pm-test-btn" style="background:linear-gradient(135deg,#e74c3c,#c0392b);">⚠️ 清除本地计数</button>
          <div style="font-size:0.72rem;color:#888;margin-top:0.5rem;">仅清除本浏览器 localStorage 里的数字，不影响云端</div>
        </div>

        <div class="pm-section" style="margin-top:1.2rem;">
          <div class="pm-section-title">☁️ 全球同步（服务端内置）</div>
          <div style="font-size:0.72rem;color:#888;">
            计数由服务端代理写入云端，浏览器端不含任何 Token，无需配置。
          </div>
        </div>
      </div>
    </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target.id === 'adminModal') modal.remove(); });

    document.getElementById('resetLocalBtn').addEventListener('click', () => {
      if (confirm('确认清除本浏览器的所有人格计数？\n（只清你自己的本地数据，不影响云端）')) {
        Counter.resetLocal(); alert('✅ 本地计数已清除'); modal.remove(); refreshPreviewCounts();
      }
    });
  }

  // ===== 音乐按钮：滚动时淡出，避免压住结果卡片 =====
  (function initScrollFadeMusic() {
    let timer = null;
    window.addEventListener('scroll', function () {
      document.body.classList.add('scrolling');
      clearTimeout(timer);
      timer = setTimeout(function () {
        document.body.classList.remove('scrolling');
      }, 700);
    }, { passive: true });
  })();

  // ===== 初始化 =====
  document.addEventListener('DOMContentLoaded', function() {
    initPreviewGrid();
    renderNoticeBoard();
    refreshPreviewCounts();
    Music.init();
    renderHomeState();
    bindShareButtons();

    const footer = document.createElement('footer');
    footer.id = 'siteFooter';
    footer.innerHTML = '<div style="text-align:center;padding:2rem 1rem 3rem;color:#555;font-size:0.7rem;cursor:pointer;user-select:none;">MBTI 人格测试 · 40 型人格 · 5 连击底部开启管理员面板</div>';
    document.body.appendChild(footer);
  });
})();
