import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css'
import '@/assets/less/index.less'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
// import glComponent from './components/common/index'

import echarts from '@/utils/charts.js'
import '@/utils/directive.js' // 自定义指令
import '@/utils/filters.js' //  过滤器

Vue.prototype.$echarts = echarts

// 注册全局组件
getGlobalModule()

Vue.config.productionTip = false
Vue.use(ElementUI)
  // .use(glComponent)
  .use(BaiduMap, { ak: '0k6Ti4TCcvghGufaaeLnYeYEIMzqtsD6' })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

function getGlobalModule() {
  const files = require.context('@/components/common', false, /\.vue$/)
  files.keys().forEach((item) => {
    const component = files(item).default || files(item)
    const name = component.name
    if (!name) return
    Vue.component(name, component.default || component)
  })
}
