<template>
  <div class="base-list">
    <div class="title">
      <span>name</span>
      <span>value</span>
    </div>
    <div class="list" ref="wrapper" @scroll="handleScroll">
      <div class="scroll-content" :style="{height:contentHeight}">
        <div ref="visible">
          <div v-for="i in visibleData" :key="i.id" class="list-item">
            <span class="item-label">{{i.label || i.name}}</span>
            <span>{{i.value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
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
          value: `${value}_${i}`
        }
        this.listData.push(obj)
      }
    }
  },
}
</script>

<style lang='less' scoped>
.base-list {
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
    span {
      flex: 1;
      text-indent: 24px;
    }
  }
  .item-label {
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }
}
</style>