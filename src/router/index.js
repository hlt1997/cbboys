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
import Site from '../views/Site'
import Details from '../views/Details'
import NewSite from '../views/NewSite'
=======
>>>>>>> c3def7d8f6e5ca7c2294de8be2db6564ad424643

import Site from '../views/Site'
import Details from '../views/Details'
import Newsite from '../views/NewSite'

<<<<<<< HEAD
=======
>>>>>>> fd1a59ce1179017676ffc105a416ad54456f5dc0

>>>>>>> c3def7d8f6e5ca7c2294de8be2db6564ad424643

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> fd1a59ce1179017676ffc105a416ad54456f5dc0
>>>>>>> c3def7d8f6e5ca7c2294de8be2db6564ad424643
    path: '/newsite',
    component: NewSite
  },
  {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


>>>>>>> fd1a59ce1179017676ffc105a416ad54456f5dc0
>>>>>>> c3def7d8f6e5ca7c2294de8be2db6564ad424643
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



>>>>>>> fd1a59ce1179017676ffc105a416ad54456f5dc0
>>>>>>> c3def7d8f6e5ca7c2294de8be2db6564ad424643
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

////////
// 解决切换导航栏重复点击选项卡报错
// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }
/////////
=======
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
>>>>>>> c3def7d8f6e5ca7c2294de8be2db6564ad424643
export default router
