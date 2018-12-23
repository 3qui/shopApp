<template>
    <div class="tabbarBox">
        <div class="tabbatItem" v-for="(item,index) in tabbarData" :key="index" :class="{'is-selected':idx == index}" @click="getTabbar(item.url)">
            <img :style="backgroundImg" class="tabbarImg" :class="item.className" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA9JREFUeNpjYBgFo2D4AAAC0AAB4tdONAAAAABJRU5ErkJggg==">
            <span class="tabbarText" v-text="item.text"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            backgroundImg:{
                backgroundImage: 'url(' + require('../../../assets/images/menuIcon.png') + ')',
            },
            tabbarData:[
                {
                    url:'/home',
                    className:'tab-01-0',
                    text:'首页',
                },
                {
                    url:'/classify',
                    className:'tab-02-0',
                    text:'分类',
                },
                {
                    url:'/taste',
                    className:'tab-03-0',
                    text:'品味',
                },
                {
                    url:'/cart',
                    className:'tab-04-0',
                    text:'购物车',
                },
                {
                    url:'/user',
                    className:'tab-05-0',
                    text:'个人',
                },
            ]
        }
    },
    created(){
        
    },
    props:{
        idx:Number
    },
    methods:{
        getTabbar:function(url){
            this.$router.push({
                path:url
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .tabbarBox
        color: rgb(127, 127, 127)
        position relative
        width 100%
        height 49px
        display flex
        flex-wrap nowrap
        border-top 1px solid #b0b0b0
        .tabbatItem
            flex 1   
            display flex
            justify-content center
            align-items center 
            flex-wrap wrap
            flex-direction column
            .tabbarImg
                width 24px
                height 24px
            .tabbarText
                display block
                font-size 12px
                margin-top 5px
    .tab-01-0 
        background-position: 0 0%
        background-size: 100%
    .is-selected
        .tab-01-0  
            background-position: 0 11.111111%
            background-size: 100%
    .tab-02-0  
        background-position: 0 22.222222%
        background-size: 100%
    .is-selected
        .tab-02-0
            background-position: 0 33.333333%
            background-size: 100%
    .tab-03-0  
        background-position: 0 44.444444%
        background-size: 100%
    .is-selected
        .tab-03-0  
            background-position: 0 55.555556%
            background-size: 100%
    .tab-04-0  
        background-position: 0 66.666667%
        background-size: 100%
    .is-selected
        .tab-04-0  
            background-position: 0 77.777778%
            background-size: 100%
    .tab-05-0  
        background-position: 0 88.888889%
        background-size: 100%
    .is-selected
        .tab-05-0  
            background-position: 0 100%
            background-size: 100%
    .is-selected
        color:rgb(132, 95, 63)
</style>
