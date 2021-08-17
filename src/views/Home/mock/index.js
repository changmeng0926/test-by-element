export const productData = [
  {
    name: '氟化工',
    id: '000',
    isShow: true,
    child: [
      {
        name: '萤石',
        id: '000001',
        isShow: true,
        child: [
          {
            name: '氟氢酸',
            id: 1,
            isShow: true,
            child: [
              {
                name: '有机',
                id: 11,
                isShow: true,
                child: [
                  {
                    name: 'ODS及其代替品',
                    id: 111,
                    isShow: true,
                    child: [
                      {
                        name: '制冷剂',
                        id: 1111,
                        isShow: true,
                        child: [
                          {
                            name: '家电制冷剂',
                            id: 11111,
                            isShow: true,
                          },
                          {
                            name: '汽车制冷剂',
                            id: 11112,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '发泡剂',
                        id: 1112,
                        isShow: true,
                        child: [
                          {
                            name: '塑料',
                            id: 11121,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '其他',
                        id: 1113,
                        isShow: true,
                        child: [
                          {
                            name: '气雾剂等',
                            id: 11131,
                            isShow: true,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: '含氟聚合物',
                    id: 112,
                    isShow: true,
                    child: [
                      {
                        name: '氟橡胶/氟树脂',
                        id: 1121,
                        isShow: true,
                        child: [
                          {
                            name: '工业/建筑',
                            id: 11211,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '氟硅橡胶',
                        id: 1122,
                        isShow: true,
                        child: [
                          {
                            name: '汽车/军工',
                            id: 11221,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '氟涂料',
                        id: 1123,
                        isShow: true,
                        child: [
                          {
                            name: '工业防腐',
                            id: 11231,
                            isShow: true,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: '含氟精细化学品',
                    id: 113,
                    isShow: true,
                    child: [
                      {
                        name: '含氟医药中间体',
                        id: 1131,
                        isShow: true,
                        child: [
                          {
                            name: '医药/卫生',
                            id: 11311,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '含氟农药中间体',
                        id: 1132,
                        isShow: true,
                        child: [
                          {
                            name: '工业',
                            id: 11321,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '含氟燃料中间体',
                        id: 1133,
                        isShow: true,
                        child: [
                          {
                            name: '纺织印染',
                            id: 11331,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '含氟精细中间体',
                        id: 1134,
                        isShow: true,
                        child: [
                          {
                            name: '信息农业',
                            id: 11341,
                            isShow: true,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: '无机',
                id: 12,
                isShow: true,
                child: [
                  {
                    name: '氟化盐',
                    id: 121,
                    isShow: true,
                    child: [
                      {
                        name: '电解铝',
                        id: 1211,
                        isShow: true,
                        child: [
                          {
                            name: '锂电池',
                            id: 12111,
                            isShow: true,
                          },
                        ],
                      },
                      {
                        name: '锂盐',
                        id: 1212,
                        isShow: true,
                        child: [
                          {
                            name: '超级电容',
                            id: 12121,
                            isShow: true,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: '其他',
                    id: 122,
                    isShow: true,
                    child: [
                      {
                        name: '酸洗/石油液化',
                        id: 1221,
                        isShow: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '磷矿石',
        id: '000002',
        isShow: true,
        child: [],
      },
    ],
  },
]

export const verTreeData = [
  {
    name: '氟化工',
    id: '000',
    isShow: true,
    child: [
      {
        name: '上游原料',
        id: '000001',
        isShow: true,
        child: [
          {
            name: '萤石',
            id: '000001001',
            isShow: true,
            child: [],
          },
        ],
      },
      {
        name: '中游原料',
        id: '000002',
        isShow: true,
        child: [
          {
            name: '氟氢酸',
            id: '000002001',
            isShow: true,
            child: [
              {
                name: '氟化烷烃',
                id: '000002001001',
                isShow: true,
                child: [
                  {
                    name: '制冷剂',
                    id: '000002001001001',
                    isShow: true,
                    child: [
                      {
                        name: '一氟一氯甲烷',
                        id: '000002001001001001',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '七氟丙烷',
                        id: '000002001001001002',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '四氯乙烷',
                        id: '000002001001001003',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '一氟三氯甲烷',
                        id: '000002001001001004',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '二氟三氯甲烷',
                        id: '000002001001001005',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '五氯乙烷',
                        id: '000002001001001006',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '一氟二氯乙烷',
                        id: '000002001001001007',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: '氟塑料',
                id: '000002001002',
                isShow: true,
                child: [
                  {
                    name: '氟橡胶',
                    id: '000002001002001',
                    isShow: true,
                    child: [
                      {
                        name: '氟碳橡胶',
                        id: '000002001002001001',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '氟硅橡胶',
                        id: '000002001002001002',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '氟化磷腈橡胶',
                        id: '000002001002000003',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                  {
                    name: '氟聚合物',
                    id: '000002001002002',
                    isShow: true,
                    child: [
                      {
                        name: '可溶性聚四氟乙烯',
                        id: '000002001002002001',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '聚偏氟乙烯',
                        id: '000002001002002002',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '全氟乙烯丙烯共聚物',
                        id: '000002001002002003',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '聚四氟乙烯',
                        id: '000002001002002004',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '聚三氟氯乙烯',
                        id: '000002001002002005',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '四氟乙烯共聚物',
                        id: '000002001002002006',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '三氟氢乙烯共聚物',
                        id: '000002001002002007',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '聚氟乙烯',
                        id: '000002001002002008',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                  {
                    name: '氟涂料',
                    id: '000002001002003',
                    isShow: true,
                    child: [
                      {
                        name: '氟碳涂料',
                        id: '000002001002003001',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: '氟精细化学品',
                id: '000002001003',
                isShow: true,
                child: [
                  {
                    name: '含氟农药中间体',
                    id: '000002001003001',
                    isShow: true,
                    child: [],
                  },
                  {
                    name: '含氟医学中间体',
                    id: '000002001003002',
                    isShow: true,
                    child: [
                      {
                        name: '氟化氢钾',
                        id: '000002001003002001',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                  {
                    name: '含氟农染料间体',
                    id: '000002001003003',
                    isShow: true,
                    child: [
                      {
                        name: '六氟丙烯',
                        id: '000002001003003001',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '四氟乙烯',
                        id: '000002001003003002',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '局全氟丙烯',
                        id: '000002001003003003',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                  {
                    name: '含氟电子材料',
                    id: '000002001003004',
                    isShow: true,
                    child: [
                      {
                        name: '四氟硼酸锂',
                        id: '000002001003004001',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '电子级氢氟酸',
                        id: '000002001003004002',
                        isShow: true,
                        child: [],
                      },
                      {
                        name: '氟丙酸甲酯',
                        id: '000002001003004003',
                        isShow: true,
                        child: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: '氟化盐',
                id: '000002001004',
                isShow: true,
                child: [
                  {
                    name: '氟化铝',
                    id: '000002001004001',
                    isShow: true,
                    child: [],
                  },
                  {
                    name: '氟化钠',
                    id: '000002001004002',
                    isShow: true,
                    child: [],
                  },
                  {
                    name: '氟化钾',
                    id: '000002001004003',
                    isShow: true,
                    child: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: '下游原料',
        id: '000003',
        isShow: true,
        child: [
          {
            name: '应用场景',
            id: '000003001',
            isShow: true,
            child: [],
          },
        ],
      },
    ],
  },
]
