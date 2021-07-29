<template>
  <div class="un-fixed-list">
    <div class="title">
      <span>name</span>
      <span>value</span>
    </div>
    <div class="list" ref="wrapper" @scroll="handleScroll">
      <div class="scroll-content" :style="{height:contentHeight}">
        <div ref="visible">
          <div v-for="i in visibleData" :key="i.id" class="list-item">
            <div class="item-label">{{i.label || i.name}}</div>
            <div class="item-value">
              <span v-for="v in i.value" :key="v">{{v}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnfixedHeight',
  props: {},
  data () {
    return {
      listData: [],
      visibleData: [],
      itemHeight: 32
    }
  },
  watch: {},
  computed: {
    contentHeight () {
      return this.itemHeight * this.listData.length + 'px'
    }
  },
  updated () {
    console.log('xxxx');
  },
  mounted () {
    this.getListData()
    this.updateVisibleData(0)
  },
  methods: {
    handleScroll () {
      const { scrollTop } = this.$refs.wrapper
      this.updateVisibleData(scrollTop)

    },
    updateVisibleData (scrollTop) {
      const visbleCount = Math.ceil(this.$refs.wrapper.clientHeight / this.itemHeight)
      const start = Math.floor(scrollTop / this.itemHeight)
      const end = start + visbleCount
      this.visibleData = this.listData.slice(start, end)
      // console.log('this.visibleData', this.visibleData, scrollTop)
      let H = start * this.itemHeight
      this.$refs.visible.style.webkitTransform = `translate3d(0, ${H}px,0)`
    },
    getListData () {
      let name = '我是name'
      let label = '我是label'
      let value = '我是value'
      for (let i = 1; i <= 1000; i++) {
        const obj = {
          id: i,
          name: i % 2 === 0 ? `${name}_i` : '',
          label: `${label}_${i}`,
          value: i % 5 === 0 ? [`${value}_${i}`, `${value}_${i}_copy`,] : i % 3 === 0 ? [`${value}_${i}`, `${value}_${i}_copy1`, `${value}_${i}_copy2`] : i % 4 === 0 ? [`${value}_${i}`, `${value}_${i}_copy1`, `${value}_${i}_copy2`, `${value}_${i}_copy3`] : [`${value}_${i}`]
        }
        this.listData.push(obj)
      }
    }
  },
}
</script>

<style lang='less' scoped>
.un-fixed-list {
  font-size: 14px;
  padding: 0 0 16px;
  height: 100%;
}
.title {
  line-height: 48px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  span {
    flex: 1;
    text-indent: 24px;
  }
}
.list {
  height: calc(100% - 48px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .list-item {
    display: flex;
    line-height: 32px;
    div {
      flex: 1;
      text-indent: 24px;
    }
  }
  .list-item:nth-child(2n) {
    background: rgba(200, 200, 200, 0.3);
  }
  .item-label {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }
  .item-value {
    display: flex;
    flex-direction: column;
  }
}
</style>