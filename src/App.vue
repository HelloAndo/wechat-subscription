<template>
  <div id="app">
  <transition :name="animateType">
  <!--<transition name="vux-pop-in">-->
    <router-view :meta="$route.meta"></router-view>
  </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState([
      'iosTapBack'
    ]),
    ...mapGetters([
      'isForward'
    ]),
    animateType () {
      if (this.$store.state.page.iosTapBack) {
        return ''
      }
      return this.isForward ? 'vux-pop-in' : 'vux-pop-out'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
