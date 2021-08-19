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
.trees-content {
  &:first-child {
    &:before {
      position: absolute;
      content: "";
      top: 0;
      border-top: 2px solid #fff;
      left: -1px;
      width: 50%;
      height: 0px;
      z-index: 80;
    }
  }
  &:last-child {
    &:after {
      position: absolute;
      content: "";
      top: 0%;
      border-top: 2px solid #fff;
      left: calc(50% + 0.5px);
      width: 50%;
      height: 0px;
      z-index: 80;
    }
  }
}
.tree-node {
  padding: 0 8px;
  height: 124px;
  position: relative;
  margin-bottom: 25px;
}
.trees-node:before {
  content: "";
  width: 0;
  height: 25px;
  border-left: 2px solid #d5d5d5;
  position: absolute;
  bottom: -25px;
  left: calc(50% - 1px);
}
i.iconfont.icon-jian1,
i.icon-jia {
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translate(50%, 34px);
  cursor: pointer;
  z-index: 81;
  background: #fff;
}
.tree-item {
  writing-mode: vertical-lr;
  height: 124px;
  width: 34px;
  line-height: 32px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0 1px 0.02rem 1px rgb(114 156 208 / 50%);
  background: #fff;
  border-radius: 4px;
  padding: 10px 0;
}
.ver-tree {
  display: flex;
  justify-content: center;
}
.ver-trees {
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    border-top: 2px solid #d5d5d5;
    left: 0;
    width: 100%;
    height: 1px;
  }
}
.node-line {
  // width: 2px;
  // height: 25px;
  // background: #d5d5d5;
  position: relative;
  margin-bottom: 25px;
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    border-left: 2px solid #d5d5d5;
    left: -1px;
    width: 0px;
    height: 25px;
    z-index: 80;
  }
}
.tree-hide-child {
  display: none;
}
</style>