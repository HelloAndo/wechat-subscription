<template>
<div class="toggle">
  <div id="box">
      <transition name="mybox">
          <div class="box"  v-show="boxshow"></div>
      </transition>
      <button @click="togglebox">按钮</button>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      boxshow: false
    }
  },        
  methods:{
    togglebox:function(){
      this.boxshow = !this.boxshow;
    }
  }   
}
</script>

<style>
.box{
  height:500px;
  background-color:black;  
  overflow: hidden;                       
}
.mybox-leave-active,.mybox-enter-active{
  transition:  all 1s ease; 
}
.mybox-leave-active,.mybox-enter{
  height:0px !important;
}
.mybox-leave,.mybox-enter-active{
  height: 500px;
}
</style>
