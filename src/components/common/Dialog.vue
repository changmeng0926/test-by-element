<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :width="width"
    :modal-append-to-body="false"
    :append-to-body="true"
    custom-class="gl-dialog"
    :close-on-click-modal="false"
    :before-close="handleClose"
    :close-on-press-escape="isESC"
  >
    <template v-if="title" slot="title">{{title}}</template>
    <slot />
    <span slot="footer" class="dialog-footer" v-if="isNeedFooter">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'glDialog',
  components: {},
  props: {
    width: {
      type: String,
      default: () => '80%'
    },
    title: {
      type: String,
      default: () => ''
    },
    visible: {
      type: Boolean,
      default: () => false
    },
    isNeedFooter: {
      type: Boolean,
      default: () => true
    },
    isESC: {
      type: Boolean,
      default: () => true
    },
  },
  data () {
    return {}
  },
  watch: {},
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set () {
        return false
      },
    }
  },
  mounted () { },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    submit () {
      this.$emit('submit')
    }
  },
}
</script>

<style lang='less' scoped>
/deep/.gl-dialog {
  margin-top: 0 !important;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 16px;
}
/deep/.el-dialog__header {
  padding: 24px 24px 0;
}
/deep/.el-dialog__headerbtn {
  top: 24px;
  right: 24px;
}
/deep/.el-dialog__footer {
  padding: 0 24px 24px;
}
/deep/.el-dialog__body {
  padding: 24px;
}
</style>