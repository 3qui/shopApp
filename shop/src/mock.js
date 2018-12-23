const Mock = require("mockjs")
const Random = Mock.Random;

Mock.mock('/homemenu',() => {       //首页菜单
    let datas = []
    for(var i = 0;i<5;i++){
        datas.push({ name: Random.cword(4), img: Random.image('100x100', Random.hex())})
    }
    return {
        datas
    }
})

Mock.mock('/recommend', () => {       //首页推荐 ~ 内容
    let datas = { recommend: [], crowd_funding:[], limited:[]}
    for (let i = 0; i < 4; i++) {
        datas.recommend.push({ img: Random.image('200x150', Random.hex(), '#fff', Random.cword(4)), id: Random.increment() })
    }
    for (let i = 0; i < 3; i++) {
        datas.crowd_funding.push({ img: Random.image('200x150', Random.hex(), '#fff', Random.cword(4)), id: Random.increment() })
    }
    for (let i = 0; i < 7; i++) {
        datas.limited.push({ img: Random.image('200x200', Random.hex(), '#fff', Random.cword(4)), id: Random.increment() })
    }
    return {
        datas
    }
})

Mock.mock('/classify', () => {       //分类
    let datas = { classifyList: [] }
    for (let i = 0; i < 17; i++) {
        datas.classifyList.push({ name: Random.cword(4) })
    }

    return {
        datas
    }
})

Mock.mock('/catagoryDatas', () => {       //分类详情
    let datas = { catagoryBanner: '', catagoryContent: [] }
    datas.catagoryBanner = Random.image('300x100', Random.hex(), '#fff', Random.cword(4))
    for (let i = 0; i < Math.floor(Math.random() * 20 + 6); i++) {
        datas.catagoryContent.push({ img: Random.image('150x150', Random.hex(), '#fff', Random.cword(4)), name: Random.cword(4) })
    }

    return {
        datas
    }
})

Mock.mock('/taste', () => {       //品味
    let datas = { taste: [], catagoryContent: [] }
    datas.catagoryBanner = Random.image('300x100', Random.hex(), '#fff', Random.cword(4))
    for (let i = 0; i < Math.floor(Math.random() * 20 + 6); i++) {
        datas.catagoryContent.push({ img: Random.image('150x150', Random.hex(), '#fff', Random.cword(4)), name: Random.cword(4) })
    }

    return {
        datas
    }
})

Mock.mock('/cardRecommend', () => {       //购物-推荐列表
    let datas = { recommendList: [] }
    for (let i = 0; i < Math.floor(Math.random() * 20 + 6); i++) {
        datas.recommendList.push({ img: Random.image('150x150', Random.hex(), '#fff', Random.cword(4)), name: Random.cword(Math.floor(Math.random() * 18 + 9)) })
    }

    return {
        datas
    }
})

Mock.mock('/goodDetail', () => {       //商品详情信息
    let datas = { adImg: [],goodName:'',explain:'',comment:[],goodImg:[],goodTextImg:[] }
    for (let i = 0; i < 5; i++) {
        datas.adImg[i] = Random.image('400x400', Random.hex(), '#fff', Random.cword(4))
        datas.goodTextImg[i] = Random.image('400x400', Random.hex(), '#fff', '商品详情')
    }
    for (let i = 0; i < 9; i++) {
        datas.goodImg[i] = Random.image('350x500', Random.hex(), '#fff', Random.cword(6))
    }
    datas.goodName = Random.cword(Math.floor(Math.random() * 15 + 8))
    datas.explain = Random.cword(Math.floor(Math.random() * 70 + 40))
    return {
        datas
    }
})


