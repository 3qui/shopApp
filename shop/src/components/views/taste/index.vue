<template>
    <div>
        <div class="pageTitle">品味</div>
        <div class="scrollBody">
            <swiperAd :imgData="adSwiperData"></swiperAd>
            <!-- 首页菜单 -->
            <div class="menuBox">
                <div class="menuIn">
                    <div class="menuItem" v-for="(item,index) in menuData" :key='index'>
                        <div class="imgParBox">
                            <img class="menuInImg" v-lazy="item.img" alt="">
                        </div>
                        <span class="menuTitle" v-text="item.name"></span>
                    </div>
                </div>
            </div>
        </div>
        <footers :idx="2" v-cloak></footers>
    </div>
</template>
<script>
import footer from "@/components/views/footer/footer";
import GlobalService from "@/services/globalApi";
import swiperAd from "@/components/public/swiperAd";
export default {
    data(){
        return {
            adSwiperData:['https://shop.io.mi-img.com/app/shop/img?id=shop_1dff2d3818b81194495a4736549303af.jpeg&w=1080&h=540','https://shop.io.mi-img.com/app/shop/img?id=shop_f7d049b31ddc87786cbd6d614927c5b7.jpeg&w=1080&h=540','https://shop.io.mi-img.com/app/shop/img?id=shop_3d6aa24691f0b50303efad2fc1d28cb1.jpeg&w=1080&h=540'],
            menuData:[]
        }
    },
    components:{
        swiperAd,
        footers:footer    
    },
    mounted(){
        this.$nextTick(()=>{
            GlobalService.homemenu().then(response => {
                this.menuData = response.data.datas
            })

        })
    }
}
</script>
<style lang="stylus" scoped>
    .pageTitle
        height 45px
        line-height 45px
        font-size 16px
        border-bottom 2px solid rgb(191, 191, 192)
        margin-bottom 8px
        text-align center
    .menuIn
        display flex
        padding 10px
        justify-content space-between
        .menuItem
            display flex
            flex-wrap wrap
            flex 1
            .imgParBox
                width 100%
                text-align center
                .menuInImg
                    width 85%
            .menuTitle
                width 100%
                text-align center
                margin-top 10px
</style>


