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



=======
<<<<<<< HEAD




<<<<<<< HEAD
=======
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce

=======
<<<<<<< HEAD
=======
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
    path: '/shop',
    component: Shop
  },
  {
<<<<<<< HEAD
=======
=======
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 0b5193df5b74340380cb1bbaba909529444687ab
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
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
