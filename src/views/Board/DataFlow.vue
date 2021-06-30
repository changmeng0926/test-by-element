<template>
  <el-container>
    <el-aside width="200px">
      <SideBar />
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: 'DataFlow',
  components: { SideBar },
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  mounted () {
  },
  methods: {},
}
</script>

<style lang='less' scoped>
.el-container {
  width: 100%;
  height: 100%;
  & > .el-aside {
    border-right: 1px solid #e4e7ed;
  }
}
</style>