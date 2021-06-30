import Select from './Select.vue'
import Pagenation from './Pagenation.vue'
import Dialog from './Dialog.vue'

const glComponent = function(Vue) {
  if (glComponent.installed) return
  Vue.component('glSelect', Select)
  Vue.component('glPagenation', Pagenation)
  Vue.component('glDialog', Dialog)
}

export default glComponent
