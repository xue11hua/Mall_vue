import Vue from 'vue'
import Router from 'vue-router'
import shoping from '@/components/pages/shoping'
import register from '@/components/pages/register'
import login from '@/components/pages/login'
Vue.use(Router)

export default new Router({//路由
  routes: [
    {path: '/',name: 'shoping',component: shoping},
     {path: '/register',name: 'register',component: register},
    {path: '/login',name: 'login',component: login}

  ]
})
