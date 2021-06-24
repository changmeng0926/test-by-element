import Vue from 'vue'

Vue.directive('selectScroll', {
  bind(el, binding) {
    const SELECT_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    SELECT_DOM.addEventListener('scroll', function(){
      const obj = {
        scrollHeight : this.scrollHeight,
        scrollTop : this.scrollTop,
        clientHeight : this.clientHeight
      }
      binding.value(obj)
    })
  }
})