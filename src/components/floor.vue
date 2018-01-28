<template>
<div class="floor mb5">
  <div class="cf hd pb10">
    <div class="avator">
      <img :src="$get(floor, 'avator')">
    </div>
    <div class="name ml70">
      <h4>
        <label class="fr">{{number?number+'楼':'楼主'}}</label>
        {{$get(floor, 'name')}}
      </h4>
      <div>
        <span>级别：{{$get(floor, 'identity')}}</span>
        <span>信任值：{{$get(floor, 'rank')}}</span>
        <span>发帖：{{$get(floor, 'posts')}}</span>
      </div>
    </div>
  </div>
  <div class="bd pt10 pb10">
    <div class="content mb20" 
      v-html="preHandleTopic(floor, 'content')"></div>
    <div class="time text-right">2017-11-02 12:22</div>
  </div>
  <div class="ft pt10">
    <a href="javascript:">
      <svg class="icon" aria-hidden="true" width="20px" height="20px">
        <use xlink:href="#icon-good"></use>
      </svg>
    </a>
    <a href="javascript:">
      <svg class="icon" aria-hidden="true" width="20px" height="20px">
        <use xlink:href="#icon-bad"></use>
      </svg>
    </a>
    <a href="javascript:" class="btn-reply fr"
      @click="gotoReply()">
      <svg class="icon" aria-hidden="true" width="20px" height="20px">
        <use xlink:href="#icon-comment"></use>
      </svg>
    </a>
  </div>
</div>
</template>

<script>

import { cloneDeep } from 'lodash'

import { expMeanning, EXP_COL_NUM_IN_SPRITE, EXP_SIZE_IN_SPRITE } from 'data'

// const EXP_SIZE_IN_SPRITE = 32
// const SCALE = 960 / 16 / 15
// const EXP_SIZE_WIDTH = 960 / SCALE
// const EXP_SIZE_HEIGHT = 768 / SCALE

export default {
  props: {
    floor: {},
    number: {}
  },
  data () {
    return {
    }
  },
  methods: {
    gotoReply () {
      this.$router.push({name: 'Reply'})
    },
    preHandleTopic ({ content }, ...args) {
      let _ctx = cloneDeep(content)
      let _backup = cloneDeep(content)
      const emojiExp = /\[([\u4e00-\u9fa5\w]+)\]/g
      let aMatch

      while ((aMatch = emojiExp.exec(_ctx)) !== null) {
        let _img = this.getEmoji(aMatch)
        _ctx = _ctx.replace(aMatch[0], _img)
      }
      return _ctx
    },
    getEmoji (aMatch) {
      for (let key in expMeanning) {
        let _idx = expMeanning[key].indexOf(aMatch[1])
        if (~_idx) {
          let _leftOffset = _idx % EXP_COL_NUM_IN_SPRITE * EXP_SIZE_IN_SPRITE
          let _topOffset = Math.floor(_idx / EXP_COL_NUM_IN_SPRITE) * EXP_SIZE_IN_SPRITE

          let style = `background-image: url(./static/img/${key}.png); background-position: -${_leftOffset}px -${_topOffset}px;`

          // let style = `background-image: url(./static/img/${key}.png); background-position: -${_leftOffset}px -${_topOffset}px; background-size: ${EXP_SIZE_WIDTH}px ${EXP_SIZE_HEIGHT}px`

          let img = `
            <img src="./static/img/spacer.gif" class="${key}" style="${style}" />
          `
          return img
        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.floor
  background-color #fff8e6
  padding 10px 15px
  // border-bottom 1px solid #ccc
  box-shadow 0 0px 3px rgba(0,0,0,.3)
  .hd
    border-bottom 1px solid #ccc
    .avator
      float left
      border-radius 50%
      overflow hidden
      img 
        display block
  .bd 
    border-bottom 1px solid #ccc
    .content
      // margin-bottom 

</style>

