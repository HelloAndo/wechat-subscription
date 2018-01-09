<template>
  <div id="app">
  <transition :name="isForward ? 'vux-pop-in' : 'vux-pop-out'">
  <!--<transition name="vux-pop-in">-->
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    // ...mapState({
    //   isForward: state => state.page.isForward
    // })
    ...mapGetters([
      'isForward'
    ])
    // isForward () {
    //   return this.$store.state.page.isForward
    // }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
