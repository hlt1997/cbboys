import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shopping from "../views/shopping"
import Me from '../views/me'
import Shopcart from '../views/shopcart'
import Message from '../views/Message'

Vue.use(VueRouter)

const routes = [
  {
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
