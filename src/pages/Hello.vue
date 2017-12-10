<template>
  <div class="hello">
    <!--<img :src="uploadimg" alt="">
    <form action="/api/upload" enctype="multipart/form-data" method="post" 
      ref="form">
      <input type="file" name="commentimg" 
        @change="upload($event)">
    </form>-->
    <template v-for="(file, idx) in chosenFiles">
      <img :src="file.src" alt="">
    </template>
    <input type="file" multiple accept="image/*" 
      ref="file"
      @change="chooseFiles">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      uploadimg: '',
      chosenFiles: []
    }
  },
  methods: {
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
          this.chosenFiles.push(_file)
        }
      }
      console.log(this.chosenFiles)
    },
    getBase64 (file, _file) {
      let reader = new FileReader()
      reader.addEventListener('load', (e) => {
        // this.$set(_file, 'src', e.target.result)
        this.$set(_file, 'src', reader.result)
      }, false)
      reader.readAsDataURL(file)
    },
    isRepeated (file) {
      return this.chosenFiles.some(item => item.name === file.name && item.size === file.size)
    },
    upload (e) {
      const me = this
      $(this.$refs.form).ajaxSubmit({
        beforeSubmit () {},
        success (res) {
          console.log(res)
          me.uploadimg = res.data.path
        },
        error (err) {}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
