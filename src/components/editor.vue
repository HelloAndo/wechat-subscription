<template>
<div>
  <richtext ref="richtext"
    @onClick="richtextClick"
    @recordCursor="recordCursor">
    <!--<span>a<b>b</b>cd</span><i>efgh</i>ijd-->
    <!--<span>我是span</span>
    <img src="/static/img/emoji/weixin/azv.png" alt="">123-->
    <!--<b>我是b</b><i>我是i</i>-->
  </richtext>
  <div class="input-toolbar-wrapper">
    <!--<upload-photo v-if="chosenFiles.length" 
      :files="chosenFiles">
    </upload-photo>-->
    <upload-photo v-show="curTab === 'photo'"></upload-photo>
    <div class="input-toolbar cf">
      <span class="fl mr15"
        @click="toEmoji">
        <svg class="icon" aria-hidden="true" width="25px" height="25px">
          <use xlink:href="#icon-emoji"></use>
        </svg>
      </span>
      <span class="upload-photo"
        @click="curTab = curTab === 'photo' ? '' : 'photo'">
        <svg class="icon" aria-hidden="true" width="25px" height="25px">
          <use xlink:href="#icon-picture"></use>
        </svg>
        <!--<input type="file" multiple accept="image/*" name="photo" 
          ref="file"
          @change="chooseFiles">-->
      </span>
      <span class="fr">
        <svg class="icon" aria-hidden="true" width="25px" height="25px">
          <use xlink:href="#icon-anonymous-close"></use>
        </svg>
      </span>
    </div>
    <transition name="emoji">
      <emoji v-if="curTab === 'emoji'"
        @choose-exp="insertEmoji"></emoji> 
    </transition>
    <!--<upload-photo v-if="curTab === 'photo'" 
      :files="chosenFiles">
    </upload-photo>-->
  </div>
</div>
</template>
<script>
let imgIndex = 0
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
    }
  },
  methods: {
    toEmoji () {
      this.curTab = this.curTab === 'emoji'
        ? ''
        : 'emoji'
    },
    richtextClick () {
      this.curTab = ''
    },
    // rtClick (lastEditRange) {
    //   this.lastEditRange = lastEditRange
    // },
    recordCursor (lastEditRange) {
      // this.lastEditRange = lastEditRange
    },
    insertEmoji (exp) {
      const richtextNode = this.$refs.richtext.$refs.richtext
      // let selection = window.getSelection()
      let _textNode = `[图片${imgIndex++}]`
      richtextNode.setRangeText(_textNode)
      richtextNode.selectionStart += _textNode.length;
      this.$refs.richtext.handleChange(richtextNode.value)
      // 阻止插入表情时弹出键盘
      richtextNode.blur()
    },
    chooseExp (exp) {
      const _richtext = this.$refs.richtext.$refs.richtext,
            _childrenLen = _richtext.childNodes.length;

      let selection = window.getSelection()
      let range;
      let img = document.createElement('img')
      // let _textNode = document.createTextNode(`[图片]`)
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
        // range.insertNode(_textNode)
        range = range.cloneRange()
      } else {
        // 创建新的光标对象
        range = document.createRange()
        // 光标对象的范围界定为新建的表情节点
        range.selectNodeContents(img)
        // range.selectNodeContents(_textNode)
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
      // range.setStartAfter(img)
      range.setStartAfter(_textNode)
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

// .upload-photo
//   position relative
//   display inline-block
//   width 25px
//   height 25px
//   overflow hidden
//   input 
//     position absolute
//     left 0
//     top 0
//     right 0
//     bottom 0
//     width 100%
//     height 100%
//     opacity 0

</style>