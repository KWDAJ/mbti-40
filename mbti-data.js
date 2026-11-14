// ===== MBTI 数据 v5 =====
// 每题 4 档选项：A 强烈偏左 (+2) / B 轻微偏左 (+1) / C 轻微偏右 (-1) / D 强烈偏右 (-2)
// 选项在渲染时会随机打乱，权重保留对应关系
const MBTI_DATA = {
  "dimensions": {
    "EI": {
      "left": "E 外向",
      "right": "I 内向"
    },
    "SN": {
      "left": "S 感觉",
      "right": "N 直觉"
    },
    "TF": {
      "left": "T 思考",
      "right": "F 情感"
    },
    "JP": {
      "left": "J 判断",
      "right": "P 感知"
    }
  },
  "questions": [
    {
      "dimension": "EI",
      "text": "和一群人出去玩了一整天，回到家你最真实的感觉是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "意犹未尽，还想再找人聊会儿",
          "weight": 2
        },
        {
          "text": "挺开心，虽然累但状态还不错",
          "weight": 1
        },
        {
          "text": "有点透支，想安静一会儿",
          "weight": -1
        },
        {
          "text": "彻底没电，只想一个人待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周五下班同事临时约你聚餐，你的第一反应是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "太好了，正好想热闹一下",
          "weight": 2
        },
        {
          "text": "可以去坐会儿，见见人也挺好",
          "weight": 1
        },
        {
          "text": "有点犹豫，更想早点回家",
          "weight": -1
        },
        {
          "text": "直接推掉，一个人待着才放松",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "到一个几乎都不认识的聚会上，你通常会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动找人搭话，很快就能聊开",
          "weight": 2
        },
        {
          "text": "先跟在场的熟人身边，慢慢认识几个",
          "weight": 1
        },
        {
          "text": "多数时间听别人聊，被问到才回应",
          "weight": -1
        },
        {
          "text": "找个角落待着，盼着早点结束",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "连续开了三个会之后，你的状态是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "越聊越兴奋，还想再找人讨论一下",
          "weight": 2
        },
        {
          "text": "有点累，但脑子还转得动",
          "weight": 1
        },
        {
          "text": "已经透支，更想一个人安静十分钟",
          "weight": -1
        },
        {
          "text": "只想立刻消失，谁也别跟我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周末突然空出一整天，你更想：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "约上一群朋友出门，人多才热闹",
          "weight": 2
        },
        {
          "text": "见一两个熟人，吃个饭聊聊天",
          "weight": 1
        },
        {
          "text": "在家做点自己的事，偶尔回回消息",
          "weight": -1
        },
        {
          "text": "全天不被打扰，一个人待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "心里有件烦心事时，你更可能：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "马上找人说出来，边说边理清",
          "weight": 2
        },
        {
          "text": "找个信得过的人聊几句",
          "weight": 1
        },
        {
          "text": "先自己想清楚，再决定要不要说",
          "weight": -1
        },
        {
          "text": "谁也不说，自己消化完就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在群里讨论一件事，你通常是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "想到什么就发，讨论越热越好",
          "weight": 2
        },
        {
          "text": "偶尔插两句，看气氛参与",
          "weight": 1
        },
        {
          "text": "多数时候在看，必要时才发言",
          "weight": -1
        },
        {
          "text": "几乎不发言，有事才私聊",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "新到一个团队，你大概多久能和大家熟起来：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "第一天就能聊成一片",
          "weight": 2
        },
        {
          "text": "一两周内认识大部分人",
          "weight": 1
        },
        {
          "text": "要一两个月才慢慢熟",
          "weight": -1
        },
        {
          "text": "很久都保持距离，熟了话也不多",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一个下午没有任何人联系你，你会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点闷，主动找点人聊天",
          "weight": 2
        },
        {
          "text": "还好，偶尔看看手机",
          "weight": 1
        },
        {
          "text": "挺舒服，正好做自己的事",
          "weight": -1
        },
        {
          "text": "很享受，希望别有人来打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要向陌生人问路或求助时，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "张口就问，没什么心理负担",
          "weight": 2
        },
        {
          "text": "犹豫一下，还是会问",
          "weight": 1
        },
        {
          "text": "先自己找找看，实在不行再问",
          "weight": -1
        },
        {
          "text": "宁可绕远路，也尽量不开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友临时说要来家里坐坐，你的第一感受是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "太好了，正好热闹一下",
          "weight": 2
        },
        {
          "text": "可以啊，简单收拾下就欢迎",
          "weight": 1
        },
        {
          "text": "有点突然，但还是会答应",
          "weight": -1
        },
        {
          "text": "心里一沉，很希望他改天再来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加讲座或培训，你更愿意：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "坐前排，课间主动找讲师聊",
          "weight": 2
        },
        {
          "text": "坐中间，有机会就参与互动",
          "weight": 1
        },
        {
          "text": "坐偏后一点，以听为主",
          "weight": -1
        },
        {
          "text": "坐最后面，尽量别被点到",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "长假你更想怎么过：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "约一群人出门，行程排得满满的",
          "weight": 2
        },
        {
          "text": "和几个朋友短途走一走",
          "weight": 1
        },
        {
          "text": "在家附近转转，留出大量空白",
          "weight": -1
        },
        {
          "text": "完全独处，一个人待满整段假期",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "有人向你倾诉时，你更常做的是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "陪他聊很久，把情绪接住",
          "weight": 2
        },
        {
          "text": "认真听，适时回应几句",
          "weight": 1
        },
        {
          "text": "听完给点建议，然后各自去忙",
          "weight": -1
        },
        {
          "text": "听一会儿就想撤，不太会接情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "电话响起来时，你的感觉是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺自然，接起来就能聊",
          "weight": 2
        },
        {
          "text": "看是谁，熟人就直接接",
          "weight": 1
        },
        {
          "text": "有点抗拒，能用文字就文字",
          "weight": -1
        },
        {
          "text": "看到来电就烦，能不接就不接",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一次活动结束后，你通常：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "意犹未尽，还想约下一场",
          "weight": 2
        },
        {
          "text": "玩得挺开心，回家路上还能聊两句",
          "weight": 1
        },
        {
          "text": "有点耗，回家需要缓一缓",
          "weight": -1
        },
        {
          "text": "只想赶紧回家，谁也不想联系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一个人吃饭这件事，你觉得：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺没意思，还是找人一起吃",
          "weight": 2
        },
        {
          "text": "偶尔一个人也行，多数想有人陪",
          "weight": 1
        },
        {
          "text": "一个人也挺好，正好放空",
          "weight": -1
        },
        {
          "text": "就喜欢一个人吃，没人打扰最自在",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "如果可以选择住处，你更想住在：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "市中心，楼下全是人和店",
          "weight": 2
        },
        {
          "text": "热闹街区附近，方便又有人气",
          "weight": 1
        },
        {
          "text": "安静小区，生活便利就够",
          "weight": -1
        },
        {
          "text": "远离人群，越清静越好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "遇到需要当众发言的场合，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很自然，甚至有点享受",
          "weight": 2
        },
        {
          "text": "有点紧张，但能讲完",
          "weight": 1
        },
        {
          "text": "能推就推，实在不行硬着头皮上",
          "weight": -1
        },
        {
          "text": "极度抗拒，尽量找人代替",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你手机里的消息状态通常是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "消息很多，基本随时在回",
          "weight": 2
        },
        {
          "text": "有来有回，不太积压",
          "weight": 1
        },
        {
          "text": "常常攒一批再统一回",
          "weight": -1
        },
        {
          "text": "能拖就拖，很多消息不想回",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一天里最能让你恢复精力的是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和人聊一场，越聊越有劲",
          "weight": 2
        },
        {
          "text": "和朋友吃顿饭，心情就回来了",
          "weight": 1
        },
        {
          "text": "一个人待一会儿，安静下来",
          "weight": -1
        },
        {
          "text": "完全独处，谁也不见",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "同事下班后组织活动，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "基本都去，热闹难得",
          "weight": 2
        },
        {
          "text": "看情况，感兴趣就参加",
          "weight": 1
        },
        {
          "text": "偶尔去一次，多数时候回家",
          "weight": -1
        },
        {
          "text": "几乎不参加，下班就是自己的时间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你怎么看待“社交”这件事：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "是充电，越社交越有能量",
          "weight": 2
        },
        {
          "text": "挺需要，但不能太频繁",
          "weight": 1
        },
        {
          "text": "必要就行，多了会累",
          "weight": -1
        },
        {
          "text": "能省则省，独处才是最舒服的状态",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和不熟的人同乘电梯，你通常：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "会主动聊两句",
          "weight": 2
        },
        {
          "text": "对方开口就聊，不主动也不躲",
          "weight": 1
        },
        {
          "text": "点头示意，尽量不说话",
          "weight": -1
        },
        {
          "text": "低头看手机，全程安静",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的沟通方式是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "当面聊，越快越好",
          "weight": 2
        },
        {
          "text": "打电话或语音，直接一点",
          "weight": 1
        },
        {
          "text": "文字，可以慢慢想再回",
          "weight": -1
        },
        {
          "text": "文字，而且不急着回",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "组织一次朋友聚会，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很愿意牵头，还能照顾到每个人",
          "weight": 2
        },
        {
          "text": "可以帮忙张罗一部分",
          "weight": 1
        },
        {
          "text": "更愿意被通知，不太想出主意",
          "weight": -1
        },
        {
          "text": "最怕被点名负责组织",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "聊天时对方突然沉默了，你会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动找话题把气氛填上",
          "weight": 2
        },
        {
          "text": "试着聊两句，不行就算了",
          "weight": 1
        },
        {
          "text": "能接受沉默，不急着说话",
          "weight": -1
        },
        {
          "text": "沉默最舒服，不必勉强找话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更舒服的工作环境是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "开放式，人来人往很热闹",
          "weight": 2
        },
        {
          "text": "同事多，随时能讨论",
          "weight": 1
        },
        {
          "text": "相对独立，偶尔交流",
          "weight": -1
        },
        {
          "text": "独立空间，最好一整天不用说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一整天没和任何人说话，你会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "闷得难受，必须找人聊",
          "weight": 2
        },
        {
          "text": "有点空，会主动发条消息",
          "weight": 1
        },
        {
          "text": "还好，没什么特别感觉",
          "weight": -1
        },
        {
          "text": "很自在，这样的日子越多越好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友介绍新朋友给你认识，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很快就能熟，还能带起话题",
          "weight": 2
        },
        {
          "text": "聊几句，气氛不会尴尬",
          "weight": 1
        },
        {
          "text": "客气几句，之后再看",
          "weight": -1
        },
        {
          "text": "点头认识就好，不想多说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "节假日你更怕：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一个人待着，太冷清",
          "weight": 2
        },
        {
          "text": "没安排，闲着发慌",
          "weight": 1
        },
        {
          "text": "人太多，走到哪都挤",
          "weight": -1
        },
        {
          "text": "应酬太多，一点自己的时间都没有",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "哪种情况更容易把你消耗掉：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "没人陪，一个人待太久",
          "weight": 2
        },
        {
          "text": "长时间不说话",
          "weight": 1
        },
        {
          "text": "连续社交，没有独处时间",
          "weight": -1
        },
        {
          "text": "人多的场合，待久了头疼",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "收到一条需要认真回复的长消息，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "马上回，顺便还能聊起来",
          "weight": 2
        },
        {
          "text": "看完就回，不太拖",
          "weight": 1
        },
        {
          "text": "想好了再回，可能过一会儿",
          "weight": -1
        },
        {
          "text": "先放着，等有精力再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在餐厅等位时，你更常：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和同伴一直聊，时间过得很快",
          "weight": 2
        },
        {
          "text": "聊几句，顺便看看周围",
          "weight": 1
        },
        {
          "text": "安静刷手机，不太说话",
          "weight": -1
        },
        {
          "text": "只想快点进去，不想和陌生人挨着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意参加：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "大型活动，人多才有意思",
          "weight": 2
        },
        {
          "text": "十几人的聚会，热闹但不吵",
          "weight": 1
        },
        {
          "text": "三五好友的小聚",
          "weight": -1
        },
        {
          "text": "两三个人的安静见面",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "遇到麻烦事，你的第一反应是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "先打电话找人说说",
          "weight": 2
        },
        {
          "text": "找个人问问意见",
          "weight": 1
        },
        {
          "text": "自己先捋一遍",
          "weight": -1
        },
        {
          "text": "自己处理完再说，不想让人知道",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人问“最近怎么样”，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "能聊很久，还会顺便反问对方",
          "weight": 2
        },
        {
          "text": "简单说几句，气氛轻松",
          "weight": 1
        },
        {
          "text": "答一句“还行”就过去了",
          "weight": -1
        },
        {
          "text": "希望别问，答完就想结束对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更享受哪一刻：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "大家散场了还没聊够的感觉",
          "weight": 2
        },
        {
          "text": "和熟人聊到兴头上的时候",
          "weight": 1
        },
        {
          "text": "一个人走回家路上的安静",
          "weight": -1
        },
        {
          "text": "关上门、世界安静下来的瞬间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在工作中，你更愿意：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "对外沟通，协调各方",
          "weight": 2
        },
        {
          "text": "和团队一起推进",
          "weight": 1
        },
        {
          "text": "独立负责一块，少被打断",
          "weight": -1
        },
        {
          "text": "完全独立，最好不用开会",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你的朋友数量大概是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很多，各行各业都有",
          "weight": 2
        },
        {
          "text": "不少，常联系的有好几个圈子",
          "weight": 1
        },
        {
          "text": "不多，但都是老朋友",
          "weight": -1
        },
        {
          "text": "很少，一两个就够了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一次出差，同行的人都不熟，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "正好认识新同事，主动搭话",
          "weight": 2
        },
        {
          "text": "吃饭时会聊几句",
          "weight": 1
        },
        {
          "text": "除了工作，尽量各自待着",
          "weight": -1
        },
        {
          "text": "全程只想一个人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "下面哪种情况你更怕：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "被孤立，没人理",
          "weight": 2
        },
        {
          "text": "总是独自做事",
          "weight": 1
        },
        {
          "text": "没有自己的时间",
          "weight": -1
        },
        {
          "text": "被拉着一直社交",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "走在路上遇到熟人，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动打招呼，还要站着聊两句",
          "weight": 2
        },
        {
          "text": "看到就招呼，简单聊几句",
          "weight": 1
        },
        {
          "text": "点头示意，看对方反应",
          "weight": -1
        },
        {
          "text": "尽量避开，省得寒暄",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的休息方式是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "约人喝茶聊天",
          "weight": 2
        },
        {
          "text": "和朋友吃顿好的",
          "weight": 1
        },
        {
          "text": "在家追剧、看书",
          "weight": -1
        },
        {
          "text": "一个人散步发呆，不说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要做自我介绍时，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很放得开，还能讲两句玩笑",
          "weight": 2
        },
        {
          "text": "正常说，不太紧张",
          "weight": 1
        },
        {
          "text": "简短带过，不太想多说",
          "weight": -1
        },
        {
          "text": "能省就省，最怕这种环节",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你的能量更像哪种：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "越热闹越有劲",
          "weight": 2
        },
        {
          "text": "和人相处会让我状态更好",
          "weight": 1
        },
        {
          "text": "一个人待着才能慢慢回血",
          "weight": -1
        },
        {
          "text": "独处是唯一有效的充电方式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一天结束后，你最想：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "再找人聊会儿天",
          "weight": 2
        },
        {
          "text": "和身边的人说说今天",
          "weight": 1
        },
        {
          "text": "安静待一会儿，不太想说话",
          "weight": -1
        },
        {
          "text": "彻底安静，不想听任何人说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意在哪种场合认识新朋友：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "热闹的派对，人多机会多",
          "weight": 2
        },
        {
          "text": "朋友组的饭局",
          "weight": 1
        },
        {
          "text": "工作或兴趣小组，自然认识",
          "weight": -1
        },
        {
          "text": "基本不主动认识新朋友",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "有人一直找你聊天，你会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺享受，能聊很久",
          "weight": 2
        },
        {
          "text": "看情况，聊得来就继续",
          "weight": 1
        },
        {
          "text": "聊一会儿就想结束",
          "weight": -1
        },
        {
          "text": "很快找借口走开",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "如果一整天的状态只能选一种：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和一屋子人待在一起",
          "weight": 2
        },
        {
          "text": "和几个人一起做事",
          "weight": 1
        },
        {
          "text": "一个人做自己的事",
          "weight": -1
        },
        {
          "text": "一个人，完全不被打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "要打电话预约，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "直接打，很快搞定",
          "weight": 2
        },
        {
          "text": "先想好说什么",
          "weight": 1
        },
        {
          "text": "拖一会儿再打",
          "weight": -1
        },
        {
          "text": "宁愿线上排队",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "新同事第一天来上班，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动带他认识一圈",
          "weight": 2
        },
        {
          "text": "会主动打个招呼",
          "weight": 1
        },
        {
          "text": "等他来问我",
          "weight": -1
        },
        {
          "text": "各忙各的，不太搭理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "公司团建要玩真心话大冒险，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "玩得最起劲",
          "weight": 2
        },
        {
          "text": "能玩就玩",
          "weight": 1
        },
        {
          "text": "尽量少参与",
          "weight": -1
        },
        {
          "text": "找理由不参加",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意用哪种方式汇报工作：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "开会当面讲，边讲边讨论",
          "weight": 2
        },
        {
          "text": "会上讲，会后还能聊两句",
          "weight": 1
        },
        {
          "text": "写成文档，清楚就行",
          "weight": -1
        },
        {
          "text": "发邮件，尽量少解释",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在陌生城市迷路时，你更倾向：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "直接问路人",
          "weight": 2
        },
        {
          "text": "找个人确认一下方向",
          "weight": 1
        },
        {
          "text": "自己看地图再试试",
          "weight": -1
        },
        {
          "text": "宁可多绕，也不开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "哪种场合让你更自在：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "人多的活动现场",
          "weight": 2
        },
        {
          "text": "有几个熟人的饭局",
          "weight": 1
        },
        {
          "text": "安静的书店或咖啡馆",
          "weight": -1
        },
        {
          "text": "只有自己的房间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "到一个新环境，你通常先：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和身边的人搭话",
          "weight": 2
        },
        {
          "text": "观察谁比较好接近",
          "weight": 1
        },
        {
          "text": "先做自己的事",
          "weight": -1
        },
        {
          "text": "希望别有人来找我",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友聚会时，你通常是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "话题中心，能带动气氛",
          "weight": 2
        },
        {
          "text": "参与得挺多",
          "weight": 1
        },
        {
          "text": "听多说少",
          "weight": -1
        },
        {
          "text": "只和身边一两个人聊",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的过生日方式是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "叫上一大群朋友热闹一场",
          "weight": 2
        },
        {
          "text": "和几个好朋友吃个饭",
          "weight": 1
        },
        {
          "text": "和家人简单过",
          "weight": -1
        },
        {
          "text": "自己安静待一天",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一整天会议排满，结束后你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "还想找人复盘几句",
          "weight": 2
        },
        {
          "text": "缓一缓就能继续",
          "weight": 1
        },
        {
          "text": "只想安静一会儿",
          "weight": -1
        },
        {
          "text": "谁都不想见",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更常主动联系别人，还是等别人联系你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "基本我主动",
          "weight": 2
        },
        {
          "text": "想到就联系",
          "weight": 1
        },
        {
          "text": "多数时候等对方",
          "weight": -1
        },
        {
          "text": "很少主动",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "坐高铁邻座跟你搭话，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "能聊一路",
          "weight": 2
        },
        {
          "text": "聊几句",
          "weight": 1
        },
        {
          "text": "应付两句",
          "weight": -1
        },
        {
          "text": "戴上耳机",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "轮到你主持周会，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺乐意，还能带节奏",
          "weight": 2
        },
        {
          "text": "正常主持，不太紧张",
          "weight": 1
        },
        {
          "text": "想拉个人一起",
          "weight": -1
        },
        {
          "text": "非常抗拒",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周末两天完全没人约你，你会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动找人出去",
          "weight": 2
        },
        {
          "text": "问问有没有人想聚",
          "weight": 1
        },
        {
          "text": "正好自己安排",
          "weight": -1
        },
        {
          "text": "非常满意这种状态",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在饭桌上，你更常是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "张罗点菜、照顾话题",
          "weight": 2
        },
        {
          "text": "参与聊，偶尔出主意",
          "weight": 1
        },
        {
          "text": "多吃少说",
          "weight": -1
        },
        {
          "text": "吃完就想走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的旅行同伴是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一群人，热闹",
          "weight": 2
        },
        {
          "text": "三五个熟人",
          "weight": 1
        },
        {
          "text": "一个合拍的人",
          "weight": -1
        },
        {
          "text": "一个人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "遇到开心的事，你第一反应是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "马上告诉别人",
          "weight": 2
        },
        {
          "text": "和身边人分享",
          "weight": 1
        },
        {
          "text": "自己先回味",
          "weight": -1
        },
        {
          "text": "心里知道就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "有人请你帮忙牵线认识朋友，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺乐意，还能张罗",
          "weight": 2
        },
        {
          "text": "可以介绍一下",
          "weight": 1
        },
        {
          "text": "看情况",
          "weight": -1
        },
        {
          "text": "不想掺和",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意如何度过通勤：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和同事一路聊",
          "weight": 2
        },
        {
          "text": "听点东西，偶尔回消息",
          "weight": 1
        },
        {
          "text": "刷手机，不被打扰",
          "weight": -1
        },
        {
          "text": "闭眼休息，不想说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "同事午休时凑过来聊天，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "正好，边吃边聊",
          "weight": 2
        },
        {
          "text": "聊一会儿",
          "weight": 1
        },
        {
          "text": "想自己待着",
          "weight": -1
        },
        {
          "text": "希望他别来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更容易在哪种状态下想出办法：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和人聊着聊着就清楚了",
          "weight": 2
        },
        {
          "text": "讨论一下就有思路",
          "weight": 1
        },
        {
          "text": "一个人安静想",
          "weight": -1
        },
        {
          "text": "完全独处时才想得透",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意加入哪种社团：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "人多的兴趣社群",
          "weight": 2
        },
        {
          "text": "定期聚的活动小组",
          "weight": 1
        },
        {
          "text": "线上为主的小圈子",
          "weight": -1
        },
        {
          "text": "自己默默研究就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一天里你最怕：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一个人待着没话说",
          "weight": 2
        },
        {
          "text": "整天没人联系",
          "weight": 1
        },
        {
          "text": "被人频繁打断",
          "weight": -1
        },
        {
          "text": "一直被围着说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢哪种聚餐：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "十几个人热热闹闹",
          "weight": 2
        },
        {
          "text": "六七个朋友",
          "weight": 1
        },
        {
          "text": "三四个人",
          "weight": -1
        },
        {
          "text": "两个人安静吃",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人在朋友圈发了动态，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "常评论，还能聊起来",
          "weight": 2
        },
        {
          "text": "偶尔点个赞",
          "weight": 1
        },
        {
          "text": "基本只看不发",
          "weight": -1
        },
        {
          "text": "很少刷，也不互动",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "被拉进一个陌生的群，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "先自我介绍，聊起来",
          "weight": 2
        },
        {
          "text": "看大家在聊什么",
          "weight": 1
        },
        {
          "text": "基本潜水",
          "weight": -1
        },
        {
          "text": "想直接退群",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意怎么学新东西：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "找个人一起学，边学边讲",
          "weight": 2
        },
        {
          "text": "参加有讨论的课程",
          "weight": 1
        },
        {
          "text": "自己看资料",
          "weight": -1
        },
        {
          "text": "一个人慢慢琢磨",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的工作方式是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "频繁和人对齐",
          "weight": 2
        },
        {
          "text": "定期同步一下",
          "weight": 1
        },
        {
          "text": "交代清楚后各自做",
          "weight": -1
        },
        {
          "text": "全程不用沟通最好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周末你更可能：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "约人出去一天",
          "weight": 2
        },
        {
          "text": "见一两个朋友",
          "weight": 1
        },
        {
          "text": "在家附近转转",
          "weight": -1
        },
        {
          "text": "一整天不出门",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你在哪种情况下更来劲：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "现场有人互动",
          "weight": 2
        },
        {
          "text": "有人一起做事",
          "weight": 1
        },
        {
          "text": "自己一个人推进",
          "weight": -1
        },
        {
          "text": "关起门来不被打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人夸你时，你更希望：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "当面说出来",
          "weight": 2
        },
        {
          "text": "私下告诉你",
          "weight": 1
        },
        {
          "text": "简单点就好",
          "weight": -1
        },
        {
          "text": "不太需要这种反馈",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "被人误会了，你更愿意：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "当面解释清楚",
          "weight": 2
        },
        {
          "text": "找机会说明",
          "weight": 1
        },
        {
          "text": "先不解释",
          "weight": -1
        },
        {
          "text": "懒得解释",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "哪种周末安排更吸引你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "音乐节、市集这类热闹场",
          "weight": 2
        },
        {
          "text": "朋友家的聚会",
          "weight": 1
        },
        {
          "text": "图书馆或展览",
          "weight": -1
        },
        {
          "text": "家里躺一天",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的室友是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "爱聊天、常在客厅待着",
          "weight": 2
        },
        {
          "text": "偶尔一起吃饭聊天",
          "weight": 1
        },
        {
          "text": "各过各的，礼貌就好",
          "weight": -1
        },
        {
          "text": "最好几乎不碰面",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要独自出差三天，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "正好见见当地朋友",
          "weight": 2
        },
        {
          "text": "还行，能安排",
          "weight": 1
        },
        {
          "text": "有点无聊",
          "weight": -1
        },
        {
          "text": "最好别去",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "谁更容易让你恢复状态：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一群朋友",
          "weight": 2
        },
        {
          "text": "一个懂我的朋友",
          "weight": 1
        },
        {
          "text": "我自己",
          "weight": -1
        },
        {
          "text": "谁都别来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "公司组织分享会，你更愿意：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "上台讲一段",
          "weight": 2
        },
        {
          "text": "多提问互动",
          "weight": 1
        },
        {
          "text": "安静听着",
          "weight": -1
        },
        {
          "text": "能不去就不去",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "有人说要给你介绍对象，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺乐意，见见也好",
          "weight": 2
        },
        {
          "text": "可以先聊聊",
          "weight": 1
        },
        {
          "text": "有点抗拒",
          "weight": -1
        },
        {
          "text": "直接拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "收到一条语音消息，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "直接听，马上回",
          "weight": 2
        },
        {
          "text": "转文字再看",
          "weight": 1
        },
        {
          "text": "过会儿再听",
          "weight": -1
        },
        {
          "text": "不想听，让他打字",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "聚会上有人提议玩游戏，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "第一个报名",
          "weight": 2
        },
        {
          "text": "有人拉我就上",
          "weight": 1
        },
        {
          "text": "看别人玩",
          "weight": -1
        },
        {
          "text": "找借口躲开",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意在哪种环境里反思：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和朋友边聊边想",
          "weight": 2
        },
        {
          "text": "有人陪着说说话",
          "weight": 1
        },
        {
          "text": "自己走走",
          "weight": -1
        },
        {
          "text": "独处，谁也别打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更喜欢的假期长度是：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "短一点，能多出去几趟",
          "weight": 2
        },
        {
          "text": "刚好够见几个人",
          "weight": 1
        },
        {
          "text": "长一点，能休息",
          "weight": -1
        },
        {
          "text": "越长越好，最好不出门",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人问你意见时，你更常：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "边想边说，说着就清楚了",
          "weight": 2
        },
        {
          "text": "说几句再看看对方反应",
          "weight": 1
        },
        {
          "text": "想清楚再说",
          "weight": -1
        },
        {
          "text": "只说结论，不多解释",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "有好消息时，你更愿意：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "发朋友圈，让大家都知道",
          "weight": 2
        },
        {
          "text": "先告诉几个熟人",
          "weight": 1
        },
        {
          "text": "只告诉最亲的人",
          "weight": -1
        },
        {
          "text": "不说，自己知道",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在楼下碰到邻居，你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "站着聊一会儿",
          "weight": 2
        },
        {
          "text": "打个招呼",
          "weight": 1
        },
        {
          "text": "点头就走",
          "weight": -1
        },
        {
          "text": "尽量错开",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更享受哪种成就感：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一群人因为你聚在一起",
          "weight": 2
        },
        {
          "text": "帮大家把气氛带起来",
          "weight": 1
        },
        {
          "text": "自己安静做完一件事",
          "weight": -1
        },
        {
          "text": "没人打扰地完成一件难事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意怎么过跨年：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和很多人一起倒数",
          "weight": 2
        },
        {
          "text": "和几个朋友吃饭",
          "weight": 1
        },
        {
          "text": "和家人待着",
          "weight": -1
        },
        {
          "text": "自己一个人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "如果一周不能出门，你会：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "憋得慌，想找人",
          "weight": 2
        },
        {
          "text": "有点闷",
          "weight": 1
        },
        {
          "text": "还行，能自己安排",
          "weight": -1
        },
        {
          "text": "求之不得",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你更愿意做哪种志愿者：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "现场引导、接待",
          "weight": 2
        },
        {
          "text": "活动组织",
          "weight": 1
        },
        {
          "text": "幕后整理资料",
          "weight": -1
        },
        {
          "text": "线上远程支持",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得哪种状态更像自己：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "总在人群里，越忙越有劲",
          "weight": 2
        },
        {
          "text": "喜欢热闹，也需要缓一缓",
          "weight": 1
        },
        {
          "text": "大多数时候自己待着",
          "weight": -1
        },
        {
          "text": "独处时才最像自己",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学一个新软件时，你更倾向：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先照着教程一步步点，把每个功能都摸熟",
          "weight": 2
        },
        {
          "text": "先看实际操作演示，再自己上手试",
          "weight": 1
        },
        {
          "text": "先想清楚它大概怎么运作，再动手",
          "weight": -1
        },
        {
          "text": "先琢磨它的设计思路，细节用到再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人跟你讲一件事，你更关注：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体发生了什么、几点、当时谁在场",
          "weight": 2
        },
        {
          "text": "事情的经过和关键细节",
          "weight": 1
        },
        {
          "text": "这件事说明了什么",
          "weight": -1
        },
        {
          "text": "背后的规律和更大的意义",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "判断一件事时，你更相信：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "亲眼看到、亲自试过的",
          "weight": 2
        },
        {
          "text": "有数据、有案例支撑的说法",
          "weight": 1
        },
        {
          "text": "合乎逻辑的推演",
          "weight": -1
        },
        {
          "text": "直觉和整体的感觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做计划时你更依赖：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "以往做过、被验证过的做法",
          "weight": 2
        },
        {
          "text": "现成的流程和经验",
          "weight": 1
        },
        {
          "text": "设想几种可能，再挑一个",
          "weight": -1
        },
        {
          "text": "先定方向，具体走一步看一步",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看电影时你更享受：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "画面、表演、细节做得真好",
          "weight": 2
        },
        {
          "text": "故事讲得顺，看得舒服",
          "weight": 1
        },
        {
          "text": "里面有值得琢磨的隐喻",
          "weight": -1
        },
        {
          "text": "看完能让我想很久的那种",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易注意到：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "东西摆得不对、细节有变化",
          "weight": 2
        },
        {
          "text": "眼前具体发生了什么",
          "weight": 1
        },
        {
          "text": "事情之间的关联",
          "weight": -1
        },
        {
          "text": "整体氛围和可能的走向",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "接到一个要求模糊的任务，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先问清要求、范围和交付标准",
          "weight": 2
        },
        {
          "text": "先找类似的案例参考",
          "weight": 1
        },
        {
          "text": "先想清楚它到底要解决什么",
          "weight": -1
        },
        {
          "text": "先自己重新定义问题，再谈做法",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢聊：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "最近发生的具体事",
          "weight": 2
        },
        {
          "text": "实际的生活经验",
          "weight": 1
        },
        {
          "text": "想法、观点和可能性",
          "weight": -1
        },
        {
          "text": "概念、假设和“如果怎样会怎样”",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "描述一个人时，你更常说：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "他做什么工作、住哪、平时干什么",
          "weight": 2
        },
        {
          "text": "他具体做过哪些事",
          "weight": 1
        },
        {
          "text": "他大概是哪种人",
          "weight": -1
        },
        {
          "text": "他给我的整体感觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意读：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "操作手册、实用指南",
          "weight": 2
        },
        {
          "text": "真实案例和纪实",
          "weight": 1
        },
        {
          "text": "观点和评论",
          "weight": -1
        },
        {
          "text": "哲学、理论类的书",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一个新项目，你先想到：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "要做哪些事、谁负责、什么时候交",
          "weight": 2
        },
        {
          "text": "以前类似的项目是怎么做的",
          "weight": 1
        },
        {
          "text": "这个项目最后能做成什么样",
          "weight": -1
        },
        {
          "text": "它可能会改变什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你最受不了哪种情况：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "说了半天没有具体内容",
          "weight": 2
        },
        {
          "text": "空泛、落不了地的话",
          "weight": 1
        },
        {
          "text": "只谈细节，没有想法",
          "weight": -1
        },
        {
          "text": "被现实捆住，什么都不敢想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你记东西更靠：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体细节，连数字都记得",
          "weight": 2
        },
        {
          "text": "当时的情景和先后顺序",
          "weight": 1
        },
        {
          "text": "整体印象和几个要点",
          "weight": -1
        },
        {
          "text": "概念以及它们之间的关系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到问题时你更常：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先看现有条件能怎么解决",
          "weight": 2
        },
        {
          "text": "回想以前遇到过的类似情况",
          "weight": 1
        },
        {
          "text": "换个角度想有没有别的可能",
          "weight": -1
        },
        {
          "text": "重新想一套全新的办法",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的老师是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "讲得清楚、步骤明确的",
          "weight": 2
        },
        {
          "text": "案例多、能落地的",
          "weight": 1
        },
        {
          "text": "能启发思考的",
          "weight": -1
        },
        {
          "text": "讲思想和视野的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "装修房子时你更在意：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "尺寸、材料、预算这些实处",
          "weight": 2
        },
        {
          "text": "好不好用、方不方便",
          "weight": 1
        },
        {
          "text": "整体风格和感觉",
          "weight": -1
        },
        {
          "text": "住进去会是一种什么样的生活",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "聊天时你更常：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "讲具体发生了什么",
          "weight": 2
        },
        {
          "text": "说清前因后果",
          "weight": 1
        },
        {
          "text": "顺着话题延展出别的想法",
          "weight": -1
        },
        {
          "text": "跳到更宏观的话题上",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更信哪种判断：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做过才知道",
          "weight": 2
        },
        {
          "text": "有经验支撑的判断",
          "weight": 1
        },
        {
          "text": "逻辑上说得通的判断",
          "weight": -1
        },
        {
          "text": "心里那种说不清但很准的感觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你的注意力更容易被什么带走：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "眼前的细节",
          "weight": 2
        },
        {
          "text": "手头具体的事",
          "weight": 1
        },
        {
          "text": "突然冒出来的联想",
          "weight": -1
        },
        {
          "text": "脑海里的设想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说“大概就是这样”，你会：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "追问具体是哪样",
          "weight": 2
        },
        {
          "text": "希望他给个例子",
          "weight": 1
        },
        {
          "text": "大概能明白，细节不重要",
          "weight": -1
        },
        {
          "text": "更想聊它背后的道理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更擅长：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把一件事做细、做到位",
          "weight": 2
        },
        {
          "text": "按流程把事推进",
          "weight": 1
        },
        {
          "text": "看出事情的方向",
          "weight": -1
        },
        {
          "text": "提出新的框架和可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一段关系，你更看重：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "日常的具体相处",
          "weight": 2
        },
        {
          "text": "一起真实经历过的事",
          "weight": 1
        },
        {
          "text": "彼此是否聊得来",
          "weight": -1
        },
        {
          "text": "精神上是否同频",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的周末是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把家里收拾一遍、把事办完",
          "weight": 2
        },
        {
          "text": "出门办点具体的事、见见人",
          "weight": 1
        },
        {
          "text": "随便走走，看看有什么新鲜的",
          "weight": -1
        },
        {
          "text": "待着想事情、写点东西",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "听到一个新概念，你第一反应是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "它具体指什么、怎么用",
          "weight": 2
        },
        {
          "text": "有没有实际例子",
          "weight": 1
        },
        {
          "text": "它和我知道的哪些东西有关",
          "weight": -1
        },
        {
          "text": "它能推出什么更大的结论",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更怕哪一种局面：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "事情没落地、停在嘴上",
          "weight": 2
        },
        {
          "text": "计划太空、没法执行",
          "weight": 1
        },
        {
          "text": "被细节缠住、看不到全局",
          "weight": -1
        },
        {
          "text": "现实太窄、想象没处放",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "开会时你更常：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "记下具体事项和负责人",
          "weight": 2
        },
        {
          "text": "关注已经定下来的事",
          "weight": 1
        },
        {
          "text": "想这事还能怎么做",
          "weight": -1
        },
        {
          "text": "想这事到底值不值得做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易记住：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的数字和时间",
          "weight": 2
        },
        {
          "text": "当时的具体场景",
          "weight": 1
        },
        {
          "text": "对方说话的大意",
          "weight": -1
        },
        {
          "text": "当时的感受和由此产生的联想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意相信：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "可测量、可验证的东西",
          "weight": 2
        },
        {
          "text": "被反复证明过的经验",
          "weight": 1
        },
        {
          "text": "有内在逻辑的解释",
          "weight": -1
        },
        {
          "text": "直觉指向的答案",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢哪种表达：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "说清楚具体怎么做",
          "weight": 2
        },
        {
          "text": "举例子说明",
          "weight": 1
        },
        {
          "text": "打比方说明",
          "weight": -1
        },
        {
          "text": "讲清楚背后的原理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对突发变化，你先看：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "眼前需要调整哪些具体安排",
          "weight": 2
        },
        {
          "text": "现实条件允许怎么改",
          "weight": 1
        },
        {
          "text": "这个变化意味着什么",
          "weight": -1
        },
        {
          "text": "它可能带来哪些新的可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "什么最让你有成就感：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把一件小事做到极致",
          "weight": 2
        },
        {
          "text": "把事情稳稳当当地完成",
          "weight": 1
        },
        {
          "text": "想到一个有意思的点子",
          "weight": -1
        },
        {
          "text": "构想一个还没人做过的东西",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人更常这样评价你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "很实在",
          "weight": 2
        },
        {
          "text": "做事靠谱",
          "weight": 1
        },
        {
          "text": "想法多",
          "weight": -1
        },
        {
          "text": "想得太远",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意把时间花在：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "练熟一项具体技能",
          "weight": 2
        },
        {
          "text": "把本职工作做扎实",
          "weight": 1
        },
        {
          "text": "研究一个新领域",
          "weight": -1
        },
        {
          "text": "琢磨一些没有答案的问题",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "说到“未来”，你的感觉是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先把眼前的事做好再说",
          "weight": 2
        },
        {
          "text": "大致有个方向就行",
          "weight": 1
        },
        {
          "text": "常常想象几种可能",
          "weight": -1
        },
        {
          "text": "更活在设想里的那个未来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人给你建议时，你更希望：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "直接告诉我第一步做什么",
          "weight": 2
        },
        {
          "text": "给个具体例子",
          "weight": 1
        },
        {
          "text": "讲讲思路就行",
          "weight": -1
        },
        {
          "text": "聊聊这件事的本质是什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易被什么打动：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "真实、具体的细节",
          "weight": 2
        },
        {
          "text": "身边真实发生的事",
          "weight": 1
        },
        {
          "text": "一个新鲜的视角",
          "weight": -1
        },
        {
          "text": "一个宏大的构想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的旅行方式是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "行程和住宿都提前定好",
          "weight": 2
        },
        {
          "text": "查好攻略、按路线走",
          "weight": 1
        },
        {
          "text": "定个大方向，走到哪算哪",
          "weight": -1
        },
        {
          "text": "不带计划，跟着感觉走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更擅长发现：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "别人忽略的细节",
          "weight": 2
        },
        {
          "text": "实际执行中的问题",
          "weight": 1
        },
        {
          "text": "事情之间隐藏的联系",
          "weight": -1
        },
        {
          "text": "还没被提出的可能性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更不喜欢：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "空谈、没有结论",
          "weight": 2
        },
        {
          "text": "只讲概念不讲做法",
          "weight": 1
        },
        {
          "text": "只会照做、没有想法",
          "weight": -1
        },
        {
          "text": "被现实框死、不敢设想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学历史时你更喜欢：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的人物、时间、事件",
          "weight": 2
        },
        {
          "text": "真实发生过的故事",
          "weight": 1
        },
        {
          "text": "历史背后的规律",
          "weight": -1
        },
        {
          "text": "历史对今天的启示",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意做：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "有明确标准、能验收的事",
          "weight": 2
        },
        {
          "text": "按既定流程完成的事",
          "weight": 1
        },
        {
          "text": "需要自己找方向的事",
          "weight": -1
        },
        {
          "text": "还没有答案、需要探索的事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得进步主要来自：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把细节一点点做好",
          "weight": 2
        },
        {
          "text": "在实践中积累经验",
          "weight": 1
        },
        {
          "text": "换个思路",
          "weight": -1
        },
        {
          "text": "先有一个大胆的设想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更常想的是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "今天还有哪些事要办",
          "weight": 2
        },
        {
          "text": "这周具体的安排",
          "weight": 1
        },
        {
          "text": "以后可能会怎样",
          "weight": -1
        },
        {
          "text": "如果一切重来会怎样",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "和人聊天时，你更容易：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把话题落到具体的事上",
          "weight": 2
        },
        {
          "text": "聊实际发生过的事",
          "weight": 1
        },
        {
          "text": "聊着聊着就跳到别的话题",
          "weight": -1
        },
        {
          "text": "聊一些没有结论的话题",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更信任：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "说明书",
          "weight": 2
        },
        {
          "text": "过来人的经验",
          "weight": 1
        },
        {
          "text": "自己的推理",
          "weight": -1
        },
        {
          "text": "自己的直觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的作品是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "细节扎实、真实可信的",
          "weight": 2
        },
        {
          "text": "贴近生活的",
          "weight": 1
        },
        {
          "text": "有想象力的",
          "weight": -1
        },
        {
          "text": "有隐喻和象征的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一大堆信息，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先分类整理出具体条目",
          "weight": 2
        },
        {
          "text": "先找出关键数据",
          "weight": 1
        },
        {
          "text": "先看整体在讲什么",
          "weight": -1
        },
        {
          "text": "先找它背后的模式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意这样描述自己：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "我看得到具体的东西",
          "weight": 2
        },
        {
          "text": "我做事比较落地",
          "weight": 1
        },
        {
          "text": "我常常想得比较远",
          "weight": -1
        },
        {
          "text": "我更多活在想法里",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更怕错过：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "眼前的实际机会",
          "weight": 2
        },
        {
          "text": "具体的、能抓住的东西",
          "weight": 1
        },
        {
          "text": "更好的可能性",
          "weight": -1
        },
        {
          "text": "本来可以想象到的另一种人生",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "如果只能选一句，你更认同：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把眼前的事做对",
          "weight": 2
        },
        {
          "text": "把手里的事做好",
          "weight": 1
        },
        {
          "text": "想清楚为什么做",
          "weight": -1
        },
        {
          "text": "想清楚还能怎么活",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更相信哪种说法：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "眼见为实",
          "weight": 2
        },
        {
          "text": "有例子才算数",
          "weight": 1
        },
        {
          "text": "要看背后的道理",
          "weight": -1
        },
        {
          "text": "感觉对了就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人跟你描述一个地方，你更想先知道：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "在哪儿、怎么去、多远",
          "weight": 2
        },
        {
          "text": "周边有什么、方不方便",
          "weight": 1
        },
        {
          "text": "大概是个什么氛围",
          "weight": -1
        },
        {
          "text": "它给人的整体印象",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的说明书是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "一步一步配图",
          "weight": 2
        },
        {
          "text": "分条列清楚",
          "weight": 1
        },
        {
          "text": "讲清背后的原理",
          "weight": -1
        },
        {
          "text": "只给思路，自己摸索",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "买东西时你更看重：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "参数和实际体验",
          "weight": 2
        },
        {
          "text": "用过的人怎么说",
          "weight": 1
        },
        {
          "text": "设计背后的想法",
          "weight": -1
        },
        {
          "text": "它代表的生活方式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更常注意到别人的：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "穿了什么、拿了什么",
          "weight": 2
        },
        {
          "text": "做了什么具体的事",
          "weight": 1
        },
        {
          "text": "说话背后的意思",
          "weight": -1
        },
        {
          "text": "这个人给我的感觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的电影类型是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "纪实、传记",
          "weight": 2
        },
        {
          "text": "生活流的故事",
          "weight": 1
        },
        {
          "text": "有隐喻的文艺片",
          "weight": -1
        },
        {
          "text": "思辨性强的科幻",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "接手一件事，你更想先拿到：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "明确的步骤和要求",
          "weight": 2
        },
        {
          "text": "以往的做法",
          "weight": 1
        },
        {
          "text": "目标和大方向",
          "weight": -1
        },
        {
          "text": "自由发挥的空间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更怕哪种情况：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "说得漂亮却做不出来",
          "weight": 2
        },
        {
          "text": "方案太虚、没法执行",
          "weight": 1
        },
        {
          "text": "只盯着细节看不到方向",
          "weight": -1
        },
        {
          "text": "想法太多落不了地",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意听哪种分享：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "亲身经历的细节",
          "weight": 2
        },
        {
          "text": "具体的操作方法",
          "weight": 1
        },
        {
          "text": "背后的思考",
          "weight": -1
        },
        {
          "text": "对未来的判断",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你的记忆更偏向：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "画面和细节",
          "weight": 2
        },
        {
          "text": "事情的前后经过",
          "weight": 1
        },
        {
          "text": "结论和要点",
          "weight": -1
        },
        {
          "text": "当时的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的上司是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "要求具体、说得清楚",
          "weight": 2
        },
        {
          "text": "经验丰富、能带你",
          "weight": 1
        },
        {
          "text": "有想法、能给方向",
          "weight": -1
        },
        {
          "text": "放手让你自己搞",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到一个新问题，你首先：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "找有没有现成办法",
          "weight": 2
        },
        {
          "text": "看别人怎么解决的",
          "weight": 1
        },
        {
          "text": "分析问题的结构",
          "weight": -1
        },
        {
          "text": "猜它可能的原因",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意读的报道是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "现场采访、事实清楚",
          "weight": 2
        },
        {
          "text": "数据翔实的",
          "weight": 1
        },
        {
          "text": "有观点的评论",
          "weight": -1
        },
        {
          "text": "提出新问题的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更相信哪种计划：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "排到每天做什么",
          "weight": 2
        },
        {
          "text": "列出关键节点",
          "weight": 1
        },
        {
          "text": "定好大方向",
          "weight": -1
        },
        {
          "text": "跟着感觉走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更擅长记：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "人名、数字、日期",
          "weight": 2
        },
        {
          "text": "具体做过的事",
          "weight": 1
        },
        {
          "text": "概念和关系",
          "weight": -1
        },
        {
          "text": "整体印象",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人讲一个道理，你更想：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "要一个具体例子",
          "weight": 2
        },
        {
          "text": "看他怎么证明",
          "weight": 1
        },
        {
          "text": "顺着往下推",
          "weight": -1
        },
        {
          "text": "想想它还能解释什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意做的事是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把流程跑顺",
          "weight": 2
        },
        {
          "text": "把细节做对",
          "weight": 1
        },
        {
          "text": "把方向想清楚",
          "weight": -1
        },
        {
          "text": "把可能性打开",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的课堂是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "讲练结合、当堂消化",
          "weight": 2
        },
        {
          "text": "案例教学",
          "weight": 1
        },
        {
          "text": "讨论式",
          "weight": -1
        },
        {
          "text": "开放式、没有标准答案",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你判断一个人靠不靠谱，主要看：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "他说的事有没有做到",
          "weight": 2
        },
        {
          "text": "过往的实际表现",
          "weight": 1
        },
        {
          "text": "他的思路清不清楚",
          "weight": -1
        },
        {
          "text": "我的直觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的休息是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "出去走走、看看具体的东西",
          "weight": 2
        },
        {
          "text": "做点手上的活",
          "weight": 1
        },
        {
          "text": "想点事情",
          "weight": -1
        },
        {
          "text": "发呆放空",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更关心的新闻是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "身边发生的事",
          "weight": 2
        },
        {
          "text": "具体的民生政策",
          "weight": 1
        },
        {
          "text": "趋势和分析",
          "weight": -1
        },
        {
          "text": "长远的走向",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学一门手艺，你更愿意：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "从基础动作练起",
          "weight": 2
        },
        {
          "text": "跟着师傅一步步做",
          "weight": 1
        },
        {
          "text": "先弄懂原理",
          "weight": -1
        },
        {
          "text": "自己摸索着试",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意相信的经验是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "自己亲身经历过的",
          "weight": 2
        },
        {
          "text": "身边人验证过的",
          "weight": 1
        },
        {
          "text": "逻辑上说得通的",
          "weight": -1
        },
        {
          "text": "直觉告诉我的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢哪种问题：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "有标准答案的",
          "weight": 2
        },
        {
          "text": "能算出结果的",
          "weight": 1
        },
        {
          "text": "值得讨论的",
          "weight": -1
        },
        {
          "text": "没有答案的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意怎么布置房间：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "实用、够用就好",
          "weight": 2
        },
        {
          "text": "舒服、方便为主",
          "weight": 1
        },
        {
          "text": "有整体风格",
          "weight": -1
        },
        {
          "text": "能表达我的想法",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易被哪种细节打动：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做工和用料",
          "weight": 2
        },
        {
          "text": "用起来顺手",
          "weight": 1
        },
        {
          "text": "设计得巧妙",
          "weight": -1
        },
        {
          "text": "背后的用意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的聊天内容是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "最近发生的事",
          "weight": 2
        },
        {
          "text": "具体的人和事",
          "weight": 1
        },
        {
          "text": "观点和看法",
          "weight": -1
        },
        {
          "text": "假设和想象",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意做哪种工作：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "有明确标准的",
          "weight": 2
        },
        {
          "text": "靠经验积累的",
          "weight": 1
        },
        {
          "text": "需要判断方向的",
          "weight": -1
        },
        {
          "text": "需要不断想象的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说“这事有戏”，你会：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "问清楚具体情况",
          "weight": 2
        },
        {
          "text": "看有没有先例",
          "weight": 1
        },
        {
          "text": "分析可行性",
          "weight": -1
        },
        {
          "text": "先想象它能成什么样",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更认可哪种判断：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "试过才知道",
          "weight": 2
        },
        {
          "text": "数据说话",
          "weight": 1
        },
        {
          "text": "逻辑推得通",
          "weight": -1
        },
        {
          "text": "感觉对",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意把精力放在：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把眼前的事做扎实",
          "weight": 2
        },
        {
          "text": "积累实际经验",
          "weight": 1
        },
        {
          "text": "琢磨方法和原理",
          "weight": -1
        },
        {
          "text": "构想新的可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的假期是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "去一个具体的地方玩",
          "weight": 2
        },
        {
          "text": "把想做的事做完",
          "weight": 1
        },
        {
          "text": "随便走走看看",
          "weight": -1
        },
        {
          "text": "在家想事情",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易记住别人的：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "长相和声音",
          "weight": 2
        },
        {
          "text": "做过的事",
          "weight": 1
        },
        {
          "text": "说过的话",
          "weight": -1
        },
        {
          "text": "给我的感觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意学：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "一门能立刻用的技能",
          "weight": 2
        },
        {
          "text": "一套成熟的方法",
          "weight": 1
        },
        {
          "text": "一个新领域的框架",
          "weight": -1
        },
        {
          "text": "一些还没答案的问题",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更在意的评价是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做事靠得住",
          "weight": 2
        },
        {
          "text": "细节没出错",
          "weight": 1
        },
        {
          "text": "想得够深",
          "weight": -1
        },
        {
          "text": "看得够远",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更习惯怎么处理资料：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "按类归档、标好标签",
          "weight": 2
        },
        {
          "text": "先摘出重点",
          "weight": 1
        },
        {
          "text": "理出结构",
          "weight": -1
        },
        {
          "text": "记个大概就够",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的合作对象是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "踏实执行的",
          "weight": 2
        },
        {
          "text": "经验丰富的",
          "weight": 1
        },
        {
          "text": "思路清楚的",
          "weight": -1
        },
        {
          "text": "敢想敢试的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意相信哪种未来：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "看得见、摸得着的",
          "weight": 2
        },
        {
          "text": "按现有趋势推得的",
          "weight": 1
        },
        {
          "text": "理论上成立的",
          "weight": -1
        },
        {
          "text": "感觉会发生的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易被什么打断思路：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的事务",
          "weight": 2
        },
        {
          "text": "临时的安排",
          "weight": 1
        },
        {
          "text": "突然的联想",
          "weight": -1
        },
        {
          "text": "新的想法",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意在哪种公司工作：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "业务清晰、流程成熟",
          "weight": 2
        },
        {
          "text": "有稳定客户",
          "weight": 1
        },
        {
          "text": "正在转型的",
          "weight": -1
        },
        {
          "text": "还在探索方向的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的表达方式是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "分点、可操作",
          "weight": 2
        },
        {
          "text": "配图、直观",
          "weight": 1
        },
        {
          "text": "有逻辑框架",
          "weight": -1
        },
        {
          "text": "有启发性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意听谁的：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做过这件事的人",
          "weight": 2
        },
        {
          "text": "有数据的人",
          "weight": 1
        },
        {
          "text": "能讲清逻辑的人",
          "weight": -1
        },
        {
          "text": "看得远的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "周末你更愿意：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把该办的事办完",
          "weight": 2
        },
        {
          "text": "和家人朋友聚一聚",
          "weight": 1
        },
        {
          "text": "去没去过的地方",
          "weight": -1
        },
        {
          "text": "在家想事情",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更常根据什么做判断：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "手上的信息",
          "weight": 2
        },
        {
          "text": "过往的经验",
          "weight": 1
        },
        {
          "text": "事情的规律",
          "weight": -1
        },
        {
          "text": "整体的感觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意相信哪种解释：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "能对上细节的",
          "weight": 2
        },
        {
          "text": "有案例支持的",
          "weight": 1
        },
        {
          "text": "逻辑自洽的",
          "weight": -1
        },
        {
          "text": "听起来有道理的直觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更喜欢的讲述方式是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "按时间顺序讲清",
          "weight": 2
        },
        {
          "text": "把要点列出来",
          "weight": 1
        },
        {
          "text": "讲清前因后果",
          "weight": -1
        },
        {
          "text": "留下想象空间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "什么最容易说服你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "亲手试过",
          "weight": 2
        },
        {
          "text": "看到别人做成",
          "weight": 1
        },
        {
          "text": "逻辑说得通",
          "weight": -1
        },
        {
          "text": "心里觉得对",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意把一件复杂的事：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "拆成具体步骤",
          "weight": 2
        },
        {
          "text": "分解成清单",
          "weight": 1
        },
        {
          "text": "画成结构图",
          "weight": -1
        },
        {
          "text": "先想它的本质",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更怕哪种评价：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "不切实际",
          "weight": 2
        },
        {
          "text": "只会空想",
          "weight": 1
        },
        {
          "text": "太死板",
          "weight": -1
        },
        {
          "text": "想得太多",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "如果只能选一种能力，你更想要：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把事做成的执行力",
          "weight": 2
        },
        {
          "text": "扎实的专业能力",
          "weight": 1
        },
        {
          "text": "看清趋势的判断力",
          "weight": -1
        },
        {
          "text": "想到别人想不到的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友向你抱怨同事，你更常：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他分析问题出在哪、该怎么解决",
          "weight": 2
        },
        {
          "text": "指出他哪里可以做得更好",
          "weight": 1
        },
        {
          "text": "先安慰他，让他好受一点",
          "weight": -1
        },
        {
          "text": "先站他这边，情绪最重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做决定时你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "事实和逻辑是否成立",
          "weight": 2
        },
        {
          "text": "哪种做法更有效",
          "weight": 1
        },
        {
          "text": "会不会影响彼此关系",
          "weight": -1
        },
        {
          "text": "大家心里舒不舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队里有人拖了后腿，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接指出问题，把标准谈清楚",
          "weight": 2
        },
        {
          "text": "私下找他，说清要求",
          "weight": 1
        },
        {
          "text": "先了解他遇到了什么困难",
          "weight": -1
        },
        {
          "text": "尽量包容，不想让他难堪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人指出你的错误，你更在意：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "他说得对不对",
          "weight": 2
        },
        {
          "text": "问题本身该怎么改",
          "weight": 1
        },
        {
          "text": "他的语气让我不太舒服",
          "weight": -1
        },
        {
          "text": "他是不是对我有意见",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "评价一个方案时，你先看：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "数据和逻辑是否站得住",
          "weight": 2
        },
        {
          "text": "能不能真正解决问题",
          "weight": 1
        },
        {
          "text": "大家接不接受",
          "weight": -1
        },
        {
          "text": "会不会伤到某些人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更难接受：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不讲道理、只讲人情",
          "weight": 2
        },
        {
          "text": "效率低、来回扯皮",
          "weight": 1
        },
        {
          "text": "太冷冰冰、不讲情面",
          "weight": -1
        },
        {
          "text": "只看结果、不顾感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友做了一个你觉得不明智的决定，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接说清利弊，哪怕他不高兴",
          "weight": 2
        },
        {
          "text": "把风险讲明白，让他自己判断",
          "weight": 1
        },
        {
          "text": "先说理解他，再委婉提一句",
          "weight": -1
        },
        {
          "text": "支持他，那是他自己的选择",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "争论时你更在意：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "谁的道理站得住",
          "weight": 2
        },
        {
          "text": "问题能不能说清楚",
          "weight": 1
        },
        {
          "text": "气氛会不会僵掉",
          "weight": -1
        },
        {
          "text": "关系会不会受伤",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更容易被什么说服：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "清晰的逻辑和数据",
          "weight": 2
        },
        {
          "text": "有力的证据",
          "weight": 1
        },
        {
          "text": "真诚的态度",
          "weight": -1
        },
        {
          "text": "打动我的故事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "分配任务时你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "谁最合适、谁效率最高",
          "weight": 2
        },
        {
          "text": "能力和任务是否匹配",
          "weight": 1
        },
        {
          "text": "大家愿不愿意接",
          "weight": -1
        },
        {
          "text": "会不会有人觉得委屈",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "有人当众反驳你，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "就事论事，把观点辩清楚",
          "weight": 2
        },
        {
          "text": "先听完，再讲自己的理由",
          "weight": 1
        },
        {
          "text": "有点难受，但会压住",
          "weight": -1
        },
        {
          "text": "很受伤，之后很难释怀",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意被别人评价为：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "公正、理性",
          "weight": 2
        },
        {
          "text": "靠谱、讲道理",
          "weight": 1
        },
        {
          "text": "温和、好相处",
          "weight": -1
        },
        {
          "text": "体贴、有温度",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "当规则和人情冲突时，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "按规则来，谁也不例外",
          "weight": 2
        },
        {
          "text": "原则上按规则，特殊情况说明",
          "weight": 1
        },
        {
          "text": "看情况，能通融就通融",
          "weight": -1
        },
        {
          "text": "人情更重要，规则可以商量",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友失恋了，你的第一句话更可能是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先问清楚到底发生了什么",
          "weight": 2
        },
        {
          "text": "帮他分析这段关系的问题",
          "weight": 1
        },
        {
          "text": "先陪着他，什么都不说",
          "weight": -1
        },
        {
          "text": "抱一下，告诉他我在",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更受不了同事：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "做事不讲逻辑",
          "weight": 2
        },
        {
          "text": "专业能力不行",
          "weight": 1
        },
        {
          "text": "态度冷漠、不合群",
          "weight": -1
        },
        {
          "text": "说话伤人、不顾别人感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "谈合作时你更关注：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "条款是否清晰、权责是否对等",
          "weight": 2
        },
        {
          "text": "利益怎么分",
          "weight": 1
        },
        {
          "text": "对方是否好沟通",
          "weight": -1
        },
        {
          "text": "彼此是否信任、合得来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人情绪激动地来找你，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先让他把事情讲清楚",
          "weight": 2
        },
        {
          "text": "先弄清问题出在哪",
          "weight": 1
        },
        {
          "text": "先安抚情绪，再谈事",
          "weight": -1
        },
        {
          "text": "先陪着，事以后再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更拿手的是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "找出问题、给出方案",
          "weight": 2
        },
        {
          "text": "把事情理清楚",
          "weight": 1
        },
        {
          "text": "照顾到每个人的感受",
          "weight": -1
        },
        {
          "text": "让别人觉得被理解",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队意见分歧时，你更倾向：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "用标准评判哪个更合理",
          "weight": 2
        },
        {
          "text": "看哪个更能解决问题",
          "weight": 1
        },
        {
          "text": "找个大家都能接受的折中",
          "weight": -1
        },
        {
          "text": "先保住团队和气",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更难做到：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "说一些不真实的客气话",
          "weight": 2
        },
        {
          "text": "为了气氛说违心的话",
          "weight": 1
        },
        {
          "text": "对别人冷着脸",
          "weight": -1
        },
        {
          "text": "完全不管别人怎么想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对批评，你更希望对方：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接说问题，不用绕",
          "weight": 2
        },
        {
          "text": "讲清楚具体哪里不对",
          "weight": 1
        },
        {
          "text": "语气温和一点",
          "weight": -1
        },
        {
          "text": "先肯定我，再说问题",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "下面哪种说法更贴近你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "对事不对人",
          "weight": 2
        },
        {
          "text": "先把事情做对",
          "weight": 1
        },
        {
          "text": "先照顾人的感受",
          "weight": -1
        },
        {
          "text": "人和人之间的关系最重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友借钱一直不还，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接提，把账算清楚",
          "weight": 2
        },
        {
          "text": "明确提醒他一次",
          "weight": 1
        },
        {
          "text": "委婉提一下，怕伤感情",
          "weight": -1
        },
        {
          "text": "算了，不想为钱伤和气",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更看重一个人的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "能力和判断力",
          "weight": 2
        },
        {
          "text": "是否靠谱",
          "weight": 1
        },
        {
          "text": "是否善良",
          "weight": -1
        },
        {
          "text": "是否让人相处起来舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "工作中，你更容易因为什么生气：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "有人不讲逻辑、胡搅蛮缠",
          "weight": 2
        },
        {
          "text": "流程混乱、效率低",
          "weight": 1
        },
        {
          "text": "有人态度冷硬",
          "weight": -1
        },
        {
          "text": "有人被不公平对待",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "安慰别人时，你更常：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他理清问题、给出建议",
          "weight": 2
        },
        {
          "text": "告诉他下一步可以怎么做",
          "weight": 1
        },
        {
          "text": "听他说，适时回应",
          "weight": -1
        },
        {
          "text": "什么都不说，陪着就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意做哪种领导：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "标准清晰、赏罚分明",
          "weight": 2
        },
        {
          "text": "目标明确、要求严格",
          "weight": 1
        },
        {
          "text": "关心下属、气氛融洽",
          "weight": -1
        },
        {
          "text": "把每个人都照顾好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看到不公平的事，你第一反应是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先判断规则和事实是什么",
          "weight": 2
        },
        {
          "text": "先弄清谁对谁错",
          "weight": 1
        },
        {
          "text": "先想当事人的感受",
          "weight": -1
        },
        {
          "text": "先心疼那个受苦的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更怕被人说：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不专业",
          "weight": 2
        },
        {
          "text": "不讲道理",
          "weight": 1
        },
        {
          "text": "太冷漠",
          "weight": -1
        },
        {
          "text": "没有人情味",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "一场讨论跑偏了，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接把它拉回主题",
          "weight": 2
        },
        {
          "text": "提醒大家回到问题",
          "weight": 1
        },
        {
          "text": "等气氛缓一缓再说",
          "weight": -1
        },
        {
          "text": "不想扫大家的兴",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更相信：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "好的决策来自理性分析",
          "weight": 2
        },
        {
          "text": "充分的信息和判断",
          "weight": 1
        },
        {
          "text": "好的决策要照顾人心",
          "weight": -1
        },
        {
          "text": "跟着心走不会错",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人求你帮忙，你最可能：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先看这件事是否合理",
          "weight": 2
        },
        {
          "text": "看自己能不能做到",
          "weight": 1
        },
        {
          "text": "只要不太麻烦就答应",
          "weight": -1
        },
        {
          "text": "很难拒绝，哪怕为难自己",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对分手或离开，你更：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先分析这段关系为什么不合适",
          "weight": 2
        },
        {
          "text": "尽快把事情处理清楚",
          "weight": 1
        },
        {
          "text": "需要很久才能消化情绪",
          "weight": -1
        },
        {
          "text": "很长时间都走不出来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更喜欢的说话方式：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接、准确、不绕弯",
          "weight": 2
        },
        {
          "text": "把重点说清楚",
          "weight": 1
        },
        {
          "text": "委婉一点，别让人难堪",
          "weight": -1
        },
        {
          "text": "先顾着对方的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队里有人被批评，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先看批评是否成立",
          "weight": 2
        },
        {
          "text": "看问题是不是真的存在",
          "weight": 1
        },
        {
          "text": "会替他难受",
          "weight": -1
        },
        {
          "text": "会想办法护着他",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更希望别人怎么对你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "有话直说",
          "weight": 2
        },
        {
          "text": "讲事实、讲道理",
          "weight": 1
        },
        {
          "text": "说话顾及我的感受",
          "weight": -1
        },
        {
          "text": "多体谅我一点",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更看重一段关系里的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "彼此是否讲道理",
          "weight": 2
        },
        {
          "text": "能不能把事情说清",
          "weight": 1
        },
        {
          "text": "是否互相体谅",
          "weight": -1
        },
        {
          "text": "是否有情感上的支持",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做重要决定时，你会：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "列出利弊、逐条打分",
          "weight": 2
        },
        {
          "text": "把关键因素想清楚",
          "weight": 1
        },
        {
          "text": "先问问身边人的意见",
          "weight": -1
        },
        {
          "text": "跟着心里的感觉走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "同事请你帮忙做私事，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会直接说明不太合适",
          "weight": 2
        },
        {
          "text": "看情况，不影响工作才帮",
          "weight": 1
        },
        {
          "text": "不太好意思拒绝",
          "weight": -1
        },
        {
          "text": "基本都会答应",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更不擅长：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "说软话、哄人",
          "weight": 2
        },
        {
          "text": "处理情绪化的场面",
          "weight": 1
        },
        {
          "text": "板起脸来讲原则",
          "weight": -1
        },
        {
          "text": "对别人说“不”",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个失败的项目，你更关注：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "哪里出了问题、怎么避免",
          "weight": 2
        },
        {
          "text": "流程上哪里可以改进",
          "weight": 1
        },
        {
          "text": "大家是不是很受打击",
          "weight": -1
        },
        {
          "text": "怎么让大家重新振作",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意相信哪一句：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "对的事就该坚持",
          "weight": 2
        },
        {
          "text": "把事做对最重要",
          "weight": 1
        },
        {
          "text": "方式比内容更重要",
          "weight": -1
        },
        {
          "text": "人心比道理更重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "有人跟你意见不同，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "挺高兴，正好把问题辩清楚",
          "weight": 2
        },
        {
          "text": "能把差异讲明白就好",
          "weight": 1
        },
        {
          "text": "会先想是不是自己太强硬",
          "weight": -1
        },
        {
          "text": "会担心影响彼此关系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更在意自己是否：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "判断正确",
          "weight": 2
        },
        {
          "text": "做事有效",
          "weight": 1
        },
        {
          "text": "待人友善",
          "weight": -1
        },
        {
          "text": "让人感到温暖",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "选择礼物时你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "实用、对方真的需要",
          "weight": 2
        },
        {
          "text": "性价比和质量",
          "weight": 1
        },
        {
          "text": "对方会不会喜欢",
          "weight": -1
        },
        {
          "text": "能不能让他感动",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更难忍受：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "明显的逻辑错误",
          "weight": 2
        },
        {
          "text": "低效的争论",
          "weight": 1
        },
        {
          "text": "冷场和尴尬",
          "weight": -1
        },
        {
          "text": "有人被孤立",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友告诉你一个秘密，你会：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "按约定办，该说清楚的先说清",
          "weight": 2
        },
        {
          "text": "守住承诺，不额外扩散",
          "weight": 1
        },
        {
          "text": "会很小心，怕影响别人",
          "weight": -1
        },
        {
          "text": "绝不让他因为这件事受伤",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更希望自己在别人眼里是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "清醒、有判断",
          "weight": 2
        },
        {
          "text": "可靠、讲道理",
          "weight": 1
        },
        {
          "text": "温暖、好接近",
          "weight": -1
        },
        {
          "text": "懂得体谅人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "争论到最后，你更在意：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "结论对不对",
          "weight": 2
        },
        {
          "text": "问题有没有解决",
          "weight": 1
        },
        {
          "text": "大家还愿不愿意继续聊",
          "weight": -1
        },
        {
          "text": "关系有没有变差",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "如果只能在两者中选一个：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "真相，哪怕伤人",
          "weight": 2
        },
        {
          "text": "事实，说清楚就好",
          "weight": 1
        },
        {
          "text": "和气，不必太尖锐",
          "weight": -1
        },
        {
          "text": "善意，哪怕不全是真话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友跟你吐槽老板，你更先说：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "他哪里做得不对",
          "weight": 2
        },
        {
          "text": "这事该怎么处理",
          "weight": 1
        },
        {
          "text": "你听着就难受吧",
          "weight": -1
        },
        {
          "text": "别往心里去，我陪你",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更看重同事的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "专业能力",
          "weight": 2
        },
        {
          "text": "责任心",
          "weight": 1
        },
        {
          "text": "待人是否和气",
          "weight": -1
        },
        {
          "text": "是否有同理心",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "讨论方案时，你更常：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "指出漏洞",
          "weight": 2
        },
        {
          "text": "比较哪个更有效",
          "weight": 1
        },
        {
          "text": "问大家能不能接受",
          "weight": -1
        },
        {
          "text": "先照顾提出者的情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意听哪种批评：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接点出问题",
          "weight": 2
        },
        {
          "text": "说明具体哪里错",
          "weight": 1
        },
        {
          "text": "说得温和一点",
          "weight": -1
        },
        {
          "text": "先肯定再提",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人请你评价他的作品，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "说实话，指出问题",
          "weight": 2
        },
        {
          "text": "讲清哪里可以改",
          "weight": 1
        },
        {
          "text": "先说好的地方",
          "weight": -1
        },
        {
          "text": "尽量多鼓励",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更受不了别人：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "逻辑混乱",
          "weight": 2
        },
        {
          "text": "做事没效率",
          "weight": 1
        },
        {
          "text": "说话不留情面",
          "weight": -1
        },
        {
          "text": "完全不体谅人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做错了事，你更先想：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "哪里出了错",
          "weight": 2
        },
        {
          "text": "怎么补救",
          "weight": 1
        },
        {
          "text": "会不会影响别人",
          "weight": -1
        },
        {
          "text": "别人会怎么看我",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更容易被哪种理由打动：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "数据显示有效",
          "weight": 2
        },
        {
          "text": "成本更低",
          "weight": 1
        },
        {
          "text": "大家都能接受",
          "weight": -1
        },
        {
          "text": "确实有人需要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意当哪种家长：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "立规矩、讲原则",
          "weight": 2
        },
        {
          "text": "要求明确、说到做到",
          "weight": 1
        },
        {
          "text": "多沟通、多理解",
          "weight": -1
        },
        {
          "text": "尽量顺着孩子",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队要淘汰一个人，你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "数据和绩效",
          "weight": 2
        },
        {
          "text": "是否胜任",
          "weight": 1
        },
        {
          "text": "他的处境",
          "weight": -1
        },
        {
          "text": "大家的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人跟你道歉，你更在意：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "他是否真认识到问题",
          "weight": 2
        },
        {
          "text": "他会不会再犯",
          "weight": 1
        },
        {
          "text": "他的态度诚不诚恳",
          "weight": -1
        },
        {
          "text": "他是不是真的难过",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "同事更常说你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "想得清楚",
          "weight": 2
        },
        {
          "text": "办事靠谱",
          "weight": 1
        },
        {
          "text": "说话温和",
          "weight": -1
        },
        {
          "text": "很会照顾人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "遇到两难选择，你更常：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "列出利弊",
          "weight": 2
        },
        {
          "text": "分清主次",
          "weight": 1
        },
        {
          "text": "问问身边人",
          "weight": -1
        },
        {
          "text": "听内心的声音",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更不喜欢哪种氛围：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "吵架、讲不通",
          "weight": 2
        },
        {
          "text": "低效、反复",
          "weight": 1
        },
        {
          "text": "冷冰冰、没人情味",
          "weight": -1
        },
        {
          "text": "面和心不和",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人夸你“很理性”，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "挺受用",
          "weight": 2
        },
        {
          "text": "觉得是实话",
          "weight": 1
        },
        {
          "text": "希望也能被说温暖",
          "weight": -1
        },
        {
          "text": "更想被说贴心",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友做了让你不舒服的事，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接说清楚",
          "weight": 2
        },
        {
          "text": "找机会讲明白",
          "weight": 1
        },
        {
          "text": "先忍一下",
          "weight": -1
        },
        {
          "text": "不想破坏关系，就算了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更看重一场谈判的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "条件是否公平",
          "weight": 2
        },
        {
          "text": "结果是否有利",
          "weight": 1
        },
        {
          "text": "过程顺不顺",
          "weight": -1
        },
        {
          "text": "双方是否都舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更怕自己变成：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "糊涂、不讲逻辑的人",
          "weight": 2
        },
        {
          "text": "低效、拖沓的人",
          "weight": 1
        },
        {
          "text": "冷漠、不近人情的人",
          "weight": -1
        },
        {
          "text": "自私、不顾别人的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更认同哪种说法：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "理性胜过情绪",
          "weight": 2
        },
        {
          "text": "数据胜过感觉",
          "weight": 1
        },
        {
          "text": "人情也很重要",
          "weight": -1
        },
        {
          "text": "感受才是真的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "安慰一个失败的朋友，你更常：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他复盘原因",
          "weight": 2
        },
        {
          "text": "告诉他下一步怎么做",
          "weight": 1
        },
        {
          "text": "陪他把情绪说出来",
          "weight": -1
        },
        {
          "text": "什么都不说，抱着他",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "分配奖金时，你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "贡献多少",
          "weight": 2
        },
        {
          "text": "绩效排名",
          "weight": 1
        },
        {
          "text": "谁更需要",
          "weight": -1
        },
        {
          "text": "团队和气",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更容易记住一个人的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "观点是否有道理",
          "weight": 2
        },
        {
          "text": "做事是否靠谱",
          "weight": 1
        },
        {
          "text": "待人是否周到",
          "weight": -1
        },
        {
          "text": "是否让人舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "有人在你面前哭，你第一反应是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "发生什么了",
          "weight": 2
        },
        {
          "text": "需要我做什么",
          "weight": 1
        },
        {
          "text": "先安抚他",
          "weight": -1
        },
        {
          "text": "心里也跟着难受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意选择哪种伴侣：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "讲道理、能沟通",
          "weight": 2
        },
        {
          "text": "靠谱、有担当",
          "weight": 1
        },
        {
          "text": "体贴、会照顾人",
          "weight": -1
        },
        {
          "text": "懂我、接得住情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更不喜欢听：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "没逻辑的抱怨",
          "weight": 2
        },
        {
          "text": "没有依据的结论",
          "weight": 1
        },
        {
          "text": "冷漠的评判",
          "weight": -1
        },
        {
          "text": "伤人的玩笑",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队有人提出一个不成熟的方案，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接说问题在哪",
          "weight": 2
        },
        {
          "text": "给出更可行的做法",
          "weight": 1
        },
        {
          "text": "先肯定他的用心",
          "weight": -1
        },
        {
          "text": "私下提醒他",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更欣赏一个人的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "判断力",
          "weight": 2
        },
        {
          "text": "执行力",
          "weight": 1
        },
        {
          "text": "善意",
          "weight": -1
        },
        {
          "text": "共情力",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意在哪种团队里工作：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "标准清楚、赏罚分明",
          "weight": 2
        },
        {
          "text": "目标明确、效率高",
          "weight": 1
        },
        {
          "text": "互相支持、气氛好",
          "weight": -1
        },
        {
          "text": "彼此照顾、有温度",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更在意自己说的话：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是否准确",
          "weight": 2
        },
        {
          "text": "是否有用",
          "weight": 1
        },
        {
          "text": "是否得体",
          "weight": -1
        },
        {
          "text": "是否伤人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个哭闹的小孩，你更先：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "弄清他想干什么",
          "weight": 2
        },
        {
          "text": "想办法解决问题",
          "weight": 1
        },
        {
          "text": "哄他、安抚他",
          "weight": -1
        },
        {
          "text": "先抱起来再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更不喜欢哪种领导：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "讲不清道理",
          "weight": 2
        },
        {
          "text": "决策反复",
          "weight": 1
        },
        {
          "text": "对人冷漠",
          "weight": -1
        },
        {
          "text": "不顾下属感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意相信哪种承诺：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "写进合同的",
          "weight": 2
        },
        {
          "text": "有明确时间表的",
          "weight": 1
        },
        {
          "text": "说得真诚的",
          "weight": -1
        },
        {
          "text": "让我觉得安心的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意听哪种建议：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接指出问题",
          "weight": 2
        },
        {
          "text": "给出具体做法",
          "weight": 1
        },
        {
          "text": "先问我怎么想",
          "weight": -1
        },
        {
          "text": "先共情再建议",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人做了让你感动的事，你会：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "记住这件事",
          "weight": 2
        },
        {
          "text": "想着怎么回报",
          "weight": 1
        },
        {
          "text": "当面说出来",
          "weight": -1
        },
        {
          "text": "心里暖很久",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意怎样处理冲突：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "摆事实讲道理",
          "weight": 2
        },
        {
          "text": "把问题说清楚",
          "weight": 1
        },
        {
          "text": "找个双方都接受的办法",
          "weight": -1
        },
        {
          "text": "先安抚情绪再谈",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更在意的失误是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "判断错了",
          "weight": 2
        },
        {
          "text": "做事出了偏差",
          "weight": 1
        },
        {
          "text": "让人难堪了",
          "weight": -1
        },
        {
          "text": "伤了谁的心",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你希望领导怎么看你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "判断力强",
          "weight": 2
        },
        {
          "text": "执行力强",
          "weight": 1
        },
        {
          "text": "好相处",
          "weight": -1
        },
        {
          "text": "有温度",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友征求你对感情的建议，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析这段关系合不合适",
          "weight": 2
        },
        {
          "text": "讲清利弊",
          "weight": 1
        },
        {
          "text": "先问他自己的感受",
          "weight": -1
        },
        {
          "text": "支持他怎么选都行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更受不了哪种场面：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "有人睁眼说瞎话",
          "weight": 2
        },
        {
          "text": "一群人低效扯皮",
          "weight": 1
        },
        {
          "text": "气氛冷到冰点",
          "weight": -1
        },
        {
          "text": "有人被当众难堪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你做决定时更依赖：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析和推演",
          "weight": 2
        },
        {
          "text": "经验和事实",
          "weight": 1
        },
        {
          "text": "别人的意见",
          "weight": -1
        },
        {
          "text": "自己的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意相信哪种人：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "说到做到的",
          "weight": 2
        },
        {
          "text": "讲道理的",
          "weight": 1
        },
        {
          "text": "对人和气的",
          "weight": -1
        },
        {
          "text": "心里装着别人的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更不喜欢自己：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "感情用事",
          "weight": 2
        },
        {
          "text": "优柔寡断",
          "weight": 1
        },
        {
          "text": "太不讲情面",
          "weight": -1
        },
        {
          "text": "太冷硬",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "开会时有人跑题，你更可能：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接打断",
          "weight": 2
        },
        {
          "text": "提醒回到主题",
          "weight": 1
        },
        {
          "text": "等他说完",
          "weight": -1
        },
        {
          "text": "担心他尴尬",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更看重一段合作里的：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分工是否清楚",
          "weight": 2
        },
        {
          "text": "效率高不高",
          "weight": 1
        },
        {
          "text": "沟通顺不顺",
          "weight": -1
        },
        {
          "text": "彼此是否信任",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意收到的礼物是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "实用的",
          "weight": 2
        },
        {
          "text": "有品质的",
          "weight": 1
        },
        {
          "text": "我喜欢的",
          "weight": -1
        },
        {
          "text": "有心意的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人对你提出要求，你更常：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先判断合不合理",
          "weight": 2
        },
        {
          "text": "看能不能做到",
          "weight": 1
        },
        {
          "text": "不太好意思拒绝",
          "weight": -1
        },
        {
          "text": "几乎都会答应",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友之间 AA 制，你怎么看：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "该算清楚",
          "weight": 2
        },
        {
          "text": "谁方便谁先付",
          "weight": 1
        },
        {
          "text": "轮流请",
          "weight": -1
        },
        {
          "text": "不用算太细",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更擅长的角色是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "出主意、做判断",
          "weight": 2
        },
        {
          "text": "把事推进",
          "weight": 1
        },
        {
          "text": "协调关系",
          "weight": -1
        },
        {
          "text": "照顾大家的情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友做了对不起你的事，你更：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先把事情说清",
          "weight": 2
        },
        {
          "text": "看他还想不想处",
          "weight": 1
        },
        {
          "text": "会难过很久",
          "weight": -1
        },
        {
          "text": "舍不得翻脸",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "如果只能选一个，你更愿意被记住为：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "公正的人",
          "weight": 2
        },
        {
          "text": "有能力的人",
          "weight": 1
        },
        {
          "text": "善良的人",
          "weight": -1
        },
        {
          "text": "温柔的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出门旅行之前，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "行程、住宿、路线全部提前定好",
          "weight": 2
        },
        {
          "text": "主要安排先定下来，其他随机",
          "weight": 1
        },
        {
          "text": "定个大概，其余到了再说",
          "weight": -1
        },
        {
          "text": "什么都不定，走到哪算哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的待办事项通常是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "写成清单，按优先级逐条划掉",
          "weight": 2
        },
        {
          "text": "记下来，尽量按计划完成",
          "weight": 1
        },
        {
          "text": "心里有数，想起来再做",
          "weight": -1
        },
        {
          "text": "基本不列，做到哪算哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对截止日期，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前几天完成，绝不留到最后",
          "weight": 2
        },
        {
          "text": "按计划推进，留出余量",
          "weight": 1
        },
        {
          "text": "临近了才开始加速",
          "weight": -1
        },
        {
          "text": "最后一晚才真正开始",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的房间通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "东西都有固定位置",
          "weight": 2
        },
        {
          "text": "基本整齐，偶尔有点乱",
          "weight": 1
        },
        {
          "text": "看起来乱，但我知道东西在哪",
          "weight": -1
        },
        {
          "text": "乱着也挺好，找得到就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "原定计划临时被改，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很不舒服，希望按原计划来",
          "weight": 2
        },
        {
          "text": "能接受，但需要重新安排",
          "weight": 1
        },
        {
          "text": "没关系，随机应变",
          "weight": -1
        },
        {
          "text": "挺喜欢，变化才有意思",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做决定时你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "尽快定下来，定了就不再纠结",
          "weight": 2
        },
        {
          "text": "想清楚就定",
          "weight": 1
        },
        {
          "text": "多留几天，看看有没有更好的",
          "weight": -1
        },
        {
          "text": "能拖就拖，说不定会有新选项",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的任务是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "目标明确、步骤清楚的",
          "weight": 2
        },
        {
          "text": "有清晰交付标准的",
          "weight": 1
        },
        {
          "text": "空间大、可以自己发挥的",
          "weight": -1
        },
        {
          "text": "边做边发现的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "购物时你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "列好清单，买完就走",
          "weight": 2
        },
        {
          "text": "想好买什么再去",
          "weight": 1
        },
        {
          "text": "逛逛看有什么合适的",
          "weight": -1
        },
        {
          "text": "看到喜欢的就买",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的工作日通常是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按固定节奏推进",
          "weight": 2
        },
        {
          "text": "有安排，偶尔调整",
          "weight": 1
        },
        {
          "text": "看当天状态决定",
          "weight": -1
        },
        {
          "text": "基本随机",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人临时约你，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "希望提前说，临时很难安排",
          "weight": 2
        },
        {
          "text": "先看当天有没有安排",
          "weight": 1
        },
        {
          "text": "大多能去",
          "weight": -1
        },
        {
          "text": "随时可以，反正也没计划",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你最受不了哪种安排：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "事情拖着不定",
          "weight": 2
        },
        {
          "text": "计划反复改",
          "weight": 1
        },
        {
          "text": "被安排得太死",
          "weight": -1
        },
        {
          "text": "一点自由都没有",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对没做完的事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "心里一直挂着，必须做完",
          "weight": 2
        },
        {
          "text": "会尽快收尾",
          "weight": 1
        },
        {
          "text": "放一放也没关系",
          "weight": -1
        },
        {
          "text": "经常开了头就放着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的手机桌面是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "分类整齐，常用应用放固定位置",
          "weight": 2
        },
        {
          "text": "大致有序",
          "weight": 1
        },
        {
          "text": "有点乱，但找得到",
          "weight": -1
        },
        {
          "text": "几百个图标，全靠搜索",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "开会时你更希望：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有议程、按时结束、有结论",
          "weight": 2
        },
        {
          "text": "把该定的事定下来",
          "weight": 1
        },
        {
          "text": "自由讨论，别太拘束",
          "weight": -1
        },
        {
          "text": "想到哪聊到哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "搬家时你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前列清单、分箱打包并标注",
          "weight": 2
        },
        {
          "text": "提前几天开始收拾",
          "weight": 1
        },
        {
          "text": "最后一天集中打包",
          "weight": -1
        },
        {
          "text": "搬到哪算哪，缺什么再买",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢哪种相处方式：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "约好的事就按时做到",
          "weight": 2
        },
        {
          "text": "大致守时、说话算数",
          "weight": 1
        },
        {
          "text": "随性一点，不必太较真",
          "weight": -1
        },
        {
          "text": "别定太死，随时可以变",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对多个选项，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "比较后立刻选一个",
          "weight": 2
        },
        {
          "text": "想清楚就定",
          "weight": 1
        },
        {
          "text": "先选一个试试，不行再换",
          "weight": -1
        },
        {
          "text": "都想要，干脆先不选",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个大目标，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "把它拆成每天的具体任务",
          "weight": 2
        },
        {
          "text": "先定几个阶段目标",
          "weight": 1
        },
        {
          "text": "有个方向就行",
          "weight": -1
        },
        {
          "text": "不定目标，走一步看一步",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一份要交出去的文件，你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "反复检查格式和错字",
          "weight": 2
        },
        {
          "text": "检查一遍再交",
          "weight": 1
        },
        {
          "text": "差不多就发",
          "weight": -1
        },
        {
          "text": "先发了，有问题再改",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "记账这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "每笔都记，月底对账",
          "weight": 2
        },
        {
          "text": "大概记一下收支",
          "weight": 1
        },
        {
          "text": "心里有数就行",
          "weight": -1
        },
        {
          "text": "从不记，花完再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "事情没按计划走，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很烦躁，想立刻拉回正轨",
          "weight": 2
        },
        {
          "text": "有点不爽，重新调整",
          "weight": 1
        },
        {
          "text": "改就改，问题不大",
          "weight": -1
        },
        {
          "text": "本来也没指望按计划",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的工作节奏是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "一件事做完再做下一件",
          "weight": 2
        },
        {
          "text": "按顺序推进",
          "weight": 1
        },
        {
          "text": "几件事交替着做",
          "weight": -1
        },
        {
          "text": "同时开很多头",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出门赴约时，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前十分钟到",
          "weight": 2
        },
        {
          "text": "算好时间，基本不迟到",
          "weight": 1
        },
        {
          "text": "常常卡点到",
          "weight": -1
        },
        {
          "text": "经常迟到，也不太在意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "朋友问你周末干嘛，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "早就安排好了",
          "weight": 2
        },
        {
          "text": "大概有个安排",
          "weight": 1
        },
        {
          "text": "还没想好",
          "weight": -1
        },
        {
          "text": "到时候再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更看重哪种状态：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "把事情收尾、画上句号",
          "weight": 2
        },
        {
          "text": "按计划完成一件事",
          "weight": 1
        },
        {
          "text": "事情进行中的状态",
          "weight": -1
        },
        {
          "text": "留着开放的可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对规则，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按规则来，秩序最重要",
          "weight": 2
        },
        {
          "text": "该遵守的就遵守",
          "weight": 1
        },
        {
          "text": "能变通就变通",
          "weight": -1
        },
        {
          "text": "规则是给人用的，不必死守",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的电脑文件是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "文件夹分层清楚，命名统一",
          "weight": 2
        },
        {
          "text": "大致分好类",
          "weight": 1
        },
        {
          "text": "都堆在桌面，靠搜索",
          "weight": -1
        },
        {
          "text": "从不整理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一件事有两种做法，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "尽快选一个，别浪费时间",
          "weight": 2
        },
        {
          "text": "比较后选更稳的",
          "weight": 1
        },
        {
          "text": "先试试看，边做边调整",
          "weight": -1
        },
        {
          "text": "都留着，看情况",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "哪些情况会让你不安：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "事情失控、没有安排",
          "weight": 2
        },
        {
          "text": "计划被打乱",
          "weight": 1
        },
        {
          "text": "被框死、没有余地",
          "weight": -1
        },
        {
          "text": "被迫现在就做决定",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "长假你更愿意：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前订好行程和住宿",
          "weight": 2
        },
        {
          "text": "定好大方向",
          "weight": 1
        },
        {
          "text": "看心情决定去哪",
          "weight": -1
        },
        {
          "text": "在家待着，随时改变主意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "关于计划，你更认同：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先定目标，再谈方法",
          "weight": 2
        },
        {
          "text": "有计划才不会乱",
          "weight": 1
        },
        {
          "text": "计划赶不上变化",
          "weight": -1
        },
        {
          "text": "先做起来，计划自然会清楚",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人的方案你觉得不够好，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "直接指出问题，给出更优解",
          "weight": 2
        },
        {
          "text": "提出具体的修改建议",
          "weight": 1
        },
        {
          "text": "先按他的做做看",
          "weight": -1
        },
        {
          "text": "都行，不必较真",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的项目状态是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "进度清晰、节点可控",
          "weight": 2
        },
        {
          "text": "有明确的里程碑",
          "weight": 1
        },
        {
          "text": "有弹性、可调整",
          "weight": -1
        },
        {
          "text": "完全开放、随时会变",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你怎么处理未读消息：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "看完就回，不留未读",
          "weight": 2
        },
        {
          "text": "尽量当天清掉",
          "weight": 1
        },
        {
          "text": "攒着，有空一起回",
          "weight": -1
        },
        {
          "text": "红点几百个也无所谓",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你对“选择”的态度是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "选了就不后悔",
          "weight": 2
        },
        {
          "text": "想清楚再选，选完放下",
          "weight": 1
        },
        {
          "text": "选了还会想另一个",
          "weight": -1
        },
        {
          "text": "能不选就不选",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意住在：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "布置规整、东西都归位的房子",
          "weight": 2
        },
        {
          "text": "干净整齐就好的房子",
          "weight": 1
        },
        {
          "text": "舒服最重要的房子，乱点没事",
          "weight": -1
        },
        {
          "text": "随性一点，不用太讲究",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个长期目标，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "拆成周计划，按表执行",
          "weight": 2
        },
        {
          "text": "定几个阶段检查点",
          "weight": 1
        },
        {
          "text": "记得目标，方法随时调整",
          "weight": -1
        },
        {
          "text": "走一步看一步",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "什么更容易让你焦虑：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "事情一直没定下来",
          "weight": 2
        },
        {
          "text": "进度落后",
          "weight": 1
        },
        {
          "text": "被安排得太满",
          "weight": -1
        },
        {
          "text": "没有退路和余地",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "旅行拍的照片，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "当天就分类整理好",
          "weight": 2
        },
        {
          "text": "回来尽快整理",
          "weight": 1
        },
        {
          "text": "攒着，有空再说",
          "weight": -1
        },
        {
          "text": "基本不整理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的对话是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有明确结论的",
          "weight": 2
        },
        {
          "text": "把事说清楚的",
          "weight": 1
        },
        {
          "text": "聊到哪算哪的",
          "weight": -1
        },
        {
          "text": "不需要结论、随便聊的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对“变化”的第一反应是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先想怎么把影响降到最小",
          "weight": 2
        },
        {
          "text": "先看需要改哪些安排",
          "weight": 1
        },
        {
          "text": "看看再说",
          "weight": -1
        },
        {
          "text": "挺好，正合我意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意别人这样描述你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有条理、靠得住",
          "weight": 2
        },
        {
          "text": "有计划、能交付",
          "weight": 1
        },
        {
          "text": "灵活、好相处",
          "weight": -1
        },
        {
          "text": "随性、自在",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做家务你通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "固定时间、按顺序做完",
          "weight": 2
        },
        {
          "text": "一次做完，不拖",
          "weight": 1
        },
        {
          "text": "想到了就做一点",
          "weight": -1
        },
        {
          "text": "实在看不下去了才做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更怕耽误：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "截止时间",
          "weight": 2
        },
        {
          "text": "答应别人的事",
          "weight": 1
        },
        {
          "text": "更好的选择",
          "weight": -1
        },
        {
          "text": "自由的可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一堆杂乱的信息，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先分类、建结构",
          "weight": 2
        },
        {
          "text": "先整理出要点",
          "weight": 1
        },
        {
          "text": "先大致看看",
          "weight": -1
        },
        {
          "text": "用到再找",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的日程是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "排满、清楚、有节奏",
          "weight": 2
        },
        {
          "text": "有几个固定安排",
          "weight": 1
        },
        {
          "text": "留出大块空白",
          "weight": -1
        },
        {
          "text": "基本空着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一件计划了很久的事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "时间一到就开始执行",
          "weight": 2
        },
        {
          "text": "按计划推进",
          "weight": 1
        },
        {
          "text": "看当时的状态",
          "weight": -1
        },
        {
          "text": "常常一拖再拖",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "关于“准备”，你更认同：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "凡事预则立",
          "weight": 2
        },
        {
          "text": "有准备才不慌",
          "weight": 1
        },
        {
          "text": "计划不如变化快",
          "weight": -1
        },
        {
          "text": "顺其自然最好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做完一件事，你更想：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "确认收尾、归档、彻底结束",
          "weight": 2
        },
        {
          "text": "检查一遍再画句号",
          "weight": 1
        },
        {
          "text": "先放着，说不定还要改",
          "weight": -1
        },
        {
          "text": "不想结束，留着继续",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "如果只能选一种状态：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "一切都在安排之中",
          "weight": 2
        },
        {
          "text": "大致有序、心里有数",
          "weight": 1
        },
        {
          "text": "有点乱，但很自由",
          "weight": -1
        },
        {
          "text": "完全随心，不做计划",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的钥匙和门卡通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "固定放在一处",
          "weight": 2
        },
        {
          "text": "在包里固定位置",
          "weight": 1
        },
        {
          "text": "随手一放",
          "weight": -1
        },
        {
          "text": "常常找不到",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出门前你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "确认带齐所有东西",
          "weight": 2
        },
        {
          "text": "大概检查一下",
          "weight": 1
        },
        {
          "text": "想到什么拿什么",
          "weight": -1
        },
        {
          "text": "到地方再买",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人问你明天做什么，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "马上能说出来",
          "weight": 2
        },
        {
          "text": "大致有安排",
          "weight": 1
        },
        {
          "text": "到时候再看",
          "weight": -1
        },
        {
          "text": "完全不知道",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对一项工作任务，你更希望：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有明确的截止时间",
          "weight": 2
        },
        {
          "text": "有清晰的交付标准",
          "weight": 1
        },
        {
          "text": "能自己安排节奏",
          "weight": -1
        },
        {
          "text": "随时可以改方向",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的包通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "东西分区放好",
          "weight": 2
        },
        {
          "text": "大致有点秩序",
          "weight": 1
        },
        {
          "text": "塞得乱但找得到",
          "weight": -1
        },
        {
          "text": "什么都往里扔",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个新计划，你更先：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "排好时间表",
          "weight": 2
        },
        {
          "text": "定出几个节点",
          "weight": 1
        },
        {
          "text": "想想要做什么",
          "weight": -1
        },
        {
          "text": "先干起来再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你最受不了别人怎样：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "总迟到",
          "weight": 2
        },
        {
          "text": "答应的事做不到",
          "weight": 1
        },
        {
          "text": "临时改计划",
          "weight": -1
        },
        {
          "text": "想一出是一出",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一件事结束，你更常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "立刻归档收尾",
          "weight": 2
        },
        {
          "text": "确认无误再结束",
          "weight": 1
        },
        {
          "text": "先放一放",
          "weight": -1
        },
        {
          "text": "很少真正收尾",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对临时加班，你的感受是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "打乱计划，很不爽",
          "weight": 2
        },
        {
          "text": "能接受，重新排一下",
          "weight": 1
        },
        {
          "text": "问题不大",
          "weight": -1
        },
        {
          "text": "无所谓，本来也没安排",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你会提前多久准备一次汇报：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "至少一周",
          "weight": 2
        },
        {
          "text": "提前几天",
          "weight": 1
        },
        {
          "text": "前一晚",
          "weight": -1
        },
        {
          "text": "临场发挥",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的购物车通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "加进去就尽快买",
          "weight": 2
        },
        {
          "text": "想清楚再下单",
          "weight": 1
        },
        {
          "text": "放很久才决定",
          "weight": -1
        },
        {
          "text": "越攒越多",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人打乱你的节奏，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很在意，想恢复原样",
          "weight": 2
        },
        {
          "text": "有点烦，会重新安排",
          "weight": 1
        },
        {
          "text": "调整一下就好",
          "weight": -1
        },
        {
          "text": "顺势就变了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎么处理证件和票据：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "分类收进文件夹",
          "weight": 2
        },
        {
          "text": "统一放一个地方",
          "weight": 1
        },
        {
          "text": "随手一放",
          "weight": -1
        },
        {
          "text": "用到再找",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个模糊的要求，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先问清楚再动手",
          "weight": 2
        },
        {
          "text": "自己列个方案确认",
          "weight": 1
        },
        {
          "text": "先做着看",
          "weight": -1
        },
        {
          "text": "边做边改",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的项目管理方式是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "节点清楚、进度可见",
          "weight": 2
        },
        {
          "text": "列个任务清单",
          "weight": 1
        },
        {
          "text": "记个大概进度",
          "weight": -1
        },
        {
          "text": "不太管理，差不多就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "换季时你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前把衣物整理好",
          "weight": 2
        },
        {
          "text": "有空就收拾",
          "weight": 1
        },
        {
          "text": "等冷了再说",
          "weight": -1
        },
        {
          "text": "从来不整理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "朋友临时改约，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点不爽，希望守约",
          "weight": 2
        },
        {
          "text": "可以，重新约时间",
          "weight": 1
        },
        {
          "text": "都行",
          "weight": -1
        },
        {
          "text": "正好，我也不想去了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你会把目标：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "写下来贴在眼前",
          "weight": 2
        },
        {
          "text": "记在备忘录",
          "weight": 1
        },
        {
          "text": "放在心里",
          "weight": -1
        },
        {
          "text": "不设目标",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人来你家，你更在意：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "家里是否整洁",
          "weight": 2
        },
        {
          "text": "东西是否归位",
          "weight": 1
        },
        {
          "text": "有没有地方坐",
          "weight": -1
        },
        {
          "text": "随便，能待就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的出行方式是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按时刻表走",
          "weight": 2
        },
        {
          "text": "查好路线再走",
          "weight": 1
        },
        {
          "text": "边走边看",
          "weight": -1
        },
        {
          "text": "随便上哪趟车",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "合同或协议你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "逐条看完再签",
          "weight": 2
        },
        {
          "text": "重点条款看清楚",
          "weight": 1
        },
        {
          "text": "大概扫一遍",
          "weight": -1
        },
        {
          "text": "别人看过就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你对重复的日常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "喜欢稳定，按部就班",
          "weight": 2
        },
        {
          "text": "有固定节奏就好",
          "weight": 1
        },
        {
          "text": "容易腻",
          "weight": -1
        },
        {
          "text": "受不了，总想变",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人交给你的事，你更常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "记下来按时间完成",
          "weight": 2
        },
        {
          "text": "尽快做完",
          "weight": 1
        },
        {
          "text": "有空再做",
          "weight": -1
        },
        {
          "text": "常常忘记",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎么规划收入：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "每月做好预算",
          "weight": 2
        },
        {
          "text": "大致分配一下",
          "weight": 1
        },
        {
          "text": "花剩下的再存",
          "weight": -1
        },
        {
          "text": "从来不算",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的约会方式是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前订好餐厅和时间",
          "weight": 2
        },
        {
          "text": "约好大致时间",
          "weight": 1
        },
        {
          "text": "碰头再说",
          "weight": -1
        },
        {
          "text": "随缘遇到",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的收件箱通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "当天清空收件箱",
          "weight": 2
        },
        {
          "text": "重要的先回",
          "weight": 1
        },
        {
          "text": "攒着一起看",
          "weight": -1
        },
        {
          "text": "从不清理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你对“随性”这件事：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "不太习惯，喜欢有谱",
          "weight": 2
        },
        {
          "text": "偶尔随性一下",
          "weight": 1
        },
        {
          "text": "挺喜欢",
          "weight": -1
        },
        {
          "text": "越随性越好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人做事慢吞吞，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很急，想催",
          "weight": 2
        },
        {
          "text": "会提醒一下",
          "weight": 1
        },
        {
          "text": "能等",
          "weight": -1
        },
        {
          "text": "不太在意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样安排一顿饭：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前想好菜单",
          "weight": 2
        },
        {
          "text": "大概想几个菜",
          "weight": 1
        },
        {
          "text": "打开冰箱看有什么",
          "weight": -1
        },
        {
          "text": "饿了再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "家里有东西坏了，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "马上找人修",
          "weight": 2
        },
        {
          "text": "记下来找时间修",
          "weight": 1
        },
        {
          "text": "先放着",
          "weight": -1
        },
        {
          "text": "一直拖着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人请你帮忙改方案，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先问清截止时间",
          "weight": 2
        },
        {
          "text": "排进自己的计划",
          "weight": 1
        },
        {
          "text": "有空就改",
          "weight": -1
        },
        {
          "text": "拖到最后一刻",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "账单到期这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "到期前就交",
          "weight": 2
        },
        {
          "text": "记着日子交",
          "weight": 1
        },
        {
          "text": "收到提醒才交",
          "weight": -1
        },
        {
          "text": "常常过期",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样学一门课：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按课程表一节不落",
          "weight": 2
        },
        {
          "text": "有计划地跟完",
          "weight": 1
        },
        {
          "text": "挑感兴趣的看",
          "weight": -1
        },
        {
          "text": "想起来才看",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更喜欢的合作方式是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "分工明确、各自交付",
          "weight": 2
        },
        {
          "text": "定好节点再推进",
          "weight": 1
        },
        {
          "text": "边做边分工",
          "weight": -1
        },
        {
          "text": "谁有空谁做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你对排队的忍耐度：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前预约，尽量不排",
          "weight": 2
        },
        {
          "text": "能接受，会规划",
          "weight": 1
        },
        {
          "text": "排就排",
          "weight": -1
        },
        {
          "text": "完全无所谓",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的浏览器标签页通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "开几个就关",
          "weight": 2
        },
        {
          "text": "控制在几个以内",
          "weight": 1
        },
        {
          "text": "开一堆",
          "weight": -1
        },
        {
          "text": "几十个也不关",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你对“提前量”的看法：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "越早越好",
          "weight": 2
        },
        {
          "text": "留出一点余量",
          "weight": 1
        },
        {
          "text": "卡点也没关系",
          "weight": -1
        },
        {
          "text": "越晚越有灵感",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样过一天假期：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前安排好活动",
          "weight": 2
        },
        {
          "text": "有几个想去的地方",
          "weight": 1
        },
        {
          "text": "临时决定",
          "weight": -1
        },
        {
          "text": "完全不动",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "答应别人的事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "答应就一定做到",
          "weight": 2
        },
        {
          "text": "尽量做到",
          "weight": 1
        },
        {
          "text": "看情况",
          "weight": -1
        },
        {
          "text": "不轻易答应",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你对“变通”的态度是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "尽量不变，按原方案",
          "weight": 2
        },
        {
          "text": "必要时才变",
          "weight": 1
        },
        {
          "text": "随时可以变",
          "weight": -1
        },
        {
          "text": "变了更好玩",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样开始一件难事：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先拆成小步骤",
          "weight": 2
        },
        {
          "text": "定好第一步",
          "weight": 1
        },
        {
          "text": "先试试看",
          "weight": -1
        },
        {
          "text": "等有状态再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样安排一次聚会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前定时间地点",
          "weight": 2
        },
        {
          "text": "提前几天约",
          "weight": 1
        },
        {
          "text": "当天再说",
          "weight": -1
        },
        {
          "text": "碰上了就聚",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎么安排一日三餐：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前想好、按点吃",
          "weight": 2
        },
        {
          "text": "大致有规律",
          "weight": 1
        },
        {
          "text": "饿了再吃",
          "weight": -1
        },
        {
          "text": "想起才吃",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "家里的旧东西，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "定期清理",
          "weight": 2
        },
        {
          "text": "分类收好",
          "weight": 1
        },
        {
          "text": "堆着不管",
          "weight": -1
        },
        {
          "text": "越攒越多",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样记录灵感：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "分类记进笔记",
          "weight": 2
        },
        {
          "text": "随手记下来",
          "weight": 1
        },
        {
          "text": "靠脑子记",
          "weight": -1
        },
        {
          "text": "不记",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样使用日历：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "每件事都记进去",
          "weight": 2
        },
        {
          "text": "重要的才记",
          "weight": 1
        },
        {
          "text": "偶尔看看",
          "weight": -1
        },
        {
          "text": "从不用",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样迎接新年：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前定好计划",
          "weight": 2
        },
        {
          "text": "想几个目标",
          "weight": 1
        },
        {
          "text": "到时候再说",
          "weight": -1
        },
        {
          "text": "不设任何计划",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "报销单据你通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "当天就整理好",
          "weight": 2
        },
        {
          "text": "攒一批再弄",
          "weight": 1
        },
        {
          "text": "拖到截止",
          "weight": -1
        },
        {
          "text": "经常忘",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更愿意怎样安排晚饭后的时间：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "固定做点事",
          "weight": 2
        },
        {
          "text": "列几件要做的事",
          "weight": 1
        },
        {
          "text": "看心情",
          "weight": -1
        },
        {
          "text": "躺平",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "如果只能选一种节奏，你更想要：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "一切按计划推进",
          "weight": 2
        },
        {
          "text": "大体有序",
          "weight": 1
        },
        {
          "text": "灵活机动",
          "weight": -1
        },
        {
          "text": "完全自由",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_O",
      "text": "我喜欢尝试新鲜事物，哪怕可能失败",
      "leftChar": "O+",
      "rightChar": "O-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_C",
      "text": "我做事情非常有条理，不喜欢混乱",
      "leftChar": "C+",
      "rightChar": "C-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_A",
      "text": "我会优先考虑别人的感受",
      "leftChar": "A+",
      "rightChar": "A-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_N",
      "text": "我很容易被情绪影响",
      "leftChar": "N+",
      "rightChar": "N-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_7",
      "text": "我害怕无聊，需要持续的刺激",
      "leftChar": "E7",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_8",
      "text": "我不喜欢被别人控制",
      "leftChar": "E8",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_9",
      "text": "为了避免冲突我愿意妥协",
      "leftChar": "E9",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_4",
      "text": "我希望自己是独特的",
      "leftChar": "E4",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_O",
      "text": "我常常主动接触完全陌生的领域",
      "leftChar": "O+",
      "rightChar": "O-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_C",
      "text": "我做事之前习惯先列好清单和步骤",
      "leftChar": "C+",
      "rightChar": "C-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_A",
      "text": "即使别人有错，我也会顾及对方的感受再开口",
      "leftChar": "A+",
      "rightChar": "A-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "OCEAN_N",
      "text": "一点小失误也会让我反复懊恼很久",
      "leftChar": "N+",
      "rightChar": "N-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_7",
      "text": "我会不断给自己安排新鲜有趣的事，避免生活单调",
      "leftChar": "E7",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_8",
      "text": "别人越强硬，我越要正面顶回去",
      "leftChar": "E8",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_9",
      "text": "为了不破坏气氛，我常把真实想法咽回去",
      "leftChar": "E9",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "ENMEA_4",
      "text": "我希望别人记住我是「特别的那一个」",
      "leftChar": "E4",
      "rightChar": "-",
      "options": [
        {
          "text": "完全符合",
          "weight": 2
        },
        {
          "text": "比较符合",
          "weight": 1
        },
        {
          "text": "不太符合",
          "weight": -1
        },
        {
          "text": "完全不符合",
          "weight": -2
        }
      ]
    }
  ],
  "personalities": {
    "INTJ": {
      "group": "分析家",
      "heroIcon": "🏛️",
      "name": "建筑师",
      "tagline": "富有想象力和战略性的思想家",
      "heroColor": "#5b4b8a",
      "population": "2.1%",
      "strengths": [
        "独立",
        "战略思维",
        "高效",
        "追求完美",
        "有远见"
      ],
      "weaknesses": [
        "过于骄傲",
        "对低效率缺乏耐心",
        "过于批判",
        "不善于表达情感"
      ],
      "traits": [
        "独立思考",
        "意志坚定",
        "追求知识",
        "高效执行",
        "战略性规划"
      ],
      "description": "INTJ 是天生的规划师，拥有惊人的洞察力和战略思维能力。他们相信一切皆可优化改进，无论是工作流程还是个人关系。独立自主，喜欢按照自己的方式做事，不轻易被外界意见左右。他们是\"系统思考者\"，善于从复杂事物中抓住本质。",
      "loveStyle": "慢热且专注，一旦认定就极其忠诚。在感情中需要精神共鸣而非浪漫形式，讨厌过度依赖和情绪勒索。伴侣需要聪明、独立、能和他们进行深度对话。",
      "workStyle": "最适合独立工作或领导小型精英团队。讨厌无意义的会议和低效流程，喜欢从 0 到 1 搭建全新系统。典型的\"建筑师\"型人格，看到问题就想重构整个框架。",
      "careers": [
        "科学家",
        "战略顾问",
        "程序员",
        "投资银行家",
        "系统架构师"
      ],
      "famous": "埃隆·马斯克、达·芬奇、尼采、本杰明·富兰克林、司马懿、稻盛和夫"
    },
    "INTP": {
      "group": "分析家",
      "heroIcon": "🧠",
      "name": "逻辑学家",
      "tagline": "具有创造力的发明家，对知识有止境的渴望",
      "heroColor": "#7c5cb8",
      "population": "3.3%",
      "strengths": [
        "好奇心强",
        "逻辑性强",
        "创新",
        "理性",
        "有深度"
      ],
      "weaknesses": [
        "过于理想化",
        "不擅日常事务",
        "容易钻牛角尖",
        "社交困难"
      ],
      "traits": [
        "逻辑严密",
        "热爱知识",
        "创新思维",
        "客观理性",
        "追求真理"
      ],
      "description": "INTP 是真正的思想者，他们的大脑永不停歇地运转，试图理解世界的底层逻辑。沉迷于理论和抽象概念，常常为了追求知识而忽视现实。对他们来说，理解问题本身就是最大的乐趣，过程比结果更重要。",
      "loveStyle": "看重精神共鸣胜过一切。在感情中可能显得笨拙，但内心极其专一。需要独立空间，不喜欢被过度黏着。表达爱意的方式通常是\"教你东西\"或\"分享有趣的想法\"。",
      "workStyle": "最适合研究型岗位或需要深度思考的工作。讨厌重复性任务和严格的层级管理。喜欢一个人钻研复杂问题，常常在别人看不到关联的地方发现联系。",
      "careers": [
        "理论物理学家",
        "哲学家",
        "数学研究员",
        "语言学家",
        "数据科学家"
      ],
      "famous": "爱因斯坦、达尔文、比尔·盖茨、苏格拉底、笛卡尔、庄子"
    },
    "ENTJ": {
      "group": "分析家",
      "heroIcon": "⚔️",
      "name": "指挥官",
      "tagline": "大胆、富有想象力且意志强大的领导者",
      "heroColor": "#c0392b",
      "population": "1.8%",
      "strengths": [
        "领导力",
        "果断",
        "高效",
        "自信",
        "战略眼光"
      ],
      "weaknesses": [
        "专横",
        "缺乏耐心",
        "冷漠",
        "好胜心过强"
      ],
      "traits": [
        "天生领袖",
        "果断决策",
        "目标导向",
        "高效执行",
        "意志强大"
      ],
      "description": "ENTJ 是天生的领袖，拥有强大的意志力和领导魅力，能够带领团队朝着明确目标前进。务实高效，不喜欢拖延和低效，常常直言不讳地指出问题。对他们来说，成就和掌控是生命的核心，没有目标的日子是浪费生命。",
      "loveStyle": "感情中同样是主导者，喜欢有能力、有主见的伴侣。不喜欢过度依赖和情绪化的人。会用实际行动（努力赚钱、规划未来）来表达爱，而不是甜言蜜语。",
      "workStyle": "天生的 CEO 或创业者。擅长制定战略、组建团队、推动执行。讨厌低效和拖延，对事不对人。典型的\"推土机\"式领导，目标明确，手段强硬。",
      "careers": [
        "CEO",
        "律师",
        "政治家",
        "管理顾问",
        "创业者"
      ],
      "famous": "拿破仑、史蒂夫·乔布斯、玛格丽特·撒切尔、亚历山大大帝、武则天、丘吉尔"
    },
    "ENTP": {
      "group": "分析家",
      "heroIcon": "💡",
      "name": "辩论家",
      "tagline": "聪明好奇的思想者，不会放弃任何智力上的挑战",
      "heroColor": "#e67e22",
      "population": "3.2%",
      "strengths": [
        "聪慧",
        "机敏",
        "创新",
        "热情",
        "善辩"
      ],
      "weaknesses": [
        "注意力不集中",
        "难以坚持",
        "争论成性",
        "不够务实"
      ],
      "traits": [
        "思维敏捷",
        "创新点子多",
        "善于辩论",
        "充满热情",
        "机会主义"
      ],
      "description": "ENTP 是最聪明的大脑之一，能够看到别人看不到的可能性。喜欢辩论和挑战常规，常常为了争论而争论。虽然充满创意，但容易虎头蛇尾，对已经解决的问题很快失去兴趣。他们的座右铭是：\"还能怎样？\"",
      "loveStyle": "喜欢聪明有趣、能和他们斗嘴的伴侣。感情需要刺激和新鲜感，容易在稳定后感到无聊。擅长用幽默和创意表达爱意，讨厌被束缚。",
      "workStyle": "最需要自由空间和智力挑战的岗位。擅长头脑风暴、产品创新、谈判说服。讨厌琐碎的执行和日常管理，需要有人帮他们擦屁股。",
      "careers": [
        "发明家",
        "律师",
        "记者",
        "创意总监",
        "产品经理"
      ],
      "famous": "马克·吐温、汤姆·汉克斯、苏格拉底、蒙田、余秋雨、埃隆·马斯克"
    },
    "INFJ": {
      "group": "外交家",
      "heroIcon": "🦉",
      "name": "提倡者",
      "tagline": "安静而神秘，同时鼓舞人心的理想主义者",
      "heroColor": "#4a69bd",
      "population": "1.5%",
      "strengths": [
        "有洞察力",
        "富有同情心",
        "有理想",
        "有创意",
        "坚定"
      ],
      "weaknesses": [
        "过于完美主义",
        "敏感",
        "容易内耗",
        "难以放松"
      ],
      "traits": [
        "深刻洞察",
        "富有理想",
        "强烈共情",
        "追求意义",
        "内心丰富"
      ],
      "description": "INFJ 是最稀有的人格类型，既有深刻的洞察力又充满理想主义。能看透人心，理解他人的深层需求，同时坚守自己的价值观。想要让世界变得更好，但常常对自己要求过高。外表平静，内心热情如火。",
      "loveStyle": "极度重视精神共鸣和价值观契合。一旦投入就会全力以赴，但需要很长时间才敞开心扉。在关系中既渴望亲密又需要独处空间，经常在两个极端间摇摆。",
      "workStyle": "最适合帮助他人成长的岗位——咨询师、导师、作家。需要有意义感，不能只为钱工作。不喜欢官僚体制，更喜欢小而有爱的团队。",
      "careers": [
        "心理学家",
        "作家",
        "咨询师",
        "非盈利组织领导",
        "艺术治疗师"
      ],
      "famous": "荣格、马丁·路德·金、柏拉图、老子、泰戈尔、托尔斯泰"
    },
    "INFP": {
      "group": "外交家",
      "heroIcon": "🌸",
      "name": "调停者",
      "tagline": "诗意、善良的利他主义者，总是为正义事业热心帮忙",
      "heroColor": "#6a89cc",
      "population": "4.4%",
      "strengths": [
        "理想主义",
        "富有同情心",
        "有创造力",
        "真诚",
        "开放"
      ],
      "weaknesses": [
        "过于理想化",
        "不切实际",
        "容易受伤",
        "难以做决定"
      ],
      "traits": [
        "理想主义",
        "富有诗意",
        "高度共情",
        "忠于价值观",
        "内心丰富"
      ],
      "description": "INFP 是最温柔的灵魂，用内心的价值观和感情来看待世界。相信每个人都有内在的美好，愿意为正义和真情付出。虽然外表柔弱，但内心有极强的原则和信念，宁折不弯。",
      "loveStyle": "渴望灵魂伴侣式的爱情，把爱情看得极其神圣。一旦受伤就会封闭自己很久。用写诗、画画、写歌等艺术方式表达爱意，不擅长直接说出口。",
      "workStyle": "最适合能发挥创意和帮助他人的工作。讨厌商业化和官僚体制，希望工作有\"意义\"。经常在艺术、文学、公益领域找到自己的位置。",
      "careers": [
        "作家",
        "心理咨询师",
        "插画师",
        "社工",
        "音乐治疗师"
      ],
      "famous": "莎士比亚、J.K.罗琳、约翰尼·德普、李白、村上春树、梵高"
    },
    "ENFJ": {
      "group": "外交家",
      "heroIcon": "🌟",
      "name": "主人公",
      "tagline": "富有魅力且鼓舞人心的领导者",
      "heroColor": "#e84393",
      "population": "2.5%",
      "strengths": [
        "有魅力",
        "有同理心",
        "鼓舞人心",
        "有组织力",
        "忠诚"
      ],
      "weaknesses": [
        "过于理想主义",
        "容易牺牲自我",
        "过于敏感",
        "难以接受批评"
      ],
      "traits": [
        "富有魅力",
        "天生导师",
        "高度共情",
        "善于激励",
        "利他主义"
      ],
      "description": "ENFJ 是天生的导师和领袖，能激发出他人最好的一面。充满魅力和热情，擅长团队协作，总是愿意帮助别人成长。但常常忽略自己的需求，把别人的感受放在第一位。他们的能量来自帮助他人。",
      "loveStyle": "在感情中扮演\"守护者\"角色，愿意为伴侣的成长付出一切。需要被欣赏和认可，害怕不被需要。容易在关系中失去自我，需要找一个能让他们也被照顾的伴侣。",
      "workStyle": "天生的 HR、教师、团队领导。擅长发现他人的潜力并激发出来。在温暖、有凝聚力的团队中表现最好，讨厌冷酷的竞争环境。",
      "careers": [
        "教师",
        "政治家",
        "人力资源主管",
        "公关经理",
        "演讲家"
      ],
      "famous": "奥巴马、奥普拉、曼德拉、甘地、蔡康永、何炅"
    },
    "ENFP": {
      "group": "外交家",
      "heroIcon": "🦋",
      "name": "竞选者",
      "tagline": "热情、有创造力、社交能力强的自由精神",
      "heroColor": "#f39c12",
      "population": "8.1%",
      "strengths": [
        "热情",
        "创造力",
        "同理心",
        "好奇心",
        "乐观"
      ],
      "weaknesses": [
        "难以专注",
        "容易分心",
        "过度思考",
        "情绪化"
      ],
      "traits": [
        "热情洋溢",
        "创意无限",
        "善于社交",
        "好奇宝宝",
        "乐观主义"
      ],
      "description": "ENFP 是充满活力的小太阳，对世界充满好奇，能在普通事物中发现美好。善于与人交往，总能给人带来欢乐和启发。但热情来得快去得也快，需要找到让自己持续投入的事情。他们相信\"一切皆有可能\"。",
      "loveStyle": "热烈而浪漫的爱人，会为伴侣做各种可爱的事。需要新鲜感和激情，容易在稳定后感到不安。需要一个能陪他们一起冒险、同时帮他们落地的伴侣。",
      "workStyle": "适合需要创意、社交和灵活性的工作。讨厌重复性任务和严格的规章制度。能在头脑风暴、创意策划、人脉搭建中大放异彩。",
      "careers": [
        "记者",
        "演员",
        "心理学家",
        "创业者",
        "人力资源"
      ],
      "famous": "罗宾·威廉姆斯、威尔·史密斯、安妮·弗兰克、宋庆龄、毕加索、徐峥"
    },
    "ISTJ": {
      "group": "守卫者",
      "heroIcon": "📋",
      "name": "物流师",
      "tagline": "实际且注重事实的个人，不可置疑的可靠性",
      "heroColor": "#27ae60",
      "population": "11.6%",
      "strengths": [
        "可靠",
        "细致",
        "有条理",
        "忠诚",
        "务实"
      ],
      "weaknesses": [
        "过于僵化",
        "缺乏灵活性",
        "难以表达情感",
        "过于执着规则"
      ],
      "traits": [
        "极度可靠",
        "注重细节",
        "遵守规则",
        "勤奋踏实",
        "忠于承诺"
      ],
      "description": "ISTJ 是最可靠的伙伴，言出必行，做事一丝不苟。尊重传统和规则，认为按部就班是成功的关键。虽然外表严肃，但内心有着强烈的责任感。他们是社会稳定的基石。",
      "loveStyle": "在感情中极其忠诚和负责，是可以托付终身的人。不擅长甜言蜜语，但会用行动（记住纪念日、修好家里的东西）来表达。需要伴侣也认真对待承诺。",
      "workStyle": "任何需要可靠执行的岗位都能胜任。擅长建立系统和流程，确保事情按计划进行。不喜欢变化和混乱，在稳定的组织中表现最好。",
      "careers": [
        "会计师",
        "审计师",
        "公务员",
        "图书管理员",
        "项目经理"
      ],
      "famous": "乔治·华盛顿、沃伦·巴菲特、梅丽尔·斯特里普、司马光、曾国藩、康德"
    },
    "ISFJ": {
      "group": "守卫者",
      "heroIcon": "🌿",
      "name": "守卫者",
      "tagline": "非常专注且温暖的守护者",
      "heroColor": "#16a085",
      "population": "13.8%",
      "strengths": [
        "温暖",
        "乐于助人",
        "忠诚",
        "细致",
        "有耐心"
      ],
      "weaknesses": [
        "过于无私",
        "压抑自己需求",
        "不擅长变化",
        "容易受伤"
      ],
      "traits": [
        "温暖体贴",
        "默默付出",
        "极度忠诚",
        "耐心细致",
        "守护本能"
      ],
      "description": "ISFJ 是默默付出的守护者，把照顾他人当作自己的使命。温柔、耐心、可靠，总是把别人的需要放在自己前面。虽然不喜欢出风头，但是维系家庭和团队的中坚力量。他们的付出常常被低估。",
      "loveStyle": "在感情中扮演照顾者角色，把伴侣的需求放在第一位。需要被 appreciated，害怕自己的付出被忽视。不擅长表达自己的痛苦，容易在关系中耗尽自己。",
      "workStyle": "最适合需要耐心和照顾他人的岗位——护士、教师、社工。擅长在幕后默默付出，不追求名利。在温暖和谐的团队中表现最好。",
      "careers": [
        "护士",
        "小学教师",
        "社工",
        "行政助理",
        "图书管理员"
      ],
      "famous": "特雷莎修女、凯特王妃、罗莎·帕克斯、李清照、杨绛、南丁格尔"
    },
    "ESTJ": {
      "group": "守卫者",
      "heroIcon": "📊",
      "name": "总经理",
      "tagline": "出色的管理者，在管理事情或人员方面无与伦比",
      "heroColor": "#d35400",
      "population": "8.7%",
      "strengths": [
        "组织能力强",
        "果断",
        "负责任",
        "务实",
        "忠诚"
      ],
      "weaknesses": [
        "固执",
        "缺乏灵活性",
        "难以接受不同观点",
        "过于强势"
      ],
      "traits": [
        "天生组织者",
        "果断高效",
        "注重秩序",
        "传统保守",
        "责任担当"
      ],
      "description": "ESTJ 是天生的组织者，擅长把混乱变得有序。看重传统、秩序和责任，相信规章制度的重要性。作为管理者高效直接，但有时显得过于强硬和缺乏变通。他们相信\"有规矩才能成方圆\"。",
      "loveStyle": "在感情中同样希望掌控局面，喜欢有规矩、有承诺的关系。不喜欢过度情绪化和反复无常的人。会认真规划家庭财务和未来，是可靠的伴侣。",
      "workStyle": "适合管理岗、行政岗、需要组织协调的工作。擅长制定规则、推动执行、确保效率。讨厌混乱和无组织，在结构清晰的组织中表现最好。",
      "careers": [
        "法官",
        "军官",
        "企业经理",
        "税务专员",
        "学校校长"
      ],
      "famous": "亨利·福特、米歇尔·奥巴马、弗兰克·辛纳屈、秦始皇、彼得大帝、董明珠"
    },
    "ESFJ": {
      "group": "守卫者",
      "heroIcon": "🎪",
      "name": "执政官",
      "tagline": "极有同情心、受欢迎，总是热心帮助别人",
      "heroColor": "#e74c3c",
      "population": "12.3%",
      "strengths": [
        "温暖",
        "友善",
        "乐于助人",
        "有组织力",
        "忠诚"
      ],
      "weaknesses": [
        "过于在意他人评价",
        "难以应对批评",
        "固执",
        "容易焦虑"
      ],
      "traits": [
        "热情友善",
        "热心肠",
        "重视和谐",
        "善于社交",
        "忠于朋友"
      ],
      "description": "ESFJ 是最受欢迎的人格类型之一，热情友善，总能让周围的人感到温暖。擅长营造和谐的氛围，愿意为他人付出。但太在意别人的看法，有时会牺牲自己来取悦他人。他们的朋友圈通常很大。",
      "loveStyle": "在感情中需要被重视和关注，害怕被冷落。擅长营造浪漫氛围，记得所有纪念日。需要伴侣主动表达爱意，不然会胡思乱想。",
      "workStyle": "适合需要社交和帮助他人的岗位。擅长团队合作、客户服务、活动组织。在和谐友好的团队中表现最好，讨厌冷酷的竞争。",
      "careers": [
        "社会工作者",
        "护士",
        "客户服务",
        "公关专家",
        "活动策划"
      ],
      "famous": "泰勒·斯威夫特、比尔·克林顿、詹妮弗·加纳、林志玲、杜汶泽、安倍晋三"
    },
    "ISTP": {
      "group": "探索家",
      "heroIcon": "🛠️",
      "name": "鉴赏家",
      "tagline": "大胆而实际的实验家，擅长使用各种工具",
      "heroColor": "#2c3e50",
      "population": "5.4%",
      "strengths": [
        "冷静",
        "灵活",
        "务实",
        "动手能力强",
        "适应力强"
      ],
      "weaknesses": [
        "难以长期承诺",
        "情感表达困难",
        "容易无聊",
        "冒险"
      ],
      "traits": [
        "冷静沉着",
        "动手能力强",
        "务实理性",
        "喜欢探索",
        "随机应变"
      ],
      "description": "ISTP 是冷静的探索者，喜欢动手操作各种机械和工具。能在危机中保持镇定，找到最实用的解决方案。但讨厌被束缚，需要自由空间来探索自己的兴趣。他们是修理一切的\"隐形英雄\"。",
      "loveStyle": "在感情中需要很大的独立空间，不喜欢被黏着。用行动而非语言表达爱意（比如帮你修好东西）。不擅长处理情绪冲突，可能会用沉默逃避。",
      "workStyle": "适合需要动手、解决实际问题的岗位。擅长应急处理、故障排查、工具操作。讨厌坐办公室和文山会海，喜欢能看到实实在在成果的工作。",
      "careers": [
        "工程师",
        "飞行员",
        "消防员",
        "法医",
        "机械师"
      ],
      "famous": "克林特·伊斯特伍德、迈克尔·乔丹、贝尔、李小龙、钱学森、阿基米德"
    },
    "ISFP": {
      "group": "探索家",
      "heroIcon": "🎨",
      "name": "探险家",
      "tagline": "灵活而富有魅力的艺术家",
      "heroColor": "#2980b9",
      "population": "8.8%",
      "strengths": [
        "温和",
        "有艺术天赋",
        "敏感",
        "灵活",
        "有魅力"
      ],
      "weaknesses": [
        "容易压力过大",
        "难以规划",
        "回避冲突",
        "自我评价低"
      ],
      "traits": [
        "艺术气质",
        "温柔敏感",
        "活在当下",
        "追求和谐",
        "有魅力"
      ],
      "description": "ISFP 是温柔的艺术家，用感官去体验世界，追求美和和谐。富有艺术天赋，能够在日常中发现美感。讨厌冲突和压力，需要一个充满爱的环境来展现自己。他们的艺术表达是发自内心的。",
      "loveStyle": "在感情中温柔而细腻，用艺术和行动表达爱意。不擅长直接说出需求，容易压抑自己。需要一个温柔、有耐心、能欣赏他们的伴侣。",
      "workStyle": "最适合艺术、设计、音乐等创造性岗位。在美丽、和谐的环境中能发挥最大潜力。讨厌严格的规则和高压环境。",
      "careers": [
        "艺术家",
        "音乐家",
        "厨师",
        "设计师",
        "宠物美容师"
      ],
      "famous": "迈克尔·杰克逊、鲍勃·迪伦、奥黛丽·赫本、张国荣、王菲、梵高"
    },
    "ESTP": {
      "group": "探索家",
      "heroIcon": "🏎️",
      "name": "企业家",
      "tagline": "聪明、精力充沛且非常有感知力的人",
      "heroColor": "#e67e22",
      "population": "4.3%",
      "strengths": [
        "大胆",
        "精力充沛",
        "务实",
        "社交能力强",
        "解决问题能力强"
      ],
      "weaknesses": [
        "冲动",
        "缺乏耐心",
        "不擅长长期规划",
        "冒险"
      ],
      "traits": [
        "大胆冒险",
        "行动力强",
        "务实灵活",
        "善于社交",
        "随机应变"
      ],
      "description": "ESTP 是行动派的冒险家，充满活力，喜欢刺激和挑战。善于抓住当下的机会，能够快速做出决定并付诸行动。但不喜欢长远规划，可能会因为冲动而陷入麻烦。他们是\"活在当下\"的践行者。",
      "loveStyle": "在感情中充满激情和冒险，喜欢和伴侣一起尝试新鲜事物。容易厌倦重复和 routine。需要一个同样活泼、能陪他们冒险的伴侣。",
      "workStyle": "适合需要行动力、社交和临场应变的岗位。擅长销售、谈判、应急处理。讨厌坐办公室和繁琐的流程，喜欢能立刻看到成果的工作。",
      "careers": [
        "企业家",
        "销售总监",
        "警察",
        "运动教练",
        "股票交易员"
      ],
      "famous": "欧内斯特·海明威、麦当娜、曹操、普京、王石、丘吉尔"
    },
    "ESFP": {
      "group": "探索家",
      "heroIcon": "🎤",
      "name": "表演者",
      "tagline": "自发的、精力充沛且热情的表演者",
      "heroColor": "#f1c40f",
      "population": "8.5%",
      "strengths": [
        "热情",
        "友好",
        "乐观",
        "有魅力",
        "有表演天赋"
      ],
      "weaknesses": [
        "容易分心",
        "不擅长长期规划",
        "回避严肃话题",
        "敏感"
      ],
      "traits": [
        "热情洋溢",
        "善于表演",
        "乐观开朗",
        "活在当下",
        "社交达人"
      ],
      "description": "ESFP 是最会制造欢乐的人，走到哪里就把快乐带到哪里。热爱生活，善于表达情感，总能让周围的人感到开心。但不喜欢面对困难和严肃的事情，习惯逃避问题。他们是人群中的\"聚光灯\"。",
      "loveStyle": "在感情中充满热情和浪漫，喜欢惊喜和仪式感。需要被关注和赞美，讨厌被忽视。会把恋爱谈成偶像剧，但遇到问题可能会逃避。",
      "workStyle": "适合需要表演、社交、娱乐他人的岗位。擅长营造欢乐氛围，在团队中是气氛担当。讨厌枯燥和严肃的工作环境。",
      "careers": [
        "演员",
        "活动策划",
        "导游",
        "健身教练",
        "主持人"
      ],
      "famous": "玛丽莲·梦露、埃尔维斯·普雷斯利、周星驰、成龙、小S、卡戴珊"
    },
    "HYBRID_EI": {
      "group": "混合型",
      "heroIcon": "🦎",
      "name": "变色龙",
      "tagline": "E/I 混合 · 既善于社交又享受独处",
      "heroColor": "#9b59b6",
      "population": "~5%",
      "strengths": [
        "灵活",
        "适应力强",
        "共情力高",
        "理解不同视角",
        "情绪调节"
      ],
      "weaknesses": [
        "身份认同模糊",
        "有时难以做决定",
        "外界评价影响较大"
      ],
      "traits": [
        "变色龙型",
        "能伸能缩",
        "共情桥梁",
        "社交开关自如"
      ],
      "description": "你在 E/I 维度接近中立，意味着你既享受社交带来的能量，也有独处充电的需求。你像变色龙一样能在不同社交场合灵活切换——既能成为派对中心，也能安静地独处看书。这种灵活性是你的优势，但有时也会让你不确定自己真正的偏好。",
      "loveStyle": "在感情中既需要亲密也需要独处空间。理解伴侣的社交需求，也希望对方理解自己偶尔想一个人待着。需要找到一个能尊重你\"社交开关\"的伴侣。",
      "workStyle": "适合需要在不同人群间切换的角色——HR、咨询、项目协调。既能和团队头脑风暴，也能关起门来独立工作。是团队中的\"社交桥梁\"。",
      "careers": [
        "人力资源",
        "心理咨询师",
        "谈判专家",
        "双向沟通桥梁角色"
      ],
      "famous": "奥普拉·温弗瑞、马云、达芬奇、爱因斯坦、李安"
    },
    "HYBRID_SN": {
      "group": "混合型",
      "heroIcon": "🌉",
      "name": "桥梁者",
      "tagline": "S/N 混合 · 既关注现实又富有想象",
      "heroColor": "#1abc9c",
      "population": "~5%",
      "strengths": [
        "脚踏实地",
        "有远见",
        "善于规划",
        "既能落地也能创新",
        "适应变化"
      ],
      "weaknesses": [
        "有时两头不靠",
        "难以聚焦",
        "容易精力分散"
      ],
      "traits": [
        "现实主义+梦想家",
        "战略落地双能",
        "连接当下与未来"
      ],
      "description": "你在 S/N 维度接近中立，意味着你既有感知现实细节的能力，也善于想象未来的可能性。你既能处理手头的具体事务，又能思考大方向的战略。这种\"桥梁者\"的特质让你在团队中特别有价值——别人看现在，你既能看现在又能看未来。",
      "loveStyle": "在感情中既务实又浪漫。既能和伴侣一起规划生活细节，也能一起畅想未来。需要伴侣既踏实又有梦想，不然会觉得无聊或不切实际。",
      "workStyle": "适合产品经理、UX 设计、战略规划等需要\"从想法到落地\"的岗位。既能做用户调研（S），也能做愿景规划（N），是难得的\"T 型人才\"。",
      "careers": [
        "产品经理",
        "UX/UI 设计师",
        "战略顾问",
        "项目协调人"
      ],
      "famous": "巴拉克·奥巴马、乔布斯、芒格、贝佐斯"
    },
    "HYBRID_TF": {
      "group": "混合型",
      "heroIcon": "⚖️",
      "name": "调和者",
      "tagline": "T/F 混合 · 既理性又有同理心",
      "heroColor": "#3498db",
      "population": "~5%",
      "strengths": [
        "平衡",
        "理性而温暖",
        "善于沟通",
        "能看到问题两面",
        "有说服力"
      ],
      "weaknesses": [
        "决策时纠结",
        "难以取舍",
        "容易被双方影响"
      ],
      "traits": [
        "理性与感性兼备",
        "天生调解者",
        "公平公正",
        "沟通高手"
      ],
      "description": "你在 T/F 维度接近中立，意味着你既能用逻辑客观分析问题，又能共情他人的情感。你是天生的\"调和者\"，在冲突中能同时理解双方的立场。这种特质让你特别适合调解和领导角色，但做决定时也容易因为权衡过度而纠结。",
      "loveStyle": "在感情中既讲道理又讲感情。既能客观分析关系中的问题，又能感受到伴侣的情绪。需要一个既能和你理性讨论、又能和你感性共鸣的伴侣。",
      "workStyle": "适合法官、HR 总监、外交官等需要平衡多方利益的角色。能在坚持原则的同时照顾人情，是化解团队冲突的最佳人选。",
      "careers": [
        "法官",
        "HR 总监",
        "心理咨询师",
        "外交人员",
        "企业调解员"
      ],
      "famous": "纳尔逊·曼德拉、林肯、甘地、温家宝"
    },
    "HYBRID_JP": {
      "group": "混合型",
      "heroIcon": "🎯",
      "name": "平衡者",
      "tagline": "J/P 混合 · 既有计划又能灵活应变",
      "heroColor": "#e67e22",
      "population": "~5%",
      "strengths": [
        "灵活",
        "高效",
        "有组织但不死板",
        "适应力强",
        "随机应变"
      ],
      "weaknesses": [
        "难以长期坚持",
        "有时混乱",
        "容易在混乱中迷失"
      ],
      "traits": [
        "计划与灵活并存",
        "知道何时该放",
        "动态平衡高手"
      ],
      "description": "你在 J/P 维度接近中立，意味着你既有提前规划的习惯，又能在计划被打乱时灵活应变。你懂得什么时候该做计划，什么时候该放开自由。这种\"平衡者\"特质让你在快节奏的环境中特别有优势，但有时也会在\"该不该计划\"之间摇摆。",
      "loveStyle": "在感情中既有规划又不刻板。会规划重要的日子，但也愿意 spontaneity。需要一个既能和你一起规划未来、又能陪你即兴冒险的伴侣。",
      "workStyle": "适合项目管理、应急响应、创业者等需要\"有章法但不死板\"的岗位。既能定 deadline，又能灵活调整，是应对变化的高手。",
      "careers": [
        "项目经理",
        "创业者",
        "应急响应",
        "自由职业者",
        "创意总监"
      ],
      "famous": "理查德·布兰森、乔布斯、贝佐斯、马斯克"
    },
    "HYBRID_EI_SN": {
      "group": "混合型",
      "heroIcon": "🧬",
      "name": "全能探索者",
      "tagline": "E/I + S/N 双混合 · 灵活且务实的梦想家",
      "heroColor": "#8e44ad",
      "population": "~2%",
      "strengths": [
        "全维度灵活",
        "既能社交又能独处",
        "既能落地又有创意",
        "适应任何环境",
        "学习能力强"
      ],
      "weaknesses": [
        "身份认知复杂",
        "难以被归类",
        "有时缺乏专注",
        "外界期待冲突"
      ],
      "traits": [
        "四维灵活",
        "跨界通才",
        "多面手",
        "既能A又能B"
      ],
      "description": "你的 E/I 和 S/N 两个维度都接近中立——这是极少见的配置！你既是社交达人又是独处爱好者，既是现实主义者又是梦想家。这种\"全能探索者\"让你能适应几乎任何环境，在不同圈子里都能如鱼得水。但因为你不典型，别人可能觉得你\"难懂\"或\"善变\"。",
      "loveStyle": "需要一个能理解你\"双面性\"的伴侣——既能接受你想独处的时候，也能陪你社交；既能和你聊柴米油盐，也能聊人生理想。",
      "workStyle": "适合需要在多个维度间切换的跨界岗位——咨询、产品、创业。既能和客户 social，也能独自做深度调研；既能落地执行，也能战略规划。",
      "careers": [
        "管理咨询师",
        "创业者",
        "产品总监",
        "跨界艺术家"
      ],
      "famous": "达芬奇、本杰明·富兰克林、爱因斯坦、特斯拉"
    },
    "HYBRID_EI_TF": {
      "group": "混合型",
      "heroIcon": "💫",
      "name": "共情外交官",
      "tagline": "E/I + T/F 双混合 · 能理性共情的社交高手",
      "heroColor": "#2980b9",
      "population": "~2%",
      "strengths": [
        "社交+共情双强",
        "能说会道",
        "擅长调解",
        "领导魅力",
        "情绪智力高"
      ],
      "weaknesses": [
        "情绪消耗大",
        "容易两面不讨好",
        "需要独处充电",
        "决策慢"
      ],
      "traits": [
        "高情商外交官",
        "能文能武",
        "理性感性兼具",
        "社交能力MAX"
      ],
      "description": "你的 E/I 和 T/F 两个维度都接近中立——你既能和人侃侃而谈也能安静独处，既能理性分析又能共情他人。这种\"共情外交官\"让你在人际场合如鱼得水，是天生的调解者和沟通桥梁。但社交对能量消耗大，需要定期独处充电。",
      "loveStyle": "在感情中既能理性解决问题，又能共情伴侣情绪。既能陪伴侣社交，也能陪对方安静待着。需要一个能理解你\"社交/独处开关\"的伴侣。",
      "workStyle": "适合外交、HR、咨询、调解员等需要处理复杂人际关系的岗位。能在理性和感性间自由切换，是团队中最会沟通的人。",
      "careers": [
        "外交官",
        "HR 总监",
        "心理咨询师",
        "企业培训师"
      ],
      "famous": "科菲·安南、曼德拉、希拉里、蔡英文"
    },
    "HYBRID_SN_TF": {
      "group": "混合型",
      "heroIcon": "🔮",
      "name": "洞察思辨者",
      "tagline": "S/N + T/F 双混合 · 既有远见又有温度",
      "heroColor": "#16a085",
      "population": "~2%",
      "strengths": [
        "深刻洞察",
        "有远见又务实",
        "逻辑与情感兼具",
        "创造力强",
        "善于解决复杂问题"
      ],
      "weaknesses": [
        "内耗严重",
        "完美主义",
        "标准过高",
        "难以放松"
      ],
      "traits": [
        "深度思考者",
        "兼顾理性与感性",
        "战略+执行双能",
        "内心丰富"
      ],
      "description": "你的 S/N 和 T/F 两个维度都接近中立——你既能看到事实细节又能想象未来，既能理性分析又能感受他人。这种\"洞察思辨者\"是天生的问题解决者，能在复杂局面中找到兼顾各方利益的方案。但因为你标准太高，自己也容易内耗。",
      "loveStyle": "在感情中既能理性规划未来，又能共情伴侣情绪。需要一个能和你进行深度对话的伴侣——既有想法又有温度。",
      "workStyle": "适合战略顾问、产品负责人、心理学家等需要\"既想又感\"的岗位。能在愿景和执行、逻辑和情感间找到最佳平衡点。",
      "careers": [
        "战略顾问",
        "产品负责人",
        "心理学家",
        "研究型学者"
      ],
      "famous": "卡尔·荣格、尼采、叔本华、加缪"
    },
    "HYBRID_EI_JP": {
      "group": "混合型",
      "heroIcon": "🎪",
      "name": "弹性领袖",
      "tagline": "E/I + J/P 双混合 · 有章法又灵活的社交家",
      "heroColor": "#d35400",
      "population": "~2%",
      "strengths": [
        "有领导力",
        "既能规划又能应变",
        "社交与独处平衡",
        "自律但灵活",
        "能带动团队"
      ],
      "weaknesses": [
        "自我要求高",
        "有时难以做决定",
        "两种模式切换耗能",
        "害怕失控"
      ],
      "traits": [
        "弹性领导者",
        "能上能下",
        "既当指挥官又当队友",
        "动态规划高手"
      ],
      "description": "你的 E/I 和 J/P 两个维度都接近中立——你既能带队领导也能独处做事，既能规划周密也能随机应变。这种\"弹性领袖\"是难得的全能型领导者，能根据团队需要切换不同风格。但两种模式的切换会消耗大量能量，需要找到自己的节奏。",
      "loveStyle": "在感情中既能规划未来也能即兴冒险，既能带领关系前进也能跟随伴侣。需要一个能和你一起\"弹性\"相处的伴侣——既有规律又不刻板。",
      "workStyle": "适合创业者、项目总监、团队负责人等需要\"既领导又实干\"的岗位。能根据团队状态灵活切换管理风格，是最难得的 leader 类型之一。",
      "careers": [
        "创业者",
        "项目总监",
        "团队负责人",
        "自由职业者"
      ],
      "famous": "理查德·布兰森、埃隆·马斯克、贝佐斯、任正非"
    },
    "OCEAN_O_MAX": {
      "group": "大五·新探索者",
      "heroIcon": "🌌",
      "name": "宇宙漫游者",
      "tagline": "被新鲜感本身驱动的存在",
      "heroColor": "#6b21a8",
      "population": "1.2%",
      "strengths": [
        "极致好奇",
        "快速适应新事物",
        "跨领域连接",
        "永不无聊",
        "天生创造"
      ],
      "weaknesses": [
        "三分钟热度",
        "难以深入",
        "厌倦常规",
        "不稳定",
        "容易分心"
      ],
      "traits": [
        "被新刺激驱动",
        "什么都想试试",
        "跨领域联想",
        "永远找新体验",
        "无法忍受重复"
      ],
      "description": "你不是\"喜欢创新\"——你是被\"新\"本身驱动的。新餐厅、新路线、新爱好、新领域，每一次接触你没见过的东西，你的大脑都会兴奋到颤抖。常规对你来说不是无聊，是窒息。你能在一个下午内同时研究量子物理、陶艺和泰国菜，然后从中发现别人看不到的连接。",
      "loveStyle": "讨厌稳定的恋爱模式。你需要一个能和你一起永远在探索的伴侣——上周一起学攀岩，这周研究占星，下周去沙漠看星空。如果关系变得可预测，你会想逃跑。",
      "workStyle": "需要高度自由度和变化的环境。适合创意总监、产品探索、研究岗。不能忍受每天做同样的事。",
      "careers": [
        "跨界研究者",
        "创意总监",
        "产品经理",
        "咨询顾问",
        "独立创作者"
      ],
      "famous": "史蒂夫·乔布斯、爱因斯坦、达芬奇、埃隆·马斯克"
    },
    "OCEAN_O_MIN": {
      "group": "大五·传统守护",
      "heroIcon": "🏛️",
      "name": "传统守护者",
      "tagline": "只有经过时间检验的东西才值得信赖",
      "heroColor": "#78350f",
      "population": "0.9%",
      "strengths": [
        "尊重传统",
        "有深度",
        "不盲目追新",
        "稳定可靠",
        "维护核心价值"
      ],
      "weaknesses": [
        "抗拒变化",
        "对新事物焦虑",
        "难以接受不同",
        "有点固执",
        "错失机会"
      ],
      "traits": [
        "信任传统",
        "怀疑新趋势",
        "深度研究既有智慧",
        "稳定不冒进",
        "有自己的节奏"
      ],
      "description": "你不是\"保守\"——你相信\"经过时间检验的东西才有价值\"。当所有人都在追新 App、新品牌、新方法论的时候，你更愿意读一本 50 年前的书、去一家开了 30 年的老店。你能从中发现那些被新东西掩盖的本质。",
      "loveStyle": "喜欢稳定、可预期的关系模式。你想要一个和你一样重视承诺、尊重传统的人。约会流程、沟通频率、周末去哪，都希望有稳定的节奏。",
      "workStyle": "在有深厚传统的组织里能发挥最大价值。适合体制内、老牌企业、学术研究。",
      "careers": [
        "历史学者",
        "传统文化从业者",
        "法官",
        "资深顾问",
        "古籍修复"
      ],
      "famous": "康德、达尔文、陈寅恪、曾国藩"
    },
    "OCEAN_C_MAX": {
      "group": "大五·精密工匠",
      "heroIcon": "⚙️",
      "name": "精密工匠",
      "tagline": "精确到小数点后三位才放心",
      "heroColor": "#1e3a8a",
      "population": "0.7%",
      "strengths": [
        "极致精确",
        "系统构建",
        "不放过细节",
        "自律",
        "追求完美"
      ],
      "weaknesses": [
        "容易过度分析",
        "对己对人要求过高",
        "难以启动",
        "容易疲惫",
        "不允许犯错"
      ],
      "traits": [
        "每个数字要精确",
        "文件按三级文件夹",
        "每一步都核对",
        "强迫症级别有条理",
        "相信系统"
      ],
      "description": "你不是\"有条理\"——你是精确主义者。你的文件按年份/月份/日期/项目/版本分五级文件夹，每封邮件归档到对应的 17 个标签下，出门前会在脑子里过三遍所有物品清单。别人觉得你强迫症，但你知道——如果精确到 0.1%，一切都可控。",
      "loveStyle": "希望关系也像系统一样精确。你会规划好约会节奏、沟通频率、甚至吵架后的和解 SOP。伴侣需要理解你不是冷漠，是用你的方式表达认真。",
      "workStyle": "适合需要极致精确的专业领域。不适合需要快速试错的创业环境。",
      "careers": [
        "审计师",
        "精算师",
        "数据库管理员",
        "质量管理",
        "外科医生"
      ],
      "famous": "巴菲特、查理·芒格、贝佐斯、任正非"
    },
    "OCEAN_C_MIN": {
      "group": "大五·自由游民",
      "heroIcon": "🎒",
      "name": "自由游民",
      "tagline": "计划是给无趣的人写的",
      "heroColor": "#059669",
      "population": "0.6%",
      "strengths": [
        "即兴发挥",
        "灵活应变",
        "不受约束",
        "创造力高",
        "混乱中找机会"
      ],
      "weaknesses": [
        "难以长期坚持",
        "经常迟到/拖延",
        "生活混乱",
        "忘记承诺",
        "需要别人擦屁股"
      ],
      "traits": [
        "不想被计划框住",
        "想到哪做到哪",
        "不记时间也能过",
        "拒绝日程表",
        "混乱但活着"
      ],
      "description": "你不是\"随性\"——你是根本不相信计划有用。明天穿什么、去哪吃饭、下周做什么项目，你都不想提前想。生活给你什么你接什么，反而比所有人都活得顺。你能在机场临时决定改机票去另一个国家。",
      "loveStyle": "需要一个能接受你\"突然消失三天去徒步\"的伴侣。你不承诺、不计划，但会出现在对方最需要的时候。",
      "workStyle": "不适合任何需要打卡、写周报的工作。适合自由职业、咨询、内容创作。",
      "careers": [
        "自由撰稿人",
        "艺术家",
        "旅行博主",
        "独立开发者",
        "即兴表演者"
      ],
      "famous": "海明威、梵高、马可·波罗"
    },
    "OCEAN_A_MAX": {
      "group": "大五·慈悲者",
      "heroIcon": "🕊️",
      "name": "慈悲调停者",
      "tagline": "把别人的需求放在自己前面",
      "heroColor": "#be185d",
      "population": "0.8%",
      "strengths": [
        "共情极强",
        "本能先考虑别人",
        "维护和谐",
        "能调解冲突",
        "让每个人都舒服"
      ],
      "weaknesses": [
        "过度牺牲",
        "不会说不",
        "容易被利用",
        "忽视自己",
        "积累怨恨"
      ],
      "traits": [
        "本能先问你怎么样",
        "不会拒绝",
        "回避冲突",
        "觉得和谐比正确重要",
        "容易忽略自己"
      ],
      "description": "你不是\"善良\"——你是本能地把别人放在自己前面。朋友难过你先流泪，家人有困难你第一个冲上去，陌生人求助你甚至会委屈自己帮忙。别人说你\"不会保护自己\"，但在你看来——让别人舒服比自己舒服重要得多。",
      "loveStyle": "你会把伴侣照顾得无微不至，但需要学会告诉对方\"我也需要被照顾\"。",
      "workStyle": "适合大量人际协调工作。但注意别被当成\"好说话的那个人\"。",
      "careers": [
        "HR",
        "心理咨询师",
        "调解员",
        "社工",
        "教育工作者"
      ],
      "famous": "特雷莎修女、曼德拉、甘地、奥普拉"
    },
    "OCEAN_A_MIN": {
      "group": "大五·独立者",
      "heroIcon": "⚔️",
      "name": "独立骑士",
      "tagline": "不欠不求，不被需要",
      "heroColor": "#dc2626",
      "population": "0.5%",
      "strengths": [
        "完全独立",
        "不被他人影响",
        "有自己判断",
        "不依赖任何人",
        "果断决策"
      ],
      "weaknesses": [
        "显得冷漠",
        "难建立信任",
        "不会求助",
        "情感隔离",
        "可能孤独"
      ],
      "traits": [
        "不求人也不欠人",
        "不喜欢被需要",
        "自己的问题自己扛",
        "拒绝情感绑架",
        "按自己规则活"
      ],
      "description": "你不是\"冷漠\"——你相信只有自己能依靠。生病了自己扛、没钱自己赚、遇到困难自己想办法解决。不是不能信任别人，是觉得\"欠了人情就要还\"——而你不想欠任何人。",
      "loveStyle": "你需要的不是另一半，是\"尊重你独立空间的同伴\"。你爱一个人，但你不想被\"需要\"。",
      "workStyle": "适合独立贡献型岗位。不适合需要大量团队协作的环境。",
      "careers": [
        "独立咨询师",
        "研究员",
        "自由职业",
        "哲学家"
      ],
      "famous": "尼采、梭罗、卡夫卡、加缪"
    },
    "OCEAN_N_MIN": {
      "group": "大五·稳定者",
      "heroIcon": "🗿",
      "name": "磐石战士",
      "tagline": "情绪波动为零，越压越稳",
      "heroColor": "#0f766e",
      "population": "1.0%",
      "strengths": [
        "情绪稳定",
        "压力下更冷静",
        "不焦虑",
        "不恐慌",
        "长期可靠"
      ],
      "weaknesses": [
        "可能显得冷漠",
        "难体会他人情绪",
        "情绪积累可能爆发",
        "过于理性",
        "不善情感表达"
      ],
      "traits": [
        "天塌下来先查原因",
        "别人慌你不慌",
        "压力越大越清晰",
        "情绪像湖水平静",
        "几乎不焦虑"
      ],
      "description": "你不是\"稳\"——你是情绪波动为零。别人焦虑的事你觉得没必要，别人恐慌的时候你在查问题根源。考试前别人复习到崩溃你睡得香，公司裁员那天你正常上班。朋友甚至会问\"你到底有没有情绪？\"",
      "loveStyle": "你的冷静是伴侣的锚。但需要学会偶尔展示情绪——不是为了你，是让对方知道你在乎。",
      "workStyle": "危机时刻最能发挥价值。适合高压行业：手术、消防、金融交易。",
      "careers": [
        "急救医生",
        "消防员",
        "交易员",
        "飞行员",
        "危机公关"
      ],
      "famous": "基辛格、艾森豪威尔、巴菲特、邓小平"
    },
    "OCEAN_N_MAX": {
      "group": "大五·共情诗人",
      "heroIcon": "🌊",
      "name": "共情诗人",
      "tagline": "能感觉到空气里的情绪",
      "heroColor": "#a855f7",
      "population": "1.1%",
      "strengths": [
        "极强情绪感知",
        "能体会他人痛苦",
        "富有创造力",
        "深刻情感体验",
        "艺术天赋"
      ],
      "weaknesses": [
        "容易被情绪淹没",
        "对负面新闻承受不住",
        "需要独处充电",
        "容易焦虑",
        "敏感过度"
      ],
      "traits": [
        "朋友难过你先流泪",
        "能感知房间情绪",
        "看新闻会被淹没",
        "需要创作释放",
        "敏感但深刻"
      ],
      "description": "你不是\"敏感\"——你是能感知到空气里的情绪。走进一个房间，你能立刻感觉到\"刚才这里发生了不愉快\"。看一部电影可能哭半小时，朋友一句无心的话能让你难过一天。你的情绪雷达时刻开着，好处是理解一切，坏处是一切都在影响你。",
      "loveStyle": "需要一个能理解你\"不是脆弱是深刻\"的伴侣。你需要大量情感共鸣，也需要独处来恢复。",
      "workStyle": "适合艺术创作、心理咨询、设计等。不适合高压冷漠环境。",
      "careers": [
        "艺术家",
        "作家",
        "心理咨询师",
        "设计师",
        "音乐创作"
      ],
      "famous": "梵高、贝多芬、尼采、张爱玲、三毛"
    },
    "OCEAN_O_C_MAX": {
      "group": "大五·完美探索",
      "heroIcon": "🎨",
      "name": "完美探索家",
      "tagline": "既要天马行空又要精确到毫米",
      "heroColor": "#7c3aed",
      "population": "0.4%",
      "strengths": [
        "创意+精确罕见组合",
        "能把梦想变现实",
        "有长远视野又关注细节",
        "跨界能力",
        "执行力强"
      ],
      "weaknesses": [
        "对自己要求极高",
        "难以启动",
        "容易累死自己",
        "难以满意",
        "精力消耗大"
      ],
      "traits": [
        "脑子里100个创新想法",
        "每个都精确到像素",
        "既是艺术家又是工程师",
        "梦想+Excel表格",
        "不允许一个细节出错"
      ],
      "description": "MBTI 里没有你这种人。你脑子里同时装着\"重新定义这个产品的哲学\"和\"按钮的圆角到底是 8px 还是 12px\"。你能写出诗意的品牌宣言，然后做精确到小数点后三位的预算表。别人觉得你精神分裂，但你知道——伟大的东西必须同时是美的和精确的。",
      "loveStyle": "罕见而珍贵。需要一个既懂你的远大视野又能接受你对细节执念的伴侣。",
      "workStyle": "天生的创业者/产品创始人。典型如乔布斯、贝佐斯。",
      "careers": [
        "创始人/CEO",
        "产品架构师",
        "设计工程师",
        "科研创业者",
        "跨界创作者"
      ],
      "famous": "史蒂夫·乔布斯、埃隆·马斯克、达芬奇、贝佐斯"
    },
    "OCEAN_A_N_MAX": {
      "group": "大五·温柔守护",
      "heroIcon": "💫",
      "name": "温柔守护者",
      "tagline": "想保护所有人又怕保护不好",
      "heroColor": "#f472b6",
      "population": "0.4%",
      "strengths": [
        "极致共情",
        "能感知他人痛苦",
        "强烈保护欲",
        "温暖",
        "无私"
      ],
      "weaknesses": [
        "被情绪淹没",
        "焦虑",
        "过度承担",
        "不会照顾自己",
        "容易疲惫"
      ],
      "traits": [
        "能感觉到别人的痛苦",
        "想保护所有人",
        "但怕自己不够好",
        "在共情中消耗自己",
        "需要被照顾"
      ],
      "description": "MBTI 里也没有你这种人。别人难过你先流泪，别人害怕你比他还紧张，然后你想\"我能做点什么帮到他吗？但如果我做不好反而更糟怎么办？\"——你既有温柔又有焦虑。世界需要你这样的人，但你需要学会保护自己。",
      "loveStyle": "你需要一个能反过来照顾你的伴侣。你习惯做\"照顾别人的人\"，但你值得被照顾。",
      "workStyle": "适合需要高度共情的助人行业，但需要严格工作边界。",
      "careers": [
        "心理咨询师",
        "社工",
        "儿科医护",
        "动物保护",
        "临终关怀"
      ],
      "famous": "特雷莎修女、戴安娜王妃、梅丽尔·斯特里普"
    },
    "ENMEA_7": {
      "group": "九型·享乐者",
      "heroIcon": "🎉",
      "name": "狂欢旅者",
      "tagline": "被对「无聊」的恐惧追着跑",
      "heroColor": "#f59e0b",
      "population": "0.9%",
      "strengths": [
        "永远乐观",
        "能带来快乐",
        "创意丰富",
        "灵活",
        "能从坏事里看到希望"
      ],
      "weaknesses": [
        "逃避痛苦",
        "难以承诺",
        "三分钟热度",
        "逃避选择",
        "容易失去深度"
      ],
      "traits": [
        "安静10分钟受不了",
        "需要持续刺激",
        "被\"无聊\"恐惧驱动",
        "逃避负面情绪",
        "追求快乐是生存刚需"
      ],
      "description": "MBTI 的 ENFP/ESFP（对照）是\"爱创造/爱玩\"——你是被对\"无聊\"的恐惧追着跑。你一秒都不能安静，手机要在手上、音乐要放着、朋友要约着。不是因为你真的有多快乐，是因为一停下来就会感受到那些你在逃避的东西——空虚、痛苦、没有意义。",
      "loveStyle": "极度恐惧被束缚。你需要一个能和你一起玩一辈子的伴侣，但也要接受你有时会想\"逃开\"——不是不爱，是需要空间呼吸。",
      "workStyle": "适合需要持续创意和兴奋感的工作。但警惕：你可能在一个项目最困难的时候逃跑。",
      "careers": [
        "娱乐行业",
        "创意总监",
        "旅行博主",
        "游戏设计师",
        "活动策划"
      ],
      "famous": "卓别林、罗宾·威廉姆斯、爱因斯坦"
    },
    "ENMEA_8": {
      "group": "九型·挑战者",
      "heroIcon": "🔥",
      "name": "无畏战士",
      "tagline": "绝不允许别人对自己说「不」",
      "heroColor": "#b91c1c",
      "population": "0.8%",
      "strengths": [
        "极其果断",
        "能扛事",
        "保护弱者",
        "有力量",
        "不服输"
      ],
      "weaknesses": [
        "控制欲强",
        "愤怒",
        "难以示弱",
        "容易树敌",
        "感情用事"
      ],
      "traits": [
        "被管着比死还难受",
        "绝不低头",
        "你说不行我偏要试试",
        "想掌控一切",
        "愤怒来得快去得快"
      ],
      "description": "MBTI 的 ENTJ/ESTJ（对照）是\"想赢\"——你是绝不允许别人对你说\"不\"。老板说\"这个不能做\"你偏要做，父母说\"你不行\"你偏要证明自己行。控制欲不是因为你想统治别人，是因为被控制=失去自我=比死还难受。",
      "loveStyle": "你需要一个既独立又尊重你力量的伴侣。你会保护自己爱的人，但绝对不允许被任何人\"管着\"。",
      "workStyle": "天生的领袖。在混乱、需要拍板的时候最能发挥价值。",
      "careers": [
        "创始人",
        "律师",
        "军事指挥官",
        "CEO",
        "格斗家"
      ],
      "famous": "丘吉尔、拳王阿里、毛泽东、曹操"
    },
    "ENMEA_9": {
      "group": "九型·和平者",
      "heroIcon": "☮️",
      "name": "无争调停者",
      "tagline": "为了不冲突可以放弃一切选择",
      "heroColor": "#059669",
      "population": "1.0%",
      "strengths": [
        "平和",
        "能调解冲突",
        "包容",
        "耐心",
        "让别人舒服"
      ],
      "weaknesses": [
        "回避一切冲突",
        "难以做决定",
        "容易被忽视",
        "压抑自己",
        "浪费潜力"
      ],
      "traits": [
        "去哪都行吃什么都行",
        "回避需要表态的场合",
        "为了不冲突可以委屈自己",
        "内心平静最重要",
        "被动"
      ],
      "description": "MBTI 的 ISFP（对照）是\"随和\"——你是为了不冲突可以放弃一切选择。\"晚上吃什么？\"\"随便。\"\"周末去哪？\"\"都行。\"\"我们之间有问题吗？\"\"没有啊。\"——你不是没想法，是怕一旦说出来就会有冲突，而冲突会让你内心的平静碎掉。",
      "loveStyle": "你需要一个能\"逼\"你表达的伴侣。你值得拥有自己的需求，哪怕说出来可能会有一点冲突。",
      "workStyle": "你能让最紧张的团队安静下来。但需要被\"拉出来\"——你的潜力被你的回避埋没了。",
      "careers": [
        "外交官",
        "心理咨询师",
        "人事",
        "冥想导师",
        "图书馆员"
      ],
      "famous": "甘地、曼德拉、林肯"
    },
    "ENMEA_4": {
      "group": "九型·独特者",
      "heroIcon": "🎭",
      "name": "独特艺术家",
      "tagline": "被「我是不是不够独特」折磨",
      "heroColor": "#9333ea",
      "population": "0.7%",
      "strengths": [
        "高度自我意识",
        "有艺术天赋",
        "深刻",
        "能创造独特作品",
        "情感丰富"
      ],
      "weaknesses": [
        "嫉妒",
        "容易自我否定",
        "情绪起伏大",
        "难以满足",
        "过度关注自我"
      ],
      "traits": [
        "朋友圈必须发别人没发过的",
        "被\"不够独特\"折磨",
        "在普通人群中焦虑",
        "需要被看见",
        "深度体验情感"
      ],
      "description": "MBTI 的 INFP（对照）是\"有个人价值观\"——你是被\"我是不是不够独特\"这个念头反复折磨。你朋友圈发的东西必须是别人没发过的，你喜欢的音乐必须是小众的，你甚至会刻意选别人不选的路。不是因为你不想合群，是因为如果和所有人都一样，那我还是我吗？",
      "loveStyle": "你需要一个能看见你的独特性、并且不评判你的伴侣。普通的赞美不够——你需要\"看见真正的我\"。",
      "workStyle": "适合艺术创作、设计、写作等需要\"独特性\"的领域。",
      "careers": [
        "艺术家",
        "设计师",
        "作家",
        "音乐家",
        "摄影师"
      ],
      "famous": "张国荣、梵高、波德莱尔、海明威"
    },
    "INTJ_OCEAN_C_MINUS": {
      "group": "交叉·反叛规划师",
      "heroIcon": "🗺️",
      "name": "反叛建筑师",
      "tagline": "脑子里有 100 个商业计划但从不写下来",
      "heroColor": "#4c1d95",
      "population": "0.3%",
      "strengths": [
        "战略头脑",
        "敢于反叛",
        "不被规则束缚",
        "创造力强",
        "能看到别人看不到的机会"
      ],
      "weaknesses": [
        "想法太多执行太少",
        "难以坚持",
        "容易分心",
        "不确定自己真正想要什么",
        "缺乏自律"
      ],
      "traits": [
        "INTJ的战略+C-的不落地",
        "脑子里100个架构",
        "但从不写下来",
        "想到就做但做一半就换",
        "战略大师但执行废"
      ],
      "description": "MBTI 的 INTJ 是\"规划后精准执行\"——你是有 INTJ 的战略头脑但 Conscientiousness 极低。你能在 5 分钟内设计出一个完美的商业帝国，但你从来不会真的去注册公司。不是不会，是精确执行让你窒息——你想要的是\"无限可能\"的那个版本。",
      "loveStyle": "你需要一个能帮你\"把想法落地\"但又不扼杀你创造力的伴侣。你不是不靠谱，你是被自己的想象力困住了。",
      "workStyle": "适合做战略顾问、创意总监——帮别人规划，但不需要自己执行。",
      "careers": [
        "战略顾问",
        "创投",
        "创意总监",
        "天使投资人",
        "商业设计师"
      ],
      "famous": "彼得·蒂尔、马斯克（早期）、村上春树"
    },
    "ENFP_OCEAN_C_PLUS": {
      "group": "交叉·严谨梦想家",
      "heroIcon": "🚀",
      "name": "严谨梦想家",
      "tagline": "脑子里 1000 个想法每一个都要精确落地",
      "heroColor": "#db2777",
      "population": "0.3%",
      "strengths": [
        "创意+执行完美结合",
        "能把疯狂想法变现实",
        "乐观又务实",
        "有感染力又有条理",
        "天生创业家"
      ],
      "weaknesses": [
        "容易累死自己",
        "难以抉择",
        "对自己要求极高",
        "压力大",
        "需要同时做 10 件事才满足"
      ],
      "traits": [
        "ENFP的创意+C+的精确",
        "脑子里1000个想法",
        "每个都要做Excel表格",
        "梦想+数据",
        "既要浪漫又要精确"
      ],
      "description": "MBTI 的 ENFP 是\"想法发散不落地\"——你是 ENFP 但 Conscientiousness 极高。你脑子里有 1000 个疯狂创意，但每一个都有精确的预算表、时间表和 KPI。别人觉得你精神分裂——怎么能同时说\"我们要改变世界\"和\"但具体预算要精确到 17.3 万\"？但你知道——伟大的梦想 + 精确的执行 = 改变世界。",
      "loveStyle": "你是罕见的\"有梦想又靠谱\"的伴侣。需要一个能理解你的疯狂又能陪你一起落地的人。",
      "workStyle": "天生的创业家/产品经理。典型如乔布斯、马斯克。",
      "careers": [
        "创始人/CEO",
        "产品总监",
        "创新项目经理",
        "科技创业者",
        "跨界整合者"
      ],
      "famous": "史蒂夫·乔布斯、埃隆·马斯克、贝佐斯、拉里·佩奇"
    }
  }
};

window.MBTI_DATA = MBTI_DATA;
