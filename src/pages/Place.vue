<template>
  <div class="topics-page">
    <x-header :title="place"
      :left-options="{showBack: true}"></x-header>
    <!--<tab>
      <tab-item v-for="t in tabs">{{t.name}}</tab-item>
      <tab-item disabled>
        <div @click="filter">
          <svg class="icon" aria-hidden="true" width="20" height="20" >
              <use xlink:href="#icon-fangwu"></use>
          </svg>
        </div>
      </tab-item>
    </tab>-->
    <div class="topic-titles">
      <svg class="icon fr more-title" aria-hidden="true" width="20" height="20" >
        <use xlink:href="#icon-fangwu"></use>
      </svg>
      <div class="scroll-titles" ref="titles">
        <ul class="cf" :style="{width: scrollWidth}">
          <li class="title"
            :class="{active: i===activeNavIndex}"
            v-for="(t,i) in tabs">{{t.name}}</li>
        </ul>
        <!--<div class="title-bar" :class="titleBarClass" :style="titleBarStyle"></div><-->
      </div>
    </div>
    <div class="bscroll-wrapper"> 
      <scroll 
        ref="scroll"
        :click="bsConf.click"
        :tap="bsConf.tap"
        :probe-type="bsConf.probeType"
        :pull-down-refresh="bsConf.pullDownRefresh"
        :pull-up-load="bsConf.pullUpLoad"
        :listen-scroll="bsConf.listenScroll"
        :scrollbar="bsConf.scrollbar"
        @scroll="onScroll"
        @pulling-down="onPullingDown"
        @pullingDownScroll="onPullingDownScroll"
        @pulling-up="onPullingUp">
        <div>   
          <group v-for="(topic, i) in topics">
            <cell-box >
              <div class="w-max">
                <h5>{{i}}-{{topic.title}}</h5>
                <div>{{topic.content}}</div>
                <div class="ft cf">
                  <a href="javascript:" class="fl">
                    <svg class="icon" aria-hidden="true" width="16px" height="16px">
                        <use xlink:href="#icon-writer"></use>
                    </svg>
                  </a>
                  <a href="javascript:" class="fr" 
                    @click="onClick($event, topic, i)">
                    <svg class="icon" aria-hidden="true" width="20px" height="20px">
                        <use xlink:href="#icon-dialog"></use>
                    </svg>
                    <span>999</span>
                  </a>
                  <router-link class="fr mr10"
                    :to="{name: 'Publish'}">
                    <svg class="icon" aria-hidden="true" width="20px" height="20px">
                        <use xlink:href="#icon-clock"></use>
                    </svg>
                    <span>33小时前</span>
                  </router-link>
                </div>
              </div>
            </cell-box>
          </group>
          <loading></loading>
        </div>
        <div class="pulldown-wrapper" :style="pullDownStyle">
          <div class="before-pulldown"
            v-if="beforePullDown">
            <bubble :y="bubbleY"></bubble>
          </div>
          <div class="after-pulldown" v-else>
            <div v-if="isPullingDown">
              <loading></loading>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import 'static/css/iconfont/iconfont'
  import BScroll from 'better-scroll'
  import api from '../service/api'

  let tabs = [
    {name: '置顶'},
    {name: '热帖'},
    {name: '精华'},
    {name: '业主加群比较长比较长比较长'},
    {name: '深井冰'},
    {name: '求偶'}
  ]

  let topics = [
    {title: '水管漏水了', content: '水管漏水了2333333'},
    {title: '厕所堵了', content: '水管漏水了2333333'},
    {title: '隔壁太大声了', content: '水管漏水了2333333'},
    {title: '水管漏水了', content: '水管漏水了2333333'},
    {title: '厕所堵了', content: '水管漏水了2333333'},
    {title: '隔壁太大声了', content: '水管漏水了2333333'},
    {title: '水管漏水了', content: '水管漏水了2333333'},
    {title: '厕所堵了', content: '水管漏水了2333333'},
    {title: '隔壁太大声了', content: '水管漏水了2333333'},
    {title: '水管漏水了', content: '水管漏水了2333333'},
    // {title: '厕所堵了', content: '水管漏水了2333333'},
    // {title: '隔壁太大声了', content: '水管漏水了2333333'},
    // {title: '水管漏水了', content: '水管漏水了2333333'},
    // {title: '厕所堵了', content: '水管漏水了2333333'},
    // {title: '隔壁太大声了', content: '水管漏水了2333333'},
    {title: '水管漏水了', content: '水管漏水了2333333'}
  ]

  export default {
    data () {
      return {
        beforePullDown: true,
        bubbleY: 0,
        isPullingDown: false,
        isPullUpLoad: false,
        place: '中环广场',
        topics: [],
        tabs: [],
        topics: topics,
        // topics: [],
        bsConf: {
          probeType: 3,
          click: true,
          tap: false,
          listenScroll: true,
          pullDownRefresh: true,
          scrollbar: true,
          pullUpLoad: {
            threshold: 50
          }
        },
        scrollWidth: '',
        pullDownStyle: {
          top: '-50px'
        },
        pullDownInitTop: -50,
        activeNavIndex: 0,
        titleBarStyle: {
          width: '',
          left: '',
          right: ''
        },
        isTitleBarForward: true
      }
    },
    computed: {
      titleBarClass () {
        return {
          'backward': !this.isTitleBarForward,
          'forward': this.isTitleBarForward
        }
      }
    },
    created () {
      // this.fetchData()
      
    },
    mounted () {
      this.tabs = tabs
      this.$nextTick(() => {
        this.setScrollWidth() 
        this.scroll = new BScroll(this.$refs.titles, {
          scrollX: true,
          scrollY: false,
          tap: true
        })
        this.scroll.on('touchEnd', pos => {
          console.log(pos)
        })
        // this.scroll.on('tap', (e,a,b) => {
        //   console.log(e)
        //   debugger
        // })
        let wrapperDom = document.querySelector('.scroll-titles')
        let titlesDom = document.querySelectorAll('.title')
        wrapperDom.addEventListener('tap', e => {
          // debugger
          this.onNavTap(e)
        }, false)

      })
    },
    methods: {
      onClick (e, item, idx) {
        console.log(e)
        debugger
      },
      onNavTap (e) {
        let $el = $(e.target)
        let idx = $(e.target).index()
        this.activeNavIndex = idx
        // this.isTitleBarForward = true
        // this.titleBarStyle = Object.assign({}, this.titleBarStyle, {
        //   left: `${e.target.offsetLeft}px`,
        //   right: `${e.target.offsetLeft + e.target.offsetWidth}px`
        // })
      },
      fetchData () {
        api.getTopics()
          .then(res => {
            this.topics = res.data
            debugger
          })
          .catch(err => {

          })
      },
      setScrollWidth () {
        
      },
      filter () {
        console.log('---filter')
      },
      onScroll (pos) {

      },
      onPullingDown () {
        const me = this
        this.beforePullDown = false
        this.isPullingDown = true
        // 模拟更新数据
        setTimeout(() => {
          // if (Math.random() > 0.5) {
          if (Math.random() > -1) {
            // 如果有新数据
            this.topics.unshift({title: `隔壁太大声了-${Date.now()}`, content: '水管漏水了'})
            this.$nextTick(() => {
              this.$refs.scroll.scroll.finishPullDown()
              this.isPullingDown = false
              setTimeout(() => {
                this.pullDownStyle = `top:${this.pullDownInitTop}px`
                this.beforePullDown = true
                this.$refs.scroll.scroll.refresh()
              }, this.$refs.scroll.scroll.options.bounceTime)
            })
          } else {
            // 如果没有新数据
            // this.$refs.scroll.forceUpdate()
          }
        }, 2000)
      },
      onPullingDownScroll (pos) {
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = Object.assign({}, this.pullDownStyle, {
            top: Math.min(pos.y + this.pullDownInitTop, 10) + 'px'
          })
        } else {
          this.bubbleY = 0
        }
      },
      onPullingUp () {
        this.isPullUpLoad = true
        setTimeout(() => {
          if (Math.random() > -1) {
            this.topics.push({title: `隔壁太大声了-${Date.now()}`, content: '水管漏水了'})
            this.$nextTick(() => {
              this.isPullUpLoad = false
              this.$refs.scroll.scroll.finishPullUp()
              // this.pullUpDirty = dirty
              this.$refs.scroll.scroll.refresh()
            })
          }
        }, 2000)
      }
    }
  }
</script>

<style>
</style>

