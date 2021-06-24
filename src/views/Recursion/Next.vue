<template>
  <div class="next-content">
    <div class="next-f">
      <span v-for="i in treeList"
            :key="i.id"
            @click="selec(i)"
            :class="{active:setActive(i)}"
            class="item">{{i.label}}</span>
    </div>
    <Next v-if="activeIds.length>type"
          :treeList="childList"
          :activeIds="activeIds"
          :type="type+1" />
  </div>
</template>

<script>
import { deepCopy } from "@/utils";
import { initData } from "./next";
export default {
  name: 'Next',
  props: {
    type: {
      type: Number,
      default: () => 1
    },
    treeList: {
      type: Array,
      default: () => []
    },
    activeIds: {
      type: [Array, String, Number],
      default: () => []
    },
  },
  data () {
    return {
      childList: []
    }
  },
  watch: {
    activeIds: {
      deep: true,
      immediate: true,
      handler (n, o) {
        const list = this.treeList.filter(i => i.id === +this.activeIds[this.type - 1])
        if (list.length > 0 && list[0].child) {
          this.childList = list[0].child
        }
      }
    }
  },
  mounted () {
    console.log('mounted', this.type);
  },
  destroyed () {
    console.log('destroyed', this.type);
  },
  methods: {
    selec (i) {
      this.activeIds.length = this.type - 1
      this.activeIds[this.type - 1] = i.id
      this.filterData()
    },
    filterData () {
      let o = deepCopy(this.treeList)
      this.activeIds.forEach((i, index) => {
        if (index === this.type - 1) {
          const item = o.filter(k => k.id === +i)
          if (item.length > 0) {
            const list = initData(item)
            this.activeIds.push(...list)
          }
        }
      })
      return o
    },
    setActive (i) {
      return i.id === this.activeIds[this.type - 1]
    },
  }
}
</script>

<style lang="less" scoped>
.next-content {
  font-size: 14px;
}
.item {
  display: inline-block;
  margin: 10px;
  padding: 0 8px;
  height: 24px;
  line-height: 22px;
  border-radius: 2px;
  cursor: pointer;
}
.item.active {
  color: deepskyblue;
}
</style>