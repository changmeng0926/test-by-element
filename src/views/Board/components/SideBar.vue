<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="任务" name="task">
      <div
        class="task-item"
        v-for="(t, index) in tasks"
        :key="t.taskId"
        @dragstart="drag($event, t, index)"
        @drop="drop($event, t, index)"
        @dragover.prevent
        draggable
      >
        <div class="item-icon">
          <i class="iconfont icon-renwu2"></i>
        </div>
        <div class="item-name">{{t.taskName}}</div>
      </div>
      <div class="add-task" @click="openAddModel">新 增</div>
    </el-tab-pane>

    <el-tab-pane label="数据流" name="dataFlow">
      <div
        class="flow-item"
        v-for="(f, index) in flows"
        :key="f.flowId"
        @click="selectFlow(f, index)"
        :class="{'is-select' : f.isSelect}"
      >
        <div class="item-icon">
          <i class="iconfont icon-32_sjjc_C_BI_shujuliurenwu_1"></i>
        </div>
        <div class="item-name">{{f.flowName}}</div>
      </div>
    </el-tab-pane>
    <glDialog @close="close" @submit="addTask" :visible="addVisible" title="新增任务"></glDialog>
  </el-tabs>
</template>

<script>
import { taskList, flowList, productList } from "../mock/flow";
import { deepCopy } from '@/utils'
export default {
  name: 'SideBar',
  components: {},
  props: {},
  data () {
    return {
      activeName: 'task',
      tasks: [],
      flows: [],
      currItem: null, //  记录拖动项
      currIndex: null,  //记录拖动项下标
      addVisible: false,
      prevIndex: null //  记录上一次active
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.tasks = deepCopy(taskList)
    this.flows = deepCopy(flowList)
    this.flows[0].isSelect = true
    this.prevIndex = 0
  },
  methods: {
    handleClick (v) { },
    drag (e, t, index) {
      this.currItem = t
      this.currIndex = index
    },
    drop (e, t, index) {
      this.tasks.splice(this.currIndex, 1)
      this.tasks.splice(index, 0, this.currItem)
    },
    openAddModel () {
      this.addVisible = true
    },
    close () {
      this.addVisible = false
    },
    addTask (index) {
      this.addVisible = false
    },
    selectFlow (f, index) {
      if (index === this.prevIndex) return
      this.flows[this.prevIndex].isSelect = false
      this.prevIndex = index
      f.isSelect = true
    }
  },
}
</script>

<style lang='less' scoped>
.el-tabs {
  height: 100%;
  /deep/.el-tabs__header {
    margin: 0;
  }
}
.el-tab-pane {
  background: #eee;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
/deep/.el-tabs__content {
  position: relative;
}
#pane-task.el-tab-pane {
  padding-bottom: 36px;
}
/deep/.el-tabs__nav {
  width: 100%;
  .el-tabs__item {
    padding: 0;
    width: 50%;
    text-align: center;
  }
}
.task-item,
.flow-item {
  display: flex;
  padding: 12px 16px;
  align-items: center;
  font-size: 14px;
  background: #fff;
  margin: 4px;
  cursor: pointer;
  color: #646464;
}
.item-name {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-icon {
  margin-right: 8px;
}
.iconfont {
  font-size: 24px;
}
.is-select {
  // background: rgb(64 158 255 / 50%);
  .item-icon,
  .item-name {
    color: #409eff;
    // color: #fff;
  }
}
.add-task {
  color: #fff;
  background: #409eff;
  line-height: 36px;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 4px;
  position: absolute;
  bottom: -4px;
  left: 0;
  width: calc(100% - 8px);
  cursor: pointer;
}
</style>