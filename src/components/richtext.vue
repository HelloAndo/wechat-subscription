<template>
  <div class="richtext weui-cell" contenteditable 
    @click="click($event)"
    @focus="focus($event)"
    @blur="blur($event)">
    <slot></slot>
  </div>
</template>
<script>
import $ from 'jquery'
let timer
export default {
  data () {
    return {

    }
  },
  methods: {
    click () {
      let selection = getSelection()
      let lastEditRange = selection.getRangeAt(0)
      this.$emit('myclick', lastEditRange)
    },
    focus (e) {
      // timer = setTimeout(() => {
      //   alert(window.innerHeight)
      // }, 1500)
      // $('html,body').animate({scrollTop: '-50px'}, 800);
      // $('.input-toolbar-wrapper').css({bottom: '250px'});
    },
    blur (e) {
      // clearTimeout(timer)
      // setTimeout(() => {
      //   alert(window.innerHeight)
      // }, 1500)
    }
  }
}
</script>