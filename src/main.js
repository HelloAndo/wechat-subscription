// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
// import Vuex from 'vuex'
import App from './App'

import { get } from 'lodash'

import './globalComponents'
import '@/css/normalize.css'
import '@/css/public.css'
import '@/css/page.css'

// Vue.use(Vuex)

Vue.prototype.$get = get

import router from './router/index'
import store from './store/index'

FastClick.attach(document.body)

Vue.config.productionTip = false

// vue-router和vuex通信
import Page from './store/modules/page'
router.beforeEach((to, from, next) => {
  console.log(Page.state.fromPage)
  store.commit('RECORD_PAGE_SWITCH_ROUTE', {
    to: to.name,
    from: from.name
  })
  next()
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
