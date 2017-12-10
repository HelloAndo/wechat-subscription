<template>
<div class="emoji-panel">
  <div class="scroll-bar">
    <div class="ctx">
      <slide ref="slide" 
        @scroll-end="onScrollEnd">
        <!--<ul class="cf"
          :style="expUlStyle">-->
          <div class="slide-item cf " v-for="page in qqExp" :style="expLiStyle">
            <a class="emoji" 
              href="javascript:"
              v-for="icon in page"
              :class="icon.class"
              :style="{width: icon.style.width, height: icon.style.height}"
              @click="clickExp(icon)"
              >
              <i :style="{'background': icon.style.background, 'background-size': icon.style.backgroundSize}"></i>
            </a>
          </div>
          <div class="slide-item cf " v-for="page in emojiExp" :style="expLiStyle">
            <a class="emoji" 
              href="javascript:"
              v-for="icon in page"
              :class="icon.class"
              :style="{width: icon.style.width, height: icon.style.height}"
              @click="clickExp(icon)"
              >
              <i :style="{'background': icon.style.background, 'background-size': icon.style.backgroundSize}"></i>
            </a>
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
const EXP_ROW_NUM = 3
const EXP_COL_NUM = 8
const EXP_NUM_ONE_PAGE = EXP_ROW_NUM * EXP_COL_NUM

// const EXP_ARRAY = [
//   {
//     type: 'qq',
//     total: 105
//   },
//   {
//     type: 'emoji',
//     total: 99
//   }
// ]

export default {
  data () {
    return {
      expUlStyle: '',
      expLiStyle: '',
      winW: undefined,
      qqExp: [],
      emojiExp: [],
      curPage: 0,
      aExpPageNum: [],         // 每种表情的页数数组
      aExp: [
        {
          type: 'qq',
          total: 105
        },
        {
          type: 'emoji',
          total: 99
        }
      ]
    }
  },
  computed: {
    activeTab () {
      let _pageSum = this.aExpPageNum[0]
      for (let i = 0; i < this.aExpPageNum.length; ) {
        if (this.curPage < _pageSum) {
          return i
        }
        _pageSum += this.aExpPageNum[++i]
      }
    }
  },
  methods: {
    gotoTab (num) {
      let _arr = this.aExpPageNum.slice(0, num)
      let _page = _arr.reduce((sum, val) => sum + val, 0)
      this.$refs.slide.slide.goToPage(_page, 0)
    },
    onScrollEnd (page) {
      this.curPage = page
    },
    clickExp (exp) {
      console.log(exp)
      this.$emit('choose-exp', exp)
    },
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
          let pos = {
            // left: i % EXP_PIC_ROW_NUM,
            // top: Math.floor(i / EXP_PIC_ROW_NUM)
            left: i % EXP_COL_NUM,
            top: Math.floor(i / EXP_COL_NUM)
          }
          page[i] = {
            path: `./static/img/emoji/${type}/${type}${1+ idx * EXP_NUM_ONE_PAGE + pos.top * EXP_COL_NUM + pos.left}.png`,
            style: {
              width: `${this.winW / EXP_COL_NUM}px`,
              height: `${this.winW / EXP_COL_NUM}px`,
              // background: `url('/static/img/emoji/weixin/fuck${1+ idx * EXP_NUM_ONE_PAGE + pos.top * EXP_PIC_ROW_NUM + pos.left}.png') 0 0 no-repeat`,

              // 为了build后的引用路径，暂时改成相对路径
              background: `url('./static/img/emoji/${type}/${type}${1+ idx * EXP_NUM_ONE_PAGE + pos.top * EXP_COL_NUM + pos.left}.png') 0 0 no-repeat`,
              backgroundSize: 'contain'
            },
            // class: `fuck${1+ idx * EXP_NUM_ONE_PAGE + pos.top * EXP_PIC_ROW_NUM + pos.left}`
            class: `${type}${1+ idx * EXP_NUM_ONE_PAGE + pos.top * EXP_COL_NUM + pos.left}`
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
        let _pageNum = this.initExpData(item.total, this[`${item.type}Exp`], item.type)
        this.aExpPageNum.push(_pageNum)
      })

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
