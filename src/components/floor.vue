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
    <div class="content mb20" v-html="$get(floor, 'content')"></div>
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

