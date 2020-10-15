import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Site from '../views/Site'

import Me from '../views/Me'
import Shopcart from '../views/Shopcart'
import Message from '../views/Message'
import Details from '../views/Details'


Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/site',
    component: Site
  },
  {
=======
    path:'/details',
    component:Details
  },
  {

>>>>>>> 8193f0e7f5c9ed06426357402dd2877700d1f694
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
