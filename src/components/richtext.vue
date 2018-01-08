<template>
<div>
  <!--<div class="richtext" style=" -webkit-user-select:text" contenteditable 
    @click="click($event)"
    @focus="focus($event)"
    @blur="blur($event)">
    <slot></slot>
  </div>-->
  <textarea class="richtext" id="" 
    ref="richtext"
    @click="onClick($event)"
    @input="onInput($event)"
    @blur="onBlur($event)"></textarea>
  <textarea class="richtext-mirror" id="" rows="3"
    ref="mirror"
  ></textarea>
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
    onInput (e, cb) {
      // this.$nextTick(() => {
        this.handleChange(e.target.value)
      // })
    },
    onBlur (e) {
      // this.$emit('recordCursor', e.target.selectionStart)
    },
    handleChange (val) {
      this.$refs.mirror.value = val
      this.$refs.richtext.style.height = `${this.$refs.mirror.scrollHeight}px`
    },
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>