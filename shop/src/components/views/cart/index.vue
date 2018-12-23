<template>
    <div>
        <div class="pageTitle"><span @click="goBack" class="pageBack"><i class="iconfont icon-jiantou1"></i></span> 购物车</div>
        <div class="scrollBody">
            <div class="isLogin" v-cloak v-if="loginState">
                <div class="noGood">
                    <div>
                        <img class="goodCarts" src="~@/assets/images/cart_grey.png" alt="">
                    </div>
                    <div>
                        <p>购物车还没有商品哦</p>
                        <span class="goHomeIndex" @click="goHomeIndex">去逛逛</span>
                    </div>
                </div>
                <div class="recommend">
                    <p class="recomLittliTittle">为你推荐</p>
                    <div class="cartRecommendBox">
                        <div class="cardRecommendList" v-for="(item,index) in recommend" :key="index">
                            <div>
                                <img v-lazy="item.img" alt="">
                            </div>
                            <p class="ellipsis" v-text="item.name"></p>
                            <span>¥ <i>50</i> 起</span>
                        </div>   
                    </div>
                </div>
            </div>
            <div class="noLogin" v-cloak v-else>
                <img class="cartImg" src="~@/assets/images/cart_empty.png" alt="">
                <p class="cartDec">登录后才能看到商品哦</p>
                <div class="cartBtn" @click="goLogin">立即登录</div>
            </div>
        </div>
    </div>
</template>
<script>
import GlobalService from "@/services/globalApi";
export default {
    data(){
        return {
            loginState:false,
            recommend:[]
        }
    },
    methods:{
        goBack:function(){
            this.$router.go(-1)
        },
        goLogin:function(){
            this.$router.push('/login')
        },
        goHomeIndex:function(){
            this.$router.push('/home')
        }
    },
    mounted(){
        this.$nextTick(()=>{
            if(sessionStorage.getItem('username')){
                this.loginState = true
            }else{
                this.loginState = false
            }
            // 请求推荐列表
            GlobalService.cardRecommend().then(response=>{
                this.recommend = response.data.datas.recommendList
                console.log(this.recommend)
            })
        })
    },
}
</script>
<style lang="stylus" scoped>
    .pageTitle
        height 45px
        line-height 45px
        font-size 16px
        border-bottom 2px solid rgb(191, 191, 192)
        text-align center
        position relative
        .pageBack
            display flex
            position absolute
            width 40px
            height 100%
            left 0
            top 0
            align-items center
            justify-content center
    .noLogin
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        color rgb(153, 153, 153)
        .cartImg
            height 88px
            margin-top -100px
        .cartDec
            margin-top 32px
            font-size 12px
        .cartBtn
            padding 8px 20px
            border-radius 3px
            border 1px solid #cccccc
            margin-top 20px
    .isLogin
        .noGood
            display flex
            justify-content center
            align-items center 
            color rgb(152, 131, 120)
            margin 30px 0 50px
            .goodCarts
                width 91px
                height 85px
                margin-right 20px
            .goHomeIndex 
                margin-top 15px  
                width 80px
                height 23px
                display flex
                justify-content center
                align-items center
                background rgb(226, 115, 104);
                color #fff
        .recommend
            .recomLittliTittle
                text-align center
                color #000
                font-size 15px
                margin-bottom 20px
            .cartRecommendBox
                padding 0 10px
                display flex
                justify-content space-between
                flex-wrap wrap
                .cardRecommendList
                    width 49.5%
                    margin-bottom 15px
                    img 
                        width 100%
                    p
                        line-height 30px
                        text-align left
                    span 
                        color rgb(182, 9, 9)
                        i 
                            font-size 16px
</style>

