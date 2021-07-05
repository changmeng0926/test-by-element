<template>
  <iframe class="book-container" src="./_book/index.html" frameborder="0"></iframe>
</template>

<script>
export default {
  name: 'Notes',
  data () {
    return {}
  },
  watch: {},
  computed: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scope >
.book-container {
  width: 100%;
  height: calc(100% - 62px) !important;
}
</style>