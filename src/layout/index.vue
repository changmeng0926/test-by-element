<template>
  <div class="layout-content">
    <div class="header">
      <div class="logo"></div>
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
        <el-menu-item index="/visual">可视化</el-menu-item>
        <el-menu-item index="/permission">permission</el-menu-item>

        <!-- <el-submenu index="3">
          <template slot="title">components</template>
          <el-menu-item index="/VirtualList">虚拟列表</el-menu-item>
        </el-submenu>-->
        <el-menu-item index="/notes">notes</el-menu-item>
        <el-menu-item index="/map">地图</el-menu-item>
        <el-menu-item index="/accountBook">手账本</el-menu-item>
      </el-menu>
      <div class="head-right">
        <div class="user-message">
          <el-avatar
            class="user-photo"
            :size="36"
            src="https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg"
          ></el-avatar>
          <i class="iconfont icon-yonghu1"></i>
          <span @click="goDetail" class="user-name">{{message.name}}</span>
        </div>
        <el-button @click="logOut" class="log-out" type="text">退出</el-button>
      </div>
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
        // if (Object.keys(val).length === 0) {
        //   this.$router.push({ path: '/login' })
        // }
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
      // console.log(key, keyPath);
    },
    logOut () {
      this.$store.commit('SET_USER', null)
      this.$router.push({ path: '/login' })
    },
    goDetail () {
      if (this.message.name === '游客') return
      this.$router.push({ path: '/userDetail' })
    },
  },
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
  display: flex;
  justify-content: space-between;
  background-color: rgb(84, 92, 100);
}
.head-right {
  display: flex;
  align-items: center;
  padding-right: 24px;
  .icon-yonghu1 {
    color: #fff;
    font-size: 24px;
  }
  .user-message {
    display: flex;
    align-items: center;
  }
  .user-name {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
  }
}
.log-out {
  color: #fff;
  margin-left: 16px;
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