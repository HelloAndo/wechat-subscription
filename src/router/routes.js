import HelloFromVux from '@/pages/HelloFromVux'
import Hello from '@/pages/Hello'
import Home from '@/pages/Home'
import Place from '@/pages/Place'
import Publish from '@/pages/Publish'
import Reply from '@/pages/Reply'
import Topic from '@/pages/Topic'
import toggle from '@/components/toggle'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    zindex: 0
  },
  {
    path: '/place/:id',
    name: 'Place',
    component: Place,
    zindex: 1
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish,
    zindex: 3
  },
  {
    path: '/reply',
    name: 'Reply',
    component: Reply,
    zindex: 3
  },
  {
    path: '/topic',
    name: 'Topic',
    component: Topic,
    zindex: 2
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
