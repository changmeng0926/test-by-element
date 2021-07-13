<template>
  <div id="BarChart" class="bar-chart"></div>
</template>

<script>
export default {
  name: 'BarCharts',
  data () {
    return {
      myChart: null,
      option: null
    }
  },
  watch: {
    option: {
      deep: true,
      immediate: true,
      handler () {
        this.option && this.myChart.setOption(this.option)
      }
    }
  },
  mounted () {
    this.initBar()
    this.initOption()
  },
  methods: {
    initBar () {
      var el = document.getElementById('BarChart')
      this.myChart = this.$echarts.init(el)
      this.option && this.myChart.setOption(this.option)
    },
    initOption () {
      this.option = {
        tooltip: {
          show: true,
          trigger: 'axis',
          // trigger: 'item',
          formatter: function (item) {  // 自定义tooltip
            // console.log(item)
            const el =
              `<dev class="tooltip-content" style="display:flex;flex-direction:column;">
              <dev class="tooltip-name">
                  <span class="circle" style="background:orange;width:10px;height:10px;border-radius:5px;display:inline-block;"></span>
                  <span class="name">${item[0].name}</span>
              </dev>
              <dev class="tooltip-value">${item[0].value}</dev>
          </dev>`
            return el
          },
          // 指示器
          axisPointer: {
            type: 'shadow', // 'line', 'none' 
            // axis: 'auto',
          },
          padding: [15, 12],
          textStyle: {
            color: 'yellowgreen'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          splitLine: {
            show: false
          },
          axisLine: { // x坐标轴样式
            lineStyle: {
              color: 'red',
              width: 10,
              type: 'solid'
            }
          },
          axisLabel: {  // x坐标轴样式
            color: 'skyblue',
            // 刻度轴分割线间隔,0代表显示所有标签也可以通过回调函数控制
            // (index:number, value: string) => boolean 第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 false
            interval: 0,
            rotate: 30
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {  // Y轴方向网格线
            show: true,
            lineStyle: {
              color: 'chartreuse',
              width: '5',
              type: 'dashed'
            }
          },
          axisLabel: {  // Y轴坐标轴label
            color: 'orange'
          }
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          // 图形样式
          itemStyle: {
            normal: {
              color: this.$echarts.graphic.LinearGradient(
                0, 1, 0, 0, [
                {
                  offset: 0,
                  // color: 'rgb(123,141,248,0.8)'
                  color: 'deepskyblue'
                },
                {
                  offset: 0.25,
                  // color: 'rgb(123,141,248,0.7)'
                  color: 'skyblue'
                },
                {
                  offset: 0.5,
                  // color: 'rgb(123,141,248,0.6)'
                  color: 'orangered'
                },
                {
                  offset: 0.75,
                  // color: 'rgb(123,141,248,0.5)'
                  color: 'orange'
                },
                {
                  offset: 1,
                  // color: 'rgb(69,84,238,0.4)'
                  color: 'gold'
                }
              ]
              )
            }
          }
        }]
      };
    }
  }
}
</script>

<style lang="less" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
}
</style>