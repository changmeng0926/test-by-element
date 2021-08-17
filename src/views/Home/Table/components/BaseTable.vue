<template>
  <el-table class="base-table" :data="tableData" style="width: 100%">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column v-for="i in headData" :key="i.value">
      <template v-if="i.isShow" slot="header">{{i.label}}</template>
      <template
        v-if="i.isShow"
        slot-scope="scope"
      >{{ i.value === 'maritalStatus' ? setStatusText(scope.row.maritalStatus) : scope.row[i.value] }}</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'BaseTable',
  components: {},
  props: {
    headData: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    setStatusText (status) {
      if (status === 1) {
        return '未婚'
      } else if (status === 2) {
        return '已婚'
      } else {
        return '离异'
      }
    }
  },
}
</script>

<style lang='less' scoped>
// .base-table {
//   margin: 0 auto;
// }
</style>