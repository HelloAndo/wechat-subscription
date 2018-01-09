// import shop from '../../api/shop'

// import { filter, map } from 'lodash'
import filter from 'lodash/filter'
import map from 'lodash/map'
// import _ from 'lodash'
import * as types from '../mutation-types'
import { routes } from '../../router/routes'

// initial state
const state = {
  entrancePage: {
    name: '',
    id: undefined
  },
  // isForward: true,
  fromPage: '',
  toPage: ''
}

// getters
const getters = {
  isForward (state) {
    let z1 = map(filter(routes, {name: state.toPage}), 'zindex')[0]
    let z2 = map(filter(routes, {name: state.fromPage}), 'zindex')[0]
    let bool = z1 - z2 > 0
    return bool
  }
}

// actions
const actions = {

}

// mutations
const mutations = {
  [types.RECORD_ENTRANCE_PAGE] (state, data) {
    state.entrancePage = { ...data }
  },
  [types.CHANGE_PAGE_SWITCH_METHOD] (state, bool) {
    state.isForward = bool
  },
  [types.RECORD_PAGE_SWITCH_ROUTE] (state, { to, from }) {
  // [types.RECORD_PAGE_SWITCH_ROUTE] (state, obj) {
    state.toPage = to
    state.fromPage = from
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
