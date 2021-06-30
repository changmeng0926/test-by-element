<template>
  <div class="content">
    <div class="left">
      <div class="left-list">
        <span class="left-item" v-for="i in list" :key="i.id">{{i.name}}</span>
      </div>
      <div class="left-line">
        <div class="top"></div>
        <div class="mid"></div>
        <div class="bot"></div>
      </div>
    </div>
    <div class="right">
      <TestTree :list="tesstData" />
    </div>
  </div>
</template>

<script>
import { productData } from "../mock/index";
import TestTree from "./TestTree.vue";
export default {
  name: 'Test',
  components: { TestTree },
  props: {},
  data () {
    return {
      tesstData: [],
      list: [
        {
          name: '萤石',
          id: 1
        },
        {
          name: '磷矿石',
          id: 2
        }
      ]
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.tesstData = productData
    console.log('this.tesstData', this.tesstData);
  },
  methods: {
    initData (list) {
      list.forEach(i => {
        i.isShow = true
      })
      return list
    }
  },
}
</script>

<style lang='less' scoped>
.content {
  display: flex;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-item,
.right-item {
  width: 110px;
  word-break: keep-all;
  line-height: 24px;
  border: 1px solid skyblue;
  padding: 8px 12px;
  text-align: center;
  margin-bottom: 24px;
}
.left-item:last-child {
  margin: 0;
}
.left-list {
  display: flex;
  flex-direction: column;
}
.left-line {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  // height: calc(100% - 32px);
  height: 75px;
}
.top,
.bot {
  width: 25px;
  height: 1px;
  background: skyblue;
}
.mid {
  flex: 1;
  width: 1px;
  background: skyblue;
}
.left,
.right {
  display: flex;
}
.right-tree {
  display: flex;
  align-items: center;
}
</style>