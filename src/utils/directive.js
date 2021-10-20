import Vue from 'vue'

Vue.directive('selectScroll', {
  bind(el, binding) {
    const SELECT_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    SELECT_DOM.addEventListener('scroll', function() {
      const obj = {
        scrollHeight: this.scrollHeight,
        scrollTop: this.scrollTop,
        clientHeight: this.clientHeight,
      }
      binding.value(obj)
    })
  },
})

Vue.directive('dragscroll', function(el) {
  el.onmousedown = function(ev) {
    console.log('ev', ev)
    console.log(el.scrollWidth, 'scrollWidth')
    const scrollWidth = el.scrollWidth
    const parentWidth = el.parentNode.offsetWidth
    console.log(parentWidth, 'parentWidth')
    let offsetLeft = el.offsetLeft
    const disX = ev.clientX
    // const disY = ev.clientY
    // const originalScrollLeft = el.scrollLeft
    // const originalScrollTop = el.scrollTop
    const originalScrollBehavior = el.style['scroll-behavior']
    const originalPointerEvents = el.style['pointer-events']
    el.style['scroll-behavior'] = 'auto'
    document.onmousemove = function(ev) {
      ev.preventDefault()
      const { clientX, clientY } = ev
      // console.log(clientX, clientY)
      const distanceX = clientX - disX
      el.style.left = offsetLeft + distanceX + 'px'
      console.log(offsetLeft + distanceX, ' offsetLeft + distanceX')
      console.log(scrollWidth, 'scrollWidth')
      // const distanceY = clientY - disY
      // el.scrollTo(originalScrollLeft - distanceX, 0)
      el.style['pointer-events'] = 'none'
    }
    document.onmouseup = function() {
      console.log('onmouseup')
      document.onmousemove = null
      document.onmouseup = null
      el.style['scroll-behavior'] = originalScrollBehavior
      el.style['pointer-events'] = originalPointerEvents
    }
  }
})
