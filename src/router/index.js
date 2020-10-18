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
>>>>>>> 1ca86a4fc51be00f8d92669cdb0110a524edc6a1
import Site from '../views/Site'
import Details from '../views/Details'
import Newsite from '../views/NewSite'


<<<<<<< HEAD

//import Message from '../views/Details'



// import Site from '../views/Site'
// import Details from '../views/Details'


// import Site from '../views/Site'
// import Details from '../views/Details'

// import Site from '../views/Site'
// import Details from '../views/Details'

=======
>>>>>>> 1ca86a4fc51be00f8d92669cdb0110a524edc6a1
Vue.use(VueRouter)

const routes = [
  {

<<<<<<< HEAD
    path: '/newsite',
    component: Newsite
  },
  {

=======
>>>>>>> 1ca86a4fc51be00f8d92669cdb0110a524edc6a1
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
>>>>>>> 1ca86a4fc51be00f8d92669cdb0110a524edc6a1
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
////////
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
/////////
export default router
