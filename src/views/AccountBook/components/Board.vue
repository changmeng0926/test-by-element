<template>
  <div class="board">
    <div class="preview">
      <div class="totle-expenditure">
        <span class="title">总支出</span>
        <div class="amount">3234</div>
      </div>
      <div class="max-expenditure">
        <span class="title">单笔最高支出</span>
        <el-progress :percentage="50" :format="payFormat"></el-progress>
      </div>
      <div class="general-income">
        <span class="title">总收入</span>
        <div class="amount">3234</div>
      </div>
      <div class="max-income">
        <span class="title">单笔最高收入</span>
        <el-progress :percentage="50" :format="incomeFormat"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    payFormat () {
      return 1000
    },
    incomeFormat () {
      return 1000
    },
  },
}
</script>

<style lang='less' scoped>
.board {
  padding: 16px;
  min-height: 100%;
  background: #ecf0f3;
}
.preview {
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
}
.totle-expenditure,
.max-expenditure,
.general-income,
.max-income {
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: 16px;
  margin-left: 24px;
  .title {
    line-height: 36px;
    font-size: 16px;
  }
  .amount {
    line-height: 48px;
    font-size: 20px;
    font-weight: 600;
  }
}
.totle-expenditure {
  margin: 0;
}
</style>