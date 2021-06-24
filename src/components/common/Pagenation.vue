<template>
  <el-pagenation background
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :current-page="value.current"
                 :page-sizes="value.sizes"
                 :page-size="value.size"
                 :totle="value.totle"
                 layout="total, sizes, prev, pager, next, jumper">

  </el-pagenation>
</template>

<script>
export default {
  name: 'Pagenation',
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        current: 1,
        totle: 0,
        size: 1,
        sizes: [10, 20, 30, 40]
      })
    }
  },
  data () {
    return {}
  },
  methods: {
    handleSizeChange (size) {
      this.$emit('input', { ...this.value, size })
    },
    handleCurrentChange (size) {
      this.$emit('input', { ...this.value, size })
      this.$emit('nextPage')
    }
  }

}
</script>

<style>
</style>