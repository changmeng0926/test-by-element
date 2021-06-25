import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css'
import glComponent from './components/common/index'
import '@/assets/iconfont/iconfont.css'


import echarts from '@/utils/charts.js'
import '@/utils/directive.js' // 自定义指令
import '@/utils/filters.js'   //  过滤器

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI)
.use(glComponent)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')