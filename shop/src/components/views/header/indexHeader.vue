<template>
    <header class="indexheader">
        <div class="imgBox">
            <img class="logo" src="~@/assets/images/navi_title_v4.png" >
        </div>
        <div class="navSearchBox">
            <img class="searchImg" src="~@/assets/images/search.png" alt="">
            <span class="searchText">人气返场 榜单爆品同价购</span>
        </div>
        <div class="messageBox">
            <img class="messageImg" src="~@/assets/images/std_titlebar_home_message.png">
        </div>
    </header>
</template>
<style lang="stylus" scoped>
    .indexheader
        width 100%
        height 38px
        position relative
        background #fff
        box-sizing border-box
        display flex
        align-items center
        .imgBox 
            width 76px
            height 28px 
            text-align center
            position relative
            .logo
                width 64px
                height 28px
        .navSearchBox   
            position relative
            background-color rgb(238, 238, 238)
            flex 1 0 0%
            border-radius 1.5px
            height 28px
            display flex
            align-items center
            .searchImg
                width 13px  
                height 13px
                margin-left 6px
            .searchText
                flex 1
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                font-size 12px
                margin 0 6px
                color #999
        .messageBox
            position relative
            width 40px
            height 28px
            text-align center
            .messageImg 
                width 28px
                height 28px
</style>
