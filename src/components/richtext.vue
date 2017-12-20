<template>
  <div class="richtext weui-cell" contenteditable 
    @click="click">
    <slot></slot>
  </div>
</template>
<script>
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
    }
  }
}
</script>