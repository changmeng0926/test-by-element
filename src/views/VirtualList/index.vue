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
      <el-tab-pane label="去掉高度限制" name="unfixed">
        <UnfixedHeight v-if="isUnfixed" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Select from "./component/Select.vue";
import BaseList from "./component/BaseList.vue";
import UnfixedHeight from "./component/UnfixedHeight.vue";
export default {
  name: 'VirtualList',
  components: { Select, BaseList, UnfixedHeight },
  data () {
    return {
      activeName: 'base',
      isBase: true,
      isSelect: false,
      isUnfixed: false,
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    tabChange (v, e) {
      if (v.name === 'base') {
        this.isBase = true
        this.isSelect = false
        this.isUnfixed = false
      } else if (v.name === 'select') {
        this.isBase = false
        this.isSelect = true
        this.isUnfixed = false
      } else if (v.name === 'unfixed') {
        this.isBase = false
        this.isSelect = false
        this.isUnfixed = true
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