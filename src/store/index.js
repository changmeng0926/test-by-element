import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutations'
// const modulesFiles = require.context('./modules', true, /.js$/)
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value['default']
//   return modules
// }, {})
import user from './modules/user.js'
import getters from './getters'
// import shopping from './modules/shopping'
// import user from './modules/user'

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: { user },
})
export default store
