<template>
  <div id="lineChart" class="line-chart"></div>
</template>

<script>
export default {
  name: 'LineChart',
  components: {},
  props: {
    series: {
      type: Array,
      default: () => []
    },
    xAxisData: {
      type: Array,
      default: () => []
    },
    selectList: {
      type: Array,
      default: () => []
    },
  },
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
    },
    selectList: {
      deep: true,
      handler (val) {
        const names = val.map(i => i.name)
        const selected = this.series.reduce((o, i) => {
          if (names.indexOf(i.name) !== -1) {
            o[i.name] = true
          } else {
            o[i.name] = false
          }
          return o
        }, {})
        this.option.legend.selected = selected
        this.myChart.setOption(this.option)
      }
    }
  },
  computed: {},
  mounted () {
    this.initChart()
    this.initOption()
  },
  methods: {
    initChart () {
      let el = document.getElementById('lineChart');
      this.myChart = this.$echarts.init(el);

      this.myChart.on('legendselectchanged', param => {
        this.$emit('legendChange', param)
      });
    },
    initOption () {
      this.option = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          selected: [],
          bottom: '5',
        },
        grid: {
          left: '20',
          right: '20',
          bottom: '40',
          containLabel: true
        },
        // 下载按钮
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xAxisData || []
        },
        yAxis: {
          type: 'value'
        },
        series: this.series || []
      }
    },
  },
}
</script>

<style lang='less' scoped>
.line-chart {
  width: 100%;
  height: 400px;
  padding: 24px;
}
</style>