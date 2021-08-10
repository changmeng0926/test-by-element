<template>
  <div class="board-content">
    <el-tabs v-model="activeName" type="border-card" @tab-click="tabChange">
      <el-tab-pane name="barCharts">
        <span slot="label">
          <i class="iconfont icon-tubiaozhuzhuangtu"></i>
          柱状图
        </span>
        <BarCharts v-if="activeName === 'barCharts'" />
      </el-tab-pane>
      <el-tab-pane name="chartTable">
        <span slot="label">
          <i class="iconfont icon-tubiaoliandong"></i>
          图表联动
        </span>
        <ChartTableRelev v-if="activeName === 'chartTable'" />
      </el-tab-pane>
      <el-tab-pane name="flowChart">
        <span slot="label">
          <i class="iconfont icon-liuchengtu"></i>
          流程图
        </span>
        <DataFlow v-if="activeName === 'flowChart'" />
      </el-tab-pane>
      <el-tab-pane name="forceMap">
        <span slot="label">
          <i class="iconfont icon-yinlitu"></i>
          引力图
        </span>
        <ForceMap v-if="activeName === 'forceMap'" />
      </el-tab-pane>
      <el-tab-pane name>
        <span slot="label">
          <i class="iconfont icon-gantetu5"></i>
          甘特图
        </span>
        甘特图
      </el-tab-pane>
      <el-tab-pane name>
        <span slot="label">
          <i class="iconfont icon-guanxitu1"></i>
          关系图
        </span>
        关系图
      </el-tab-pane>
      <el-tab-pane name>
        <span slot="label">
          <i class="iconfont icon-shutu1"></i>
          树图
        </span>
        树图
      </el-tab-pane>
      <el-tab-pane name="dataSharing">
        <span slot="label">
          <i class="iconfont icon-liandong"></i>
          联动和共享数据集
        </span>
        <DataSharing v-if="activeName === 'dataSharing'" />
      </el-tab-pane>
      <el-tab-pane name="radar">
        <span slot="label">
          <i class="iconfont icon-leidatu"></i>
          雷达图
        </span>
        <Radar v-if="activeName === 'radar'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ForceMap from "./Charts/ForceMap.vue";
import BarCharts from "./Charts/BarCharts.vue";
import DataSharing from "./Charts/DataSharing.vue";
import Radar from "./Charts/Radar.vue";
import DataFlow from "./DataFlow.vue";
import ChartTableRelev from "./ChartTableRelev.vue";
export default {
  name: 'Visual',
  components: { ForceMap, BarCharts, DataFlow, ChartTableRelev, DataSharing, Radar },
  data () {
    return {
      activeName: 'chartTable',
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    tabChange (v, e) {
      console.log(v.label, 'x');
    }
  }
}
</script>

<style lang="less" scoped>
.el-tabs--border-card {
  height: 100%;
  border: none;
}
/deep/.el-tabs__content {
  height: calc(100% - 39px);
}
/deep/.el-tab-pane {
  width: 100%;
  height: 100%;
}
/deep/.el-tabs__content {
  padding: 0;
}
#pane-chartTable {
  overflow-y: scroll;
}
</style>