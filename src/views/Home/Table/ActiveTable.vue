<template>
  <div class="active-table">
    <Order />
    <NoOrder />
  </div>
</template>


<script>
import Order from './components/Order.vue'
import NoOrder from './components/NoOrder.vue'
export default {
  name: 'ActiveTable',
  components: { Order, NoOrder },
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {},
}
</script>

<style lang='less' scoped>
.active-table {
  padding: 24px 10%;
}
.el-checkbox-group {
  height: 36px;
  display: flex;
  align-items: center;
}
/deep/.title {
  line-height: 48px;
  font-size: 16px;
  color: @baseColor;
}
</style>