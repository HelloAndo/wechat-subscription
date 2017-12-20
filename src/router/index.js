import Vue from 'vue'
import Router from 'vue-router'

import HelloFromVux from '@/pages/HelloFromVux'
import Hello from '@/pages/Hello'
import Home from '@/pages/Home'
import Place from '@/pages/Place'
import Publish from '@/pages/Publish'
import Reply from '@/pages/Reply'
import Topic from '@/pages/Topic'
import toggle from '@/components/toggle'

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
      path: '/reply',
      name: 'Reply',
      component: Reply
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
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
    },
    {
      path: '/toggle',
      name: 'toggle',
      component: toggle
    }
  ]
})
