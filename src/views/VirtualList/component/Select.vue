<template>
  <el-select v-model="inputValue"
             size="small"
             placeholder="请选择"
             :popper-append-to-body="false"
             v-selectScroll="selectScroll"
             class="select-virtual">
    <div class="select-option"
         ref="content"
         :style="{height: contentHeight}">
      <div class="virtuaList-wrapper"
           ref="wrapper">
        <el-option v-for="item in visibleData"
                   :key="item"
                   :label="item"
                   :value="item">
          <!-- <slot ref="slot"
                :item="item"></slot> -->
        </el-option>
      </div>
    </div>
  </el-select>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      inputValue: '',
      visibleData: [],  //  展示列表
      listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      itemHeight: 28
    }
  },
  computed: {
    contentHeight () {
      return this.listData.length * this.itemHeight + 'px'
    }
  },
  mounted () {
    this.updateVisbleData(0)
  },
  methods: {
    selectScroll (e) {
      // console.log(e, 'selectScroll')
      this.updateVisbleData(e.scrollTop)
    },
    updateVisbleData (scrollTop) {
      const visbleCount = Math.ceil(274 / this.itemHeight)  //  274为显示区域高度
      const start = Math.floor(scrollTop / this.itemHeight)
      const end = start + visbleCount
      console.log(start, 'end', start, 'end')
      this.visibleData = this.listData.slice(start, end)
      console.log('this.visibleData', this.visibleData)
      let H = start * this.itemHeight
      this.$refs.content.style.webkitTransform = `translate3d(0, ${-H}px,0)`
      this.$refs.wrapper.style.webkitTransform = `translate3d(0, ${H * 2}px,0)`
    }
  }

}
</script>

<style lang="less" scoped>
.select-virtual {
  width: 200px;
}
</style>