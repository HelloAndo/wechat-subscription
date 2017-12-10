import Vue from 'vue'
import { CellBox, Cell, Group, Grid, GridItem, XHeader, Search, Tab, TabItem } from 'vux'

import scroll from './components/scroll.vue'
import loading from './components/loading/loading.vue'
import bubble from './components/bubble.vue'
import richtext from './components/richtext.vue'
import emoji from './components/emoji.vue'
import slide from './components/slide/slide.vue'

Vue.component('scroll', scroll)
Vue.component('loading', loading)
Vue.component('bubble', bubble)
Vue.component('richtext', richtext)
Vue.component('emoji', emoji)
Vue.component('slide', slide)

Vue.component('CellBox', CellBox)
Vue.component('Cell', Cell)
Vue.component('Group', Group)
Vue.component('Grid', Grid)
Vue.component('GridItem', GridItem)
Vue.component('XHeader', XHeader)
Vue.component('Search', Search)
Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)
