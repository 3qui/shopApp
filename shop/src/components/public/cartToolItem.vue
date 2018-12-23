<template>
    <mt-popup
        v-model="state"
        pop-transition="popup-fade"
        position="bottom" class="cartToolItem">
        <div class="cartBottomBox">
            <div class="tooloptionBox">
                <div class="goodTop">
                    <div class="modelClose" @click="state = !state"><img src="~@/assets/images/detail_modal_icon_close.png" alt=""></div>
                    <div class="goodTopIn">
                        <div class="goodImgBox">
                            <img class="goodImg" src="https://shop.io.mi-img.com/app/shop/img?id=shop_cbec9840acfebef4d7baf31ae635da99.jpeg" alt="">
                        </div>
                        <div class="goodTopCenter">
                            <p class="goodTitle">小米8青春版</p>
                            <p class="goodPrice">¥<span class="goodPriceFont">1399</span></p>
                        </div>
                    </div>
                </div>
                <div class="goodConfigBox">
                    <div class="configIn" v-for="(item,parIndex) in skuData.specifications" :key="parIndex">
                        <div class="conFigTitle" v-text="item.name"></div>
                        <div class="configTypeBox">
                            <div class="configTypeList" 
                                v-for="(items,index) in item.item" 
                                :key="index" v-text="items.name" 
                                :class="[items.isShow?'':'noGood',subIndex[parIndex] == index?'selectConfig':'']"
                                @click="selectBtn(items.name,parIndex,$event,index,items.isShow)"></div>
                        </div>
                    </div>
                </div>
                <div class="goodConfigBox">
                    <div class="configIn">
                        <div class="conFigTitle">数量</div>
                        <div class="configTypeBox">
                            <goodCalculate></goodCalculate>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toolInBtnBox">
                <div class="toolBtn buyBtn">立即购买</div>
                <div class="toolBtn">加入购物车</div>
            </div>
        </div>
        
    </mt-popup>
</template>
<script>
import goodCalculate from "@/components/public/goodCalculate";
var data0 = [
    {
        name:'颜色',
        typeData:[
            {
                id:1,
                name:'暮光金',
                version:[
                    {
                        name:'4G+64GB',
                        status:0,
                        id:'2-1'
                    },
                    {
                        name:'6G+64GB',
                        status:1,
                        id:'2-2'
                    },
                    {
                        name:'6G+128GB',
                        status:1,
                        id:'2-3'
                    },
                    {
                        name:'6G+256GB',
                        status:0,
                        id:'2-4'
                    },
                ]
            },
            {
                id:2,
                name:'梦幻蓝',
                version:[
                    {
                        name:'4G+64GB',
                        status:1,
                        id:'2-1'
                    },
                    {
                        name:'6G+64GB',
                        status:1,
                        id:'2-2'
                    },
                    {
                        name:'6G+128GB',
                        status:1,
                        id:'2-3'
                    },
                    {
                        name:'6G+256GB',
                        status:1,
                        id:'2-4'
                    },
                ]
            },
            {
                id:3,
                name:'深空灰',
                version:[
                    {
                        name:'4G+64GB',
                        status:1,
                        id:'2-1'
                    },
                    {
                        name:'6G+64GB',
                        status:0,
                        id:'2-2'
                    },
                    {
                        name:'6G+128GB',
                        status:1,
                        id:'2-3'
                    },
                    {
                        name:'6G+256GB',
                        status:1,
                        id:'2-4'
                    },
                ]
            },
            {
                id:4,
                name:'珊瑚橙',
                version:[
                    {
                        name:'4G+64GB',
                        status:1,
                        id:'2-1'
                    },
                    {
                        name:'6G+64GB',
                        status:1,
                        id:'2-2'
                    },
                    {
                        name:'6G+128GB',
                        status:0,
                        id:'2-3'
                    },
                    {
                        name:'6G+256GB',
                        status:0,
                        id:'2-4'
                    },
                ]
            },
        ]
    },{
        name:'规格',
        typeData:[
            {
                name:'4G+64GB',
                id:'2-1'
            },
            {
                name:'6G+64GB',
                id:'2-2'
            },
            {
                name:'6G+128GB',
                id:'2-3'
            },
            {
                name:'6G+256GB',
                id:'2-4'
            },
        ]
    }
]

var data = {
    difference:[
        {
            id:10,
            price:'200.00',
            stock:20,
            difference:'暮光金,4G+64GB'
        },
        {
            id:11,
            price:'200.00',
            stock:20,
            difference:'梦幻蓝,4G+64GB'
        },
        {
            id:12,
            price:'200.00',
            stock:20,
            difference:'深空灰,4G+64GB'
        },
        {
            id:13,
            price:'200.00',
            stock:20,
            difference:'珊瑚橙,4G+64GB'
        },
        {
            id:14,
            price:'200.00',
            stock:20,
            difference:'暮光金,6G+64GB'
        },
        {
            id:15,
            price:'200.00',
            stock:0,
            difference:'梦幻蓝,6G+64GB'
        },
        {
            id:16,
            price:'200.00',
            stock:20,
            difference:'深空灰,6G+64GB'
        },
        {
            id:17,
            price:'200.00',
            stock:0,
            difference:'珊瑚橙,6G+64GB'
        },
        {
            id:14,
            price:'200.00',
            stock:0,
            difference:'暮光金,6G+128GB'
        },
        {
            id:15,
            price:'200.00',
            stock:0,
            difference:'梦幻蓝,6G+128GB'
        },
        {
            id:16,
            price:'200.00',
            stock:20,
            difference:'深空灰,6G+128GB'
        },
        {
            id:17,
            price:'200.00',
            stock:0,
            difference:'珊瑚橙,6G+128GB'
        },
        {
            id:18,
            price:'200.00',
            stock:20,
            difference:'暮光金,6G+256GB'
        },
        {
            id:19,
            price:'200.00',
            stock:20,
            difference:'梦幻蓝,6G+256GB'
        },
        {
            id:20,
            price:'200.00',
            stock:20,
            difference:'深空灰,6G+256GB'
        },
        {
            id:21,
            price:'200.00',
            stock:20,
            difference:'珊瑚橙,6G+256GB'
        }
    ],
    specifications:[
        {
            name:'颜色',
            item:[
                {
                    name:'暮光金'
                },
                {
                    name:'梦幻蓝'
                },
                {
                    name:'深空灰'
                },
                {
                    name:'珊瑚橙'
                },
            ]
        },{
            name:'规格',
            item:[
                {
                    name:'4G+64GB'
                },
                {
                    name:'6G+64GB'
                },
                {
                    name:'6G+128GB'
                },
                {
                    name:'6G+256GB'
                },
            ]
        }
    ]
}
export default {
    data(){
        return {
            state:this.cartItem,
            skuData:data,
            selectId:'',
            selectArr:[],           //存放被选中的值
            shopItemInfo: {}, //存放要和选中的值进行匹配的数据
            subIndex:[]             //不确定单规格还是多规格，用数组
        }
    },
    components:{
        goodCalculate
    },
    props:{
        cartItem:Boolean
    },
    created:function(){
        var that = this;
        for(let i in that.skuData.difference){
            that.shopItemInfo[that.skuData.difference[i].difference] = that.skuData.difference[i]
        }
        that.checkItem()
    },
    watch:{
       state:function(val){
           //通知父组件已经隐藏cartTool
           this.$emit('hideCartTool',val)
       },
       cartItem:function(val){
           this.state = val
       }
    },
    methods:{
        selectBtn:function(item,parIndex,event,index,isShow){
            if(!isShow){
                return
            }else{
                var that = this
                if(that.selectArr[parIndex] != item){
                    that.selectArr[parIndex] = item
                    that.subIndex[parIndex] = index
                }else{
                    that.selectArr[parIndex] = ''
                    this.subIndex[parIndex] = -1
                }
                that.checkItem();
            }
            
        },
        checkItem:function(){
            var that = this;
            var option = that.skuData.specifications;
            var result = [];        //存储被选中的值
            for(var i in option){
                result[i] = that.selectArr[i] ? that.selectArr[i] : ''
            }
            for(var j in option){ 
                var last = result[j]    //把选中的值存到字符串last去
                for(var k in option[j].item){
                    result[j] = option[j].item[k].name; 
                    option[j].item[k].isShow = that.isMay(result)
                }
                result[j] = last
            }
            // 获取商品当前最大数量
            console.log(this.selectArr)
            var selectData = this.selectArr
            if(selectData[0] == '' || selectData[1] == ''){
                alert('有一个为空啊  日你 ')
            }
            this.$forceUpdate()
        },
        isMay:function(result){
            for(var l in result){
                if(result[l] == ''){
                    return true
                }
            }
            return this.shopItemInfo[result].stock == 0 ? false : true
        }
    }
}
</script>
<style lang="stylus" scoped>
    .cartToolItem
        width 100%
        overflow hidden
        .cartBottomBox
            display flex
            flex-wrap wrap 
            .tooloptionBox
                width 100%
                padding 0 12px
                flex 1
                padding-bottom 100px
            .goodTop
                height 98px
                padding 12px
                position relative
                .modelClose
                    width 43px
                    height 43px
                    display flex
                    justify-content center
                    align-items center
                    position absolute
                    right 0
                    top 0
                    img 
                        width 11px
                        height 11px
                .goodTopIn
                    display flex
                    .goodImgBox
                        width 68px  
                        height 68px
                        border-radius 5px
                        overflow hidden
                        .goodImg
                            width 68px
                            height 68px
                    .goodTopCenter
                        display flex
                        flex 1
                        flex-wrap wrap
                        align-content center
                        margin-left 10px
                        padding-right 20px
                        p
                            width 100%
                        .goodTitle
                            font-size 15px
                            color #000
                            margin-bottom 8px
                        .goodPrice
                            font-size 12px
                            color rgb(182, 9, 9)
                            .goodPriceFont
                                font-size 20px
            .goodConfigBox
                overflow hidden
                .configIn
                    margin 15px 0
                    .conFigTitle
                        color rgb(153,153,153)
                        margin-bottom 15px
                    .configTypeBox
                        overflow hidden
                        .configTypeList
                            color #000
                            display inline-block
                            border 1px solid #ccc
                            border-radius 5px
                            padding 8px 15px
                            margin 0 12px 15px 0
                        .selectConfig
                            border 1px solid rgb(171, 138, 89)
                            background rgb(171, 138, 89)
                            color #fff
                        .noGood
                            border 1px solid rgb(240, 240, 240)
                            background #fff
                            color #ccc
                        .configTypeList.current
                            background rgb(255,0,0)
            .toolInBtnBox
                width 100%
                height 53px
                display flex
                padding 0 12px
                align-items center
                -webkit-font-smoothing antialiased
                .toolBtn
                    color #fff
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
                    margin-right 15px
</style>
