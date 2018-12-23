<template>
    <div>
        <div class="loginPage">
            <p class="loginPageTitle">手机账号登录</p>
            <div class="loginLabelBox">
                <mt-field class="label" label="用户名" placeholder="手机号码" v-model="username"></mt-field>
                <mt-field class="label" label="密码" placeholder="密码" type="password" v-model="password"></mt-field>
            </div>
            <div class="loginLabelBox2">
                <mt-button @click="login" class="loginBtn">登录</mt-button>
            </div>
            <p class="loginP"><span>立即注册</span>|<span>忘记密码?</span></p>
        </div> 
    </div>
</template>
<script>
import { Indicator,Toast } from 'mint-ui';
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login:function(){
            if(this.username == '' && this.password == ''){
                Toast('账号或者密码为空!');
            }else{
                Indicator.open({
                    spinnerType: 'fading-circle',
                    color:'#ff6700'
                });
                setTimeout(()=>{
                    // 存储登录信息
                    sessionStorage.setItem('username',this.username)
                    Indicator.close();
                    this.$router.go(-1)
                },500)
            }
            
            
        }
    }
}
</script>
<style lang="stylus" scoped>
    .loginPage
        display flex
        justify-content center
        flex-wrap wrap
        flex-direction column
        .loginPageTitle
            text-align center
            font-size 18px
            color #000
            margin-top 80px
            margin-bottom 20px
        .loginLabelBox
            padding 0 30px
            .label
                border-bottom 1px solid #ccc
        .loginLabelBox2
            padding 0 50px
            .loginBtn
                font-size 20px
                width 100%
                background #ff6700
                color #ffffff
                margin 30px 0
        .loginP 
            height 30px 
            display flex
            justify-content center
            align-items center
            text-align center
            color rgba(0,0,0,0.7)
            span 
                margin 0 10px
</style>

