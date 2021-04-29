<template>
  <div class="_image relative w-full h-full">
    <div class="w-full h-full absolute left-0 top-0 bg-transparent"></div>
    <iframe
        ref="iframe"
        referrerpolicy="no-referrer"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        class="absolute left-0 top-0  w-full h-full border-none outline-none overflow-hidden object-center"
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
    this.$refs.iframe.addEventListener('load',()=>{
      console.log('iframe Loaded')
    })
  }
}
</script>

<style scoped>
._image{
  cursor: pointer;
}
._image iframe{
  z-index: 1;
}
._image div{
  z-index: 2;
}
</style>
