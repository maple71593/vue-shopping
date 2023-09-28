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
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        { path: '/home', component: Home }, // 首頁
        { path: '/category', component: Category }, // 分類
        { path: '/cart', component: Cart }, // 購物車
        { path: '/user', component: User } // 使用者
      ]
    }, // 一進入的頁面

    { path: '/login', component: Login }, // 登入
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay }, // 支付
    { path: '/prodetail/:id', component: Prodetail }, // 商品詳情頁
    { path: '/search', component: Search }, // 搜尋
    { path: '/searchlist', component: SearchList } // 搜尋結果窗
  ]
})

// 登入攔截 {如果如果沒有登入，使用者就能訪問購物車或支付頁面，當然不合理 所以需要登入攔截}
// https://www.bilibili.com/video/BV1HV4y1a7n4/?p=119&spm_id_from=pageDriver&vd_source=13942c6c16741804cebefc67e42e4fe5
const authUrls = ['/pay', '/myoreder']
router.beforeEach((to, path, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/Login')
  }
})

export default router
