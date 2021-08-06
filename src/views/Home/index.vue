<template>
  <div class="home-content">
    <div class="side">
      <div class="expend" @click="collapse">
        <i
          class="iconfont"
          :class="{ 'icon-zhankai-menu': isCollapse, 'icon-zhaikai-menu': !isCollapse }"
        ></i>
      </div>

      <el-menu
        :default-active="$route.path"
        class="side-menu"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        @select="handleSelect"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-kanban"></i>
            <span slot="title">看板</span>
          </template>
          <!-- <el-menu-item-group>
            <span slot="title">the first group</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="the second group">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>-->
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-digui"></i>
            <span slot="title">递归组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/recursion">树状图切换</el-menu-item>
            <el-menu-item index="/home/dendrogram">树形图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-biaoge"></i>
            <span slot="title">Table</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/originalTable">原生表格</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/home/calendar">
          <i class="iconfont icon-rili2"></i>
          <span slot="title">日历</span>
        </el-menu-item>

        <el-menu-item index="/home/virtualList">
          <i class="iconfont icon-biaodanliebiao"></i>
          <span slot="title">虚拟列表</span>
        </el-menu-item>

        <el-menu-item index="/home/dragLayout">
          <i class="iconfont icon-kebianji"></i>
          <span slot="title">可编辑布局</span>
        </el-menu-item>

        <el-menu-item index="/home/shoppingTrolley">
          <i class="iconfont icon-gouwugouwuchedinggou"></i>
          <span slot="title">购物车</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: true,
    }
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    handleSelect (key, keyPath) {
      this.$router.push({ path: key })
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  width: 100%;
  display: flex;
}
.main {
  height: 100%;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
}
.expend {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -36px;
  cursor: pointer;
  // bottom: 0;
  bottom: 50%;
  transform: translate(0, 50%);
  z-index: 1;
  i {
    font-size: 24px;
    &:hover {
      color: #409eff;
    }
  }
}
.side {
  position: relative;
}
.side-menu {
  height: 100%;
  width: 201px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}
.side-menu.el-menu--collapse {
  width: 63px;
}
/deep/.el-menu-item [class^="iconfont"] {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
  display: inline-block;
}
.el-submenu [class^="iconfont"] {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  display: inline-block;
}
</style>