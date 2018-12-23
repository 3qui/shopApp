import Vue from 'vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import { Button, Search, Field, Popup } from 'mint-ui'
import App from './App.vue'
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueLazyLoad  from "vue-lazyload";
import router from "./router/router";
import store from "./store/store"
require('./mock')

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
  error: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543287054&di=f8e2186ba6c071342703edc7194e65cc&src=http://img.zcool.cn/community/01f4d6599f7c0ca80121ad7bdd9a58.jpg',
  loading: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543287054&di=f8e2186ba6c071342703edc7194e65cc&src=http://img.zcool.cn/community/01f4d6599f7c0ca80121ad7bdd9a58.jpg'
})
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Search.name, Search);
Vue.component(Field.name, Field);
Vue.component(Popup.name, Popup);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
