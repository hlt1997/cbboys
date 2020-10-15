import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shopping from "../views/shopping"
<<<<<<< HEAD
import Me from '../views/me'
import Shopcart from '../views/shopcart'
import Message from '../views/Message'
=======
import Details from '../views/Details'
>>>>>>> 1c0c8bb5255809f741ff3ba1934930ab9efd6ad9

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
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
=======
    path:'details',
    component:Details
>>>>>>> 1c0c8bb5255809f741ff3ba1934930ab9efd6ad9
  },
  {
    path: '/shopping',
    
    component: Shopping
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
