const CURR_FLOW = 'curr_flow'

const state = {
  curr_flow: {},
}

const mutations = {
  [CURR_FLOW](state, data) {
    state.curr_flow = data
  },
}

export default { state, mutations }
