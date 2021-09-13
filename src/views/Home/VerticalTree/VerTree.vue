<template>
  <div class="ver-tree" :class="{'ver-trees': list.length>1}">
    <div
      class="tree-content"
      :class="{'trees-content' : list.length>1}"
      v-for="i in list"
      :key="i.id"
    >
      <div class="node-line"></div>
      <div class="tree-node" :class="{'trees-node' : i.child.length>0}">
        <span class="tree-item">{{i.name}}</span>
        <i
          v-if="i.child.length>0"
          @click="extend(i)"
          class="iconfont"
          :class="[i.isShow?'icon-jian1':'icon-jia']"
        ></i>
      </div>
      <VerTree v-if="i.child.length>0" :class="{'tree-hide-child' : !i.isShow}" :list="i.child" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerTree',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    extend (i) {
      i.isShow = !i.isShow
    },
  },
}
</script>

<style lang='less' scoped>
.tree-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.tree-node {
  padding: 0 8px;
  height: 124px;
  position: relative;
  margin-bottom: 25px;
}
.trees-node:before {
  content: "";
  .boxSize(0px, 25px);
  border-left: 1px solid @treeLine;
  position: absolute;
  bottom: -25px;
  left: calc(50% - 0.5px);
}
i.iconfont.icon-jian1,
i.icon-jia {
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translate(50%, 34px);
  cursor: pointer;
  z-index: 81;
  background: #f6f7fb;
}
.tree-item {
  writing-mode: vertical-lr;
  .boxSize(34px, 124px);
  .aLineWords();
  line-height: 32px;
  font-size: 14px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 33%);
  background: #fff;
  border: 1px solid #b7b8ce;
  border-radius: 4px;
  padding: 10px 0;
}
.ver-tree {
  display: flex;
  justify-content: center;
}
.ver-tree.ver-trees {
  position: relative;
  .tree-content.trees-content {
    &:after {
      position: absolute;
      content: "";
      top: 0;
      border-top: 1px solid @treeLine;
      left: -0.5px;
      width: 100%;
    }
  }
  .tree-content.trees-content:first-child {
    &:after {
      width: calc(50%);
      left: calc(50% - 0.5px);
      border-top: 1px solid @treeLine;
    }
  }
  .tree-content.trees-content:last-child {
    &:after {
      width: calc(50%);
      right: 50%;
      border-top: 1px solid @treeLine;
    }
  }
}
.node-line {
  position: relative;
  margin-bottom: 25px;
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    border-left: 1px solid @treeLine;
    left: -1px;
    .boxSize(0px, 25px);
    z-index: 80;
  }
}
.tree-hide-child {
  display: none;
}
</style>