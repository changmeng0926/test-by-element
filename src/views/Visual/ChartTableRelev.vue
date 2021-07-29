<template>
  <div class="line-chart-relev">
    <LineChart
      :selectList="selectList"
      :xAxisData="headerData"
      :series="bodyData"
      @legendChange="legendChange"
    />
    <RelevTable
      ref="relev"
      :headerData="headerData"
      :bodyData="bodyData"
      @selectChange="selectChange"
    />
  </div>
</template>

<script>
import { headerData, bodyData } from "./mock/chartTableRelev";
import LineChart from "./Charts/LineChart.vue";
import RelevTable from "./components/RelevTable.vue";
export default {
  name: 'ChartTableRelev',
  components: { LineChart, RelevTable },
  props: {},
  data () {
    return {
      headerData,
      bodyData,
      selectList: []
    }
  },
  watch: {
  },
  computed: {},
  mounted () {
    this.$refs.relev.handleSelect(this.bodyData)
  },
  methods: {
    selectChange (val) {
      this.selectList = val
    },
    legendChange (params) {
      const selected = params.selected
      const list = this.bodyData.reduce((o, i) => {
        if (selected[i.name]) {
          o.push(i)
        }
        return o
      }, [])
      this.$refs.relev.handleSelect(list)
    },
  },
}
</script>

<style lang='less' scoped>
</style>