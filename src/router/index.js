import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me'
import Shopcart from '../views/Shopcart'
import Message from '../views/Message'
import Register from '../views/Register'
import Login from '../views/Login'
<<<<<<< HEAD

import Site from '../views/Site'
import Details from '../views/Details'
import NewSite from '../views/NewSite'




=======
<<<<<<< HEAD
import Site from '../views/Site'
import Details from '../views/Details'
import NewSite from '../views/NewSite'

=======


import Site from '../views/Site'
import Details from '../views/Details'
import NewSite from '../views/NewSite'

>>>>>>> 90e524f90bf987f60e9c972322b490075b907492

>>>>>>> 24f9fb923a3b44b8640c815a7f8dd3563b80b387

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD

=======
>>>>>>> 24f9fb923a3b44b8640c815a7f8dd3563b80b387
    path: '/newsite',
    component: NewSite
  },
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 90e524f90bf987f60e9c972322b490075b907492
>>>>>>> 24f9fb923a3b44b8640c815a7f8dd3563b80b387

    path: '/site',
    component: Site
  },
  {
    path:'/details',
    component:Details
  },
  {
<<<<<<< HEAD

=======
<<<<<<< HEAD



=======
>>>>>>> 90e524f90bf987f60e9c972322b490075b907492
>>>>>>> 24f9fb923a3b44b8640c815a7f8dd3563b80b387
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
<<<<<<< HEAD
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
=======
>>>>>>> 24f9fb923a3b44b8640c815a7f8dd3563b80b387
export default router
