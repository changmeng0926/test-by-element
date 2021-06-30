<template>
  <div class="tree-content" :class="{'trees-content' : list.length>1}">
    <div class="tree" :class="{trees : list.length>1}" v-for="i in list" :key="i.id">
      <div class="tree-line">
        <div class="top"></div>
      </div>
      <div class="tree-list" :class="{'trees-list' : i.child}">
        <span draggable="true" @click="openModul(i)" class="tree-item">{{i.name}}</span>
        <i
          v-if="i.child"
          @click="extend(i)"
          class="iconfont"
          :class="[i.isShow?'icon-jian1':'icon-jia']"
        ></i>
      </div>
      <TestTree
        v-if="i.child"
        :class="{'tree-hide-child' : !i.isShow}"
        class="tree-child"
        :list="i.child"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestTree',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    openModul (i) {
      console.log('i', i);
    },
    extend (i) {
      i.isShow = !i.isShow
      console.log('i', i);
    },
  },
}
</script>

<style lang='less' scoped>
.tree-content {
  display: flex;
  position: relative;
}
/deep/.tree {
  display: flex;
  align-items: center;
  position: relative;
}
/deep/.tree-list {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 25px;
}
/deep/.tree-item {
  width: 110px;
  word-break: keep-all;
  line-height: 24px;
  border: 1px solid skyblue;
  padding: 8px 12px;
  text-align: center;
  cursor: pointer;
}
.tree-item {
  line-height: 24px;
  border: 1px solid skyblue;
  padding: 8px 12px;
  text-align: center;
}
.tree-line {
  position: relative;
}
.top {
  width: 25px;
  &:before {
    content: "";
    width: 25px;
    border-top: 1px solid skyblue;
    height: 1px;
    position: absolute;
    top: calc(50% - 0.5px);
    left: 0;
  }
}
.mid {
  flex: 1;
  width: 1px;
  background: skyblue;
}
.left {
  display: flex;
}
.tree-child {
  display: flex;
  flex-direction: column;
}
/deep/.trees-content.tree-child:after {
  position: absolute;
  content: "";
  top: 0;
  border-left: 1px solid skyblue;
  left: 0;
  width: 1px;
  height: 100%;
}
/deep/.tree-child {
  .tree {
    padding: 5px 0;
  }
  .tree.trees:last-child {
    &:before {
      position: absolute;
      content: "";
      top: 50%;
      border-left: 1px solid #fff;
      left: 0px;
      width: 1px;
      height: 50%;
      z-index: 9999;
    }
  }
}
.tree-child {
  .tree {
    padding: 5px 0;
  }
  /deep/.tree.trees:last-child {
    &:after {
      position: absolute;
      content: "";
      top: 50%;
      border-left: 1px solid #fff;
      left: 0px;
      width: 1px;
      height: 50%;
      z-index: 9999;
    }
  }
}
.tree.trees:first-child {
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    border-left: 1px solid #fff;
    left: 0px;
    width: 1px;
    height: 50%;
    z-index: 999;
  }
}
/deep/.tree.trees:first-child {
  &:before {
    position: absolute;
    content: "";
    top: 0%;
    border-left: 1px solid #fff;
    left: 0px;
    width: 1px;
    height: 50%;
    z-index: 999;
  }
}
.trees-list:before {
  content: "";
  width: 25px;
  height: 1px;
  border-top: 1px solid skyblue;
  position: absolute;
  top: calc(50% - 0.5px);
  right: -25px;
}
i.iconfont.icon-jian1,
i.icon-jia {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(33px, -50%);
  cursor: pointer;
  z-index: 100000;
}
.tree-hide-child {
  display: none;
}
</style>