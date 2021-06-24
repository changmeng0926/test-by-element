<template>
  <div class="virtual-list-content">
    <el-tabs type="border-card"
             @tab-click="tabChange">
      <el-tab-pane>
        <span slot="label">
          <!-- <i class="el-icon-date"></i> -->
          基础用法
        </span>
        基础用法
      </el-tab-pane>
      <el-tab-pane label="与el-select结合">
        <Select />
      </el-tab-pane>
      <el-tab-pane label="去掉高度限制">去掉高度限制</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Select from "./component/Select.vue";
export default {
  name: 'VirtualList',
  components: { Select },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    tabChange (v, e) {
      console.log(v, e);
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
</style>