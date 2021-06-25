<template>
  <div class="board-content">
    <el-tabs v-model="activeName" type="border-card" @tab-click="tabChange">
      <el-tab-pane name="barCharts" label="barCharts">
        <span slot="label">
          <i class="iconfont icon-tubiaozhuzhuangtu"></i>
          柱状图
        </span>
        <BarCharts v-if="isBarCharts" />
      </el-tab-pane>
      <el-tab-pane name>
        <span slot="label">
          <i class="iconfont icon-tubiaoliandong"></i>
          图表联动
        </span>
        图表联动
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
          <i class="iconfont icon-liuchengtu"></i>
          流程图
        </span>
        流程图
      </el-tab-pane>
      <el-tab-pane name="forceMap" label="forceMap">
        <span slot="label">
          <i class="iconfont icon-guanxitu1"></i>
          关系图
        </span>
        <ForceMap v-if="isForceMap" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ForceMap from "./Charts/ForceMap.vue";
import BarCharts from "./Charts/BarCharts.vue";
export default {
  name: 'Board',
  components: { ForceMap, BarCharts },
  data () {
    return {
      activeName: 'barCharts',
      isForceMap: false,
      isBarCharts: true,
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    tabChange (v, e) {
      console.log(v.label, 'x');
      if (v.label === 'forceMap') {
        this.isForceMap = true
        this.isBarCharts = false
      } else if (v.label === 'barCharts') {
        this.isBarCharts = true
      } else {
        this.isForceMap = false
        this.isBarCharts = false
      }
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
</style>