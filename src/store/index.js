import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import modules from './modules'

const state = {
  // currFlow: (state) => state.currFlow,
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // modules: {}
})
export default store
