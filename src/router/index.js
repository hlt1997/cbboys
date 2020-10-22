import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me'
import Shopcart from '../views/Shopcart'
import Message from '../views/Message'
import Register from '../views/Register'
import Login from '../views/Login'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 2528dc4e3eb170a0c768472164af2c2d6e256602

import Site from '../views/Site'
import Details from '../views/Details'
import NewSite from '../views/NewSite'

>>>>>>> 5cb9dc4cbdd20b162066dc57d0d338e299bee3bb



<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 5cb9dc4cbdd20b162066dc57d0d338e299bee3bb

>>>>>>> 2528dc4e3eb170a0c768472164af2c2d6e256602

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
=======



>>>>>>> 2528dc4e3eb170a0c768472164af2c2d6e256602
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
<<<<<<< HEAD



=======
<<<<<<< HEAD
>>>>>>> 2528dc4e3eb170a0c768472164af2c2d6e256602
    path: '/shopcart',
=======
    path: '/shopcart/:id',
>>>>>>> 5cb9dc4cbdd20b162066dc57d0d338e299bee3bb
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
<<<<<<< HEAD
=======

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

>>>>>>> 2528dc4e3eb170a0c768472164af2c2d6e256602
export default router
