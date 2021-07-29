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
      <Tree :list="tesstData" @showDialog="showDialog" />

      <el-dialog
        title="提示"
        :modal="false"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="close"
        custom-class="item-dialog"
        ref="itemDialog"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="close">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { productData } from "../mock/index";
import Tree from "./Tree.vue";
export default {
  name: 'Dendrogram',
  components: { Tree },
  props: {},
  data () {
    return {
      dialogVisible: false,
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
    close () {
      this.dialogVisible = false
    },
    showDialog (e, i) {
      console.log(e, i, 'x');
      const el = this.$refs.itemDialog
      const { x, y } = e
      const body_el = document.getElementsByTagName('body')[0]
      const { clienWidth, clienHeight } = body_el
      if (x + 350 > clienWidth) {
        el.$el.firstChild.style.marginLeft = x - 350 + 'px'
      } else {
        el.$el.firstChild.style.marginLeft = x + 50 - + 'px'
      }
      el.$el.firstChild.style.marginTop = y + 'px'
      this.dialogVisible = true
    },
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
  padding: 24px;
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