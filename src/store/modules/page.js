// import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  entrancePage: {
    name: '',
    id: undefined
  }
}

// getters
const getters = {
  
}

// actions
const actions = {
  
}

// mutations
const mutations = {
  [types.RECORD_ENTRANCE_PAGE] (state, data) {
    state.entrancePage = { ...data }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
