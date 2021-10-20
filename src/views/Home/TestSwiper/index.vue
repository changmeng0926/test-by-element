<template>
  <div class="test-swiper">
    <Swiper />
  </div>
</template>
<script>
import Swiper from '@/components/common/Swiper.vue'
export default {
  name: 'TestSwiper',
  components: { Swiper },
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
.test-swiper {
  width: 100%;
}
</style>
