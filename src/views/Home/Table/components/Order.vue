<template>
  <div class="order">
    <div class="title">固定表头, 按照表头顺序排序</div>
    <el-checkbox-group v-model="activeHeads">
      <el-checkbox
        v-for="i in tableHead"
        :label="i.value"
        :key="i.value"
        :disabled="i.disabled"
        @change="change($event, i)"
      >{{i.label}}</el-checkbox>
    </el-checkbox-group>
    <BaseTable :headData="headData" :tableData="tableData" />
  </div>
</template>

<script>
import { tableHead, tableData } from '../mock'
import BaseTable from './BaseTable.vue'
import { deepCopy } from '@/utils'
export default {
  name: 'Order',
  components: { BaseTable },
  props: {},
  data () {
    return {
      tableHead, tableData,
      activeHeads: [],
      headData: [],
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.initialization()
  },
  methods: {
    initialization () {
      const list = this.tableHead.slice(0, 4)
      this.headData = deepCopy(list)
      this.activeHeads = list.map(i => i.value)
    },
    change (e, i) {
      i.isShow = e
      if (e) {
        this.headData.push(i)
      } else {
        this.headData = this.headData.reduce((a, b) => {
          if (b.value !== i.value) {
            a.push(b)
          }
          return a
        }, [])
      }
    },
  },
}
</script>

<style lang='less' scoped>
</style>