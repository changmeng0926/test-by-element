<template>
  <div id="forceMap"
       class="force-map"></div>
</template>

<script>
import { nodes, edges } from "../mock/forceMap";
export default {
  name: 'ForceMap',
  data () {
    return {
      nodes: [],
      edges: [],
      option: {},
      // option: {
      //   grid: {
      //     y: '0',
      //     y2: '0',
      //     x: '0',
      //     x2: '0'
      //   },
      //   tooltip: {
      //     show: true,
      //     trigger: 'item',
      //     position: 'top',
      //     // axisPointer: {
      //     //     type: 'shadow',
      //     //     axis: 'auto'
      //     // },
      //     formatter: function (item) {
      //       // console.log(item)
      //       if (item.name.indexOf('>') !== -1) return
      //       return item.name
      //     }
      //   },
      //   series: {
      //     roam: true,
      //     type: 'graph',
      //     layout: 'force',
      //     animation: false,
      //     hoverAnimation: true,
      //     legendHoverLink: true,
      //     data: this.nodes,
      //     width: '100%',
      //     height: '100%',
      //     label: {
      //       normal: {
      //         show: true,
      //         // [50%,50%] [x,y] , 'inside', 'bottom' 'top'
      //         // position: 'inside',
      //         textStyle: {
      //           // color: 'orange',
      //           color: [],
      //           // fontSize: 'normal',
      //           fontSize: function () { },
      //           fontWeight: 'bolder',
      //           align: 'center'
      //         },
      //         rich: {
      //           img: {
      //             backgroundColor: {
      //               image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg'
      //             },
      //             height: 36
      //           },
      //           img_: {
      //             backgroundColor: {
      //               image: ''
      //             },
      //             // height: 50
      //           },
      //           li14: {
      //             lineHeight: 14,
      //             fontSize: 12,
      //             color: 'pink'
      //           },
      //           li25: {
      //             height: 80,
      //             lineHeight: 25,
      //             fontSize: 18,
      //             color: '#fff',
      //             fontWeight: 500
      //           },
      //         },
      //         formatter: function (label) {
      //           // console.log(label)
      //           const name = label.name
      //           const str = name.length > 7 ? `${name.substring(0, 6)}...` : name
      //           const midStr = name.substring(0, 4) + '...'
      //           if (label.dataIndex === 0) {
      //             return `{img|}\n` + `{li25}${midStr}`
      //           } else {
      //             return `{img_|}\n` + `{li14}${str}`
      //           }
      //         },
      //       },
      //     },
      //     force: {
      //       // initLayout: 'circular'
      //       gravity: 0.1,
      //       repulsion: 500,
      //       edgeLength: 180,
      //       // 是否开启动画
      //       layoutAnimation: true,
      //       emphasis: {
      //         color: 'pink',
      //         nodeStyle: {
      //           width: '120',
      //           height: '120'
      //         }
      //       }
      //     },
      //     itemStyle: {
      //       show: true,
      //       normal: {
      //         color: 'deepskyblue',
      //       }
      //     },
      //     lineStyle: {
      //       normal: {
      //         color: 'orangered'
      //       },
      //       emphasis: {
      //         color: 'red'
      //       }
      //     },
      //     edges: this.edges
      //   }
      // },
      myChart: null
    }
  },
  mounted () {
    this.nodes = nodes
    this.edges = edges
    this.$nextTick(() => {
      this.initOption()
      this.initCharts()
    })
  },
  methods: {
    initOption () {
      this.option = {
        grid: {
          y: '0',
          y2: '0',
          x: '0',
          x2: '0'
        },
        tooltip: {
          show: true,
          trigger: 'item',
          position: 'top',
          // axisPointer: {
          //     type: 'shadow',
          //     axis: 'auto'
          // },
          formatter: function (item) {
            // console.log(item)
            if (item.name.indexOf('>') !== -1) return
            return item.name
          }
        },
        series: {
          roam: true,
          type: 'graph',
          layout: 'force',
          animation: false,
          hoverAnimation: true,
          legendHoverLink: true,
          data: this.nodes,
          width: '100%',
          height: '100%',
          label: {
            normal: {
              show: true,
              // [50%,50%] [x,y] , 'inside', 'bottom' 'top'
              // position: 'inside',
              textStyle: {
                // color: 'orange',
                color: [],
                // fontSize: 'normal',
                fontSize: function () { },
                fontWeight: 'bolder',
                align: 'center'
              },
              rich: {
                img: {
                  backgroundColor: {
                    image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg'
                  },
                  height: 36
                },
                img_: {
                  backgroundColor: {
                    image: ''
                  },
                  // height: 50
                },
                li14: {
                  lineHeight: 14,
                  fontSize: 12,
                  color: 'pink'
                },
                li25: {
                  height: 80,
                  lineHeight: 25,
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: 500
                },
              },
              // formatter: function (label) {
              //   // console.log(label)
              //   const name = label.name
              //   const str = name.length > 7 ? `${name.substring(0, 6)}...` : name
              //   const midStr = name.substring(0, 4) + '...'
              //   // if (label.dataIndex === 0) {
              //   //   return `{img|}\n` + `{li25}${midStr}`
              //   // } else {
              //   //   return `{img_|}\n` + `{li14}${str}`
              //   // }
              // },
            },
          },
          force: {
            // initLayout: 'circular'
            gravity: 0.1,
            repulsion: 500,
            edgeLength: 180,
            // 是否开启动画
            layoutAnimation: true,
            emphasis: {
              color: 'pink',
              nodeStyle: {
                width: '120',
                height: '120'
              }
            }
          },
          itemStyle: {
            show: true,
            normal: {
              color: 'deepskyblue',
            }
          },
          lineStyle: {
            normal: {
              color: 'orangered'
            },
            emphasis: {
              color: 'red'
            }
          },
          edges: this.edges
        }
      };
    },
    initCharts () {
      var el = document.getElementById('forceMap');
      this.myChart = this.$echarts.init(el, null, { devicePixelRatio: 2, renderer: 'canvas' })
      this.myChart.setOption(this.option)
      this.myChart.on('click', params => {
        console.log(params);
        if (params.name === 'more') {
          this.add()
        }
      });
    },
    add () {
      this.edges.push({ source: 0, target: edges.length + 1 })
      this.nodes.push({
        id: nodes.length + 1,
        name: `${nodes.length + 1}`,
        // label: {
        // 	normal: {
        // 		show: true,
        // 		position: 'bottom',
        // 		fontSize: '12',
        // 		color: 'deepskyblue'
        // 	}
        // },
        symbol: '',
        symbolSize: 80
      })
      this.myChart.setOption(this.option);
    },
  }
}

</script>

<style lang="less" scoped>
.force-map {
  width: 100%;
  height: 100%;
}
</style>