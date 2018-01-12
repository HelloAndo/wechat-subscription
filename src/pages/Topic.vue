<template>
<div class="topic-page">
  <x-header :title="$get(topic[0], 'topic')"
    :left-options="{showBack: true, preventGoBack: true}"
    @on-click-back="$router.push({name: 'Place', params: {id: pageID}})"></x-header>
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
  <div class="footer text-right">
    <a href="javascript:" class="prev"
      v-show="page>1"
      @click="gotoPrev">
      <svg class="icon" aria-hidden="true" width="40" height="40" >
        <use xlink:href="#icon-prev"></use>
      </svg>
    </a>
    <a href="javascript:" class="next"
      v-show="page<totalPage"
      @click="gotoNext">
      <svg class="icon" aria-hidden="true" width="40" height="40" >
        <use xlink:href="#icon-next"></use>
      </svg>
    </a>
    <a href="javascript:" class="page"
      @click="showPagination=true">
      <span>{{page}}/{{totalPage}}</span>
    </a>
    <a href="javascript:" class="publish pt10"
      @click="$router.push({name: 'Publish'})">
      <svg class="icon" aria-hidden="true" width="30" height="30">
        <use xlink:href="#icon-publish"></use>
      </svg>
    </a>
  </div>
  <popup v-model="showPagination"
    position="bottom">
    <div class="pagination">
      <a href="javascript:" v-for="i in totalPage"
        :class="{active:page===i}"
        @click="gotoPage(i)">
        <span>{{i}}</span>
      </a>
    </div>
  </popup>
</div>
</template>

<script>
import { cloneDeep } from 'lodash'
import api from 'service/api'

import { mapState } from 'vuex'

export default {
  props: {
  },
  data () {
    return {
      topic: [],
      showPagination: false,
      page: 1,
      totalPage: undefined
    }
  },
  created () {
    this.getTopic({page: 1})
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
    getTopic (obj) {
      api.getTopic(obj)
        .then(res => {
          let _backup = cloneDeep(res)
          delete _backup.comments
          let _list = cloneDeep(res.comments)
          _list.unshift(_backup)
          this.topic = _list
          this.totalPage = _backup.total
          // this.$nextTick(() => {
          //   this.$refs.scroll.initScroll()
          // })
        })
        .catch(err => {})
    },
    gotoPage (n) {
      this.page = n
      this.$router.push({query: {page: n}})
    },
    gotoPrev () {
      this.page--
      this.$router.push({query: {page: this.page}})
    },
    gotoNext () {
      this.page++
      this.$router.push({query: {page: this.page}})
    },
    onClick (e) {
    }
  },
  watch: {
    '$route.query' (query) {
      this.getTopic({page: query.page})
      this.showPagination = false
    }
  },
  computed: {
    ...mapState({
      // pageID: state => state.page.entrancePage.params.id || 1
      pageID (state) {
        return this.$get(state.page, 'entrancePage.params.id', 1)
      }
    })
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
