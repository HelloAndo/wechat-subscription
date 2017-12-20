<template>
<div class="topic-page">
  <x-header :title="$get(topic[0], 'topic')"
    :left-options="{showBack: true}"></x-header>
  <div class="bscroll-wrapper">
    <scroll ref="scroll" 
      scrollbar=true
      :tap="true">
      <div class="bd">
        <cell-box>{{$get(topic[0], 'title')}}</cell-box>
        <floor v-for="(item, i) in topic"
          :floor="item" :number="i"
          @click.native="onClick($event)"></floor>
      </div>
    </scroll>
  </div>
</div>
</template>

<script>
import { cloneDeep } from 'lodash'
import api from 'service/api'
export default {
  props: {
  },
  data () {
    return {
      topic: []
    }
  },
  created () {
    api.getTopic()
      .then(res => {
        let _backup = cloneDeep(res)
        delete _backup.comments
        let _list = cloneDeep(res.comments)
        _list.unshift(_backup)
        this.topic = _list
        // this.$nextTick(() => {
        //   this.$refs.scroll.initScroll()
        // })
      })
      .catch(err => {})
  },
  mounted () {
    const me = this
    document.addEventListener('tap', (e) => {
      if ( e.path.some((dom, i) => {
        // if (i ==10) debugger
        return me.$get(dom, 'tagName') && ~me.$get(dom, 'className').toString().indexOf('btn-reply')
        }) 
      ) {
        this.$router.push({name: 'Reply'})
      }
    }, false)
  },
  methods: {
    onClick (e) {
      debugger
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.topic-page
  .weui-cell
    background-color #fff8e6
    border-bottom: 1px solid #ccc;
    background-color: #fdf4d6;
    margin-bottom: 5px;
    box-shadow: 0 0 4px rgba(0,0,0,.3);
  .bd
    // border-bottom 1px solid #cccccc
</style>
