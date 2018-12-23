<template>
    <div class="goodCalculate">
        <div class="GC GCBTN" @click="sub">-</div>
        <input class="GC GCINP" type="number" v-model="num">
        <div class="GC GCBTN" @click="add">+</div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            num:1
        }
    },
    methods:{
        add:function(){
            this.num ++ 
        },
        sub:function(){
            if(this.num == 0){
                return
            }
            this.num --
        }
    }
}
</script>
<style lang="stylus" scoped>
    .goodCalculate
        display flex
        .GC
            width 40px
            height 30px
            border-left-width 1px
            border-top-width 1px
            border-bottom-width 1px
            border-right-width 0
            border-color #ebedf0
            border-style solid
            display flex
            align-items center
            justify-content center
        .GCINP
            text-align center
        .noHandle
            color #ccc
</style>
