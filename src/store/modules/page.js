// import shop from '../../api/shop'

import { filter, map } from 'lodash'
// import filter from 'lodash/filter'
// import map from 'lodash/map'
// import _ from 'lodash'
import * as types from '../mutation-types'
import { routes } from '../../router/routes'

// initial state
const state = {
  entrancePage: {},
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
  [types.RECORD_PAGE_SWITCH_ROUTE] (state, { to, from }) {
    state.toPage = to.name
    state.fromPage = from.name
    // 记录Place版块信息便于Topic页面返回时返回到指定版块
    to.name === 'Topic'
      && from.name === 'Place'
      && this.commit('RECORD_ENTRANCE_PAGE', from)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
