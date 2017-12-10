import Vue from 'vue'
import Router from 'vue-router'

import HelloFromVux from '@/pages/HelloFromVux'
import Hello from '@/pages/Hello'
import Home from '@/pages/Home'
import Place from '@/pages/Place'
import Publish from '@/pages/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/place/:id',
      name: 'Place',
      component: Place
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hellofromvux',
      name: 'HelloFromVux',
      component: HelloFromVux
    }
  ]
})
