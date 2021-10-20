<template>
  <div class="swiper-container">
    <div class="prev-btn">
      <i class="iconfont icon-zuo-jiantou"></i>
    </div>
    <div class="swiper-out">
      <div class="swiper-inside" v-dragscroll>
        <div class="swiper-item" :class="{ 'item-gap':i < 7 }" v-for="i in 7" :key="i">
          <img src="http:\\127.0.0.1:3000\\difashi.png" alt />
          <!-- <div class="item-text">
          </div>-->
        </div>
      </div>
    </div>
    <div class="next-btn">
      <i class="iconfont icon-youjiantou"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    slideHandel (e) {
      console.log(e);
    },
  },
}
</script>

<style lang='less' scoped>
.swiper-container {
  position: relative;
  padding: 0 24px;
  width: 100%;
  height: 200px;
}
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 1;
  .iconfont {
    font-size: 24px;
  }
}
.prev-btn {
  left: 24px;
  transform: translate(-50%, -50%);
}
.next-btn {
  right: 24px;
  transform: translate(50%, -50%);
}
.swiper-out {
  overflow-x: scroll;
  position: relative;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
}
.swiper-inside {
  position: absolute;
  left: 1px;
  display: inline-flex;
  height: 100%;
}
.swiper-item {
  width: 300px;
  height: 100%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  img {
    width: 100%;
    height: 100%;
  }
}
.item-gap {
  margin-right: 16px;
}
.item-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>