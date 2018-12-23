<template>
  <div id="app">
    <page></page>
  </div>
</template>

<script>

import page from "@/components/views/page";


export default {
  name: 'app',
  components: {
    page
  },
}
</script>
<style lang="stylus">
  html,body
    width 100%
    height 100%
    overflow hidden
    color rgb(85, 86, 102)
  #app
    display flex
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    -webkit-flex-direction: column;
    -webkit-justify-content: flex-start;
    -webkit-align-items: center;
      
</style>
