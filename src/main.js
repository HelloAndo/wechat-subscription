// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
// import Vuex from 'vuex'
import App from './App'

import { get } from 'lodash'

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin, {position: 'top'})

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
  store.commit('RECORD_PAGE_SWITCH_ROUTE', { to, from })
  next()
})

router.afterEach((to, from) => {
  // 500ms是预留给过渡动画的时间
  setTimeout(() => {
    store.commit('IOS_TAP_BACK', false)
  }, 500);
})

// 监听浏览器后退事件
window.addEventListener("popstate", function(e) {
  // TODO:判断为苹果设备才触发，避免右滑返回出现两次页面切换动画
  userAgent.os === 'iOS' && store.commit('IOS_TAP_BACK', true)
}, false);


/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')


import { userAgent } from 'tool/userAgent'
console.log(userAgent)