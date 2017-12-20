import Vue from 'vue'
import { CellBox, Cell, Divider, Group, Grid, GridItem, XButton, XHeader, XInput, Panel, Search, Tab, TabItem } from 'vux'

import scroll from './components/scroll.vue'
import loading from './components/loading/loading.vue'
import bubble from './components/bubble.vue'
import richtext from './components/richtext.vue'
import emoji from './components/emoji.vue'
import slide from './components/slide/slide.vue'
import floor from './components/floor.vue'
import editor from './components/editor.vue'

Vue.component('scroll', scroll)
Vue.component('loading', loading)
Vue.component('bubble', bubble)
Vue.component('richtext', richtext)
Vue.component('emoji', emoji)
Vue.component('slide', slide)
Vue.component('floor', floor)
Vue.component('editor', editor)

Vue.component('CellBox', CellBox)
Vue.component('Cell', Cell)
// Vue.component('Divider', Divider)
Vue.component('Group', Group)
Vue.component('Grid', Grid)
Vue.component('GridItem', GridItem)
Vue.component('XButton', XButton)
Vue.component('XHeader', XHeader)
Vue.component('XInput', XInput)
Vue.component('Panel', Panel)
Vue.component('Search', Search)
Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)
