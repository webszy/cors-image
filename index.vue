<template>
  <div class="_image">
    <iframe
        ref="iframe"
        referrerpolicy="no-referrer"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :style="style"
        :src="src"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "CorsImage",
  props: {
    src:{
      type: String,
      required: true
    },
    fit:{
      type: String,
      required:false,
      default:'fill'
    }
  },
  computed: {
    style(){
      return {
        'object-fit':this.fit
      }
    }
  },
  mounted(){
    // this.$refs.iframe.addEventListener('load',()=>{
    //   console.log('iframe Loaded')
    // })
  }
}
</script>

<style scoped>
._image{
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
}
._image iframe{
  z-index: 1;
  position:absolute;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  border:none;
  outline: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  object-position: center;
}
._image:before{
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  background:transparent;
  z-index: 2;
  cursor: pointer;
}
</style>
