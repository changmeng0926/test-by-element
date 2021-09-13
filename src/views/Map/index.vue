<template>
  <div class="baidu-map">
    <baidu-map class="container" :center="center" :zoom="zoom" @ready="handler">
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT" controlType="BMAP_NAVIGATION_CONTROL_LARGE"></bm-scale>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'Map',
  components: {},
  props: {},
  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
    }
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }

  },
}
</script>

<style lang='less' scoped>
.baidu-map {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-family: "微软雅黑";
}
</style>