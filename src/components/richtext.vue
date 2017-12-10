<template>
  <div class="richtext" contenteditable style="border: 1px solid #ccc;" 
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