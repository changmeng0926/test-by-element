<template>
  <div class="home-content">
    <el-container>
      <el-aside>
        <el-radio-group v-model="isCollapse"
                        class="expend">
          <el-radio-button v-show="isCollapse"
                           :label="false">展开</el-radio-button>
          <el-radio-button v-show="!isCollapse"
                           :label="true">收起</el-radio-button>
        </el-radio-group>

        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
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
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3"
                        disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  width: 100%;
  height: 100%;
  background: red;
}
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    width: 200px !important;
  }
}
/deep/.el-menu.el-menu-vertical-demo {
  // width: 200px;
  // display: inline-block;
}
/deep/.el-main,
.el-aside {
  padding: 0;
}
.expend {
  margin-bottom: 20px;
  width: 56px;
  display: flex;
  /deep/.el-radio-button {
    flex: 1;
  }
}
</style>