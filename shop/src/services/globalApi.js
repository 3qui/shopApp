import withAxios from "@/services/withAxios";
const apiConfig = [
    {
        name:"userLogin",
        url:"/login",
        method:"get"
    },
    {
        name:"home",
        url:"/home2",
        method:"post"
    },
    {
        name:"homemenu",        //首页菜单
        url:"/homemenu",
        method:"get"
    },
    {
        name:"recommend",       //首页推荐
        url:"/recommend",
        method:"get"
    },
    {
        name:'classify',        //分类
        url:'/classify',
        method:"get"
    },
    {
        name: 'catagoryDatas',   //分类详情
        url: '/catagoryDatas',
        method: 'get'
    },
    {
        name: 'taste',   //品味
        url: '/catagoryDatas',
        method: 'get'
    },
    {
        name: 'cardRecommend',   //购物-推荐列表
        url: '/cardRecommend',
        method: 'get'
    },
    {
        name: 'goodDetail',   //商品详情
        url: '/goodDetail',
        method: 'get'
    },
]

export default withAxios(apiConfig)
