import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me'
import Shopcart from '../views/Shopcart'
import Message from '../views/Message'
import Register from '../views/Register'
import Login from '../views/Login'

import Site from '../views/Site'
import Details from '../views/Details'
import NewSite from '../views/NewSite'
import Shop from '../views/Shop'






Vue.use(VueRouter)

const routes = [
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/newsite',
    component: NewSite
  },
  {
    path: '/site',
    component: Site
  },
  {
    path:'/details/:id',
    component:Details
  },
  {
    path: '/shopcart/:id',
    component: Shopcart
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/me',
    component: Me
  },
  {
    //注册
    path: '/register',
    component: Register
  },
  {
    //登录
    path: '/login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
