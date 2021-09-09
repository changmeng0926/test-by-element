<template>
  <div class="account-book">
    <div class="side">
      <el-menu
        :default-active="$route.path"
        class="side-menu"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        @select="handleSelect"
      >
        <el-menu-item index="/accountBook/board">
          <i class="iconfont icon-kanban"></i>
          <span slot="title">看板</span>
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
  name: 'AccountBook',
  components: {},
  props: {},
  data () {
    return {
      isCollapse: false,
    }
  },
  watch: {},
  computed: {},
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
    }
  },
}
</script>

<style lang='less' scoped>
.account-book {
  display: flex;
  width: 100%;
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
.icon-xiaoyouxi {
  font-size: 24px !important;
}
/deep/.el-menu-item,
/deep/.el-submenu__title {
  height: 48px;
  line-height: 48px;
}
/deep/.table.el-submenu {
  .el-menu-item-group__title {
    display: none;
  }
}
/deep/.el-menu-item-group {
  .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
<style>
.icon {
  width: 24px;
  height: 24px;
  font-size: 16px;
  fill: currentColor;
  overflow: hidden;
  margin-right: 5px;
}
</style>