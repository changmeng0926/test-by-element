<template>
  <div class="virtual-list-content">
    <el-tabs v-model="activeName" type="border-card" @tab-click="tabChange">
      <el-tab-pane label="base" name="base">
        <span slot="label">
          <!-- <i class="el-icon-date"></i> -->
          基础用法
        </span>
        <BaseList v-if="isBase" />
      </el-tab-pane>
      <el-tab-pane label="select" name="select">
        <span slot="label">与el-select结合</span>
        <Select v-if="isSelect" />
      </el-tab-pane>
      <el-tab-pane label="去掉高度限制" name>去掉高度限制</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Select from "./component/Select.vue";
import BaseList from "./component/BaseList.vue";
export default {
  name: 'VirtualList',
  components: { Select, BaseList },
  data () {
    return {
      activeName: 'base',
      isBase: true,
      isSelect: true,
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    tabChange (v, e) {
      if (v.label === 'base') {
        this.isBase = true
        this.isSelect = false
      } else if (v.label === 'select') {
        this.isBase = false
        this.isSelect = true
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
  padding: 0;
  height: calc(100% - 39px);
  .el-tab-pane {
    height: 100%;
  }
}
</style>