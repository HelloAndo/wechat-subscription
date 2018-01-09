<template>
<div class="cf upload-list">
  <div class="fl pr mr5" v-for="(file, idx) in files">
    <img :src="file.src" />
    <a href="javascript:" class="remove"
      @click="remove(file, idx)">×</a>
  </div>
  <a href="javascript:" class="upload">
    <svg class="icon" aria-hidden="true" width="70px" height="70px">
      <use xlink:href="#icon-picture"></use>
    </svg>
    <input type="file" multiple accept="image/*" name="photo" 
      ref="file"
      @change="chooseFiles">
  </a>
</div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      files: []
    }
  },
  methods: {
    remove (file, idx) {
      this.files.splice(idx, 1)
    },
    chooseFiles () {
      let _files = this.$refs.file.files
      // _files.forEach(file => {
      for (let i = 0; i < _files.length; i++) {
        let file = _files[i]
        if (!this.isRepeated(file)) {
          let _file = {
            name: file.name,
            size: file.size,
            file
          }
          this.getBase64(file, _file)
          this.files.push(_file)
        }
      }
      console.log(this.files)
    },
    isRepeated (file) {
      return this.files.some(item => item.name === file.name && item.size === file.size)
    },
    getBase64 (file, _file) {
      let reader = new FileReader()
      reader.addEventListener('load', (e) => {
        // this.$set(_file, 'src', e.target.result)
        this.$set(_file, 'src', reader.result)
      }, false)
      reader.readAsDataURL(file)
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.upload
  position relative
  display inline-block
  width 70px
  height 70px
  overflow hidden
  input 
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    width 100%
    height 100%
    opacity 0

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



