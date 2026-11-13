// ===== BGM 模块（人格专属） =====
const Music = (function() {
  let audio = null;
  let _ready = false;
  let _muted = false;
  let _userPaused = false;
  let _currentSrc = '';

  // 人格→音乐文件映射（新生成的 13 个；还没生成的 11 个为空，用默认兜底）
  const BGM_MAP = {
    INTJ: 'music/intj.wav',
    INTP: 'music/intp.wav',
    ENTP: 'music/entp.wav',
    ESTP: 'music/estp.wav',
    INFJ: 'music/infj.wav',
    INFP: 'music/infp.wav',
    ENFP: 'music/enfp.wav',
    ENFJ: 'music/enfj.wav',
    ISTJ: 'music/istj.wav',
    ENTJ: 'music/entj.wav',
    ISFJ: 'music/isfj.wav',
    ESTJ: 'music/estj.wav',
    HYBRID_SN_TF: 'music/hybrid_sn_tf.wav',
    // 以下 11 个还没生成，用默认
    ESFJ: null, ISTP: null, ISFP: null, ESFP: null,
    HYBRID_EI: null, HYBRID_SN: null, HYBRID_TF: null, HYBRID_JP: null,
    HYBRID_EI_SN: null, HYBRID_EI_TF: null, HYBRID_EI_JP: null,
    // ===== 大五 OCEAN（10）+ 九型（4）+ 交叉（2）= 16 新人格 =====
    OCEAN_O_MAX: null, OCEAN_O_MIN: null,
    OCEAN_C_MAX: null, OCEAN_C_MIN: null,
    OCEAN_A_MAX: null, OCEAN_A_MIN: null,
    OCEAN_N_MIN: null, OCEAN_N_MAX: null,
    OCEAN_O_C_MAX: null, OCEAN_A_N_MAX: null,
    ENMEA_7: null, ENMEA_8: null, ENMEA_9: null, ENMEA_4: null,
    INTJ_OCEAN_C_MINUS: null, ENFP_OCEAN_C_PLUS: null,
  };
  const DEFAULT_BGM = 'bgm.wav?v=1';

  function ensureAudio() {
    if (audio) return audio;
    audio = new Audio(DEFAULT_BGM);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.31;
    audio.addEventListener('canplaythrough', () => { _ready = true; });
    audio.addEventListener('error', (e) => { console.warn('BGM 加载失败', e); });
    _currentSrc = DEFAULT_BGM;
    return audio;
  }

  // 切换到指定人格的专属 BGM
  function switchTo(mbtiCode) {
    const src = (BGM_MAP[mbtiCode] || DEFAULT_BGM) + '?v=' + Date.now().toString(36);
    if (_currentSrc === src) return;  // 已经是这个了，不重复切
    _currentSrc = src;

    const prevPlaying = audio && !audio.paused;
    const prevVolume = audio ? audio.volume : 0.31;

    // 停掉旧的（不要设 src=''，某些浏览器会触发 error 事件造成假警告）
    if (audio) {
      audio.pause();
      try { audio.removeAttribute('src'); audio.load(); } catch(e) {}
      audio = null;
    }

    // 建新的
    audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = prevVolume;
    audio.addEventListener('canplaythrough', () => { _ready = true; });
    audio.addEventListener('error', () => { console.warn('人格BGM加载失败，回退默认'); });

    if (prevPlaying && !_userPaused) {
      audio.play().catch(() => {
        audio.muted = true; audio.play().catch(() => {}); audio.muted = false;
      });
    }
  }

  function play() {
    const a = ensureAudio();
    _userPaused = false;
    a.muted = false;
    const p = a.play();
    if (p && typeof p.then === 'function') {
      p.then(() => { _muted = false; _userPaused = false; })
       .catch(() => { a.muted = true; _muted = true; a.play().catch(() => {}); });
    }
  }

  function stop() {
    if (!audio) ensureAudio();
    _userPaused = true;
    audio.pause();
  }

  // 兼容旧调用（返回值已被 switchTo 取代，这里只占位防止 ReferenceError）
  function defaultStyle() { return null; }
  function testStyle() { return null; }

  function setStyle(code) { switchTo(code); }
  function crossfadeTo(code) { switchTo(code); }
  function styleFromMBTI(code) { return code; }

  function init() {
    _currentMode = 'playing';
    play();
    const unlock = () => {
      if (_muted && !_userPaused) {
        const a = ensureAudio();
        a.muted = false; _muted = false;
        a.play().catch(() => {});
      }
      document.removeEventListener('click', unlock, true);
      document.removeEventListener('touchstart', unlock, true);
      document.removeEventListener('keydown', unlock, true);
    };
    document.addEventListener('click', unlock, true);
    document.addEventListener('touchstart', unlock, true);
    document.addEventListener('keydown', unlock, true);
  }

  let _currentMode = 'playing';

  return {
    init, play, stop, setStyle, crossfadeTo, switchTo,
    styleFromMBTI, defaultStyle, testStyle,
    get _currentMode() { return _currentMode; },
    set _currentMode(v) { _currentMode = v; }
  };
})();

// 全局控制
window.toggleMusic = function() {
  try {
    const btn = document.getElementById('musicBtn');
    const bars = document.getElementById('musicBars');
    if (!btn) return;

    if (Music._currentMode === 'playing') {
      Music.stop();
      Music._currentMode = 'muted';
      btn.classList.remove('playing');
      btn.classList.add('muted');
      bars?.classList.add('hidden');
    } else {
      Music.play();
      Music._currentMode = 'playing';
      btn.classList.add('playing');
      btn.classList.remove('muted');
      bars?.classList.remove('hidden');
    }
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
    quick:   { name: '快速',  total: 36, perDim: 5  },
    normal:  { name: '进阶',  total: 52, perDim: 9  },
    precise: { name: '精准',  total: 68, perDim: 13 },
    supreme: { name: '至尊',  total: 96, perDim: 20 }
  };
  const HIDDEN_DIMS = ['OCEAN_O', 'OCEAN_C', 'OCEAN_A', 'OCEAN_N', 'ENMEA_7', 'ENMEA_8', 'ENMEA_9', 'ENMEA_4'];

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

    // 追加隐藏题：每个大五/九型维度固定 2 道，累计分数 -4 ~ +4
    HIDDEN_DIMS.forEach(d => {
      const pool = shuffle(ALL.filter(q => q.dimension === d));
      picked.push(...pool.slice(0, 2));
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

    // 自动切换音乐风格（仅当当前在播放时）
    if (Music._currentMode === 'playing') {
      if (id === 'home') {
        Music.crossfadeTo(Music.defaultStyle());
      } else if (id === 'test') {
        Music.crossfadeTo(Music.testStyle());
      }
      // result 页的音乐在 showResult 里单独设置（需要人格）
    }
  }

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
        <span class="preview-count" data-code="${code}">🌐 0</span>
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
    dimScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    dimCounts = { EI: 0, SN: 0, TF: 0, JP: 0 };
    answerHistory = [];
    showPage('test');
    renderQuestion();
  };

  window.goHome = function() { showPage('home'); };

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
      return `<button class="option-btn${isSelected ? ' selected' : ''}" data-weight="${opt.weight}" onclick="selectOption(this)">
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
  window.selectOption = function(btn) {
    const weight = parseInt(btn.dataset.weight, 10);
    const q = testQuestions[currentIndex];

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

    setTimeout(() => {
      currentIndex++;
      if (currentIndex < testQuestions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }, 220);
  };

  // ===== 返回上一题 =====
  window.prevQuestion = function() {
    if (currentIndex === 0) return;
    currentIndex--;
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
    // OCEAN 维度分数（从隐藏题累计的 dimScores 里读）
    // 每道隐藏题权重 ±2，每个维度 2 道题，所以极端分数范围 -4 ~ +4
    const O = dimScores.OCEAN_O || 0;
    const C = dimScores.OCEAN_C || 0;
    const A = dimScores.OCEAN_A || 0;
    const N = dimScores.OCEAN_N || 0;
    const Eextro = dimScores.OCEAN_E || 0;
    const OC = dimScores.OCEAN_O_C || 0;
    // 九型（每道权重 ±2，范围 -8 ~ +8）
    const E7 = dimScores.ENMEA_7 || 0;
    const E8 = dimScores.ENMEA_8 || 0;
    const E9 = dimScores.ENMEA_9 || 0;
    const E4 = dimScores.ENMEA_4 || 0;

    // ===== 优先级 1：MBTI × 大五交叉混合（INTJ_C- / ENFP_C+）=====
    if (baseCode === 'INTJ' && C <= -4) return 'INTJ_OCEAN_C_MINUS';
    if (baseCode === 'ENFP' && C >= 4) return 'ENFP_OCEAN_C_PLUS';

    // ===== 优先级 2：交叉型 O+C 和 A+N =====
    if (O >= 4 && C >= 4) return 'OCEAN_O_C_MAX';
    if (A >= 4 && N >= 4) return 'OCEAN_A_N_MAX';

    // ===== 优先级 3：九型极端 =====
    const enneaScores = [
      { code: 'ENMEA_7', s: E7 },
      { code: 'ENMEA_8', s: E8 },
      { code: 'ENMEA_9', s: E9 },
      { code: 'ENMEA_4', s: E4 }
    ].sort((a, b) => Math.abs(b.s) - Math.abs(a.s));
    if (enneaScores[0].s >= 4) return enneaScores[0].code;

    // ===== 优先级 4：大五单一维度极端 =====
    const big5 = [
      { code: 'OCEAN_O_MAX', s: O, posOnly: true },
      { code: 'OCEAN_O_MIN', s: O, negOnly: true },
      { code: 'OCEAN_C_MAX', s: C, posOnly: true },
      { code: 'OCEAN_C_MIN', s: C, negOnly: true },
      { code: 'OCEAN_A_MAX', s: A, posOnly: true },
      { code: 'OCEAN_A_MIN', s: A, negOnly: true },
      { code: 'OCEAN_N_MIN', s: N, negOnly: true },
      { code: 'OCEAN_N_MAX', s: N, posOnly: true }
    ];
    const BIG5_THRESHOLD = 4;
    for (const item of big5) {
      if (item.posOnly && item.s >= BIG5_THRESHOLD) return item.code;
      if (item.negOnly && item.s <= -BIG5_THRESHOLD) return item.code;
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
  function showResult() {
    const res = calculateResult();
    const { baseCode, isHybrid, hybridDim, lookupCode } = res;
    const p = MBTI_DATA.personalities[lookupCode] || MBTI_DATA.personalities[baseCode] || {
      name: '探索者', tagline: '独特而复杂的个体', heroColor: '#888',
      strengths: [], weaknesses: [], description: '', careers: [], famous: ''
    };
    const content = document.getElementById('resultContent');

    // 字母动画（只显示 4 个核心字母；混合型额外显示标签）
    const codeHtml = baseCode.split('').map((c, i) =>
      `<span class="char" style="animation-delay: ${i * 0.12}s">${c}</span>`
    ).join('');
    const hybridBadgeHtml = isHybrid
      ? `<div style="margin-top:0.5rem;font-size:0.75rem;color:#c792ea;background:rgba(199,146,234,0.15);padding:4px 12px;border-radius:12px;display:inline-block;">🎯 混合型人格 · 某维度接近中立</div>`
      : '';
    const rareBadgeHtml = (!isHybrid && lookupCode !== baseCode)
      ? `<div style="margin-top:0.5rem;font-size:0.75rem;color:#f0b429;background:rgba(240,180,41,0.15);padding:4px 12px;border-radius:12px;display:inline-block;">✨ 稀有隐藏人格 · 大五 / 九型体系 · ${lookupCode}</div>`
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
        <div class="result-code" style="background: linear-gradient(135deg, ${p.heroColor}, ${p.heroColor}cc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          ${codeHtml}
        </div>
        <div class="result-name">${p.name}${isHybrid ? '（混合型）' : ''}</div>
        <div class="result-tagline">"${p.tagline}"</div>
        ${hybridBadgeHtml}${rareBadgeHtml}
        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
          测试模式：${modeLabel} · ${total} 题
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

      <div class="result-section">
        <h3>你的特质</h3>
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
        <button class="btn-action" onclick="shareResult('${lookupCode}', '${p.name}')">📤 分享结果</button>
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

    // 根据人格切换专属音乐风格
    if (Music._currentMode === 'playing') {
      const targetCode = lookupCode; // 可能是 "INTJ" 或 "HYBRID_EI"
      const style = Music.styleFromMBTI(targetCode);
      Music.crossfadeTo(style, 400);
    }

    // ===== 测完 +1 计数 =====
    try { Counter.hit(lookupCode); } catch(e) {}
  }
  window.shareResult = function(code, name) {
    const text = `我是 MBTI ${code} ${name}！来测测你的人格类型吧！`;
    if (navigator.share) {
      navigator.share({ title: `MBTI 测试结果 - ${code} ${name}`, text, url: window.location.href })
        .catch(() => copyToClipboard(text));
    } else {
      copyToClipboard(text);
    }
  };

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
    const CFG_KEY = 'mbti_counter_config_v1';

    // 静态托管（GitHub Pages）模式：历史基线文件 + abacus 免费计数增量
    const STATIC_MODE = /(^|\.)github\.io$/i.test(location.hostname);
    const ABACUS = 'https://abacus.jasoncameron.dev';
    const NS = 'mbti40-live';
    const BASE_FILE = 'counts-baseline.json';

    let _baseline = null;
    let _deltas = null;
    let _deltasAt = 0;

    function readLocal() { try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch(e) { return {}; } }
    function writeLocal(obj) { localStorage.setItem(LS_KEY, JSON.stringify(obj)); }

    async function _readBaseline() {
      if (_baseline) return _baseline;
      try {
        const r = await fetch(BASE_FILE, { cache: 'no-store' });
        _baseline = r.ok ? await r.json() : {};
      } catch(e) { _baseline = {}; }
      return _baseline;
    }

    // 读取某人格自上线静态站以来的新增次数
    async function _readDelta(code) {
      try {
        const r = await fetch(ABACUS + '/get/' + NS + '/' + encodeURIComponent(code), { cache: 'no-store' });
        if (!r.ok) return 0;
        const j = await r.json();
        return Number(j && j.value) || 0;
      } catch(e) { return 0; }
    }

    async function _readAllDeltas(force) {
      if (!force && _deltas && Date.now() - _deltasAt < 60000) return _deltas;
      const codes = Object.keys(MBTI_DATA.personalities);
      const entries = await Promise.all(codes.map(async c => [c, await _readDelta(c)]));
      _deltas = {};
      entries.forEach(([c, v]) => { _deltas[c] = v; });
      _deltasAt = Date.now();
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

    async function hit(code) {
      // 本地先写（防远程挂了也不丢）
      const d = readLocal();
      d[code] = (d[code] || 0) + 1;
      writeLocal(d);

      if (STATIC_MODE) {
        try {
          const r = await fetch(ABACUS + '/hit/' + NS + '/' + encodeURIComponent(code));
          if (r.ok) {
            const j = await r.json();
            if (_deltas && typeof (Number(j && j.value)) === 'number') _deltas[code] = Number(j.value) || _deltas[code] || 0;
          }
        } catch(e) {}
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
        const delta = await _readDelta(code);
        return (Number(base[code]) || 0) + delta;
      }
      const data = await _readCloud();
      if (data && typeof data[code] === 'number') return data[code];
      return (readLocal()[code] || 0);
    }

    async function getAll() {
      const codes = Object.keys(MBTI_DATA.personalities);
      const out = {};
      if (STATIC_MODE) {
        const base = await _readBaseline();
        const deltas = await _readAllDeltas();
        for (const c of codes) out[c] = (Number(base[c]) || 0) + (deltas[c] || 0);
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
    async function resetCloud() {
      return false; // 云端重置仅能由服务端管理员操作
    }

    // 管理员面板用到的配置读写（存在 localStorage，仅影响本机）
    function readConfig() {
      const base = { mode: 'local', endpoint: '', getEndpoint: '', headers: '', method: 'POST' };
      try { return Object.assign(base, JSON.parse(localStorage.getItem(CFG_KEY) || '{}')); }
      catch(e) { return base; }
    }
    function writeConfig(cfg) {
      localStorage.setItem(CFG_KEY, JSON.stringify(Object.assign(readConfig(), cfg)));
    }

    return { hit, get, getAll, resetLocal, resetCloud, readConfig, writeConfig };
  })();

  // 刷新首页预览卡片上的计数
  async function refreshPreviewCounts() {
    try {
      let counts = {};
      try {
        const remote = await Counter.getAll();
        if (remote && typeof remote === 'object') counts = remote;
      } catch(e) {
        // 云端接口读不到就跳过，保持初始的 0
        console.info('[Counter] cloud api unreachable, showing local zeros');
      }

      const items = document.querySelectorAll('.preview-count');
      items.forEach(b => {
        const code = b.getAttribute('data-code');
        if (!code) return;
        const cnt = counts[code] ?? 0;
        b.textContent = `🌐 ${cnt}`;
      });
    } catch(e) {
      console.warn('[Counter] refresh error:', e);
    }
  }

  // 详情模态框加载后，异步填充计数
  const _origShowDetail = window.showPersonalityDetail;
  window.showPersonalityDetail = async function(code) {
    _origShowDetail(code);
    try {
      const cnt = await Counter.get(code);
      const badge = document.getElementById('personalityCountBadge');
      if (badge) badge.textContent = `🌐 本站已有 ${cnt} 位访客测出`;
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

  // ===== 初始化 =====
  document.addEventListener('DOMContentLoaded', function() {
    initPreviewGrid();
    refreshPreviewCounts();
    Music._currentMode = 'muted';
    Music.init();

    const footer = document.createElement('footer');
    footer.id = 'siteFooter';
    footer.innerHTML = '<div style="text-align:center;padding:2rem 1rem 3rem;color:#555;font-size:0.7rem;cursor:pointer;user-select:none;">MBTI 人格测试 · 40 型人格 · 5 连击底部开启管理员面板</div>';
    document.body.appendChild(footer);
  });
})();
