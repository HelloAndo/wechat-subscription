<template>
<div class="publish-page">
  <x-header>
    <span>发布话题</span>
    <x-button mini slot="overwrite-left" text="取消"
    @click.native="cancel"></x-button>
    <x-button mini slot="right" text="发送" 
    @click.native="post"></x-button>
  </x-header>
  <div>
    <group gutter="0">
      <x-input v-model="title"
        type="text"
        ref="title"
        placeholder="标题（必填）"
        @on-focus="onFocus($event)"
        @on-blur="onBlur($event)"
        ></x-input>
    </group>
    <editor></editor>
  </div>
</div>
</template>
<script>
// let timer
export default {
  data () {
    return {
      title: '',
    }
  },
  methods: {
    onFocus () {
      // timer = setTimeout(() => {
      //   this.placeholder = 'focus' + window.innerHeight.toString()
      // }, 1500)
    },
    onBlur () {
      // timer = setTimeout(() => {
      //   this.placeholder = 'blur' + window.innerHeight.toString()
      // }, 1500)
    },
    cancel () {
      this.$router.back()
    },
    post () {
      this.$router.back()
    }
  }
}
</script>
