import Vue from 'vue'
import Router from 'vue-router'
import shoping from '@/components/pages/shoping'

Vue.use(Router)

export default new Router({//路由
  routes: [
    {path: '/',name: 'shoping',component: shoping}

  ]
})
