<template>
  <div class="mf-loading-container text-center">
    <img src="./loading.gif">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'

  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .mf-loading-container
    img
      width: 20px
      height: 20px
      display: inline-block
</style>
