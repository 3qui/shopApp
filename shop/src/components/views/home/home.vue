<template>
    <div class="contentBody">
        <indexHeader></indexHeader>
        <div class="contentBodyBox scrollBody">
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
            <!-- 首页推荐 -->
            <div class="recommendBox">
                <div class="boxTitle">有品推荐</div>
                <div class="recomIn">
                    <div class="recomBlock" v-for="(item,index) in homecontentdata.recommend" :key='index' data-id="item.id" @click="getGoodDetail(item.id)">
                        <img v-lazy="item.img" alt="">
                    </div>
                </div>
            </div>
            <!-- 小米众筹 -->
            <div class="recommendBox crowd_funding modelBlock">
                <div class="boxTitleMore">
                    <div class="boxTitle">小米众筹</div>
                    <span>更多 ></span>
                </div>
                
                <div class="recomIn">
                    <div class="recomBlock" v-for="(item,index) in homecontentdata.crowd_funding" :key='index' data-id="item.id" @click="getGoodDetail(item.id)">
                        <img v-lazy="item.img" alt="">
                    </div>
                </div>
            </div>
            <!-- 限时购 -->
            <div class="recommendBox">
                <div class="boxTitle">限时购</div>
                <div class="menuIn scrollXBody">
                    <div class="limitedBox">
                        <div class="menuItem" v-for="(item,index) in homecontentdata.limited" :key='index' data-id="item.id" @click="getGoodDetail(item.id)">
                            <div class="imgParBox">
                                <img class="menuInImg" v-lazy="item.img" alt="">
                            </div>
                            <span class="menuTitle" v-text="item.name"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <!-- 家电 -->
            <div class="recommendBox haveAdImg modelBlock">
                <div class="boxTitleMore">
                    <div class="boxTitle">家电</div>
                    <span>更多 ></span>
                </div>
                <div class="adImgBox">
                    <img class="adImg" src="https://dummyimage.com/400x100/f2db79/fff&text=%E6%88%91%E6%98%AF%E5%95%86%E5%93%81" alt="">
                </div>
                <div class="recomIn">
                    <div class="recomBlock" v-for="(item,index) in homecontentdata.recommend" :key='index'>
                        <img v-lazy="item.img" alt="">
                    </div>
                </div>
            </div>
            <!-- 服饰 -->
            <div class="recommendBox haveAdImg modelBlock">
                <div class="boxTitleMore">
                    <div class="boxTitle">服饰</div>
                    <span>更多 ></span>
                </div>
                <div class="adImgBox">
                    <img class="adImg" src="https://dummyimage.com/400x100/f2db79/fff&text=%E6%88%91%E6%98%AF%E5%95%86%E5%93%81" alt="">
                </div>
                <div class="recomIn">
                    <div class="recomBlock" v-for="(item,index) in homecontentdata.recommend" :key='index'>
                        <img v-lazy="item.img" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- <footers v-show="footerShow" v-cloak></footers> -->
        <footers :idx="0" v-cloak></footers>
    </div>
</template>
<script>
import footer from "@/components/views/footer/footer";
import indexHeader from "@/components/views/header/indexHeader";
import swiperAd from "@/components/public/swiperAd";
// import api from "@/api/api";
import GlobalService from "@/services/globalApi";
import { mapState } from "vuex";

export default {
    name:'home',
    data(){
        return {
            message:1,
            menuData:[],
            homecontentdata:[],
            adSwiperData:['https://shop.io.mi-img.com/app/shop/img?id=shop_ca2e212574331f22036d9c9412cf537c.jpeg&w=1080&h=450','https://shop.io.mi-img.com/app/shop/img?id=shop_fc31df97a606813d528c2d82551cdcea.jpeg&w=1080&h=450','https://shop.io.mi-img.com/app/shop/img?id=shop_c7a552694d40aa673716d838937382e2.jpeg&w=1080&h=450','https://shop.io.mi-img.com/app/shop/img?id=shop_f2b9c93b07ef7aac3be7b97946bd3003.jpeg&w=1080&h=450']
        }
    },
    components:{
        swiperAd,
        indexHeader,
        footers:footer,
    },
    computed:mapState([
        'footerShow'
    ]),
    mounted(){
        this.$nextTick(()=>{
            GlobalService.homemenu().then(response => {
                this.menuData = response.data.datas
            })

            GlobalService.recommend().then(response => {
                console.log(response)
                this.homecontentdata = response.data.datas
            })
        })
        
    },
    methods:{
        getGoodDetail:function(id){
            this.$router.push({
                path:'/home/goodDetail',
                query:{
                    id:id
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>        
    .adImg
        width 100%
    .boxTitle
        font-size 16px
        line-height 45px
        color #000
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
    .recommendBox
        box-sizing border-box
        overflow hidden
        width 100%
        padding 0 10px
        .recomIn
            width 100%
            display flex
            flex-wrap wrap
            justify-content space-between
            .recomBlock
                width 49.5%
                margin-bottom 1%
                img 
                    width 100%
    .crowd_funding
        .recomBlock
            &:first-child
                width 100%
    .modelBlock
        margin-top 10px
    .boxTitleMore
        width 100%
        height 45px
        display flex
        align-items center
        justify-content space-between
    .scrollXBody
        width 100%
        padding 0
        .limitedBox
            min-width 100%
            display flex
            flex-wrap nowrap
            .imgParBox
                margin-right 10px
                .menuInImg
                    width 100px
    .adImgBox
        margin-bottom 1%

            

        
</style>


