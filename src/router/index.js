import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

<<<<<<< HEAD
=======
=======
>>>>>>> 1adacd349c0b925e8ede0c3be2fcabc7d249b1cd
>>>>>>> e153c762366c0811fe789e2812a9387d65514d3f
import Me from '../views/Me'
import Shopcart from '../views/Shopcart'
import Message from '../views/Message'
import Register from '../views/Register'
import Login from '../views/Login'


<<<<<<< HEAD

import Site from '../views/Site'
import Details from '../views/Details'



<<<<<<< HEAD

//import Message from '../views/Details'


=======
=======
import Site from '../views/Site'
import Details from '../views/Details'

>>>>>>> 1adacd349c0b925e8ede0c3be2fcabc7d249b1cd
=======
import Site from '../views/Site'
import Details from '../views/Details'
>>>>>>> e153c762366c0811fe789e2812a9387d65514d3f

=======
import Site from '../views/Site'
import Details from '../views/Details'
>>>>>>> 1adacd349c0b925e8ede0c3be2fcabc7d249b1cd

>>>>>>> 5f374d5360e88a7a0fbeb3918da11019f5175ade
Vue.use(VueRouter)

const routes = [
  {

<<<<<<< HEAD
=======
=======
>>>>>>> 1adacd349c0b925e8ede0c3be2fcabc7d249b1cd
>>>>>>> e153c762366c0811fe789e2812a9387d65514d3f
    path: '/site',
    component: Site
  },
  {

<<<<<<< HEAD
=======
=======
>>>>>>> 1adacd349c0b925e8ede0c3be2fcabc7d249b1cd
>>>>>>> e153c762366c0811fe789e2812a9387d65514d3f
    path:'/details',
    component:Details
  },
  {

<<<<<<< HEAD


=======
>>>>>>> 1adacd349c0b925e8ede0c3be2fcabc7d249b1cd
>>>>>>> e153c762366c0811fe789e2812a9387d65514d3f
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
