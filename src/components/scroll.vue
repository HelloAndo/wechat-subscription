<template>
<div ref="wrapper" class="bs-wrapper">
  <slot>
    <!--<div>   
      <group v-for="(topic, i) in topics">
        <cell-box >
          <div>
            <h5>{{i}}-{{topic.title}}</h5>
            <div>{{topic.content}}</div>
          </div>
        </cell-box>
      </group>
      <slot name="pullup">
        <loading></loading>
      </slot>
    </div>-->
  </slot>
</div>
</template>
<script>
import BScroll from 'better-scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: false
    },
    tap: {
      type: Boolean,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    // listenBeforeScroll: {
    //   type: Boolean,
    //   default: false
    // },
    // direction: {
    //   type: String,
    //   default: DIRECTION_V
    // },
    scrollbar: {
      type: null,
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    // startY: {
    //   type: Number,
    //   default: 0
    // },
    // refreshDelay: {
    //   type: Number,
    //   default: 20
    // },
    // freeScroll: {
    //   type: Boolean,
    //   default: false
    // },
  },
  data () {
    return {

    }
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        scrollbar: this.scrollbar,
        click: this.click,
        tap: this.tap
      })
      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }
      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
      if (this.tap) {
        this._initTap()
      }
    },
    _initTap () {
      // this.$el.addEventListener('tap', e => {
      //   console.log(e)
      // }, false)
    },
    _initPullDownRefresh () {
      this.scroll.on('pullingDown', () => {
        this.$emit('pulling-down')
      })

      this.scroll.on('scroll', pos => {
        this.$emit('pullingDownScroll', pos)
      })
    },
    _initPullUpLoad () {
      this.scroll.on('pullingUp', () => {
        this.$emit('pulling-up')
      })
    }
  },
  mounted () {
    // debugger
    // this.initScroll()
    this.$nextTick(() => {
      this.initScroll()
    })
  }
}
</script>
