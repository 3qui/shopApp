<template>
    <div class="classifyContentBox">
        <mt-search
            cancel-text="取消"
            placeholder="有品智能好货盘点">
        </mt-search>
        <div class="classifyLibBox">
            <div class="classifyList scrollXBody">
                <div @click="getCatagory(index)" v-for="(item,index) in classifyLabel" :key="index" v-text="item.name" :class="{selectLabel:selectIndex == index}" class="classifyLabel"></div>
            </div>
            <div class="classifyContent scrollXBody">
                <div class="catagoryBanner">
                    <img class="catagoryImg" :src="catagoryData.catagoryBanner" alt="">
                </div>
                <div class="catagoryBlock">
                    <div class="catagoryBlockList" v-for="(item,index) in catagoryData.catagoryContent" :key="index">
                        <img class="blockImg" v-lazy="item.img" alt="">
                        <p v-text="item.name"></p>
                    </div>
                    <div class="catagoryBlockList" style="height:0px;visibility:hidden;"></div>
                    <div class="catagoryBlockList" style="height:0px;visibility:hidden;"></div>
                    <div class="catagoryBlockList" style="height:0px;visibility:hidden;"></div>
                </div>
            </div>
        </div>
        <footers :idx="1" v-cloak></footers>
    </div>
</template>
<script>
import footer from "@/components/views/footer/footer";
import GlobalService from "@/services/globalApi";
export default {
    data(){
        return {
            classifyLabel:[],
            selectIndex:0,
            catagoryData:[]
        }
    },
    components:{
            footers:footer
    },
    mounted(){
        this.$nextTick(()=>{
            GlobalService.classify().then(response => {
                this.classifyLabel = response.data.datas.classifyList
            })
            this.getData()
        })
    },
    methods:{
        getCatagory:function(index){
            this.selectIndex = index
            this.catagoryData = []
            this.getData()
        },
        getData:function(){
            GlobalService.catagoryDatas().then(response => {
                this.catagoryData = response.data.datas
                console.log(response)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .mint-search
        height auto
        position relative
    .mint-searchbar
        background-color #fff
        border-radius 10px
        .mint-searchbar-inner
            background-color rgb(239, 239, 240)
            .mintui
                font-size 18px
                color #ccc
            .mint-searchbar-core
                margin-left 10px
                text-indent 12px
                &::-webkit-input-placeholder
                    color #d9d9d9
    .classifyLibBox
        display flex
        width 100%
        height 100%
        flex 1
        overflow hidden
        border-top 1px solid rgba(0,0,0,0.1)
        .classifyList
            padding-top 12px
            height 100%
            width 75px
            border-right-style solid 
            border-right-color rgba(0, 0, 0, 0.1);
            border-right-width 1px;
            .classifyLabel
                text-align center
                height 24px
                line-height 24px
                margin-bottom 20px
                font-size 12px
                font-weight 400
                padding-left 3px
            .selectLabel
                font-size 13px
                padding-left 0
                color rgb(132, 95, 63)
                border-left 3px solid rgb(132, 95, 63)
        .classifyContent
            width 100%
            height 100%
            flex 1
            padding 10px
            .catagoryImg
                width 100%
                margin-bottom 15px
            .catagoryBlock
                display flex
                justify-content space-between
                flex-wrap wrap
                .catagoryBlockList
                    width 30%
                    overflow hidden
                    margin-bottom 15px
                    .blockImg
                        width 100%
                    p
                        text-align center
                        line-height 30px
                        

</style>

