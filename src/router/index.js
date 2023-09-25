import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/login'
import Myorder from '@/views/myorder'
import Pay from '@/views/pay'
import Prodetail from '@/views/prodetail'
import Search from '@/views/search'
import SearchList from '@/views/search/list'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/login', component: Login },
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay },
    { path: '/prodetail/:id', component: Prodetail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList }
  ]
})

export default router
