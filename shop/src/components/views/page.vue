<template>
    <div class="contentBox">
        <div class="contentBox">
            <div class="contentIn">
                <router-view class="appView woshirouter"></router-view>
            </div>
        </div>
        
    </div>
</template>
<style lang="stylus">
  .mint-header
    background #fff
    width 100%
    padding 0
    .logo
      width: 64px;
      height: 28px;
  .contentBox
    flex: 1;
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    display: -webkit-flex; 
    -webkit-flex-direction: column; 
    -webkit-justify-content: flex-start;
    -webkit-align-items: center;
    .contentIn
      width 100%
      height 100%
  .appView
    width 100%
    height 100%
    display flex
    flex-direction: column; 
    -webkit-flex-direction: column; 
</style>

