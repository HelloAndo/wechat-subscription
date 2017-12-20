<template>
<div class="cf upload-list">
  <div class="fl pr mr5" v-for="(file, idx) in files">
    <img :src="file.src" />
    <a href="javascript:" class="remove"
      @click="remove(file, idx)">×</a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    files: {
      default: () => []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    remove (file, idx) {
      this.files.splice(idx, 1)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
a.remove
  position absolute
  display inline-block
  top 0
  right 0
  width 15px
  height 15px
  color #fff
  text-align center
  line-height 12px
  background-color rgba(0,0,0,.3)
img
  display inline-block
  width 70px
  height 70px
</style>



