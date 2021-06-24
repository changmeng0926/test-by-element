import Select from './Select.vue'
import Pagenation from './Pagenation.vue'

const glComponent = function (Vue) {
  if (glComponent.installed) return
  Vue.component('glSelect', Select)
  Vue.component('glPagenation', Pagenation)
}

export default glComponent