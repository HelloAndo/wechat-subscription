<template>
<div class="emoji-panel">
  <div class="scroll-bar">
    <div class="ctx">
      <slide ref="slide" 
        @scroll-end="onScrollEnd">
        <!--<ul class="cf"
          :style="expUlStyle">-->
          <div class="slide-item cf qq-wrap" v-for="(page, pageIndex) in qq" :style="expLiStyle">
            <a class="emoji" 
              href="javascript:"
              v-for="(icon, index) in page"
              :class="icon.class"
              :style="{width: icon.style.width}"
              @click="clickExp(icon)"
              >
              <i :style="{backgroundPosition: icon.style.backgroundPosition, backgroundImage: icon.style.backgroundImage}"></i>
            </a>
          </div>
          <div class="slide-item cf emoji-wrap" v-for="page in emoji" :style="expLiStyle">
            <a class="emoji" 
              href="javascript:"
              v-for="icon in page"
              :class="icon.class"
              :style="{width: icon.style.width}"
              @click="clickExp(icon)"
              >
              <i :style="{backgroundPosition: icon.style.backgroundPosition, backgroundImage: icon.style.backgroundImage}"></i>
            </a>
          </div>
          <div class="dots" slot="dots">
            <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
          </div>
        <!--</ul>-->
      </slide>
    </div>
  </div>
  <ul class="hd cf">
    <li v-for="(tab, i) in aExp" 
      :class="{active: activeTab == i}"
      @click="gotoTab(i)">
      {{tab.type}}
    </li>
  </ul>
</div>
</template>
<script>

import { cloneDeep } from 'lodash'

import { expMeanning, EXP_COL_NUM_IN_SPRITE, EXP_SIZE_IN_SPRITE } from 'data'

// const EXP_PIC_
const EXP_ROW_NUM = 3     // 一页显示表情的行数
const EXP_COL_NUM = 7     // 一页显示表情的列数
const EXP_NUM_ONE_PAGE = EXP_ROW_NUM * EXP_COL_NUM

// 表情雪碧图一行的表情数量
// const EXP_COL_NUM_IN_SPRITE = 15
// const EXP_SIZE_IN_SPRITE = 32

// 初始化表情数据入口，新增/删减在此设置
const EXPRESSION = [
  {
    type: 'qq',
    total: 105
    // total: 50
  },
  {
    type: 'emoji',
    total: 177
  }
]
let EXPRESSION_OBJECT = {
  'aExp': EXPRESSION
}
EXPRESSION.forEach((item) => {
  EXPRESSION_OBJECT[item.type] = []
})

export default {
  data () {
    // return {
    return Object.assign(EXPRESSION_OBJECT, {
      expUlStyle: '',
      expLiStyle: '',
      winW: undefined,
      curPage: 0,
      currentPageIndex: 0,
      aExpPageNum: [],         // 每种表情的页数数组
      dots: []
    })
  },
  // computed: object.assign({}, {
  computed: {
    qqExp () {
      let arr = []
      let qq = cloneDeep(this.qq)
      qq.forEach((item, idx) => {
        let i = 0
        arr[idx] = []
        while (item.length) {
          arr[idx][i++] = item.splice(0, 7)
        }
      })
      return arr
    },
    activeTab () {
      let _pageSum = 0
      for (let i = 0; i < this.aExpPageNum.length; i++) {
        _pageSum += this.aExpPageNum[i]
        if (this.curPage < _pageSum) {
          return i
        }
      }
    }
  },
  methods: {
    gotoTab (num) {
      let _arr = this.aExpPageNum.slice(0, num)
      let _page = _arr.reduce((sum, val) => sum + val, 0)
      this.$refs.slide.slide.goToPage(_page, 0)
      this.setDots(num, 0)
    },
    setDots (tabIndex, pageIndex) {
      this.dots = new Array(this[`${this.aExp[tabIndex].type}`].length)
      this.currentPageIndex = this.curPage - pageIndex
    },
    onScrollEnd (page) {
      // page返回的是在所有表情页中的index值
      this.curPage = page
      
      let _index = 0
      let _pageSum = 0
      for (let i = 0; i < this.aExpPageNum.length; i++) {
        _pageSum += this.aExpPageNum[i]
        if (this.curPage < _pageSum) {
          _index = i
          _pageSum -= this.aExpPageNum[i]
          break
        }
      }

      this.setDots(_index, _pageSum)
      // this.dots = new Array(this[`${this.aExp[_index].type}Exp`].length)
      // this.currentPageIndex = this.curPage - _pageSum

    },
    clickExp (exp) {
      let _type = exp.class.split('-')[0]
      let _idx = exp.class.split('-')[1]
      this.$emit('choose-exp', exp, expMeanning[_type][_idx])
    },
    /**
    * 初始化表情
      @param total [Number] 某类表情包的表情数量
      @param obj [Object] 某类表情包的存储数组
      @param type [String] 某类表情包类型
    */
    initExpData (total, obj, type) {
      var pageNum = 0
      var _completePageNum = Math.floor(total / EXP_ROW_NUM / EXP_COL_NUM)
      pageNum 
        = (total % (EXP_NUM_ONE_PAGE))
          ? _completePageNum + 1
          : _completePageNum

      let _pageNum = pageNum
      while (pageNum--) {
        obj.push([])
      }

      obj.forEach((page, idx) => {
        for (let i = 0; i < EXP_NUM_ONE_PAGE; i++) {
          let _rankIndex = EXP_NUM_ONE_PAGE * idx + i    // 在该类表情中的排位

          let _integer = Math.floor(_rankIndex / EXP_COL_NUM_IN_SPRITE)
          let _remainder = _rankIndex % EXP_COL_NUM_IN_SPRITE

          let _topOffset = _integer * EXP_SIZE_IN_SPRITE
          let _leftOffset = _remainder * EXP_SIZE_IN_SPRITE

          page[i] = {
            style: {
              width: `${this.winW / EXP_COL_NUM}px`,
              backgroundPosition: `-${_leftOffset}px -${_topOffset}px`,
              // [调试用]为了build后的引用路径，暂时改成相对路径
              backgroundImage: `url('./static/img/${type}.png')`,
            },
            class: `${type}-${_rankIndex}`
          }
        }
      })

      return _pageNum
    },
    initExp () {
      this.winW = document.body.clientWidth

      this.expLiStyle = {
        width: `${this.winW}px`
      }

      this.aExp.forEach(item => {
        // debugger
        let _pageNum = this.initExpData(item.total, this[item.type], item.type)
        this.aExpPageNum.push(_pageNum)
      })

      // 第一屏表情的页码数
      this.dots = new Array(this[EXPRESSION[0].type].length)

      let _sum = this.aExpPageNum.reduce((sum, val) => sum + val, 0)

      // 计算表情父元素的宽度
      this.expUlStyle = {
        width: `${this.winW * _sum}px`
      }

    }
  },
  mounted () {
    
  },
  created () {
    this.initExp()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dots
    position: absolute
    right: 0
    left: 0
    bottom: 2px
    transform: translateZ(1px)
    text-align: center
    font-size: 0
    .dot
      display: inline-block
      margin: 0 4px
      width: 10px
      height: 10px
      border-radius: 50%
      // background: $color-light-grey-s
      background: #ccc
      &.active
        width: 20px
        border-radius: 5px
        background: $color-white
</style>
