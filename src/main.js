// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vant from 'vant'     全局引入
// import 'vant/lib/vant-css/index.css'
// Vue.use(vant)
//按需引入
// import Vueswiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import {Button,Row,Col,Swipe,SwipeItem,Lazyload,List} from 'vant'  //按需引入
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
