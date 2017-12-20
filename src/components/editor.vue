<template>
<div>
  <richtext ref="richtext"
    @myclick="rtClick">
    <span>我是span</span>
    <img src="/static/img/emoji/weixin/azv.png" alt="">123
    <!--<b>我是b</b><i>我是i</i>-->
  </richtext>
  <div class="input-toolbar-wrapper">
    <upload-photo v-if="chosenFiles.length" 
      :files="chosenFiles">
    </upload-photo>
    <div class="input-toolbar cf">
      <span class="fl mr15"
        @click="toEmoji">
        <svg class="icon" aria-hidden="true" width="25px" height="25px">
          <use xlink:href="#icon-emoji"></use>
        </svg>
      </span>
      <span class="upload-photo"
        @click="curTab = 'photo'">
        <svg class="icon" aria-hidden="true" width="25px" height="25px">
          <use xlink:href="#icon-picture"></use>
        </svg>
        <input type="file" multiple accept="image/*" name="photo" 
          ref="file"
          @change="chooseFiles">
      </span>
      <span class="fr">
        <svg class="icon" aria-hidden="true" width="25px" height="25px">
          <use xlink:href="#icon-anonymous-close"></use>
        </svg>
      </span>
    </div>
    <transition name="emoji">
      <emoji v-if="curTab === 'emoji'"
        @choose-exp="chooseExp"></emoji> 
    </transition>
    <!--<upload-photo v-if="curTab === 'photo'" 
      :files="chosenFiles">
    </upload-photo>-->
  </div>
</div>
</template>
<script>
import uploadPhoto from '@/components/uploadPhoto.vue'
export default {
  components: {
    'upload-photo': uploadPhoto
  },
  data () {
    return {
      lastEditRange: undefined,
      curTab: '',
      // chooseExp: [],
      chosenFiles: []
    }
  },
  methods: {
    toEmoji () {
      this.curTab = this.curTab === 'emoji'
        ? ''
        : 'emoji'
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
    rtClick (lastEditRange) {
      this.lastEditRange = lastEditRange
    },
    chooseExp (exp) {
      const _richtext = this.$refs.richtext.$el,
            _childrenLen = _richtext.childNodes.length;

      let selection = window.getSelection()
      let range;
      let img = document.createElement('img')
      // img.src = `./static/img/emoji/weixin/${exp.class}.png`
      img.src = exp.path
      // img.style.width = img.style.height = `20px`

      _richtext.focus()

      if (this.lastEditRange) {
        selection.removeAllRanges()
        selection.addRange(this.lastEditRange)
      }

      if (selection.anchorNode) {
        range = selection.getRangeAt(0)
        range.deleteContents()
        range.insertNode(img)
        range = range.cloneRange()
      } else {
        // 创建新的光标对象
        range = document.createRange()
        // 光标对象的范围界定为新建的表情节点
        range.selectNodeContents(img)
        // range.selectNodeContents(emojiText)
        // // 光标位置定位在表情节点的最大长度
        // range.setStart(emojiText, emojiText.length)
        // // 使光标开始和光标结束重叠
        // range.collapse(true)
        // // 清除选定对象的所有光标对象
        // selection.removeAllRanges()
        // // 插入新的光标对象
        // selection.addRange(range)
      }



      // range.deleteContents()
      // range.insertNode(img)
      // range = range.cloneRange()
      range.setStartAfter(img)
      range.collapse(true)

      selection.removeAllRanges()
      selection.addRange(range)



      // if (selection.anchorNode.nodeName != '#text') {
      //   if (_childrenLen) {
      //     for (let i = 0; i < _childrenLen; i++) {
      //       i == selection.anchorOffset
      //         && _richtext.insertBefore(img, _richtext.childNodes[i])
      //     }
      //   } else {
      //     _richtext.appendChild(img)
      //   }
      // } else {


      // }
      // 无论如何都要记录最后光标对象
      this.lastEditRange = selection.getRangeAt(0)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

.upload-photo
  position relative
  display inline-block
  width 25px
  height 25px
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

</style>