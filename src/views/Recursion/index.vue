<template>
  <div>
    <Next :treeList="treeList"
          :type="type"
          :activeIds="ids" />
  </div>
</template>

<script>
import Next from "./Next.vue";
import { treeList } from "./mock/index";
export default {
  name: 'Recursion',
  components: { Next },
  data () {
    return {
      treeList,
      ids: [],
      type: 1
    }
  },
  watch: {
    ids: {
      deep: true,
      immediate: true,
      handler (n, o) {
        console.log('this.ids', this.ids);
      }
    }
  },
  computed: {},
  created () { },
  mounted () {
    this.init(this.treeList)
    console.log('ids', this.ids)
  },
  methods: {
    init (list) {
      list.forEach((i, index) => {
        if (index === 0) {
          this.ids.push(i.id)
          if (i.child) {
            return this.init(i.child)
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>