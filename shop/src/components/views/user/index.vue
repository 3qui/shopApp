<template>
    <div>
        <div class="userPageTop">
            <i class="userIconfont iconfont icon-icon_zhanghao"></i>
            <span v-text="userName" class="userName"></span>
        </div>
        <div class="scrollBody">
            <div class="userSettingList">
                <span>我的订单</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
            <div class="userOrderType">
                <div class="orderTypeList" v-for="(item,index) in orderData" :key="index">
                    <div class="orderImgBox">
                        <img class="orderImg" :src="item.img" alt="">
                    </div>
                    <span class="orderName" v-text="item.orderName"></span>
                </div>
            </div>
            <div>
                <img class="userAd" src="https://m.youpin.mi.com/youpin/static/m/res/images/newUserBanner.png" alt="">
            </div>
            <div class="userSettingList">
                <span><i class="usericon iconfont icon-tubiao-qiapian"></i>我的资产</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
            <div class="userSettingList">
                <span><i class="usericon iconfont icon-APPkaifa"></i>拼团订单</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
            <div class="userSettingList">
                <span><i class="usericon iconfont icon-ditu-tuding"></i>我的收藏</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
            <div class="userSettingList">
                <span><i class="usericon iconfont icon-dakai"></i>地址管理</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
            <div class="userSettingList">
                <span><i class="usericon iconfont icon-xiaoxi"></i>消息中心</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
            <div class="userSettingList">
                <span><i class="usericon iconfont icon-changjingguanli"></i>帮助与反馈</span>
                <span><i class="iconfont icon-jiantou"></i></span>
            </div>
        </div>
        
        <footers :idx="4" v-cloak></footers>
    </div>
</template>
<script>
import footer from "@/components/views/footer/footer";
export default {
    data(){
        return {
            userName:'请登录',
            orderData:[
                {
                    img:require('../../../assets/images/personal_icon_paid.png'),
                    orderName:'待付款'
                },
                {
                    img:require('../../../assets/images/personal_icon_receipt.png'),
                    orderName:'待收货'
                },
                {
                    img:require('../../../assets/images/personal_icon_received_goods.png'),
                    orderName:'待评价'
                },
                {
                    img:require('../../../assets/images/personal_icon_return_goods.png'),
                    orderName:'退款订单'
                },
            ]
        }
    },
    components:{
        footers:footer
    },
    mounted(){
        this.$nextTick(()=>{
            this.userName = sessionStorage.getItem('username') || '请登录'
        })
    }
}
</script>
<style lang="stylus" scoped>
    .userPageTop
        height 100px
        background url('https://m.youpin.mi.com/youpin/static/m/res/images/personal_bg_top.png') center
        background-size cover
        display flex
        align-items center
        .userIconfont
            color #000
            font-size 30px
            height 60px
            width 60px
            display block
            text-align center
            line-height 60px
            border-radius 50%
            border 1px solid #000
            margin-left 20px
        .userName
            margin-left 20px
            color #fff
    .userSettingList
        padding 0 10px 0 20px
        height 49px
        display flex
        justify-content space-between
        align-items center
        border-bottom 1px solid rgb(229, 229, 229)
        .usericon
            margin-right 8px
    .userAd
        width 100%
    .userOrderType
        width 100%
        height 69px
        display flex
        .orderTypeList
            width 25%
            height 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            .orderImgBox
                width 23px
                height 23px
                .orderImg
                    width 23px
                    height 23px
            .orderName
                margin-top 5px
                font-size 12px
                color rgba(0,0,0,0.6)
            

</style>

