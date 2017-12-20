// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import App from './App'

import { get } from 'lodash'

import './globalComponents'
import '@/css/normalize.css'
import '@/css/public.css'
import '@/css/page.css'

Vue.use(Vuex)

Vue.prototype.$get = get

import router from './router/index'
// import store from './store/index'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
