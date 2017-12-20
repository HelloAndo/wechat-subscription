<template>
<div class="reply-page">
  <x-header>
    <span>回复</span>
    <x-button mini slot="overwrite-left" text="取消"
    @click.native="cancel"></x-button>
    <x-button mini slot="right" text="发送" 
    @click.native="reply"></x-button>
  </x-header>
  <editor></editor>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    cancel () {
      this.$router.back()
    },
    reply () {
      this.$router.back()
    }
  }
}
</script>