<template>
  <div class="relev-table">
    <el-table
      style="width: 100%"
      ref="relev"
      :data="bodyData"
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <el-table-column align="center" v-for="(i, d) in headerData" :key="i">
        <template slot="header">{{i}}</template>
        <template slot-scope="scope">{{ scope.row.data[d] }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RelevTable',
  components: {},
  props: {
    bodyData: {
      type: Array,
      default: () => []
    },
    headerData: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {

    }
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    handleSelectionChange (val) {
      this.$emit('selectChange', val)
    },
    handleSelect (list) {
      this.$refs.relev.clearSelection();
      this.$nextTick(() => {
        list.forEach(i => {
          this.$refs.relev.toggleRowSelection(i);
        });
      })
    },
  },
}
</script>

<style lang='less' scoped>
.relev-table {
  padding: 24px;
  /deep/.el-table {
    border: 1px solid #ebeef5;
    td,
    th {
      padding: 0;
    }
    th {
      line-height: 30px;
    }
    td {
      height: 38px;
    }
    &::before {
      height: 0;
    }
    thead tr th {
      background: #e9ebff;
    }
    tbody tr:last-child td {
      border: none;
    }
  }
}
</style>