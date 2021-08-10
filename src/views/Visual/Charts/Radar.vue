<template>
  <div id="radar" class="radar">Radar</div>
</template>

<script>
import { indicator, gradeTable } from '../mock/radar'
export default {
  name: 'Radar',
  components: {},
  props: {},
  data () {
    return {
      myChart: null,
      option: null,
    }
  },
  watch: {},
  computed: {},
  async mounted () {
    await this.initOption()
    this.initChart()

  },
  methods: {
    initChart () {
      let el = document.getElementById('radar');
      this.myChart = this.$echarts.init(el);
      this.myChart.setOption(this.option)
    },
    initOption () {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: gradeTable.map(i => i.name)
        },
        radar: {
          indicator: indicator,
        },
        series: [{
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          data: gradeTable,
        }]
      }
    },

  },
}
</script>

<style lang='less' scoped>
.radar {
  width: 100%;
  height: 600px;
  padding: 24px 24px 0;
}
</style>