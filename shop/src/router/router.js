import Vue from "vue";
import app from '../App.vue'
import Router from "vue-router";
import store from '../store/store'

Vue.use(Router)
const router = new Router({
    routes:[
        { //这里要设置一个默认的主页面 后面才起作用 /代表根目录
            path: '/',
            component:app,
            children:[
                {
                    path: '/',
                    redirect: '/home',
                },
                {
                    path: '/login',
                    component: resolve => require(['@/components/views/login/index'], resolve)
                },
                {
                    path:'home',
                    component: app,
                    children:[
                        {
                            path:'/',
                            component: resolve => require(['@/components/views/home/home'], resolve)
                        },
                        {
                            path:'goodDetail',
                            component: resolve => require(['@/components/views/goods/goodDetail'], resolve)
                        }
                    ]
                },
                {
                    path: 'classify',
                    component: app,
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['@/components/views/classify/index'], resolve)
                        }
                    ]
                },
                {
                    path: 'taste',
                    component: app,
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['@/components/views/taste/index'], resolve)
                        }
                    ]
                },
                {
                    path: 'cart',
                    component: app,
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['@/components/views/cart/index'], resolve)
                        }
                    ]
                },
                {
                    path: 'user',
                    component: app,
                    children: [
                        {
                            path: '/',
                            component: resolve => require(['@/components/views/user/index'], resolve)
                        }
                    ]
                },
            ]
        },
    ] 
})


router.beforeEach((to, from, next) => {
    if (to.path == '/' || to.path == '/home' || to.path == '/classify' || to.path == '/taste' || to.path == '/user' ){
        store.dispatch('footer_show_actions', true)
    }else{
        store.dispatch('footer_show_actions', false)
    }
    next()
})

export default router