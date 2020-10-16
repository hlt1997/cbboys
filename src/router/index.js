import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD

=======
>>>>>>> 88f306156f2404c7dc3ced02a03d5c83cb59b285
import Me from '../views/Me'
import Shopcart from '../views/Shopcart'
import Message from '../views/Message'
import Register from '../views/Register'
import Login from '../views/Login'
<<<<<<< HEAD


import Site from '../views/Site'
import Details from '../views/Details'



=======
<<<<<<< HEAD
=======
//import Message from '../views/Details'
>>>>>>> 85547f275bd6fb3c02874d6dd169f4384a58a90a
import Site from '../views/Site'
import Details from '../views/Details'
>>>>>>> 88f306156f2404c7dc3ced02a03d5c83cb59b285


Vue.use(VueRouter)

const routes = [
 
  {
<<<<<<< HEAD

=======
>>>>>>> 88f306156f2404c7dc3ced02a03d5c83cb59b285
    path: '/site',
    component: Site
  },
  {
<<<<<<< HEAD

=======
>>>>>>> 88f306156f2404c7dc3ced02a03d5c83cb59b285
    path:'/details',
    component:Details
  },
  {
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> 85547f275bd6fb3c02874d6dd169f4384a58a90a
>>>>>>> 88f306156f2404c7dc3ced02a03d5c83cb59b285
    path: '/shopcart',
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
  routes
})

export default router
