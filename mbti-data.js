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
      "text": "和一群人出去玩了一天，你感觉：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更相信：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的事实和数据",
          "weight": 2
        },
        {
          "text": "一步步来，先看实际怎么做",
          "weight": 1
        },
        {
          "text": "先想想有什么新思路",
          "weight": -1
        },
        {
          "text": "背后的逻辑和整体框架",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做决定时你更依赖：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "逻辑和理性分析",
          "weight": 2
        },
        {
          "text": "会问清楚怎么回事，理性分析",
          "weight": 1
        },
        {
          "text": "会共情，陪他一起难过",
          "weight": -1
        },
        {
          "text": "内心的感受和直觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个截止日期，你通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前规划好，确保能按时完成",
          "weight": 2
        },
        {
          "text": "整洁有序",
          "weight": 1
        },
        {
          "text": "有点乱但能找到东西",
          "weight": -1
        },
        {
          "text": "拖到最后期限，灵感爆发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "接到一个需要和陌生人合作的任务，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到问题时，你先：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "一步步来，先看实际怎么做",
          "weight": 2
        },
        {
          "text": "已验证过的经验",
          "weight": 1
        },
        {
          "text": "长远的影响和可能性",
          "weight": -1
        },
        {
          "text": "先想想有什么新思路",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看到别人难过，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会问清楚怎么回事，理性分析",
          "weight": 2
        },
        {
          "text": "能不能达成目标",
          "weight": 1
        },
        {
          "text": "做这件事的人感受怎么样",
          "weight": -1
        },
        {
          "text": "会共情，陪他一起难过",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的书桌/工位通常是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "整洁有序",
          "weight": 2
        },
        {
          "text": "查攻略、订酒店、规划行程",
          "weight": 1
        },
        {
          "text": "说走就走，边走边想",
          "weight": -1
        },
        {
          "text": "有点乱但能找到东西",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在社交场合待久了，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做决策时，你更看重：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "已验证过的经验",
          "weight": 2
        },
        {
          "text": "写实的、有具体情节的",
          "weight": 1
        },
        {
          "text": "有深度、有隐喻的",
          "weight": -1
        },
        {
          "text": "长远的影响和可能性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "评价一个方案好坏，你先看：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "能不能达成目标",
          "weight": 2
        },
        {
          "text": "会先讲道理，分析原因",
          "weight": 1
        },
        {
          "text": "先共情，让他感受到支持",
          "weight": -1
        },
        {
          "text": "做这件事的人感受怎么样",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "旅行前，你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "查攻略、订酒店、规划行程",
          "weight": 2
        },
        {
          "text": "调整计划，把新任务加进去",
          "weight": 1
        },
        {
          "text": "觉得无所谓，灵活调整",
          "weight": -1
        },
        {
          "text": "说走就走，边走边想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一个人在家度过周末，你会觉得：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "阅读时你更喜欢：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "写实的、有具体情节的",
          "weight": 2
        },
        {
          "text": "说了什么、做了什么",
          "weight": 1
        },
        {
          "text": "背后的动机和潜台词",
          "weight": -1
        },
        {
          "text": "有深度、有隐喻的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人哭着找你帮忙，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会先讲道理，分析原因",
          "weight": 2
        },
        {
          "text": "找原因，想办法补救",
          "weight": 1
        },
        {
          "text": "先看看有没有伤到谁",
          "weight": -1
        },
        {
          "text": "先共情，让他感受到支持",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "突然收到一个临时任务，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "调整计划，把新任务加进去",
          "weight": 2
        },
        {
          "text": "有购物清单，按需购买",
          "weight": 1
        },
        {
          "text": "随心而走，看到什么买什么",
          "weight": -1
        },
        {
          "text": "觉得无所谓，灵活调整",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "面对一个需要演讲的场合，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "听别人讲故事，你更关注：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "说了什么、做了什么",
          "weight": 2
        },
        {
          "text": "具体要做哪些事",
          "weight": 1
        },
        {
          "text": "为什么要做、做成什么样",
          "weight": -1
        },
        {
          "text": "背后的动机和潜台词",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "工作中出现失误，你首先：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "找原因，想办法补救",
          "weight": 2
        },
        {
          "text": "谁对谁错，有什么证据",
          "weight": 1
        },
        {
          "text": "双方的感受和关系",
          "weight": -1
        },
        {
          "text": "先看看有没有伤到谁",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "购物时，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有购物清单，按需购买",
          "weight": 2
        },
        {
          "text": "很踏实，一切尽在掌握",
          "weight": 1
        },
        {
          "text": "很放松，享受意外的惊喜",
          "weight": -1
        },
        {
          "text": "随心而走，看到什么买什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "团队里讨论问题时，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一项任务，你首先想到：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体要做哪些事",
          "weight": 2
        },
        {
          "text": "现实主义者",
          "weight": 1
        },
        {
          "text": "有远见的理想主义者",
          "weight": -1
        },
        {
          "text": "为什么要做、做成什么样",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个争论，你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "谁对谁错，有什么证据",
          "weight": 2
        },
        {
          "text": "理性的人",
          "weight": 1
        },
        {
          "text": "温暖感性的人",
          "weight": -1
        },
        {
          "text": "双方的感受和关系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "事情按计划进行，你感觉：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很踏实，一切尽在掌握",
          "weight": 2
        },
        {
          "text": "有点不开心，但能安排好",
          "weight": 1
        },
        {
          "text": "开心，终于有点变化了",
          "weight": -1
        },
        {
          "text": "很放松，享受意外的惊喜",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "不熟悉的人给你发消息，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己更偏向：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "现实主义者",
          "weight": 2
        },
        {
          "text": "先看实操，边做边学",
          "weight": 1
        },
        {
          "text": "先看整体框架，再逐个深入",
          "weight": -1
        },
        {
          "text": "有远见的理想主义者",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己更偏向：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "理性的人",
          "weight": 2
        },
        {
          "text": "客观分析利弊",
          "weight": 1
        },
        {
          "text": "先共情，再提出建议",
          "weight": -1
        },
        {
          "text": "温暖感性的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "突然被要求加班，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点不开心，但能安排好",
          "weight": 2
        },
        {
          "text": "提前计划好要做什么",
          "weight": 1
        },
        {
          "text": "灵活安排，看心情和情况",
          "weight": -1
        },
        {
          "text": "开心，终于有点变化了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友突然约你出去，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学新东西时，你偏好：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先看实操，边做边学",
          "weight": 2
        },
        {
          "text": "走一步看一步",
          "weight": 1
        },
        {
          "text": "想象各种可能性",
          "weight": -1
        },
        {
          "text": "先看整体框架，再逐个深入",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "给朋友提建议时，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "客观分析利弊",
          "weight": 2
        },
        {
          "text": "看一下是不是有具体问题需要解决",
          "weight": 1
        },
        {
          "text": "会特别担心他的感受",
          "weight": -1
        },
        {
          "text": "先共情，再提出建议",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的日程安排通常是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前计划好要做什么",
          "weight": 2
        },
        {
          "text": "把它细化成可执行的步骤",
          "weight": 1
        },
        {
          "text": "先试试，边做边想",
          "weight": -1
        },
        {
          "text": "灵活安排，看心情和情况",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在一个新班级/新团队里，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "对未来，你更倾向于：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "走一步看一步",
          "weight": 2
        },
        {
          "text": "建筑、街道、人的样子",
          "weight": 1
        },
        {
          "text": "氛围、感觉、整体气质",
          "weight": -1
        },
        {
          "text": "想象各种可能性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队里有人被批评了，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "看一下是不是有具体问题需要解决",
          "weight": 2
        },
        {
          "text": "公平更重要",
          "weight": 1
        },
        {
          "text": "和谐更重要",
          "weight": -1
        },
        {
          "text": "会特别担心他的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个大概的方向，你更倾向：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "把它细化成可执行的步骤",
          "weight": 2
        },
        {
          "text": "有条理的人",
          "weight": 1
        },
        {
          "text": "灵活随性的人",
          "weight": -1
        },
        {
          "text": "先试试，边做边想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "工作中有人来工位和你闲聊，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看一个新城市/新地方，你更注意：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "建筑、街道、人的样子",
          "weight": 2
        },
        {
          "text": "脚踏实地、一步一个脚印",
          "weight": 1
        },
        {
          "text": "有创意和想象力",
          "weight": -1
        },
        {
          "text": "氛围、感觉、整体气质",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"公平\"和\"和谐\"哪个更重要：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "公平更重要",
          "weight": 2
        },
        {
          "text": "直接点出问题，就事论事",
          "weight": 1
        },
        {
          "text": "会考虑对方感受，委婉地说",
          "weight": -1
        },
        {
          "text": "和谐更重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己更偏向：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有条理的人",
          "weight": 2
        },
        {
          "text": "有点焦虑，赶紧调整",
          "weight": 1
        },
        {
          "text": "没事，随机应变",
          "weight": -1
        },
        {
          "text": "灵活随性的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "线上群聊活跃的时候，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得更重要的是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "脚踏实地、一步一个脚印",
          "weight": 2
        },
        {
          "text": "列步骤、查资料、做准备",
          "weight": 1
        },
        {
          "text": "想清楚整体目标和愿景",
          "weight": -1
        },
        {
          "text": "有创意和想象力",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "批评别人时，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接点出问题，就事论事",
          "weight": 2
        },
        {
          "text": "回答的逻辑和思路",
          "weight": 1
        },
        {
          "text": "对方让你感觉怎么样",
          "weight": -1
        },
        {
          "text": "会考虑对方感受，委婉地说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "事情没有按计划走，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点焦虑，赶紧调整",
          "weight": 2
        },
        {
          "text": "定期整理，保持整洁",
          "weight": 1
        },
        {
          "text": "想起来就整，忘了就算了",
          "weight": -1
        },
        {
          "text": "没事，随机应变",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和人第一次见面，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "一个项目刚开始，你先：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "列步骤、查资料、做准备",
          "weight": 2
        },
        {
          "text": "简洁直接、细节丰富",
          "weight": 1
        },
        {
          "text": "富有想象力和启发性的",
          "weight": -1
        },
        {
          "text": "想清楚整体目标和愿景",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面试/被面试时，你更关注：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "回答的逻辑和思路",
          "weight": 2
        },
        {
          "text": "拆解成小问题，逐个解决",
          "weight": 1
        },
        {
          "text": "感受一下整体气氛",
          "weight": -1
        },
        {
          "text": "对方让你感觉怎么样",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "整理房间这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "定期整理，保持整洁",
          "weight": 2
        },
        {
          "text": "赶紧搜集信息，尽快做决定",
          "weight": 1
        },
        {
          "text": "放一放，说不定过会儿就想清楚了",
          "weight": -1
        },
        {
          "text": "想起来就整，忘了就算了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要打电话联系陌生人时，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更欣赏的写作风格是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "简洁直接、细节丰富",
          "weight": 2
        },
        {
          "text": "可行性和实际条件",
          "weight": 1
        },
        {
          "text": "能带来什么改变和可能",
          "weight": -1
        },
        {
          "text": "富有想象力和启发性的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个需要解决的问题，你先：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "拆解成小问题，逐个解决",
          "weight": 2
        },
        {
          "text": "逻辑更重要，感受次之",
          "weight": 1
        },
        {
          "text": "感受更重要，逻辑次之",
          "weight": -1
        },
        {
          "text": "感受一下整体气氛",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对选项A和B还没决定好，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "赶紧搜集信息，尽快做决定",
          "weight": 2
        },
        {
          "text": "制定详细计划和时间表",
          "weight": 1
        },
        {
          "text": "先动手做，框架自然会出来",
          "weight": -1
        },
        {
          "text": "放一放，说不定过会儿就想清楚了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "公司/学校的团建活动，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一个机会，你首先评估：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "可行性和实际条件",
          "weight": 2
        },
        {
          "text": "从事实出发，一点一点分析",
          "weight": 1
        },
        {
          "text": "先从整体框架入手",
          "weight": -1
        },
        {
          "text": "能带来什么改变和可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"逻辑\"和\"感受\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "逻辑更重要，感受次之",
          "weight": 2
        },
        {
          "text": "能力强、做事靠谱的人",
          "weight": 1
        },
        {
          "text": "能理解人、让人舒服的人",
          "weight": -1
        },
        {
          "text": "感受更重要，逻辑次之",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "开始一个新项目时，你先：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "制定详细计划和时间表",
          "weight": 2
        },
        {
          "text": "按照预案应对",
          "weight": 1
        },
        {
          "text": "灵活应对，不一定有预案",
          "weight": -1
        },
        {
          "text": "先动手做，框架自然会出来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "被夸了之后，你会：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你处理信息时，通常：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "从事实出发，一点一点分析",
          "weight": 2
        },
        {
          "text": "用已有的方法解决",
          "weight": 1
        },
        {
          "text": "想想有没有更巧妙的办法",
          "weight": -1
        },
        {
          "text": "先从整体框架入手",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更愿意和哪种人共事：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "能力强、做事靠谱的人",
          "weight": 2
        },
        {
          "text": "帮他分析一下为什么会这样",
          "weight": 1
        },
        {
          "text": "先陪他哭，让他感受到温暖",
          "weight": -1
        },
        {
          "text": "能理解人、让人舒服的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "遇到突发情况，你通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按照预案应对",
          "weight": 2
        },
        {
          "text": "有固定的吃饭时间和习惯",
          "weight": 1
        },
        {
          "text": "饿了就吃，不固定时间",
          "weight": -1
        },
        {
          "text": "灵活应对，不一定有预案",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "遇到烦心事，你倾向于：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "解决问题时，你通常：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "用已有的方法解决",
          "weight": 2
        },
        {
          "text": "注重实际的人",
          "weight": 1
        },
        {
          "text": "善于发现新模式的人",
          "weight": -1
        },
        {
          "text": "想想有没有更巧妙的办法",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友失恋了找你，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他分析一下为什么会这样",
          "weight": 2
        },
        {
          "text": "数据和事实",
          "weight": 1
        },
        {
          "text": "感人的故事和真挚的情感",
          "weight": -1
        },
        {
          "text": "先陪他哭，让他感受到温暖",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "吃饭这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有固定的吃饭时间和习惯",
          "weight": 2
        },
        {
          "text": "有点不爽，调整一下安排",
          "weight": 1
        },
        {
          "text": "没事，改就改呗，灵活应对",
          "weight": -1
        },
        {
          "text": "饿了就吃，不固定时间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加聚会时，你通常待在：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己是：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "注重实际的人",
          "weight": 2
        },
        {
          "text": "看颜色、形状、细节",
          "weight": 1
        },
        {
          "text": "感受整体氛围和可能性",
          "weight": -1
        },
        {
          "text": "善于发现新模式的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做决定时，你更容易被什么说服：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "数据和事实",
          "weight": 2
        },
        {
          "text": "原则优先，人情可以灵活",
          "weight": 1
        },
        {
          "text": "人情优先，原则可以灵活",
          "weight": -1
        },
        {
          "text": "感人的故事和真挚的情感",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "周末计划突然变了，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点不爽，调整一下安排",
          "weight": 2
        },
        {
          "text": "很重要，能提高效率",
          "weight": 1
        },
        {
          "text": "有时候是束缚，但必要时还是好的",
          "weight": -1
        },
        {
          "text": "没事，改就改呗，灵活应对",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一个人旅行，你会：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "观察一个新事物时，你会：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "看颜色、形状、细节",
          "weight": 2
        },
        {
          "text": "不如\"现实\"靠谱",
          "weight": 1
        },
        {
          "text": "非常有价值，代表创新",
          "weight": -1
        },
        {
          "text": "感受整体氛围和可能性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你对\"原则\"和\"人情\"的态度：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "原则优先，人情可以灵活",
          "weight": 2
        },
        {
          "text": "会站出来主持公道",
          "weight": 1
        },
        {
          "text": "会站出来保护弱势",
          "weight": -1
        },
        {
          "text": "人情优先，原则可以灵活",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得有计划地做事：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很重要，能提高效率",
          "weight": 2
        },
        {
          "text": "不太舒服，想知道接下来做什么",
          "weight": 1
        },
        {
          "text": "很舒服，跟着感觉走",
          "weight": -1
        },
        {
          "text": "有时候是束缚，但必要时还是好的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和朋友聚餐，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "对\"可能性\"这个词，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "不如\"现实\"靠谱",
          "weight": 2
        },
        {
          "text": "做得详细具体",
          "weight": 1
        },
        {
          "text": "先定大方向，再补细节",
          "weight": -1
        },
        {
          "text": "非常有价值，代表创新",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看到有人被欺负，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会站出来主持公道",
          "weight": 2
        },
        {
          "text": "数据准确、逻辑清晰",
          "weight": 1
        },
        {
          "text": "读起来让人舒服、有温度",
          "weight": -1
        },
        {
          "text": "会站出来保护弱势",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "参加一个没有时间表的活动，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "不太舒服，想知道接下来做什么",
          "weight": 2
        },
        {
          "text": "做到完美更重要",
          "weight": 1
        },
        {
          "text": "差不多就行，不要过度追求",
          "weight": -1
        },
        {
          "text": "很舒服，跟着感觉走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在公共场合发表意见，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做计划时，你更倾向：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做得详细具体",
          "weight": 2
        },
        {
          "text": "看它能不能落地",
          "weight": 1
        },
        {
          "text": "它背后代表什么趋势",
          "weight": -1
        },
        {
          "text": "先定大方向，再补细节",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "写一份报告/文档，你更注重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "数据准确、逻辑清晰",
          "weight": 2
        },
        {
          "text": "直接、简洁",
          "weight": 1
        },
        {
          "text": "委婉、顾及对方感受",
          "weight": -1
        },
        {
          "text": "读起来让人舒服、有温度",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对\"差不多就行\"和\"做到完美\"，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "做到完美更重要",
          "weight": 2
        },
        {
          "text": "比较规律，早睡早起",
          "weight": 1
        },
        {
          "text": "比较随性，想睡就睡",
          "weight": -1
        },
        {
          "text": "差不多就行，不要过度追求",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周末在家，你更倾向：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "听到一个新想法，你首先：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "看它能不能落地",
          "weight": 2
        },
        {
          "text": "很重要，不能忽视",
          "weight": 1
        },
        {
          "text": "是用来突破常规的",
          "weight": -1
        },
        {
          "text": "它背后代表什么趋势",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己说话更：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接、简洁",
          "weight": 2
        },
        {
          "text": "想清楚整件事，分析对错",
          "weight": 1
        },
        {
          "text": "会找人倾诉或者写下来",
          "weight": -1
        },
        {
          "text": "委婉、顾及对方感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的生活习惯：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "比较规律，早睡早起",
          "weight": 2
        },
        {
          "text": "做个总结归档",
          "weight": 1
        },
        {
          "text": "先放着，说不定以后有用",
          "weight": -1
        },
        {
          "text": "比较随性，想睡就睡",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加社团/俱乐部时，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你认为\"细节\"：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "很重要，不能忽视",
          "weight": 2
        },
        {
          "text": "故事线和具体情节",
          "weight": 1
        },
        {
          "text": "中心思想和深层含义",
          "weight": -1
        },
        {
          "text": "是用来突破常规的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对委屈，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "想清楚整件事，分析对错",
          "weight": 2
        },
        {
          "text": "他的情况是否合理",
          "weight": 1
        },
        {
          "text": "这个人是不是需要帮助",
          "weight": -1
        },
        {
          "text": "会找人倾诉或者写下来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做完一件事，你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "做个总结归档",
          "weight": 2
        },
        {
          "text": "不太喜欢，更喜欢有计划",
          "weight": 1
        },
        {
          "text": "很兴奋，享受灵活应变",
          "weight": -1
        },
        {
          "text": "先放着，说不定以后有用",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "身边很吵的时候，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "读一本书，你更关注：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "故事线和具体情节",
          "weight": 2
        },
        {
          "text": "把事情做实做细",
          "weight": 1
        },
        {
          "text": "发现新机会和新模式",
          "weight": -1
        },
        {
          "text": "中心思想和深层含义",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "选择帮助一个人时，你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "他的情况是否合理",
          "weight": 2
        },
        {
          "text": "是正确的、必要的",
          "weight": 1
        },
        {
          "text": "很重要，让人温暖",
          "weight": -1
        },
        {
          "text": "这个人是不是需要帮助",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对需要灵活调整的情况，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "不太喜欢，更喜欢有计划",
          "weight": 2
        },
        {
          "text": "有明确的时间表",
          "weight": 1
        },
        {
          "text": "没有严格时间表，看情况",
          "weight": -1
        },
        {
          "text": "很兴奋，享受灵活应变",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要集中精力做事时，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己更擅长：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把事情做实做细",
          "weight": 2
        },
        {
          "text": "已有的经验和数据",
          "weight": 1
        },
        {
          "text": "直觉和灵感",
          "weight": -1
        },
        {
          "text": "发现新机会和新模式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"讲逻辑\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是正确的、必要的",
          "weight": 2
        },
        {
          "text": "会理性分析为什么不同，找共识",
          "weight": 1
        },
        {
          "text": "会试着理解对方为什么这么想",
          "weight": -1
        },
        {
          "text": "很重要，让人温暖",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "每天的时间安排，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有明确的时间表",
          "weight": 2
        },
        {
          "text": "分类放好，各有各的位置",
          "weight": 1
        },
        {
          "text": "大致知道在哪就行",
          "weight": -1
        },
        {
          "text": "没有严格时间表，看情况",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人来找你帮忙，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对复杂的情况，你更依赖：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "已有的经验和数据",
          "weight": 2
        },
        {
          "text": "都重要，但实用更胜一筹",
          "weight": 1
        },
        {
          "text": "创新更重要，实用可以补",
          "weight": -1
        },
        {
          "text": "直觉和灵感",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对别人的不同意见，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会理性分析为什么不同，找共识",
          "weight": 2
        },
        {
          "text": "工作能力和成果",
          "weight": 1
        },
        {
          "text": "人品和对待他人的态度",
          "weight": -1
        },
        {
          "text": "会试着理解对方为什么这么想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "物品摆放这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "分类放好，各有各的位置",
          "weight": 2
        },
        {
          "text": "尽快做决定，不拖",
          "weight": 1
        },
        {
          "text": "再想想，不着急决定",
          "weight": -1
        },
        {
          "text": "大致知道在哪就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "认识新朋友这件事，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"创新\"和\"实用\"哪个更重要：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "都重要，但实用更胜一筹",
          "weight": 2
        },
        {
          "text": "按攻略打卡、看景点",
          "weight": 1
        },
        {
          "text": "自由探索、发现惊喜",
          "weight": -1
        },
        {
          "text": "创新更重要，实用可以补",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "评价一个人，你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "工作能力和成果",
          "weight": 2
        },
        {
          "text": "按能力排序，该裁就裁",
          "weight": 1
        },
        {
          "text": "考虑每个人的感受，尽量公平",
          "weight": -1
        },
        {
          "text": "人品和对待他人的态度",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做决定这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "尽快做决定，不拖",
          "weight": 2
        },
        {
          "text": "提前查好攻略，规划好每天",
          "weight": 1
        },
        {
          "text": "不做太细的计划，随遇而安",
          "weight": -1
        },
        {
          "text": "再想想，不着急决定",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在会议上被点名发言，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "旅游时，你更喜欢：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "按攻略打卡、看景点",
          "weight": 2
        },
        {
          "text": "情节和动作",
          "weight": 1
        },
        {
          "text": "隐喻和深层含义",
          "weight": -1
        },
        {
          "text": "自由探索、发现惊喜",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "工作中要裁员，你会：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "按能力排序，该裁就裁",
          "weight": 2
        },
        {
          "text": "分析和解决问题",
          "weight": 1
        },
        {
          "text": "理解他人情绪",
          "weight": -1
        },
        {
          "text": "考虑每个人的感受，尽量公平",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出门旅行，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前查好攻略，规划好每天",
          "weight": 2
        },
        {
          "text": "立刻调整方案应对",
          "weight": 1
        },
        {
          "text": "见招拆招，灵活应对",
          "weight": -1
        },
        {
          "text": "不做太细的计划，随遇而安",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和人聊天时，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看电影时你更关注：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "情节和动作",
          "weight": 2
        },
        {
          "text": "具体操作步骤",
          "weight": 1
        },
        {
          "text": "理解背后的原理",
          "weight": -1
        },
        {
          "text": "隐喻和深层含义",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己更擅长：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析和解决问题",
          "weight": 2
        },
        {
          "text": "先冷静想想问题在哪",
          "weight": 1
        },
        {
          "text": "会主动修复关系",
          "weight": -1
        },
        {
          "text": "理解他人情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "工作中遇到意外情况，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "立刻调整方案应对",
          "weight": 2
        },
        {
          "text": "计划性强的人",
          "weight": 1
        },
        {
          "text": "随性灵活的人",
          "weight": -1
        },
        {
          "text": "见招拆招，灵活应对",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "独处对你来说：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "参加培训课程，你更想获得：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体操作步骤",
          "weight": 2
        },
        {
          "text": "写下来、贴标签",
          "weight": 1
        },
        {
          "text": "用思维导图、画框架图",
          "weight": -1
        },
        {
          "text": "理解背后的原理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "和人争执后，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先冷静想想问题在哪",
          "weight": 2
        },
        {
          "text": "会理性分析故事的合理性",
          "weight": 1
        },
        {
          "text": "会被深深打动，甚至掉泪",
          "weight": -1
        },
        {
          "text": "会主动修复关系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己是：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "计划性强的人",
          "weight": 2
        },
        {
          "text": "喜欢用，很有成就感",
          "weight": 1
        },
        {
          "text": "用也可以，不用也没关系",
          "weight": -1
        },
        {
          "text": "随性灵活的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和一群人一起吃饭，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你通常怎么记东西：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "写下来、贴标签",
          "weight": 2
        },
        {
          "text": "实践更重要",
          "weight": 1
        },
        {
          "text": "先把理论搞明白",
          "weight": -1
        },
        {
          "text": "用思维导图、画框架图",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个感人的故事，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会理性分析故事的合理性",
          "weight": 2
        },
        {
          "text": "逻辑严密的论证",
          "weight": 1
        },
        {
          "text": "真挚的情感和故事",
          "weight": -1
        },
        {
          "text": "会被深深打动，甚至掉泪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对于\"待办清单\"，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "喜欢用，很有成就感",
          "weight": 2
        },
        {
          "text": "很在意，尽量准时",
          "weight": 1
        },
        {
          "text": "不太在意，迟到了道歉就行",
          "weight": -1
        },
        {
          "text": "用也可以，不用也没关系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加面试的时候，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对\"理论\"和\"实践\"，你偏向：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "实践更重要",
          "weight": 2
        },
        {
          "text": "很重要，但细节也不能少",
          "weight": 1
        },
        {
          "text": "是最高层次的思考",
          "weight": -1
        },
        {
          "text": "先把理论搞明白",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你更容易被什么打动：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "逻辑严密的论证",
          "weight": 2
        },
        {
          "text": "客观更重要",
          "weight": 1
        },
        {
          "text": "同情更重要",
          "weight": -1
        },
        {
          "text": "真挚的情感和故事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "会议/活动迟到这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很在意，尽量准时",
          "weight": 2
        },
        {
          "text": "找时间做完，不喜欢半途而废",
          "weight": 1
        },
        {
          "text": "没关系，有空再做",
          "weight": -1
        },
        {
          "text": "不太在意，迟到了道歉就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在酒吧/咖啡馆等公共场所，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"大局观\"：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "很重要，但细节也不能少",
          "weight": 2
        },
        {
          "text": "总结哪些地方做得好/不好",
          "weight": 1
        },
        {
          "text": "想想下一次怎么做得更好",
          "weight": -1
        },
        {
          "text": "是最高层次的思考",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"客观\"和\"同情\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "客观更重要",
          "weight": 2
        },
        {
          "text": "效率和结果",
          "weight": 1
        },
        {
          "text": "让所有人都舒服",
          "weight": -1
        },
        {
          "text": "同情更重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一个任务做了一半还没做完，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "找时间做完，不喜欢半途而废",
          "weight": 2
        },
        {
          "text": "及时回复，不要积压",
          "weight": 1
        },
        {
          "text": "看到就回，不急着处理",
          "weight": -1
        },
        {
          "text": "没关系，有空再做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "接到推销电话，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "完成一个项目后，你会：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "总结哪些地方做得好/不好",
          "weight": 2
        },
        {
          "text": "谨慎观望，看清楚再说",
          "weight": 1
        },
        {
          "text": "兴奋地尝试，即使有风险",
          "weight": -1
        },
        {
          "text": "想想下一次怎么做得更好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你做事情更讲究：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "效率和结果",
          "weight": 2
        },
        {
          "text": "先帮他理清楚问题在哪",
          "weight": 1
        },
        {
          "text": "先拥抱他，让他感受被关心",
          "weight": -1
        },
        {
          "text": "让所有人都舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "处理邮件/消息，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "及时回复，不要积压",
          "weight": 2
        },
        {
          "text": "按时交付更重要",
          "weight": 1
        },
        {
          "text": "做到完美更重要，晚点没关系",
          "weight": -1
        },
        {
          "text": "看到就回，不急着处理",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要快速建立人脉时，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "对\"新模式\"、\"新思路\"，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "谨慎观望，看清楚再说",
          "weight": 2
        },
        {
          "text": "很少胡思乱想，比较务实",
          "weight": 1
        },
        {
          "text": "经常想象未来各种可能",
          "weight": -1
        },
        {
          "text": "兴奋地尝试，即使有风险",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "安慰一个人时，你会：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先帮他理清楚问题在哪",
          "weight": 2
        },
        {
          "text": "是一回事，对的就是好的",
          "weight": 1
        },
        {
          "text": "不完全是一回事，好的不一定对",
          "weight": -1
        },
        {
          "text": "先拥抱他，让他感受被关心",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对\"按时交付\"和\"做到完美\"，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按时交付更重要",
          "weight": 2
        },
        {
          "text": "整洁有序，东西有固定位置",
          "weight": 1
        },
        {
          "text": "有点乱但能找到东西",
          "weight": -1
        },
        {
          "text": "做到完美更重要，晚点没关系",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和人发生争论后，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "日常生活中，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "很少胡思乱想，比较务实",
          "weight": 2
        },
        {
          "text": "过去的经验和数据",
          "weight": 1
        },
        {
          "text": "对未来的直觉",
          "weight": -1
        },
        {
          "text": "经常想象未来各种可能",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"对错\"和\"好坏\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是一回事，对的就是好的",
          "weight": 2
        },
        {
          "text": "会讲道理，指出对方的逻辑漏洞",
          "weight": 1
        },
        {
          "text": "会试着理解对方为什么这样",
          "weight": -1
        },
        {
          "text": "不完全是一回事，好的不一定对",
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
          "text": "整洁有序，东西有固定位置",
          "weight": 2
        },
        {
          "text": "有点不开心，但能调整",
          "weight": 1
        },
        {
          "text": "很开心，觉得刺激有趣",
          "weight": -1
        },
        {
          "text": "有点乱但能找到东西",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和朋友一起做项目，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更相信哪种指引：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "过去的经验和数据",
          "weight": 2
        },
        {
          "text": "它解决什么实际问题",
          "weight": 1
        },
        {
          "text": "它能带来什么改变",
          "weight": -1
        },
        {
          "text": "对未来的直觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对\"不讲道理\"的人，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会讲道理，指出对方的逻辑漏洞",
          "weight": 2
        },
        {
          "text": "看能力说话，该怎么样怎么样",
          "weight": 1
        },
        {
          "text": "能力差但努力的话，多给机会",
          "weight": -1
        },
        {
          "text": "会试着理解对方为什么这样",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "别人临时改变计划，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点不开心，但能调整",
          "weight": 2
        },
        {
          "text": "记下来，以后实现",
          "weight": 1
        },
        {
          "text": "兴奋地投入进去，边做边想",
          "weight": -1
        },
        {
          "text": "很开心，觉得刺激有趣",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在陌生城市迷路了，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看到一个产品/服务，你先想：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "它解决什么实际问题",
          "weight": 2
        },
        {
          "text": "有时准有时不准，不能全信",
          "weight": 1
        },
        {
          "text": "非常可信，经常灵光一现",
          "weight": -1
        },
        {
          "text": "它能带来什么改变",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "团队里有个能力差但很努力的人，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "看能力说话，该怎么样怎么样",
          "weight": 2
        },
        {
          "text": "简洁明了，重点突出",
          "weight": 1
        },
        {
          "text": "会斟酌措辞，怕伤到别人",
          "weight": -1
        },
        {
          "text": "能力差但努力的话，多给机会",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "新的想法突然冒出来，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "记下来，以后实现",
          "weight": 2
        },
        {
          "text": "按部就班，有条不紊",
          "weight": 1
        },
        {
          "text": "灵活随性，看情况",
          "weight": -1
        },
        {
          "text": "兴奋地投入进去，边做边想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要向一群人讲解东西，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你认为\"直觉\"：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "有时准有时不准，不能全信",
          "weight": 2
        },
        {
          "text": "查资料、收集信息",
          "weight": 1
        },
        {
          "text": "想象各种可能性",
          "weight": -1
        },
        {
          "text": "非常可信，经常灵光一现",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "写邮件/消息时，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "简洁明了，重点突出",
          "weight": 2
        },
        {
          "text": "先想清楚哪种做法更合理",
          "weight": 1
        },
        {
          "text": "想清楚有没有伤害到任何人",
          "weight": -1
        },
        {
          "text": "会斟酌措辞，怕伤到别人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做事情的方式：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按部就班，有条不紊",
          "weight": 2
        },
        {
          "text": "基本完成了，做最后的检查",
          "weight": 1
        },
        {
          "text": "还没开始，最后冲刺",
          "weight": -1
        },
        {
          "text": "灵活随性，看情况",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "看到认识的人，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做重要决定前，你会：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "查资料、收集信息",
          "weight": 2
        },
        {
          "text": "先动手试，边试边调整",
          "weight": 1
        },
        {
          "text": "先理解原理，再动手",
          "weight": -1
        },
        {
          "text": "想象各种可能性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "遇到道德困境，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先想清楚哪种做法更合理",
          "weight": 2
        },
        {
          "text": "铁面无私更专业",
          "weight": 1
        },
        {
          "text": "通情达理更人性化",
          "weight": -1
        },
        {
          "text": "想清楚有没有伤害到任何人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "截止日期前一天，你通常：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "基本完成了，做最后的检查",
          "weight": 2
        },
        {
          "text": "非常重要，是成功的关键",
          "weight": 1
        },
        {
          "text": "有时候是束缚，保持灵活更重要",
          "weight": -1
        },
        {
          "text": "还没开始，最后冲刺",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "被邀请上台讲话，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学习一门新技能，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先动手试，边试边调整",
          "weight": 2
        },
        {
          "text": "谨慎，不太喜欢变化",
          "weight": 1
        },
        {
          "text": "很开放，觉得变化是机会",
          "weight": -1
        },
        {
          "text": "先理解原理，再动手",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"铁面无私\"和\"通情达理\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "铁面无私更专业",
          "weight": 2
        },
        {
          "text": "能正视并改进",
          "weight": 1
        },
        {
          "text": "接受自己的不完美，对自己温柔",
          "weight": -1
        },
        {
          "text": "通情达理更人性化",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"计划\"：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常重要，是成功的关键",
          "weight": 2
        },
        {
          "text": "有固定的作息时间",
          "weight": 1
        },
        {
          "text": "睡到自然醒，看心情",
          "weight": -1
        },
        {
          "text": "有时候是束缚，保持灵活更重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "加入一个新的微信群，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己对\"变化\"：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "谨慎，不太喜欢变化",
          "weight": 2
        },
        {
          "text": "具体事件和数据",
          "weight": 1
        },
        {
          "text": "背后的趋势和模式",
          "weight": -1
        },
        {
          "text": "很开放，觉得变化是机会",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "对自己的缺点，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "能正视并改进",
          "weight": 2
        },
        {
          "text": "理性、冷静",
          "weight": 1
        },
        {
          "text": "温暖、有人情味",
          "weight": -1
        },
        {
          "text": "接受自己的不完美，对自己温柔",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "每天早晨：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有固定的作息时间",
          "weight": 2
        },
        {
          "text": "提前规划好时间节点",
          "weight": 1
        },
        {
          "text": "不喜欢定死，灵活安排",
          "weight": -1
        },
        {
          "text": "睡到自然醒，看心情",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和不太熟的人一起吃饭，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看新闻时你更关注：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体事件和数据",
          "weight": 2
        },
        {
          "text": "做实实在在的事",
          "weight": 1
        },
        {
          "text": "思考和想象",
          "weight": -1
        },
        {
          "text": "背后的趋势和模式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你给人的感觉更：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "理性、冷静",
          "weight": 2
        },
        {
          "text": "按规矩来，该怎么样怎么样",
          "weight": 1
        },
        {
          "text": "想想是不是有什么难处",
          "weight": -1
        },
        {
          "text": "温暖、有人情味",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个新项目的截止日期，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前规划好时间节点",
          "weight": 2
        },
        {
          "text": "尽量避免，出了就赶紧解决",
          "weight": 1
        },
        {
          "text": "是生活的调味剂，享受变化",
          "weight": -1
        },
        {
          "text": "不喜欢定死，灵活安排",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "身边有人在聊天时，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更愿意花时间：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做实实在在的事",
          "weight": 2
        },
        {
          "text": "先搞清楚已有的事实",
          "weight": 1
        },
        {
          "text": "探索未知的可能性",
          "weight": -1
        },
        {
          "text": "思考和想象",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对朋友借钱不还，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "按规矩来，该怎么样怎么样",
          "weight": 2
        },
        {
          "text": "有时会影响判断，要控制",
          "weight": 1
        },
        {
          "text": "是真实的、重要的，不能忽视",
          "weight": -1
        },
        {
          "text": "想想是不是有什么难处",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对\"意外\"这件事，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "尽量避免，出了就赶紧解决",
          "weight": 2
        },
        {
          "text": "分门别类整理好",
          "weight": 1
        },
        {
          "text": "大致归类就行，不想太费劲",
          "weight": -1
        },
        {
          "text": "是生活的调味剂，享受变化",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要说服别人接受你的观点，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对\"已知事实\"和\"未知可能\"，你：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "先搞清楚已有的事实",
          "weight": 2
        },
        {
          "text": "从头读到尾，注重细节",
          "weight": 1
        },
        {
          "text": "先想想大框架",
          "weight": -1
        },
        {
          "text": "探索未知的可能性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"情绪\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "有时会影响判断，要控制",
          "weight": 2
        },
        {
          "text": "列出优缺点，理性权衡",
          "weight": 1
        },
        {
          "text": "先想想会让谁开心、谁难受",
          "weight": -1
        },
        {
          "text": "是真实的、重要的，不能忽视",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "整理信息/资料时，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "分门别类整理好",
          "weight": 2
        },
        {
          "text": "严格按计划更靠谱",
          "weight": 1
        },
        {
          "text": "保持灵活更靠谱",
          "weight": -1
        },
        {
          "text": "大致归类就行，不想太费劲",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友喊你出去玩，但你想宅，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累但能撑住",
          "weight": 2
        },
        {
          "text": "感觉还行，独处也不错",
          "weight": 1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "读一篇文章，你会：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "从头读到尾，注重细节",
          "weight": 2
        },
        {
          "text": "明确的时间表和具体步骤",
          "weight": 1
        },
        {
          "text": "先看整体架构，再看细节",
          "weight": -1
        },
        {
          "text": "先想想大框架",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做一个重要决定，你会：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "列出优缺点，理性权衡",
          "weight": 2
        },
        {
          "text": "质量、性能、实用性",
          "weight": 1
        },
        {
          "text": "好看、舒服、他喜欢",
          "weight": -1
        },
        {
          "text": "先想想会让谁开心、谁难受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对\"保持灵活\"和\"严格按计划\"，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "严格按计划更靠谱",
          "weight": 2
        },
        {
          "text": "谨慎，不喜欢突然改变",
          "weight": 1
        },
        {
          "text": "很开放，享受新鲜事",
          "weight": -1
        },
        {
          "text": "保持灵活更靠谱",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在地铁/公交上，你通常：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "感觉还行，独处也不错",
          "weight": 2
        },
        {
          "text": "有点累想回家",
          "weight": 1
        },
        {
          "text": "找个安静角落待着",
          "weight": -1
        },
        {
          "text": "等着别人来和我说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "工作方案中，你更喜欢：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "明确的时间表和具体步骤",
          "weight": 2
        },
        {
          "text": "做事靠谱、注重实际的人",
          "weight": 1
        },
        {
          "text": "敢想敢做、有想象力的人",
          "weight": -1
        },
        {
          "text": "先看整体架构，再看细节",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "帮朋友选东西，你更看重：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "质量、性能、实用性",
          "weight": 2
        },
        {
          "text": "规则是定好的就要遵守",
          "weight": 1
        },
        {
          "text": "灵活变通，看情况调整",
          "weight": -1
        },
        {
          "text": "好看、舒服、他喜欢",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己对\"改变\"：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "谨慎，不喜欢突然改变",
          "weight": 2
        },
        {
          "text": "制定详细的计划",
          "weight": 1
        },
        {
          "text": "先动手试试，不行再调整",
          "weight": -1
        },
        {
          "text": "很开放，享受新鲜事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要做自我介绍时，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "有点累想回家",
          "weight": 2
        },
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得哪种人更有魅力：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "做事靠谱、注重实际的人",
          "weight": 2
        },
        {
          "text": "找例子、类比，帮助理解",
          "weight": 1
        },
        {
          "text": "想想它能引申出什么",
          "weight": -1
        },
        {
          "text": "敢想敢做、有想象力的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"规则\"和\"灵活\"：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "规则是定好的就要遵守",
          "weight": 2
        },
        {
          "text": "礼貌接受，但心里不一定认同",
          "weight": 1
        },
        {
          "text": "会特别开心，甚至有点不好意思",
          "weight": -1
        },
        {
          "text": "灵活变通，看情况调整",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做一件事前你会：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "制定详细的计划",
          "weight": 2
        },
        {
          "text": "非常认同，今天的事今天做",
          "weight": 1
        },
        {
          "text": "不一定，看情况",
          "weight": -1
        },
        {
          "text": "先动手试试，不行再调整",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "团队讨论冷场了，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "精疲力竭需要独处恢复",
          "weight": 2
        },
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -1
        },
        {
          "text": "觉得消耗很大，想自己待会儿",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "理解一个新概念时，你先：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "找例子、类比，帮助理解",
          "weight": 2
        },
        {
          "text": "应该遵守，有道理的",
          "weight": 1
        },
        {
          "text": "可以灵活调整，不必死守",
          "weight": -1
        },
        {
          "text": "想想它能引申出什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人夸你时，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "礼貌接受，但心里不一定认同",
          "weight": 2
        },
        {
          "text": "先问清楚是什么事，再判断",
          "weight": 1
        },
        {
          "text": "先共情，再决定要不要帮",
          "weight": -1
        },
        {
          "text": "会特别开心，甚至有点不好意思",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "今天的事今天做，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常认同，今天的事今天做",
          "weight": 2
        },
        {
          "text": "秩序更重要，带来安全感",
          "weight": 1
        },
        {
          "text": "自由更重要，不要被束缚",
          "weight": -1
        },
        {
          "text": "不一定，看情况",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人找你倾诉烦恼，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋且充满能量，还想继续",
          "weight": 2
        },
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 1
        },
        {
          "text": "自然地加入对话",
          "weight": -1
        },
        {
          "text": "主动上前打招呼，很快认识",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对规则和规范，你觉得：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "应该遵守，有道理的",
          "weight": 2
        },
        {
          "text": "有时候会有，但更相信实干",
          "weight": 1
        },
        {
          "text": "非常推崇，觉得是创造力的源泉",
          "weight": -1
        },
        {
          "text": "可以灵活调整，不必死守",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "一个陌生人向你求助，你：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "先问清楚是什么事，再判断",
          "weight": 2
        },
        {
          "text": "逻辑型的人",
          "weight": 1
        },
        {
          "text": "共情型的人",
          "weight": -1
        },
        {
          "text": "先共情，再决定要不要帮",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"秩序\"和\"自由\"：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "秩序更重要，带来安全感",
          "weight": 2
        },
        {
          "text": "做总结，归档资料",
          "weight": 1
        },
        {
          "text": "先放着，想不起来就算了",
          "weight": -1
        },
        {
          "text": "自由更重要，不要被束缚",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一个人逛商场/超市，你：你：",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "挺开心的，和大家在一起不累",
          "weight": 2
        },
        {
          "text": "有点累但能撑住",
          "weight": 1
        },
        {
          "text": "先观察一会儿再开口",
          "weight": -1
        },
        {
          "text": "自然地加入对话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你对\"灵感\"的态度：",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "有时候会有，但更相信实干",
          "weight": 2
        },
        {
          "text": "具体的事实和数据",
          "weight": 1
        },
        {
          "text": "背后的逻辑和整体框架",
          "weight": -1
        },
        {
          "text": "非常推崇，觉得是创造力的源泉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己是：",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "逻辑型的人",
          "weight": 2
        },
        {
          "text": "逻辑和理性分析",
          "weight": 1
        },
        {
          "text": "内心的感受和直觉",
          "weight": -1
        },
        {
          "text": "共情型的人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "完成任务后，你：",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "做总结，归档资料",
          "weight": 2
        },
        {
          "text": "提前规划好，确保能按时完成",
          "weight": 1
        },
        {
          "text": "拖到最后期限，灵感爆发",
          "weight": -1
        },
        {
          "text": "先放着，想不起来就算了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在一个新的社交场合，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很快和周围人聊起来",
          "weight": 2
        },
        {
          "text": "愿意主动认识新朋友",
          "weight": 1
        },
        {
          "text": "等别人来找你",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "独处一整天后，你会（比如朋友、工作、日常中）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "觉得不够，想找人聊",
          "weight": 2
        },
        {
          "text": "有点想发条消息给谁",
          "weight": 1
        },
        {
          "text": "挺舒服的，再待会儿",
          "weight": -1
        },
        {
          "text": "完全恢复了，很享受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加完一个大型聚会，你需要（回想一下你最近一次遇到这种情况）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻约下一场",
          "weight": 2
        },
        {
          "text": "回家就能继续聊很久",
          "weight": 1
        },
        {
          "text": "独处半小时缓冲",
          "weight": -1
        },
        {
          "text": "独处一整晚恢复能量",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "当你有好消息时，你（诚实面对自己）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻打电话告诉所有人",
          "weight": 2
        },
        {
          "text": "分享给身边几个朋友",
          "weight": 1
        },
        {
          "text": "只告诉最亲近的人",
          "weight": -1
        },
        {
          "text": "自己偷偷高兴就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在团队讨论中，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "抢着发言，说很多",
          "weight": 2
        },
        {
          "text": "积极回应别人的话",
          "weight": 1
        },
        {
          "text": "等轮到自己才说",
          "weight": -1
        },
        {
          "text": "更愿意写下来再分享",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "面对一个需要快速建立关系的新项目，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "热情地和每个队友打招呼",
          "weight": 2
        },
        {
          "text": "主动和邻座的人聊起来",
          "weight": 1
        },
        {
          "text": "先专注手头的事",
          "weight": -1
        },
        {
          "text": "等别人破冰再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周末到了，你更倾向（比如朋友、工作、日常中）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "约一群人出去吃饭唱歌",
          "weight": 2
        },
        {
          "text": "和一两个朋友逛逛",
          "weight": 1
        },
        {
          "text": "在家刷刷手机",
          "weight": -1
        },
        {
          "text": "一个人做点自己的事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在陌生电话销售/客服沟通中，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "聊得比对方还多",
          "weight": 2
        },
        {
          "text": "能流畅地对话",
          "weight": 1
        },
        {
          "text": "尽快结束通话",
          "weight": -1
        },
        {
          "text": "尽量避免接陌生电话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友组织的旅行，你通常（诚实面对自己）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "帮着拉人组局",
          "weight": 2
        },
        {
          "text": "积极参与行程讨论",
          "weight": 1
        },
        {
          "text": "跟着安排走就好",
          "weight": -1
        },
        {
          "text": "不太想去凑热闹",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在公司/班级里，你更像",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "大家的中心，很多人找你",
          "weight": 2
        },
        {
          "text": "活跃分子",
          "weight": 1
        },
        {
          "text": "安静的参与者",
          "weight": -1
        },
        {
          "text": "几乎不被注意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "当情绪低落时，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "找人倾诉能好很多",
          "weight": 2
        },
        {
          "text": "有人陪伴就行",
          "weight": 1
        },
        {
          "text": "想一个人待着消化",
          "weight": -1
        },
        {
          "text": "独处让我恢复得最快",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "新环境里，你通常（比如朋友、工作、日常中）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很快认识一圈新朋友",
          "weight": 2
        },
        {
          "text": "一两天就适应了",
          "weight": 1
        },
        {
          "text": "需要一周以上",
          "weight": -1
        },
        {
          "text": "很久才敢开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "收到一封很长的群邮件，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "逐条回复每个人",
          "weight": 2
        },
        {
          "text": "只看重要的人发的",
          "weight": 1
        },
        {
          "text": "看完先放着",
          "weight": -1
        },
        {
          "text": "忽略不看",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "让你连续参加三天社交活动，你会（诚实面对自己）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "意犹未尽",
          "weight": 2
        },
        {
          "text": "有点累但能撑",
          "weight": 1
        },
        {
          "text": "需要恢复一下",
          "weight": -1
        },
        {
          "text": "第三天根本不想出门",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在线上群聊中，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "经常刷屏，发很多消息",
          "weight": 2
        },
        {
          "text": "偶尔插话",
          "weight": 1
        },
        {
          "text": "看为主，很少发",
          "weight": -1
        },
        {
          "text": "基本潜水不说话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和人聊天话题冷下来时，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻找新话题",
          "weight": 2
        },
        {
          "text": "有点尴尬但能救场",
          "weight": 1
        },
        {
          "text": "安静地等",
          "weight": -1
        },
        {
          "text": "觉得无所谓",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "收到一个派对邀请，你（比如朋友、工作、日常中）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻答应，还问能不能带人",
          "weight": 2
        },
        {
          "text": "有点犹豫但还是去",
          "weight": 1
        },
        {
          "text": "婉拒，说有别的事",
          "weight": -1
        },
        {
          "text": "从不参加派对",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人说你\"话多\"，你觉得（回想一下你最近一次遇到这种情况）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "是赞美，说明我活跃",
          "weight": 2
        },
        {
          "text": "好吧有时候是这样",
          "weight": 1
        },
        {
          "text": "可能是我太烦了",
          "weight": -1
        },
        {
          "text": "我其实话很少啊",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要联系一个好久没聊的朋友，你（诚实面对自己）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "直接打过去",
          "weight": 2
        },
        {
          "text": "发个长消息问候",
          "weight": 1
        },
        {
          "text": "简短发条消息",
          "weight": -1
        },
        {
          "text": "算了，不想打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得自己能量的主要来源是",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和人互动",
          "weight": 2
        },
        {
          "text": "有选择的社交",
          "weight": 1
        },
        {
          "text": "独处休息",
          "weight": -1
        },
        {
          "text": "一个人做事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在咖啡厅/餐厅里，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "能和邻桌聊起来",
          "weight": 2
        },
        {
          "text": "对服务员也很客气热情",
          "weight": 1
        },
        {
          "text": "安静吃饭不说话",
          "weight": -1
        },
        {
          "text": "戴耳机不想被打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加比赛/演讲这类要上台的活动，你（比如朋友、工作、日常中）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋，享受被关注",
          "weight": 2
        },
        {
          "text": "有点紧张但能发挥",
          "weight": 1
        },
        {
          "text": "尽量回避这种场合",
          "weight": -1
        },
        {
          "text": "绝不可能上台",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你说话的节奏通常是（回想一下你最近一次遇到这种情况）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "快，想到就说",
          "weight": 2
        },
        {
          "text": "适中，自然",
          "weight": 1
        },
        {
          "text": "慢一些，想清楚再说",
          "weight": -1
        },
        {
          "text": "非常谨慎，很少开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "认识一个新朋友，你通常（诚实面对自己）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一周内就熟了",
          "weight": 2
        },
        {
          "text": "几次见面后比较熟",
          "weight": 1
        },
        {
          "text": "需要一段时间",
          "weight": -1
        },
        {
          "text": "很久都不会深交",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要找灵感时，你会",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和不同的人聊想法",
          "weight": 2
        },
        {
          "text": "看看别人怎么说",
          "weight": 1
        },
        {
          "text": "自己先想想",
          "weight": -1
        },
        {
          "text": "一个人冥想或散步",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你认为一个好的周末应该",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和人在一起才叫周末",
          "weight": 2
        },
        {
          "text": "有社交有独处最好",
          "weight": 1
        },
        {
          "text": "独处为主，偶尔聚会",
          "weight": -1
        },
        {
          "text": "完全自己安排时间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "电话铃响了，你的反应（比如朋友、工作、日常中）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻接",
          "weight": 2
        },
        {
          "text": "看是谁再决定",
          "weight": 1
        },
        {
          "text": "让对方留言",
          "weight": -1
        },
        {
          "text": "尽量不接电话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在图书馆/自习室这种安静场合，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "不舒服，待不住",
          "weight": 2
        },
        {
          "text": "能安静但偶尔想说",
          "weight": 1
        },
        {
          "text": "很自然",
          "weight": -1
        },
        {
          "text": "完全放松",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得自己是个\"好聊天的人\"（诚实面对自己）",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "是，我很会聊",
          "weight": 2
        },
        {
          "text": "大多数时候是",
          "weight": 1
        },
        {
          "text": "不太是",
          "weight": -1
        },
        {
          "text": "完全不是",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "遇到认识的人但不太熟，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动打招呼聊几句",
          "weight": 2
        },
        {
          "text": "点下头微笑",
          "weight": 1
        },
        {
          "text": "假装没看到",
          "weight": -1
        },
        {
          "text": "赶紧绕路走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做一件事时，你更关注",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的步骤和细节",
          "weight": 2
        },
        {
          "text": "当下怎么做最实际",
          "weight": 1
        },
        {
          "text": "背后的原理和意义",
          "weight": -1
        },
        {
          "text": "长远来看这件事的价值",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"可能性\"和\"现实\"哪个更重要（比如朋友、工作、日常中）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "现实，脚踏实地",
          "weight": 2
        },
        {
          "text": "先看现实有没有",
          "weight": 1
        },
        {
          "text": "可能性，敢想才有未来",
          "weight": -1
        },
        {
          "text": "未来的想象空间更重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "读一本书时，你更关注（回想一下你最近一次遇到这种情况）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的情节和人物故事",
          "weight": 2
        },
        {
          "text": "书里教的实用方法",
          "weight": 1
        },
        {
          "text": "作者想表达的思想",
          "weight": -1
        },
        {
          "text": "这本书能带来什么启发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"想太多\"，你觉得（诚实面对自己）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "没有，我很实际",
          "weight": 2
        },
        {
          "text": "还好吧",
          "weight": 1
        },
        {
          "text": "可能有点",
          "weight": -1
        },
        {
          "text": "是，我经常思考深层问题",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到一个新点子，你首先想",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "能不能落地，有什么风险",
          "weight": 2
        },
        {
          "text": "需要什么资源去实现",
          "weight": 1
        },
        {
          "text": "这个想法背后的逻辑",
          "weight": -1
        },
        {
          "text": "它能带来什么变革",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更容易记住",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的数字和事实",
          "weight": 2
        },
        {
          "text": "事情发生的时间地点",
          "weight": 1
        },
        {
          "text": "概念和理论框架",
          "weight": -1
        },
        {
          "text": "模式和规律",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "当有人给你讲一个抽象概念，你（比如朋友、工作、日常中）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "希望用例子说明白",
          "weight": 2
        },
        {
          "text": "想知道具体怎么用",
          "weight": 1
        },
        {
          "text": "觉得挺有意思",
          "weight": -1
        },
        {
          "text": "能快速把握本质",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看一部电影，你更在意（回想一下你最近一次遇到这种情况）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "画面是不是精美",
          "weight": 2
        },
        {
          "text": "故事好不好看",
          "weight": 1
        },
        {
          "text": "有没有深层含义",
          "weight": -1
        },
        {
          "text": "能给我什么启发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "解决问题时，你倾向于（诚实面对自己）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "用已被验证过的方法",
          "weight": 2
        },
        {
          "text": "一步步来，稳妥就好",
          "weight": 1
        },
        {
          "text": "寻找新的思路",
          "weight": -1
        },
        {
          "text": "重构整个问题框架",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"直觉\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "不可靠，要靠事实",
          "weight": 2
        },
        {
          "text": "有时候准但还是要验证",
          "weight": 1
        },
        {
          "text": "挺重要的参考",
          "weight": -1
        },
        {
          "text": "非常信任自己的直觉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一堆原始数据，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "耐心整理成表格",
          "weight": 2
        },
        {
          "text": "想知道怎么用这些数据",
          "weight": 1
        },
        {
          "text": "看到数据背后的规律",
          "weight": -1
        },
        {
          "text": "发现数据暗示的趋势",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做计划时，你（比如朋友、工作、日常中）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "列详细的步骤清单",
          "weight": 2
        },
        {
          "text": "先搞清楚现有资源",
          "weight": 1
        },
        {
          "text": "有个大概方向就行",
          "weight": -1
        },
        {
          "text": "留足调整空间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学一个新技能，你更关注（回想一下你最近一次遇到这种情况）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的操作步骤",
          "weight": 2
        },
        {
          "text": "先能做出来再说",
          "weight": 1
        },
        {
          "text": "理解背后的原理",
          "weight": -1
        },
        {
          "text": "掌握这个技能的思维方式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"不切实际\"，你觉得（诚实面对自己）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "是，我太理想了",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "还好吧",
          "weight": -1
        },
        {
          "text": "不，我是超前于现实的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"经验\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "非常宝贵，要多积累",
          "weight": 2
        },
        {
          "text": "经验很有用但也会限制思维",
          "weight": 1
        },
        {
          "text": "经验是双刃剑",
          "weight": -1
        },
        {
          "text": "经验会让人墨守成规",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "听人讲话时，你更在意",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "他具体说了什么",
          "weight": 2
        },
        {
          "text": "有没有干货实用信息",
          "weight": 1
        },
        {
          "text": "他想表达的核心观点",
          "weight": -1
        },
        {
          "text": "他话里没说出来的意思",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "写一份报告，你（比如朋友、工作、日常中）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把每个细节都写清楚",
          "weight": 2
        },
        {
          "text": "先写重要的部分",
          "weight": 1
        },
        {
          "text": "注重逻辑框架",
          "weight": -1
        },
        {
          "text": "想让读的人有启发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "当有人提出不同看法，你首先（回想一下你最近一次遇到这种情况）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "看他说的有没有事实依据",
          "weight": 2
        },
        {
          "text": "能不能行得通",
          "weight": 1
        },
        {
          "text": "想他为什么会有这个想法",
          "weight": -1
        },
        {
          "text": "他是不是看到了我没看到的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"创意\"（诚实面对自己）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "太飘了，要落地",
          "weight": 2
        },
        {
          "text": "好创意要能执行",
          "weight": 1
        },
        {
          "text": "创意很珍贵",
          "weight": -1
        },
        {
          "text": "创意是进步的源泉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "回忆一件事，你更容易记起",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的场景和细节",
          "weight": 2
        },
        {
          "text": "当时发生了什么",
          "weight": 1
        },
        {
          "text": "那件事意味着什么",
          "weight": -1
        },
        {
          "text": "它改变了什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看一张图表，你首先注意到",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的数值",
          "weight": 2
        },
        {
          "text": "数据的变化方向",
          "weight": 1
        },
        {
          "text": "图表想说明什么",
          "weight": -1
        },
        {
          "text": "数据暗示的未来趋势",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己更像（比如朋友、工作、日常中）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "实干家",
          "weight": 2
        },
        {
          "text": "务实派",
          "weight": 1
        },
        {
          "text": "思考者",
          "weight": -1
        },
        {
          "text": "梦想家",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"太理想化\"（回想一下你最近一次遇到这种情况）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "可能是",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "还好吧",
          "weight": -1
        },
        {
          "text": "理想是方向，现实是路径",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到选择题，你（诚实面对自己）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "列利弊清单打分",
          "weight": 2
        },
        {
          "text": "考虑实际可行性",
          "weight": 1
        },
        {
          "text": "看哪个更符合逻辑",
          "weight": -1
        },
        {
          "text": "看哪个更有未来价值",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "读新闻，你更关注",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "发生了什么事",
          "weight": 2
        },
        {
          "text": "事情进展如何",
          "weight": 1
        },
        {
          "text": "为什么会发生",
          "weight": -1
        },
        {
          "text": "这事会带来什么影响",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"重复的工作\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "熟能生巧，挺好",
          "weight": 2
        },
        {
          "text": "习惯了就快",
          "weight": 1
        },
        {
          "text": "可以想办法优化",
          "weight": -1
        },
        {
          "text": "应该被自动化取代",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看地图时，你更关注（比如朋友、工作、日常中）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的街道和地标",
          "weight": 2
        },
        {
          "text": "怎么最快到达",
          "weight": 1
        },
        {
          "text": "地图的整体布局",
          "weight": -1
        },
        {
          "text": "还有哪些没探索过的地方",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对一个新城市，你想（回想一下你最近一次遇到这种情况）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "找好吃的餐厅",
          "weight": 2
        },
        {
          "text": "了解当地的风土人情",
          "weight": 1
        },
        {
          "text": "搞清楚城市布局",
          "weight": -1
        },
        {
          "text": "发现一些小众的地方",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更信任（诚实面对自己）",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "亲眼看到的事实",
          "weight": 2
        },
        {
          "text": "多个来源确认过的",
          "weight": 1
        },
        {
          "text": "逻辑推理出来的",
          "weight": -1
        },
        {
          "text": "自己的直觉判断",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己是个\"细节控\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "是，注意到很多细节",
          "weight": 2
        },
        {
          "text": "比较注意",
          "weight": 1
        },
        {
          "text": "还好",
          "weight": -1
        },
        {
          "text": "不，我看大局",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做决定时你更依赖",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "逻辑和理性分析",
          "weight": 2
        },
        {
          "text": "先问清楚再判断",
          "weight": 1
        },
        {
          "text": "会考虑每个人的感受",
          "weight": -1
        },
        {
          "text": "自己内心的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友找你倾诉烦心事，你会（比如朋友、工作、日常中）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他分析问题出在哪里",
          "weight": 2
        },
        {
          "text": "给他提供解决方案",
          "weight": 1
        },
        {
          "text": "先共情，听他说完",
          "weight": -1
        },
        {
          "text": "陪着他，让他好受些",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己是个\"理性\"的人（回想一下你最近一次遇到这种情况）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是，情绪很少影响判断",
          "weight": 2
        },
        {
          "text": "大多数时候是",
          "weight": 1
        },
        {
          "text": "挺感性的",
          "weight": -1
        },
        {
          "text": "完全跟着感觉走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "讨论问题时，你更在意（诚实面对自己）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "谁的逻辑站得住脚",
          "weight": 2
        },
        {
          "text": "是不是客观的",
          "weight": 1
        },
        {
          "text": "会不会伤害到谁",
          "weight": -1
        },
        {
          "text": "大家是不是感觉舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个让你愤怒的情况，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "冷静地分析怎么解决",
          "weight": 2
        },
        {
          "text": "先忍住情绪再说",
          "weight": 1
        },
        {
          "text": "能感觉到自己的生气",
          "weight": -1
        },
        {
          "text": "情绪比较直接地表现出来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人夸你\"讲道理\"，你觉得",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是，我很看重这点",
          "weight": 2
        },
        {
          "text": "还行吧",
          "weight": 1
        },
        {
          "text": "有时候太讲道理了",
          "weight": -1
        },
        {
          "text": "我更看重人情味",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看电影时，你更容易（比如朋友、工作、日常中）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析剧情的合理性",
          "weight": 2
        },
        {
          "text": "看电影用了什么技巧",
          "weight": 1
        },
        {
          "text": "被感动到哭",
          "weight": -1
        },
        {
          "text": "完全代入角色的情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "给朋友提建议时，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接说问题在哪",
          "weight": 2
        },
        {
          "text": "委婉地说但还是说清楚",
          "weight": 1
        },
        {
          "text": "先铺垫再提",
          "weight": -1
        },
        {
          "text": "尽量不直接提负面的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "一个决定让一部分人不高兴，你会（诚实面对自己）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "如果是对的就坚持",
          "weight": 2
        },
        {
          "text": "权衡利弊选最优",
          "weight": 1
        },
        {
          "text": "尽量让大家都满意",
          "weight": -1
        },
        {
          "text": "宁可委屈自己也不想得罪人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"公平\"和\"和谐\"哪个重要",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "公平，每个人该得什么",
          "weight": 2
        },
        {
          "text": "公平为主，也要考虑感受",
          "weight": 1
        },
        {
          "text": "和谐更重要",
          "weight": -1
        },
        {
          "text": "和谐第一，关系最重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "当你发现自己错了，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "立刻承认并修正",
          "weight": 2
        },
        {
          "text": "承认但解释一下为什么",
          "weight": 1
        },
        {
          "text": "有点难以启齿",
          "weight": -1
        },
        {
          "text": "很难开口认错",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人说你\"太冷漠\"，你觉得（比如朋友、工作、日常中）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "没有，我只是理性",
          "weight": 2
        },
        {
          "text": "可能有时候显得冷",
          "weight": 1
        },
        {
          "text": "确实会，我在学着改善",
          "weight": -1
        },
        {
          "text": "我其实很敏感的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "收到别人的批评，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "首先看批评有没有道理",
          "weight": 2
        },
        {
          "text": "先让自己冷静一下",
          "weight": 1
        },
        {
          "text": "会有点受伤",
          "weight": -1
        },
        {
          "text": "情绪反应挺大的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个不开心的同事/同学，你（诚实面对自己）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "关心一下他怎么了",
          "weight": 2
        },
        {
          "text": "如果和我有关就解释",
          "weight": 1
        },
        {
          "text": "给他留一点空间",
          "weight": -1
        },
        {
          "text": "主动安慰他",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"客观\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "非常重要，要追求",
          "weight": 2
        },
        {
          "text": "很重要但不能绝对",
          "weight": 1
        },
        {
          "text": "不可能完全客观",
          "weight": -1
        },
        {
          "text": "没必要那么客观",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友之间闹矛盾找你评理，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他们分析对错",
          "weight": 2
        },
        {
          "text": "劝他们各让一步",
          "weight": 1
        },
        {
          "text": "看谁更委屈",
          "weight": -1
        },
        {
          "text": "不想卷入这种事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"情绪\"（比如朋友、工作、日常中）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "要控制，不能影响判断",
          "weight": 2
        },
        {
          "text": "是人的正常反应",
          "weight": 1
        },
        {
          "text": "是重要的信号",
          "weight": -1
        },
        {
          "text": "是生活的调味剂",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做一件事没做好，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析失败原因，下次改进",
          "weight": 2
        },
        {
          "text": "有点挫败但很快调整",
          "weight": 1
        },
        {
          "text": "会难过一阵",
          "weight": -1
        },
        {
          "text": "自责很久",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人跟你开玩笑开大了，你（诚实面对自己）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "说\"没事\"但心里有数",
          "weight": 2
        },
        {
          "text": "提醒一下别太过分",
          "weight": 1
        },
        {
          "text": "会有点受伤",
          "weight": -1
        },
        {
          "text": "直接表达不高兴",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己更像",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "法官",
          "weight": 2
        },
        {
          "text": "军师",
          "weight": 1
        },
        {
          "text": "调解者",
          "weight": -1
        },
        {
          "text": "好朋友",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看到别人成功，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "真心为他高兴",
          "weight": 2
        },
        {
          "text": "有点羡慕但也开心",
          "weight": 1
        },
        {
          "text": "会思考他是怎么做到的",
          "weight": -1
        },
        {
          "text": "觉得有点不公平",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"同情心\"（比如朋友、工作、日常中）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "容易被利用",
          "weight": 2
        },
        {
          "text": "好但要适度",
          "weight": 1
        },
        {
          "text": "是很重要的品质",
          "weight": -1
        },
        {
          "text": "是最高贵的品质",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "和人争论时，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "想让对方理解我的逻辑",
          "weight": 2
        },
        {
          "text": "据理力争",
          "weight": 1
        },
        {
          "text": "会顾及对方的感受",
          "weight": -1
        },
        {
          "text": "宁可自己退让也不想争吵",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "一个陌生人需要帮助，你（诚实面对自己）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "看是什么事，评估一下",
          "weight": 2
        },
        {
          "text": "大概率会帮",
          "weight": 1
        },
        {
          "text": "看当时心情",
          "weight": -1
        },
        {
          "text": "很难拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"实话实说\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "就该这样",
          "weight": 2
        },
        {
          "text": "要分场合",
          "weight": 1
        },
        {
          "text": "有时候需要善意的谎言",
          "weight": -1
        },
        {
          "text": "能不说就不说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对别人的不同意见，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "他逻辑对吗？",
          "weight": 2
        },
        {
          "text": "了解他的想法",
          "weight": 1
        },
        {
          "text": "会不会冒犯到他",
          "weight": -1
        },
        {
          "text": "能求同存异就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己是个\"好说话的人\"（比如朋友、工作、日常中）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不，我很有原则",
          "weight": 2
        },
        {
          "text": "有原则但讲道理",
          "weight": 1
        },
        {
          "text": "比较好说话",
          "weight": -1
        },
        {
          "text": "非常好说话，不懂拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "在一件事上失败了，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "总结经验教训",
          "weight": 2
        },
        {
          "text": "和朋友聊聊",
          "weight": 1
        },
        {
          "text": "被安慰一下会好",
          "weight": -1
        },
        {
          "text": "需要时间疗愈",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人说你\"太情绪化\"（诚实面对自己）",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "没有，我很稳",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "确实挺情绪化",
          "weight": -1
        },
        {
          "text": "情绪起伏比较大",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"原则\"和\"灵活\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "原则不能丢",
          "weight": 2
        },
        {
          "text": "原则为主灵活为辅",
          "weight": 1
        },
        {
          "text": "灵活一点好",
          "weight": -1
        },
        {
          "text": "人际关系比原则重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个截止日期，你通常",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "提前规划好，稳稳地做完",
          "weight": 2
        },
        {
          "text": "有个计划然后按部就班",
          "weight": 1
        },
        {
          "text": "压力下效率更高",
          "weight": -1
        },
        {
          "text": "最后两天爆肝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的书桌/工位通常是（比如朋友、工作、日常中）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "整洁有序，东西归位",
          "weight": 2
        },
        {
          "text": "基本整洁",
          "weight": 1
        },
        {
          "text": "有点乱但能找到",
          "weight": -1
        },
        {
          "text": "乱到自己都头疼",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出行前你会（回想一下你最近一次遇到这种情况）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "详细查攻略订酒店",
          "weight": 2
        },
        {
          "text": "定个大概行程",
          "weight": 1
        },
        {
          "text": "知道去哪就行",
          "weight": -1
        },
        {
          "text": "说走就走，边走边想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对突发状况，你（诚实面对自己）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点慌，希望有预案",
          "weight": 2
        },
        {
          "text": "快速制定新计划",
          "weight": 1
        },
        {
          "text": "调整一下就行",
          "weight": -1
        },
        {
          "text": "反而觉得刺激好玩",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"计划\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常重要，没计划没方向",
          "weight": 2
        },
        {
          "text": "有计划但留余地",
          "weight": 1
        },
        {
          "text": "计划赶不上变化",
          "weight": -1
        },
        {
          "text": "太束缚了，我不喜欢",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做决定时你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很快就拍板",
          "weight": 2
        },
        {
          "text": "权衡一下但不纠结",
          "weight": 1
        },
        {
          "text": "会反复想很久",
          "weight": -1
        },
        {
          "text": "选哪个都行，随便吧",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "朋友临时约你出门，你（比如朋友、工作、日常中）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "抱歉，我今天已经有安排",
          "weight": 2
        },
        {
          "text": "如果不重要的事可以改",
          "weight": 1
        },
        {
          "text": "有点犹豫",
          "weight": -1
        },
        {
          "text": "好啊，马上出发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的日常生活（回想一下你最近一次遇到这种情况）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "规律，差不多同样的节奏",
          "weight": 2
        },
        {
          "text": "大框架有，偶尔变化",
          "weight": 1
        },
        {
          "text": "随性来，看心情",
          "weight": -1
        },
        {
          "text": "完全没规律",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做事时你更倾向于（诚实面对自己）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "一件做完再做下一件",
          "weight": 2
        },
        {
          "text": "列好清单逐个打勾",
          "weight": 1
        },
        {
          "text": "同时开几件事",
          "weight": -1
        },
        {
          "text": "想到哪做到哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个没见过的新情况，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先搞清楚规则",
          "weight": 2
        },
        {
          "text": "看看别人怎么做",
          "weight": 1
        },
        {
          "text": "试试看呗",
          "weight": -1
        },
        {
          "text": "凭感觉来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"守时\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常重要，不能迟到",
          "weight": 2
        },
        {
          "text": "尽量准时",
          "weight": 1
        },
        {
          "text": "偶尔迟到无所谓",
          "weight": -1
        },
        {
          "text": "经常迟到",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "被打乱计划时，你（比如朋友、工作、日常中）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "会有点不爽",
          "weight": 2
        },
        {
          "text": "调整一下就好",
          "weight": 1
        },
        {
          "text": "没关系，灵活应对",
          "weight": -1
        },
        {
          "text": "太好了，有新变化！",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己是个\"有条理的人\"（回想一下你最近一次遇到这种情况）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "是，东西归位做事有序",
          "weight": 2
        },
        {
          "text": "比较有条理",
          "weight": 1
        },
        {
          "text": "一般般",
          "weight": -1
        },
        {
          "text": "不，我很随性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做一个项目，你首先（诚实面对自己）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "制定详细时间表",
          "weight": 2
        },
        {
          "text": "列好任务清单",
          "weight": 1
        },
        {
          "text": "先做起来再说",
          "weight": -1
        },
        {
          "text": "想到哪做到哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对选择，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很快做出决定",
          "weight": 2
        },
        {
          "text": "想一下但不拖",
          "weight": 1
        },
        {
          "text": "会反复纠结",
          "weight": -1
        },
        {
          "text": "选哪个都一样，随你",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"规则\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "应该遵守",
          "weight": 2
        },
        {
          "text": "规则有道理才遵守",
          "weight": 1
        },
        {
          "text": "有时候可以变通",
          "weight": -1
        },
        {
          "text": "规则是用来打破的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "整理房间时，你（比如朋友、工作、日常中）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有固定方法和分类",
          "weight": 2
        },
        {
          "text": "收拾一下就行",
          "weight": 1
        },
        {
          "text": "只有看不下去了才整理",
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
      "text": "面对 deadline 临近，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "更有动力了",
          "weight": 2
        },
        {
          "text": "压力有点大但能扛",
          "weight": 1
        },
        {
          "text": "压力大到想逃",
          "weight": -1
        },
        {
          "text": "还有时间，不急",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一个任务没有明确截止时间，你（诚实面对自己）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "给自己设一个",
          "weight": 2
        },
        {
          "text": "先做别的，等有了再说",
          "weight": 1
        },
        {
          "text": "拖到不能再拖",
          "weight": -1
        },
        {
          "text": "什么时候想做什么时候做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己\"拖延\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "完全不拖延",
          "weight": 2
        },
        {
          "text": "偶尔",
          "weight": 1
        },
        {
          "text": "经常",
          "weight": -1
        },
        {
          "text": "重度拖延症",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "当你在做一件事时被打断，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很不爽",
          "weight": 2
        },
        {
          "text": "有点烦但能忍",
          "weight": 1
        },
        {
          "text": "没关系，回来继续",
          "weight": -1
        },
        {
          "text": "干脆换件事做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你希望自己的人生（比如朋友、工作、日常中）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "方向明确，稳步前进",
          "weight": 2
        },
        {
          "text": "大方向有，路可以灵活",
          "weight": 1
        },
        {
          "text": "边走边看",
          "weight": -1
        },
        {
          "text": "别给我设方向",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"专注\"（回想一下你最近一次遇到这种情况）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常重要",
          "weight": 2
        },
        {
          "text": "需要专注但可以换着来",
          "weight": 1
        },
        {
          "text": "很难长时间专注",
          "weight": -1
        },
        {
          "text": "同时做好几件事效率高",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更倾向于（诚实面对自己）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "事情按预期发展",
          "weight": 2
        },
        {
          "text": "有惊喜也不错",
          "weight": 1
        },
        {
          "text": "生活有变化才好",
          "weight": -1
        },
        {
          "text": "意外才是生活的调味剂",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的消费习惯",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有预算，记账",
          "weight": 2
        },
        {
          "text": "大致有数",
          "weight": 1
        },
        {
          "text": "想买就买",
          "weight": -1
        },
        {
          "text": "月光族，没计划",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做决定之后你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "很少后悔",
          "weight": 2
        },
        {
          "text": "偶尔回想但不纠结",
          "weight": 1
        },
        {
          "text": "会反复想是不是选错了",
          "weight": -1
        },
        {
          "text": "经常后悔",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"放松\"（比如朋友、工作、日常中）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按计划的放松活动",
          "weight": 2
        },
        {
          "text": "有安排的休息",
          "weight": 1
        },
        {
          "text": "随便躺着就行",
          "weight": -1
        },
        {
          "text": "完全即兴的放松",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "当事情没有定论时，你（回想一下你最近一次遇到这种情况）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "想尽快确定下来",
          "weight": 2
        },
        {
          "text": "可以等一等",
          "weight": 1
        },
        {
          "text": "无所谓，定不定都行",
          "weight": -1
        },
        {
          "text": "不确定反而让人兴奋",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己\"能坚持\"（诚实面对自己）",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "是，说到做到",
          "weight": 2
        },
        {
          "text": "大部分时候是",
          "weight": 1
        },
        {
          "text": "有点三分钟热度",
          "weight": -1
        },
        {
          "text": "完全凭兴趣，想停就停",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对一个复杂任务，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "拆成小步骤逐个完成",
          "weight": 2
        },
        {
          "text": "列个大纲",
          "weight": 1
        },
        {
          "text": "先把最难的做了",
          "weight": -1
        },
        {
          "text": "从最感兴趣的部分开始",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在一个新社交场合，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很快和周围人聊起来",
          "weight": 2
        },
        {
          "text": "愿意主动认识新朋友",
          "weight": 1
        },
        {
          "text": "等别人来找你",
          "weight": -1
        },
        {
          "text": "找个安静角落待着",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "独处一整天后，你会",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "觉得不够，想找人聊",
          "weight": 2
        },
        {
          "text": "有点想发条消息给谁",
          "weight": 1
        },
        {
          "text": "挺舒服的，再待会儿",
          "weight": -1
        },
        {
          "text": "完全恢复了，很享受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加完一个大型聚会，你需要",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻约下一场",
          "weight": 2
        },
        {
          "text": "回家就能继续聊很久",
          "weight": 1
        },
        {
          "text": "独处半小时缓冲",
          "weight": -1
        },
        {
          "text": "独处一整晚恢复能量",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "当你有好消息时，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻打电话告诉所有人",
          "weight": 2
        },
        {
          "text": "分享给身边几个朋友",
          "weight": 1
        },
        {
          "text": "只告诉最亲近的人",
          "weight": -1
        },
        {
          "text": "自己偷偷高兴就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "面对需要快速建立关系的新项目，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "热情地和每个队友打招呼",
          "weight": 2
        },
        {
          "text": "主动和邻座的人聊起来",
          "weight": 1
        },
        {
          "text": "先专注手头的事",
          "weight": -1
        },
        {
          "text": "等别人破冰再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "周末到了，你更倾向",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "约一群人出去吃饭唱歌",
          "weight": 2
        },
        {
          "text": "和一两个朋友逛逛",
          "weight": 1
        },
        {
          "text": "在家刷刷手机",
          "weight": -1
        },
        {
          "text": "一个人做点自己的事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在陌生电话销售沟通中，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "聊得比对方还多",
          "weight": 2
        },
        {
          "text": "能流畅地对话",
          "weight": 1
        },
        {
          "text": "尽快结束通话",
          "weight": -1
        },
        {
          "text": "尽量避免接陌生电话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "朋友组织的旅行，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "帮着拉人组局",
          "weight": 2
        },
        {
          "text": "积极参与行程讨论",
          "weight": 1
        },
        {
          "text": "跟着安排走就好",
          "weight": -1
        },
        {
          "text": "不太想去凑热闹",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "新环境里，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很快认识一圈新朋友",
          "weight": 2
        },
        {
          "text": "一两天就适应了",
          "weight": 1
        },
        {
          "text": "需要一周以上",
          "weight": -1
        },
        {
          "text": "很久才敢开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "收到一封很长的群邮件，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "逐条回复每个人",
          "weight": 2
        },
        {
          "text": "只看重要的人发的",
          "weight": 1
        },
        {
          "text": "看完先放着",
          "weight": -1
        },
        {
          "text": "忽略不看",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "连续参加三天社交活动，你会",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "意犹未尽",
          "weight": 2
        },
        {
          "text": "有点累但能撑",
          "weight": 1
        },
        {
          "text": "需要恢复一下",
          "weight": -1
        },
        {
          "text": "第三天根本不想出门",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "收到派对邀请，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻答应还问能不能带人",
          "weight": 2
        },
        {
          "text": "有点犹豫但还是去",
          "weight": 1
        },
        {
          "text": "婉拒说有别的事",
          "weight": -1
        },
        {
          "text": "从不参加派对",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人说你\"话多\"，你觉得",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "是赞美说明我活跃",
          "weight": 2
        },
        {
          "text": "好吧有时候是这样",
          "weight": 1
        },
        {
          "text": "可能是我太烦了",
          "weight": -1
        },
        {
          "text": "我其实话很少啊",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "需要联系好久没聊的朋友，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "直接打过去",
          "weight": 2
        },
        {
          "text": "发个长消息问候",
          "weight": 1
        },
        {
          "text": "简短发条消息",
          "weight": -1
        },
        {
          "text": "算了不想打扰",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得能量主要来源是",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和人互动",
          "weight": 2
        },
        {
          "text": "有选择的社交",
          "weight": 1
        },
        {
          "text": "独处休息",
          "weight": -1
        },
        {
          "text": "一个人做事",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "参加演讲要上台的活动，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "兴奋享受被关注",
          "weight": 2
        },
        {
          "text": "有点紧张但能发挥",
          "weight": 1
        },
        {
          "text": "尽量回避这种场合",
          "weight": -1
        },
        {
          "text": "绝不可能上台",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你说话的节奏通常是",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "快，想到就说",
          "weight": 2
        },
        {
          "text": "适中自然",
          "weight": 1
        },
        {
          "text": "慢一些想清楚再说",
          "weight": -1
        },
        {
          "text": "非常谨慎很少开口",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "认识一个新朋友，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一周内就熟了",
          "weight": 2
        },
        {
          "text": "几次见面后比较熟",
          "weight": 1
        },
        {
          "text": "需要一段时间",
          "weight": -1
        },
        {
          "text": "很久都不会深交",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得好的周末应该",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "和人在一起才叫周末",
          "weight": 2
        },
        {
          "text": "有社交有独处最好",
          "weight": 1
        },
        {
          "text": "独处为主偶尔聚会",
          "weight": -1
        },
        {
          "text": "完全自己安排时间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "电话铃响了，你的反应",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻接",
          "weight": 2
        },
        {
          "text": "看是谁再决定",
          "weight": 1
        },
        {
          "text": "让对方留言",
          "weight": -1
        },
        {
          "text": "尽量不接电话",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在图书馆/自习室安静场合，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "不舒服待不住",
          "weight": 2
        },
        {
          "text": "能安静但偶尔想说",
          "weight": 1
        },
        {
          "text": "很自然",
          "weight": -1
        },
        {
          "text": "完全放松",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "和一群人吃火锅，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "帮忙涮肉夹菜招呼大家",
          "weight": 2
        },
        {
          "text": "和旁边的人聊",
          "weight": 1
        },
        {
          "text": "安静吃饭",
          "weight": -1
        },
        {
          "text": "埋头吃自己的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "开视频会议时，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "开摄像头全程露脸",
          "weight": 2
        },
        {
          "text": "偶尔开一下",
          "weight": 1
        },
        {
          "text": "主要是关着",
          "weight": -1
        },
        {
          "text": "从来不开",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "走在路上有人朝你微笑，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻回笑还搭个话",
          "weight": 2
        },
        {
          "text": "回笑一下",
          "weight": 1
        },
        {
          "text": "点点头就好",
          "weight": -1
        },
        {
          "text": "假装没看见",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "去朋友家做客，你会",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "带点礼物主动帮忙",
          "weight": 2
        },
        {
          "text": "空手去但很客气",
          "weight": 1
        },
        {
          "text": "安静做客",
          "weight": -1
        },
        {
          "text": "不太想去做客",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人夸你\"很外向\"，你觉得",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "是，我很开朗",
          "weight": 2
        },
        {
          "text": "还行吧",
          "weight": 1
        },
        {
          "text": "我其实偏内向",
          "weight": -1
        },
        {
          "text": "完全内向",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "班级/公司团建活动，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "最积极参与所有项目",
          "weight": 2
        },
        {
          "text": "大部分都参加",
          "weight": 1
        },
        {
          "text": "只参加感兴趣的",
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
      "text": "发朋友圈时，你通常",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "一天能发好几条",
          "weight": 2
        },
        {
          "text": "偶尔发一下",
          "weight": 1
        },
        {
          "text": "只发重要的事",
          "weight": -1
        },
        {
          "text": "从来不发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在陌生饭局上，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很快和大家打成一片",
          "weight": 2
        },
        {
          "text": "和邻座先聊起来",
          "weight": 1
        },
        {
          "text": "安静吃饭听别人说",
          "weight": -1
        },
        {
          "text": "提前找理由溜走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得自己在人群中",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "存在感很强",
          "weight": 2
        },
        {
          "text": "比较活跃",
          "weight": 1
        },
        {
          "text": "存在感一般",
          "weight": -1
        },
        {
          "text": "很容易被忽略",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "一个人去吃饭，你会",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "坐大厅热闹的位置",
          "weight": 2
        },
        {
          "text": "坐靠窗的位置",
          "weight": 1
        },
        {
          "text": "找角落安静吃",
          "weight": -1
        },
        {
          "text": "打包带走吃",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在多人游戏中（剧本杀/桌游），你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "当主角带节奏",
          "weight": 2
        },
        {
          "text": "积极参与互动",
          "weight": 1
        },
        {
          "text": "跟着大家走",
          "weight": -1
        },
        {
          "text": "旁观者多",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "深夜突然想吃宵夜，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "叫朋友一起出去吃",
          "weight": 2
        },
        {
          "text": "自己出去但希望碰到熟人",
          "weight": 1
        },
        {
          "text": "自己去也OK",
          "weight": -1
        },
        {
          "text": "算了忍一忍",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "别人请你帮忙，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "很乐意帮",
          "weight": 2
        },
        {
          "text": "看是什么事",
          "weight": 1
        },
        {
          "text": "不太想答应",
          "weight": -1
        },
        {
          "text": "能拒绝就拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "在一个全是陌生人的聚会上，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "主动破冰认识人",
          "weight": 2
        },
        {
          "text": "等有人来找你",
          "weight": 1
        },
        {
          "text": "安静待着",
          "weight": -1
        },
        {
          "text": "找机会溜走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "你觉得自己是\"社牛\"",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "是，交友无数",
          "weight": 2
        },
        {
          "text": "比较会社交",
          "weight": 1
        },
        {
          "text": "一般般",
          "weight": -1
        },
        {
          "text": "社恐晚期",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "EI",
      "text": "被要求在群里发个言，你",
      "leftChar": "E",
      "rightChar": "I",
      "options": [
        {
          "text": "立刻组织语言",
          "weight": 2
        },
        {
          "text": "想一下再说",
          "weight": 1
        },
        {
          "text": "不太想发",
          "weight": -1
        },
        {
          "text": "干脆不发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得可能性和现实哪个更重要",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "现实，脚踏实地",
          "weight": 2
        },
        {
          "text": "先看现实有没有",
          "weight": 1
        },
        {
          "text": "可能性，敢想才有未来",
          "weight": -1
        },
        {
          "text": "未来的想象空间更重要",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "读一本书时，你更关注",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的情节和人物故事",
          "weight": 2
        },
        {
          "text": "书里教的实用方法",
          "weight": 1
        },
        {
          "text": "作者想表达的思想",
          "weight": -1
        },
        {
          "text": "这本书能带来什么启发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"想太多\"，你觉得",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "没有，我很实际",
          "weight": 2
        },
        {
          "text": "还好吧",
          "weight": 1
        },
        {
          "text": "可能有点",
          "weight": -1
        },
        {
          "text": "是，我经常思考深层问题",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到新点子，你首先想",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "能不能落地，有什么风险",
          "weight": 2
        },
        {
          "text": "需要什么资源去实现",
          "weight": 1
        },
        {
          "text": "这个想法背后的逻辑",
          "weight": -1
        },
        {
          "text": "它能带来什么变革",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "当有人给你讲抽象概念，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "希望用例子说明白",
          "weight": 2
        },
        {
          "text": "想知道具体怎么用",
          "weight": 1
        },
        {
          "text": "觉得挺有意思",
          "weight": -1
        },
        {
          "text": "能快速把握本质",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看一部电影，你更在意",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "画面是不是精美",
          "weight": 2
        },
        {
          "text": "故事好不好看",
          "weight": 1
        },
        {
          "text": "有没有深层含义",
          "weight": -1
        },
        {
          "text": "能给我什么启发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "解决问题时，你倾向于",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "用已被验证过的方法",
          "weight": 2
        },
        {
          "text": "一步步来稳妥就好",
          "weight": 1
        },
        {
          "text": "寻找新的思路",
          "weight": -1
        },
        {
          "text": "重构整个问题框架",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "做计划时，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "列详细的步骤清单",
          "weight": 2
        },
        {
          "text": "先搞清楚现有资源",
          "weight": 1
        },
        {
          "text": "有个大概方向就行",
          "weight": -1
        },
        {
          "text": "留足调整空间",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "学新技能，你更关注",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的操作步骤",
          "weight": 2
        },
        {
          "text": "先能做出来再说",
          "weight": 1
        },
        {
          "text": "理解背后的原理",
          "weight": -1
        },
        {
          "text": "掌握这个技能的思维方式",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"不切实际\"，你觉得",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "是，我太理想了",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "还好吧",
          "weight": -1
        },
        {
          "text": "不，我是超前于现实的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "写一份报告，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "把每个细节都写清楚",
          "weight": 2
        },
        {
          "text": "先写重要的部分",
          "weight": 1
        },
        {
          "text": "注重逻辑框架",
          "weight": -1
        },
        {
          "text": "想让读的人有启发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "当有人提出不同看法，你首先",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "看他说的有没有事实依据",
          "weight": 2
        },
        {
          "text": "能不能行得通",
          "weight": 1
        },
        {
          "text": "想他为什么会有这个想法",
          "weight": -1
        },
        {
          "text": "他是不是看到了我没看到的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"创意\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "太飘了，要落地",
          "weight": 2
        },
        {
          "text": "好创意要能执行",
          "weight": 1
        },
        {
          "text": "创意很珍贵",
          "weight": -1
        },
        {
          "text": "创意是进步的源泉",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己更像",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "实干家",
          "weight": 2
        },
        {
          "text": "务实派",
          "weight": 1
        },
        {
          "text": "思考者",
          "weight": -1
        },
        {
          "text": "梦想家",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"太理想化\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "可能是",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "还好吧",
          "weight": -1
        },
        {
          "text": "理想是方向，现实是路径",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到选择题，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "列利弊清单打分",
          "weight": 2
        },
        {
          "text": "考虑实际可行性",
          "weight": 1
        },
        {
          "text": "看哪个更符合逻辑",
          "weight": -1
        },
        {
          "text": "看哪个更有未来价值",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看地图时，你更关注",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的街道和地标",
          "weight": 2
        },
        {
          "text": "怎么最快到达",
          "weight": 1
        },
        {
          "text": "地图的整体布局",
          "weight": -1
        },
        {
          "text": "还有哪些没探索过的地方",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "面对新城市，你想",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "找好吃的餐厅",
          "weight": 2
        },
        {
          "text": "了解当地风土人情",
          "weight": 1
        },
        {
          "text": "搞清楚城市布局",
          "weight": -1
        },
        {
          "text": "发现一些小众的地方",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你更信任",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "亲眼看到的事实",
          "weight": 2
        },
        {
          "text": "多个来源确认过的",
          "weight": 1
        },
        {
          "text": "逻辑推理出来的",
          "weight": -1
        },
        {
          "text": "自己的直觉判断",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己是\"细节控\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "是，注意到很多细节",
          "weight": 2
        },
        {
          "text": "比较注意",
          "weight": 1
        },
        {
          "text": "还好",
          "weight": -1
        },
        {
          "text": "不，我看大局",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "对\"工匠精神\"这个词，你觉得",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "就是要精益求精",
          "weight": 2
        },
        {
          "text": "好的品质要坚持",
          "weight": 1
        },
        {
          "text": "也要看值不值",
          "weight": -1
        },
        {
          "text": "太钻牛角尖了",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人给你一个\"没用的\"想法，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "直接说不靠谱",
          "weight": 2
        },
        {
          "text": "委婉说不太可行",
          "weight": 1
        },
        {
          "text": "想想有没有什么启发",
          "weight": -1
        },
        {
          "text": "听他说完再说",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"灵感\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "太玄了，不可靠",
          "weight": 2
        },
        {
          "text": "有时候确实能帮上忙",
          "weight": 1
        },
        {
          "text": "是积累到一定程度的爆发",
          "weight": -1
        },
        {
          "text": "生活中最重要的东西",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看到一件事成功了，你首先想",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "他具体做了哪些事",
          "weight": 2
        },
        {
          "text": "有什么可复制的经验",
          "weight": 1
        },
        {
          "text": "这件事的本质是什么",
          "weight": -1
        },
        {
          "text": "这个方向还能做什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己\"脑洞大\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "没有，我很务实",
          "weight": 2
        },
        {
          "text": "偶尔会有一些想法",
          "weight": 1
        },
        {
          "text": "经常有奇思妙想",
          "weight": -1
        },
        {
          "text": "脑洞超级大",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "读一本历史书，你更关注",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "具体的时间地点人物",
          "weight": 2
        },
        {
          "text": "事件是怎么发展的",
          "weight": 1
        },
        {
          "text": "背后的原因和逻辑",
          "weight": -1
        },
        {
          "text": "能从中学到什么",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "对于\"外星人是否存在\"，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "没有证据就不信",
          "weight": 2
        },
        {
          "text": "目前不好说",
          "weight": 1
        },
        {
          "text": "可能存在",
          "weight": -1
        },
        {
          "text": "肯定存在，只是我们还没找到",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己对\"新事物\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "比较抗拒",
          "weight": 2
        },
        {
          "text": "谨慎接受",
          "weight": 1
        },
        {
          "text": "挺感兴趣愿意试试",
          "weight": -1
        },
        {
          "text": "永远追新",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "遇到一个复杂系统（比如公司运营），你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "想先搞清楚每个部门在干嘛",
          "weight": 2
        },
        {
          "text": "先看整体有哪些环节",
          "weight": 1
        },
        {
          "text": "画出它的结构图",
          "weight": -1
        },
        {
          "text": "思考它为什么这样设计",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"假设\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "没用，要直接验证",
          "weight": 2
        },
        {
          "text": "可以作为工作的起点",
          "weight": 1
        },
        {
          "text": "是科学方法论的核心",
          "weight": -1
        },
        {
          "text": "假设能打开全新思路",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "对\"心灵鸡汤\"，你",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "没用，都是废话",
          "weight": 2
        },
        {
          "text": "偶尔能安慰一下",
          "weight": 1
        },
        {
          "text": "看是不是有道理",
          "weight": -1
        },
        {
          "text": "能给人力量就好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得自己更\"关注当下\"还是\"关注未来\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "完全当下，做好眼前事",
          "weight": 2
        },
        {
          "text": "当下为主兼顾未来",
          "weight": 1
        },
        {
          "text": "经常想未来的事",
          "weight": -1
        },
        {
          "text": "未来才是最重要的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "看到一个公式，你首先想",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "它能用来算什么",
          "weight": 2
        },
        {
          "text": "怎么应用在实际问题里",
          "weight": 1
        },
        {
          "text": "它是怎么推导出来的",
          "weight": -1
        },
        {
          "text": "它能推导到什么更深的结论",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "别人说你\"不着边际\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "可能我太天马行空了",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "还好",
          "weight": -1
        },
        {
          "text": "那是他们跟不上思路",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "SN",
      "text": "你觉得\"事实\"和\"观点\"",
      "leftChar": "S",
      "rightChar": "N",
      "options": [
        {
          "text": "事实最重要",
          "weight": 2
        },
        {
          "text": "事实和观点都要看",
          "weight": 1
        },
        {
          "text": "观点背后的事实才重要",
          "weight": -1
        },
        {
          "text": "观点比事实更有启发性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友找你倾诉烦心事，你会",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "帮他分析问题出在哪里",
          "weight": 2
        },
        {
          "text": "给他提供解决方案",
          "weight": 1
        },
        {
          "text": "先共情听他说完",
          "weight": -1
        },
        {
          "text": "陪着他让他好受些",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己是个\"理性\"的人",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是，情绪很少影响判断",
          "weight": 2
        },
        {
          "text": "大多数时候是",
          "weight": 1
        },
        {
          "text": "挺感性的",
          "weight": -1
        },
        {
          "text": "完全跟着感觉走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "讨论问题时，你更在意",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "谁的逻辑站得住脚",
          "weight": 2
        },
        {
          "text": "是不是客观的",
          "weight": 1
        },
        {
          "text": "会不会伤害到谁",
          "weight": -1
        },
        {
          "text": "大家是不是感觉舒服",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对让你愤怒的情况，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "冷静地分析怎么解决",
          "weight": 2
        },
        {
          "text": "先忍住情绪再说",
          "weight": 1
        },
        {
          "text": "能感觉到自己的生气",
          "weight": -1
        },
        {
          "text": "情绪比较直接地表现出来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看电影时，你更容易",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析剧情的合理性",
          "weight": 2
        },
        {
          "text": "看电影用了什么技巧",
          "weight": 1
        },
        {
          "text": "被感动到哭",
          "weight": -1
        },
        {
          "text": "完全代入角色的情绪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "给朋友提建议时，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接说问题在哪",
          "weight": 2
        },
        {
          "text": "委婉地说但还是说清楚",
          "weight": 1
        },
        {
          "text": "先铺垫再提",
          "weight": -1
        },
        {
          "text": "尽量不直接提负面的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "一个决定让一部分人不高兴，你会",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "如果是对的就坚持",
          "weight": 2
        },
        {
          "text": "权衡利弊选最优",
          "weight": 1
        },
        {
          "text": "尽量让大家都满意",
          "weight": -1
        },
        {
          "text": "宁可委屈自己也不想得罪人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人说你\"太冷漠\"，你觉得",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "没有，我只是理性",
          "weight": 2
        },
        {
          "text": "可能有时候显得冷",
          "weight": 1
        },
        {
          "text": "确实会，我在学着改善",
          "weight": -1
        },
        {
          "text": "我其实很敏感的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "收到别人的批评，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "首先看批评有没有道理",
          "weight": 2
        },
        {
          "text": "先让自己冷静一下",
          "weight": 1
        },
        {
          "text": "会有点受伤",
          "weight": -1
        },
        {
          "text": "情绪反应挺大的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对不开心的同事/同学，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "关心一下他怎么了",
          "weight": 2
        },
        {
          "text": "如果和我有关就解释",
          "weight": 1
        },
        {
          "text": "给他留一点空间",
          "weight": -1
        },
        {
          "text": "主动安慰他",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"情绪\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "要控制，不能影响判断",
          "weight": 2
        },
        {
          "text": "是人的正常反应",
          "weight": 1
        },
        {
          "text": "是重要的信号",
          "weight": -1
        },
        {
          "text": "是生活的调味剂",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "做一件事没做好，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "分析失败原因下次改进",
          "weight": 2
        },
        {
          "text": "有点挫败但很快调整",
          "weight": 1
        },
        {
          "text": "会难过一阵",
          "weight": -1
        },
        {
          "text": "自责很久",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人跟你开玩笑开大了，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "说\"没事\"但心里有数",
          "weight": 2
        },
        {
          "text": "提醒一下别太过分",
          "weight": 1
        },
        {
          "text": "会有点受伤",
          "weight": -1
        },
        {
          "text": "直接表达不高兴",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"同情心\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "容易被利用",
          "weight": 2
        },
        {
          "text": "好但要适度",
          "weight": 1
        },
        {
          "text": "是很重要的品质",
          "weight": -1
        },
        {
          "text": "是最高贵的品质",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "和人争论时，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "想让对方理解我的逻辑",
          "weight": 2
        },
        {
          "text": "据理力争",
          "weight": 1
        },
        {
          "text": "会顾及对方的感受",
          "weight": -1
        },
        {
          "text": "宁可自己退让也不想争吵",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "陌生人需要帮助，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "看是什么事评估一下",
          "weight": 2
        },
        {
          "text": "大概率会帮",
          "weight": 1
        },
        {
          "text": "看当时心情",
          "weight": -1
        },
        {
          "text": "很难拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己是\"好说话的人\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不，我很有原则",
          "weight": 2
        },
        {
          "text": "有原则但讲道理",
          "weight": 1
        },
        {
          "text": "比较好说话",
          "weight": -1
        },
        {
          "text": "非常好说话不懂拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "在一件事上失败了，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "总结经验教训",
          "weight": 2
        },
        {
          "text": "和朋友聊聊",
          "weight": 1
        },
        {
          "text": "被安慰一下会好",
          "weight": -1
        },
        {
          "text": "需要时间疗愈",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人说你\"太情绪化\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "没有，我很稳",
          "weight": 2
        },
        {
          "text": "偶尔会",
          "weight": 1
        },
        {
          "text": "确实挺情绪化",
          "weight": -1
        },
        {
          "text": "情绪起伏比较大",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人跟你说他得了奖/升职，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "问他做了什么值得学习",
          "weight": 2
        },
        {
          "text": "真诚恭喜",
          "weight": 1
        },
        {
          "text": "为他开心",
          "weight": -1
        },
        {
          "text": "比自己得奖还开心",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "开会有人说了荒谬的话，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接指出逻辑问题",
          "weight": 2
        },
        {
          "text": "先听听有没有可取之处",
          "weight": 1
        },
        {
          "text": "忍住不说",
          "weight": -1
        },
        {
          "text": "会顾虑他的感受",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己\"刀子嘴豆腐心\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不是，我说的是真心话",
          "weight": 2
        },
        {
          "text": "偶尔嘴硬",
          "weight": 1
        },
        {
          "text": "有时候是这样",
          "weight": -1
        },
        {
          "text": "完全是",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "和朋友出去玩 AA 还是请客，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "AA 比较清楚",
          "weight": 2
        },
        {
          "text": "这次我请下次你请",
          "weight": 1
        },
        {
          "text": "都可以",
          "weight": -1
        },
        {
          "text": "不太好意思 AA",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"善良\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "没原则的善良是蠢",
          "weight": 2
        },
        {
          "text": "善良要有边界",
          "weight": 1
        },
        {
          "text": "很重要的品质",
          "weight": -1
        },
        {
          "text": "是最基本的底线",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人求你帮忙做很麻烦的事，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "能帮就帮但要说清楚",
          "weight": 2
        },
        {
          "text": "看情况",
          "weight": 1
        },
        {
          "text": "不太好意思拒绝",
          "weight": -1
        },
        {
          "text": "几乎从不拒绝",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己\"容易心软\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不，我有原则",
          "weight": 2
        },
        {
          "text": "偶尔",
          "weight": 1
        },
        {
          "text": "是的，很难拒绝",
          "weight": -1
        },
        {
          "text": "特别容易，经常吃亏",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "看新闻里有人遭遇不幸，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "会分析是什么原因",
          "weight": 2
        },
        {
          "text": "叹口气继续看",
          "weight": 1
        },
        {
          "text": "心里挺难过",
          "weight": -1
        },
        {
          "text": "情绪低落好久",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "朋友跟你借钱，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "借不借看他是什么人",
          "weight": 2
        },
        {
          "text": "会借但问清楚什么时候还",
          "weight": 1
        },
        {
          "text": "不太想借但不好意思说",
          "weight": -1
        },
        {
          "text": "几乎从不借钱给人",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "面对一个态度恶劣的服务员/客服，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "投诉，维护自己权益",
          "weight": 2
        },
        {
          "text": "忍了但心里不爽",
          "weight": 1
        },
        {
          "text": "算了不跟他一般见识",
          "weight": -1
        },
        {
          "text": "会被他弄心情糟糕",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己\"会安慰人\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "不太行，不会说软话",
          "weight": 2
        },
        {
          "text": "会说几句但不深入",
          "weight": 1
        },
        {
          "text": "还行吧",
          "weight": -1
        },
        {
          "text": "特别会，别人都来找我",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "别人说了让你不舒服的话，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "直接指出",
          "weight": 2
        },
        {
          "text": "暗示一下",
          "weight": 1
        },
        {
          "text": "忍了但记着",
          "weight": -1
        },
        {
          "text": "可能一直介意",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得\"对事不对人\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "就该这样",
          "weight": 2
        },
        {
          "text": "尽量做到",
          "weight": 1
        },
        {
          "text": "有时候难免对人",
          "weight": -1
        },
        {
          "text": "不可能完全分开",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "和别人意见冲突时，你",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "把道理讲清楚",
          "weight": 2
        },
        {
          "text": "求同存异",
          "weight": 1
        },
        {
          "text": "顾全大局少说两句",
          "weight": -1
        },
        {
          "text": "可能直接让着对方",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "TF",
      "text": "你觉得自己\"爱憎分明\"",
      "leftChar": "T",
      "rightChar": "F",
      "options": [
        {
          "text": "是，喜欢就是喜欢不喜欢就是不喜欢",
          "weight": 2
        },
        {
          "text": "比较明显",
          "weight": 1
        },
        {
          "text": "还好",
          "weight": -1
        },
        {
          "text": "挺圆滑的不明显",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的书桌/工位通常是",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "整洁有序东西归位",
          "weight": 2
        },
        {
          "text": "基本整洁",
          "weight": 1
        },
        {
          "text": "有点乱但能找到",
          "weight": -1
        },
        {
          "text": "乱到自己都头疼",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出行前你会",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "详细查攻略订酒店",
          "weight": 2
        },
        {
          "text": "定个大概行程",
          "weight": 1
        },
        {
          "text": "知道去哪就行",
          "weight": -1
        },
        {
          "text": "说走就走边走边想",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对突发状况，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有点慌希望有预案",
          "weight": 2
        },
        {
          "text": "快速制定新计划",
          "weight": 1
        },
        {
          "text": "调整一下就行",
          "weight": -1
        },
        {
          "text": "反而觉得刺激好玩",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "朋友临时约你出门，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "抱歉我今天已经有安排",
          "weight": 2
        },
        {
          "text": "如果不重要的事可以改",
          "weight": 1
        },
        {
          "text": "有点犹豫",
          "weight": -1
        },
        {
          "text": "好啊马上出发",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你的日常生活",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "规律差不多同样的节奏",
          "weight": 2
        },
        {
          "text": "大框架有偶尔变化",
          "weight": 1
        },
        {
          "text": "随性来看心情",
          "weight": -1
        },
        {
          "text": "完全没规律",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做事时你更倾向于",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "一件做完再做下一件",
          "weight": 2
        },
        {
          "text": "列好清单逐个打勾",
          "weight": 1
        },
        {
          "text": "同时开几件事",
          "weight": -1
        },
        {
          "text": "想到哪做到哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "面对没见过的新情况，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先搞清楚规则",
          "weight": 2
        },
        {
          "text": "看看别人怎么做",
          "weight": 1
        },
        {
          "text": "试试看呗",
          "weight": -1
        },
        {
          "text": "凭感觉来",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "被打乱计划时，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "会有点不爽",
          "weight": 2
        },
        {
          "text": "调整一下就好",
          "weight": 1
        },
        {
          "text": "没关系灵活应对",
          "weight": -1
        },
        {
          "text": "太好了有新变化！",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己是\"有条理的人\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "是东西归位做事有序",
          "weight": 2
        },
        {
          "text": "比较有条理",
          "weight": 1
        },
        {
          "text": "一般般",
          "weight": -1
        },
        {
          "text": "不我很随性",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做一个项目，你首先",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "制定详细时间表",
          "weight": 2
        },
        {
          "text": "列好任务清单",
          "weight": 1
        },
        {
          "text": "先做起来再说",
          "weight": -1
        },
        {
          "text": "想到哪做到哪",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "整理房间时，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有固定方法和分类",
          "weight": 2
        },
        {
          "text": "收拾一下就行",
          "weight": 1
        },
        {
          "text": "只有看不下去了才整理",
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
      "text": "面对 deadline 临近，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "更有动力了",
          "weight": 2
        },
        {
          "text": "压力有点大但能扛",
          "weight": 1
        },
        {
          "text": "压力大到想逃",
          "weight": -1
        },
        {
          "text": "还有时间不急",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一个任务没有明确截止时间，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "给自己设一个",
          "weight": 2
        },
        {
          "text": "先做别的等有了再说",
          "weight": 1
        },
        {
          "text": "拖到不能再拖",
          "weight": -1
        },
        {
          "text": "什么时候想做什么时候做",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你希望自己的人生",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "方向明确稳步前进",
          "weight": 2
        },
        {
          "text": "大方向有路可以灵活",
          "weight": 1
        },
        {
          "text": "边走边看",
          "weight": -1
        },
        {
          "text": "别给我设方向",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"专注\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常重要",
          "weight": 2
        },
        {
          "text": "需要专注但可以换着来",
          "weight": 1
        },
        {
          "text": "很难长时间专注",
          "weight": -1
        },
        {
          "text": "同时做好几件事效率高",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你更倾向于",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "事情按预期发展",
          "weight": 2
        },
        {
          "text": "有惊喜也不错",
          "weight": 1
        },
        {
          "text": "生活有变化才好",
          "weight": -1
        },
        {
          "text": "意外才是生活的调味剂",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"放松\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按计划的放松活动",
          "weight": 2
        },
        {
          "text": "有安排的休息",
          "weight": 1
        },
        {
          "text": "随便躺着就行",
          "weight": -1
        },
        {
          "text": "完全即兴的放松",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "当事情没有定论时，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "想尽快确定下来",
          "weight": 2
        },
        {
          "text": "可以等一等",
          "weight": 1
        },
        {
          "text": "无所谓定不定都行",
          "weight": -1
        },
        {
          "text": "不确定反而让人兴奋",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己\"能坚持\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "是说到做到",
          "weight": 2
        },
        {
          "text": "大部分时候是",
          "weight": 1
        },
        {
          "text": "有点三分钟热度",
          "weight": -1
        },
        {
          "text": "完全凭兴趣想停就停",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "出门前发现忘带东西了，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "回去拿不管多晚",
          "weight": 2
        },
        {
          "text": "犹豫一下然后回去拿",
          "weight": 1
        },
        {
          "text": "算了不拿了",
          "weight": -1
        },
        {
          "text": "临时买一个就行",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"准时赴约\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "是最基本的礼貌",
          "weight": 2
        },
        {
          "text": "应该尽量做到",
          "weight": 1
        },
        {
          "text": "偶尔晚一点没关系",
          "weight": -1
        },
        {
          "text": "经常让别人等",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "收到一个临时任务，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "立刻排进日程",
          "weight": 2
        },
        {
          "text": "看看能不能调整现有安排",
          "weight": 1
        },
        {
          "text": "有点烦但能接受",
          "weight": -1
        },
        {
          "text": "直接拒绝或抱怨",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "一个事情没结局一直悬着，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "特别难受想要个说法",
          "weight": 2
        },
        {
          "text": "会经常惦记",
          "weight": 1
        },
        {
          "text": "慢慢淡忘了",
          "weight": -1
        },
        {
          "text": "无所谓",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"准备工作\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "必须充分",
          "weight": 2
        },
        {
          "text": "有个大概就行",
          "weight": 1
        },
        {
          "text": "边做边准备",
          "weight": -1
        },
        {
          "text": "不需要准备",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "对于\"要不要结婚/换工作\"这种大事，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "慎重考虑很久",
          "weight": 2
        },
        {
          "text": "想清楚但不要拖",
          "weight": 1
        },
        {
          "text": "会纠结很久",
          "weight": -1
        },
        {
          "text": "凭感觉选一个",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己是\"有计划\"还是\"随机应变\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "有计划，喜欢确定",
          "weight": 2
        },
        {
          "text": "有计划但能应变",
          "weight": 1
        },
        {
          "text": "更偏应变",
          "weight": -1
        },
        {
          "text": "完全随机派",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "要去一个陌生的地方，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "先查清楚所有细节",
          "weight": 2
        },
        {
          "text": "定个大概方向",
          "weight": 1
        },
        {
          "text": "知道在哪就行",
          "weight": -1
        },
        {
          "text": "跟着导航走",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"变化\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "让人不安",
          "weight": 2
        },
        {
          "text": "偶尔可以",
          "weight": 1
        },
        {
          "text": "是好事",
          "weight": -1
        },
        {
          "text": "越变越好",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己是\"按部就班\"还是\"自由发挥\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "按部就班，踏实",
          "weight": 2
        },
        {
          "text": "有章法但灵活",
          "weight": 1
        },
        {
          "text": "比较自由",
          "weight": -1
        },
        {
          "text": "完全自由发挥",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "定了闹钟，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "立刻起床",
          "weight": 2
        },
        {
          "text": "赖几分钟但不会太久",
          "weight": 1
        },
        {
          "text": "按掉再睡一会儿",
          "weight": -1
        },
        {
          "text": "定好几个闹钟",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得自己\"控制欲\"强吗",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "比较强",
          "weight": 2
        },
        {
          "text": "还行",
          "weight": 1
        },
        {
          "text": "不强",
          "weight": -1
        },
        {
          "text": "完全没有",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "做一件事，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "想做就做",
          "weight": 2
        },
        {
          "text": "有计划地做",
          "weight": 1
        },
        {
          "text": "需要有动力才能做",
          "weight": -1
        },
        {
          "text": "看心情",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "你觉得\"秩序\"",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "非常重要",
          "weight": 2
        },
        {
          "text": "挺好的",
          "weight": 1
        },
        {
          "text": "太秩序反而无聊",
          "weight": -1
        },
        {
          "text": "会被打破的",
          "weight": -2
        }
      ]
    },
    {
      "dimension": "JP",
      "text": "旅行中遇到好天气突然想改变行程，你",
      "leftChar": "J",
      "rightChar": "P",
      "options": [
        {
          "text": "算了按计划走",
          "weight": 2
        },
        {
          "text": "稍微调整一下",
          "weight": 1
        },
        {
          "text": "好啊改！",
          "weight": -1
        },
        {
          "text": "完全改变行程",
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
      "dimension": "OCEAN_E",
      "text": "我在人群中感到精力充沛",
      "leftChar": "E+",
      "rightChar": "E-",
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
      "dimension": "OCEAN_O_C",
      "text": "我既想创新又想精确",
      "leftChar": "O+C+",
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
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "OCEAN_C",
      "text": "我做事之前习惯先列好清单和步骤",
      "leftChar": "C+",
      "rightChar": "C-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "OCEAN_A",
      "text": "即使别人有错，我也会顾及对方的感受再开口",
      "leftChar": "A+",
      "rightChar": "A-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "OCEAN_N",
      "text": "一点小失误也会让我反复懊恼很久",
      "leftChar": "N+",
      "rightChar": "N-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "ENMEA_7",
      "text": "我会不断给自己安排新鲜有趣的事，避免生活单调",
      "leftChar": "E7",
      "rightChar": "-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "ENMEA_8",
      "text": "别人越强硬，我越要正面顶回去",
      "leftChar": "E8",
      "rightChar": "-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "ENMEA_9",
      "text": "为了不破坏气氛，我常把真实想法咽回去",
      "leftChar": "E9",
      "rightChar": "-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
      ]
    },
    {
      "dimension": "ENMEA_4",
      "text": "我希望别人记住我是「特别的那一个」",
      "leftChar": "E4",
      "rightChar": "-",
      "options": [
        { "text": "完全符合", "weight": 2 },
        { "text": "比较符合", "weight": 1 },
        { "text": "不太符合", "weight": -1 },
        { "text": "完全不符合", "weight": -2 }
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
        "哲学家用"
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
      "tagline": "被对\"无聊\"的恐惧追着跑",
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
      "description": "MBTI 的 ENFP/ESFP 是\"爱创造/爱玩\"——你是被对\"无聊\"的恐惧追着跑。你一秒都不能安静，手机要在手上、音乐要放着、朋友要约着。不是因为你真的有多快乐，是因为一停下来就会感受到那些你在逃避的东西——空虚、痛苦、没有意义。",
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
      "tagline": "绝不允许别人对自己说\"不\"",
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
      "description": "MBTI 的 ENTJ/ESTJ 是\"想赢\"——你是绝不允许别人对你说\"不\"。老板说\"这个不能做\"你偏要做，父母说\"你不行\"你偏要证明自己行。控制欲不是因为你想统治别人，是因为被控制=失去自我=比死还难受。",
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
      "name": "内 Peace 者",
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
        "内心 peace 最重要",
        "被动"
      ],
      "description": "MBTI 的 ISFP 是\"随和\"——你是为了不冲突可以放弃一切选择。\"晚上吃什么？\"\"随便。\"\"周末去哪？\"\"都行。\"\"我们之间有问题吗？\"\"没有啊。\"——你不是没想法，是怕一旦说出来就会有冲突，而冲突会让你内心的 peace 碎掉。",
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
      "tagline": "被\"我是不是不够独特\"折磨",
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
      "description": "MBTI 的 INFP 是\"有个人价值观\"——你是被\"我是不是不够独特\"这个念头反复折磨。你朋友圈发的东西必须是别人没发过的，你喜欢的音乐必须是小众的，你甚至会刻意选别人不选的路。不是因为你不想合群，是因为如果和所有人都一样，那我还是我吗？",
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
