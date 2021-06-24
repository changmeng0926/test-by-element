export const treeList = [
  {
    label: '周一',
    id: 1,
    type: 1,
    father_id: 0,
    child: [
      {
        label: '水果',
        id: 100,
        type: 2,
        father_id: 1,
        child: [
          {
            label: '香蕉',
            id: 1000,
            type: 3,
            father_id: 100,
          },
          {
            label: '火龙果',
            id: 1001,
            type: 3,
            father_id: 100,
          },
          {
            label: '野樱莓',
            id: 1002,
            type: 3,
            father_id: 100,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 101,
        type: 2,
        father_id: 1,
        child: [
          {
            label: '白菜',
            id: 1020,
            type: 3,
            father_id: 100,
          },
          {
            label: '黄瓜',
            id: 1021,
            type: 3,
            father_id: 100,
          },
          {
            label: '卷心菜',
            id: 1022,
            type: 3,
            father_id: 100,
          },
        ]
      }
    ]
  },
  {
    label: '周二',
    id: 2,
    type: 1,
    father_id: 0,
    child: [
      {
        label: '水果',
        id: 120,
        type: 2,
        father_id: 2,
        child: [
          {
            label: '苹果',
            id: 1200,
            type: 3,
            father_id: 120,
          },
          {
            label: '山竹',
            id: 1201,
            type: 3,
            father_id: 120,
          },
          {
            label: '草莓',
            id: 1202,
            type: 3,
            father_id: 120,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 121,
        type: 2,
        father_id: 2,
        child: [

          {
            label: '山药',
            id: 1220,
            type: 3,
            father_id: 121,
          },
          {
            label: '丝瓜',
            id: 1221,
            type: 3,
            father_id: 121,
          },
          {
            label: '玉米',
            id: 1222,
            type: 3,
            father_id: 121,
          },
        ]
      }
    ]
  },
  {
    label: '周三',
    id: 3,
    type: 1,
    father_id: 0,
    child: [
      {
        label: '水果',
        id: 140,
        type: 2,
        father_id: 3,
        child: [
          {
            label: '山楂',
            id: 1300,
            type: 3,
            father_id: 140,
          },
          {
            label: '百香果',
            id: 1301,
            type: 3,
            father_id: 140,
          },
          {
            label: '椰子',
            id: 1302,
            type: 3,
            father_id: 140,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 141,
        type: 2,
        father_id: 3,
        child: [
          {
            label: '云耳',
            id: 1320,
            type: 3,
            father_id: 141,
          },
          {
            label: '蕨苔',
            id: 1321,
            type: 3,
            father_id: 141,
          },
          {
            label: '枸杞芽',
            id: 1322,
            type: 3,
            father_id: 141,
          },
          {
            label: '中篷花',
            id: 1323,
            type: 3,
            father_id: 141,
          },
        ]
      }
    ]
  },
  {
    label: '周四',
    id: 4,
    type: 1,
    father_id: 0,
    child: [
      {
        label: '水果',
        id: 160,
        type: 2,
        father_id: 4,
        child: [
          {
            label: '枇杷',
            id: 1400,
            type: 3,
            father_id: 160,
          },
          {
            label: '葡萄',
            id: 1401,
            type: 3,
            father_id: 160,
          },
          {
            label: '杨桃',
            id: 1042,
            type: 3,
            father_id: 160,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 161,
        type: 2,
        father_id: 4,
        child: [
          {
            label: '胡萝卜',
            id: 1420,
            type: 3,
            father_id: 161,
          },
          {
            label: '水蒿',
            id: 1421,
            type: 3,
            father_id: 161,
          },
          {
            label: '牛舌菜',
            id: 1422,
            type: 3,
            father_id: 161,
          },
        ]
      }
    ]
  },
  {
    label: '周五',
    id: 5,
    type: 1,
    father_id: 5,
    child: [
      {
        label: '水果',
        id: 180,
        type: 2,
        father_id: 1,
        child: [
          {
            label: '西瓜',
            id: 1500,
            type: 3,
            father_id: 180,
          },
          {
            label: '南丰蜜桔',
            id: 1501,
            type: 3,
            father_id: 180,
          },
          {
            label: '圣女果',
            id: 1502,
            type: 3,
            father_id: 180,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 181,
        type: 2,
        father_id: 5,
        child: [
          {
            label: '冬菇',
            id: 1520,
            type: 3,
            father_id: 181,
          },
          {
            label: '长豆角',
            id: 1521,
            type: 3,
            father_id: 181,
          },
        ]
      }
    ]
  },
  {
    label: '周六',
    id: 6,
    type: 1,
    father_id: 0,
    child: [
      {
        label: '水果',
        id: 200,
        type: 2,
        father_id: 6,
        child: [
          {
            label: '榴莲',
            id: 1600,
            type: 3,
            father_id: 200,
          },
          {
            label: '红枣',
            id: 1601,
            type: 3,
            father_id: 200,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 201,
        type: 2,
        father_id: 6,
        child: [
          {
            label: '甜椒',
            id: 1620,
            type: 3,
            father_id: 100,
          },
          {
            label: '芸扁豆',
            id: 1621,
            type: 3,
            father_id: 100,
          },
          {
            label: '荸荠马蹄',
            id: 1622,
            type: 3,
            father_id: 100,
          },
        ]
      }
    ]
  },
  {
    label: '周日',
    id: 7,
    type: 1,
    father_id: 0,
    child: [
      {
        label: '水果',
        id: 220,
        type: 2,
        father_id: 7,
        child: [
          {
            label: '金桔',
            id: 1700,
            type: 3,
            father_id: 100,
          },
          {
            label: '柠檬',
            id: 1701,
            type: 3,
            father_id: 100,
          },
          {
            label: '蔓越莓',
            id: 1702,
            type: 3,
            father_id: 100,
          },
        ]
      },
      {
        label: '蔬菜',
        id: 221,
        type: 2,
        father_id: 7,
        child: [
          {
            label: '燕尾草',
            id: 1720,
            type: 3,
            father_id: 100,
          },
          {
            label: '菱菱角',
            id: 1721,
            type: 3,
            father_id: 100,
          },
          {
            label: '紫菜',
            id: 1722,
            type: 3,
            father_id: 100,
          },
        ]
      },
      {
        label: '水产',
        id: 222,
        type: 2,
        father_id: 7,
        child: [
          {
            label: '大草鱼',
            id: 1740,
            type: 3,
            father_id: 100,
          },
          {
            label: '胖头鱼',
            id: 1741,
            type: 3,
            father_id: 100,
          },
          {
            label: '鲈鱼',
            id: 1742,
            type: 3,
            father_id: 100,
          },
          {
            label: '大闸蟹',
            id: 1743,
            type: 3,
            father_id: 100,
          },
          {
            label: '甲鱼',
            id: 1744,
            type: 3,
            father_id: 100,
          },
          {
            label: '海鲜',
            id: 1745,
            type: 3,
            father_id: 100,
            child: [
              {
                label: '花甲',
                id: 5000,
                type: 4,
                father_id: 1745,
              },
              {
                label: '澳龙',
                id: 5001,
                type: 4,
                father_id: 1745,
              },
              {
                label: '小黄鱼',
                id: 5002,
                type: 4,
                father_id: 1745,
              },
              {
                label: '蛏子',
                id: 5003,
                type: 4,
                father_id: 1745,
              },
              {
                label: '梭子蟹',
                id: 5004,
                type: 4,
                father_id: 1745,
              },
              {
                label: '牡蛎',
                id: 5005,
                type: 4,
                father_id: 1745,
              },
              {
                label: '三文鱼',
                id: 5006,
                type: 4,
                father_id: 1745,
              }
            ]
          },
        ]
      },
    ]
  }
]