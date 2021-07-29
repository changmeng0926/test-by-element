<template>
  <div class="layout-content">
    <div class="header">
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">home</el-menu-item>

        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>-->

        <el-menu-item index="/visual">可视化</el-menu-item>
        <el-menu-item index="/permission">permission</el-menu-item>

        <!-- <el-submenu index="3">
          <template slot="title">components</template>
          <el-menu-item index="/VirtualList">虚拟列表</el-menu-item>
        </el-submenu>-->
        <el-menu-item index="/notes">notes</el-menu-item>
      </el-menu>
    </div>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  data () {
    return {
      activeIndex: '/home'
    }
  },
  watch: {
    message: {
      immediate: true,
      handler (val) {
        if (Object.keys(val).length === 0) {
          this.$router.push({ path: '/Login' })
        }
      }
    }
  },
  computed: {
    ...mapState({
      message: state => state.user.message
    })
  },
  created () {
    console.log(this.$route);
    const str = this.$route.path.split('/')[1]
    this.activeIndex = str
    console.log('this.activeIndex', this.activeIndex);
  },
  mounted () { },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({ path: key })
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.layout-content {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 60px;
}
/deep/.el-menu.el-menu--horizontal {
  border: none;
  display: flex;
  justify-content: center;
}
.main-content {
  height: calc(100% - 60px);
}
</style>