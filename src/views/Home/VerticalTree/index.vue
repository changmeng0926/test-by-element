<template>
  <div class="vertical-tree">
    <div v-for="item in treeData[0].child" :key="item.id">
      <div class="vertical-tree-item">
        <div class="title">{{item.name}}</div>
        <VerTree :list="item.child" />
      </div>
    </div>
  </div>
</template>

<script>
import { verTreeData } from '../mock/index'
import VerTree from './VerTree.vue'
export default {
  name: 'VerticalTree',
  components: { VerTree },
  props: {},
  data () {
    return {
      treeData: [
        {
          child: []
        }
      ],
    }
  },
  watch: {},
  computed: {},
  mounted () {
    this.treeData = verTreeData
  },
  methods: {},
}
</script>

<style lang='less' scoped>
.vertical-tree {
  padding: 24px;
  min-height: 100%;
  display: flex;
}
.title {
  text-align: center;
  word-break: keep-all;
  line-height: 32px;
  background: rgb(151, 154, 179, 0.16);
  border-radius: 4px;
  min-width: 80px;
}
.vertical-tree-item {
  margin-right: 24px;
}
</style>