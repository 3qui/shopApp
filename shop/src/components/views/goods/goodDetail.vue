<template>
    <div class="contentBody">
        <div class="toolBar">
            <span class="back" @click="$router.go(-1)"><img src="~@/assets/images/detailBack.png"></span>
            <span class="home"  @click="$router.push('/home')"><img src="~@/assets/images/detailHome.png"></span>
        </div>
        <div class="scrollBody">
            <!-- 商品图 -->
            <div class="adImgBox"  v-cloak v-if="goodSwiperData.length > 0">
                <swiperAd :imgData="goodSwiperData"></swiperAd> 
            </div>
            <div class="goodDetailBox">
                <div class="goodTitle" v-text="goodsDetailData.goodName"></div>
                <div class="goodExplain" v-text="goodsDetailData.explain"></div>
                <div class="priceBox">
                    <span class="price">¥<span class="goodPriceFont">1299</span></span>
                    <span class="oldPrice">¥<span class="goodoldPriceFont">1599</span></span>
                </div>
            </div>
            <!-- 规格选择 -->
            <div class="specBox">
                <span class="specBoxLeft">已选:</span>
                <span class="specBoxCenter" @click="shopCartItem">请选择颜色 型号 分类</span>
                <span class="specBoxRight"><i class="iconfont icon-jiantou"></i></span>
            </div>
            <!-- 地址 -->
            <div class="specBox">
                <span class="specBoxLeft">送至:</span>
                <span class="specBoxCenter">北京市海淀区</span>
                <span class="specBoxRight"><i class="iconfont icon-jiantou"></i></span>
            </div>
            <!-- 说明 -->
            <div class="specBox specExplainBox">
                <span class="specBoxLeft">说明:</span>
                <span class="specBoxCenter specExplain">
                    <span class="specExplainList"><img class="specExpImg" src="~@/assets/images/personal_icon_received_goods.png" alt="">小米有品甄选精品</span>
                    <span class="specExplainList"><img class="specExpImg" src="~@/assets/images/personal_icon_received_goods.png" alt="">由 小米 发货并提供售后</span>
                    <span class="specExplainList"><img class="specExpImg" src="~@/assets/images/personal_icon_received_goods.png" alt="">支持7天无理由退货</span>
                </span>
                <span class="specBoxRight"><i class="iconfont icon-jiantou"></i></span>
            </div>
            <!-- 商品详情 -->
            <div class="goodsDetailBox">
                <span :class="{'currentTab':index === 0}" class="goodsDetailTab" @click="selectTab(0)">概述</span>
                <span :class="{'currentTab':index === 1}" class="goodsDetailTab" @click="selectTab(1)">参数</span>
            </div>
            <div class="goodDB">
                <div class="goodList" :style="{'margin-left':left}">
                    <div class="goodGC" >
                        <img v-for="(item,index) in goodsDetailData.goodImg" :key="index" class="goodGCImg" v-lazy="item" alt="">
                    </div>
                    <div class="goodGC" >
                        <img v-for="(item,index) in goodsDetailData.goodTextImg" :key="index" class="goodGCImg" v-lazy="item" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="cartToolBox">
            <div class="toolIconBox">
                <div class="toolInBox">
                    <img src="~@/assets/images/detail_unfavor.png" class="toolFavrIcon">
                    <span>收藏</span>
                </div>
                <div class="toolInBox">
                    <img src="~@/assets/images/shop_cart_v2.png" class="toolFavrIcon">
                    <span>购物车</span>
                </div>
            </div>
            <div class="toolBtnBox">
                <div class="cartBtn buyBtn">立即购买</div>
                <div class="cartBtn">加入购物车</div>
            </div>
        </div>
        <!-- 底部购物模块 -->
        <cartTool :cartItem=cartItem v-on:hideCartTool="cartToolFn"></cartTool>
    </div>
</template>
<script>
import swiperAd from "@/components/public/swiperAd";
import cartTool from "@/components/public/cartToolItem";
import GlobalService from "@/services/globalApi";
export default {
    data(){
        return {
            id:this.$route.params.id,
            goodSwiperData:[],
            goodsDetailData:{
                goodName:'',
                explain:'',
                price:'',
                oldPrice:'',
                goodImg:[],
                goodTextImg:[]
            },
            index:0,
            left:'0',
            cartItem:false
        }
    },
    components:{
        swiperAd,
        cartTool
    },
    created(){
        this.id=this.$route.params.id
    },
    mounted(){
        this.$nextTick(()=>{
            GlobalService.goodDetail().then(response=>{
                console.log(response)
                this.goodsDetailData = response.data.datas
                this.goodSwiperData = response.data.datas.adImg
            })
        })
    },
    methods:{
        selectTab:function(index){
            this.index  = index
            this.left = -index * 100 +'%'
        },
        shopCartItem:function(){
            this.cartItem = true
        },
        cartToolFn:function(val){
            this.cartItem = val
        },
        
    }
}
</script>
<style lang="stylus" scoped>
    .toolBar
        width 100%  
        height 45px
        transition all 1s
        position absolute
        top 0
        left 0
        z-index 10
        display flex
        align-items center
        justify-content space-between
        img 
            width 48px
            height 48px
    .goodDetailBox
        padding 0 12px
        .goodTitle
            margin 20px 0 12px 0
            font-size 18px
            color rgb(51, 51, 51)
        .goodExplain
            line-height 20px
            color rgb(153, 153, 153)
        .priceBox
            margin-top 12px
            .price
                color red
                font-size 12px
                .goodPriceFont
                    font-size 22px
            .oldPrice
                margin-left 8px
                text-decoration line-through
    .specBox
        padding 0 12px
        margin-top 12px
        display flex
        flex-wrap nowrap
        min-height 30px
        line-height 30px
        .specBoxLeft
            color rgb(153, 153, 153)
            margin-right 10px
        .specBoxCenter
            flex 1
        .specExplain
            display flex
            flex-wrap wrap
            .specExplainList
                width 100%
                display flex
                align-items center
                line-height 30px
                .specExpImg
                    width 12px
                    margin-right 5px
    .specExplainBox
        .specBoxRight
            display flex
            align-items center
    .currentTab
        color rgb(159, 130, 87)
    .goodsDetailBox
        margin-top 30px
        text-align center
        .goodsDetailTab
            display inline-block
            width 100px
            height 40px
            line-height 40px
    .goodDB
        width 100%
        overflow hidden
        .goodList
            width 200%
            margin-left 0
            transition .5s 
            .goodGC
                width 50%
                float left
                .goodGCImg
                    width 100%
    .cartToolBox
        height 53px
        border-top 1px solid rgb(191, 191, 192)
        display flex
        align-items center
        padding-right 8px 
        .toolIconBox
            display flex
            font-size 12px
            margin 0 8px
            .toolInBox
                display flex
                height 53px
                width 62px
                justify-content center
                align-items center 
                flex-wrap wrap
                flex-direction column
                img 
                    width 20px
                    height 20px
                    margin-bottom 5px
            .toolBtnBox
                flex 1
        .toolBtnBox
            height 32px
            display flex
            flex 1
            align-items center
            flex-wrap nowrap
            color #fff
            .cartBtn
                height 32px
                background rgb(171, 138, 89)
                border-radius 16px
                text-align center
                flex 1
                display flex
                align-items center
                justify-content center
            .buyBtn
                background rgb(182, 9, 9)
                margin-right 10px
</style>


