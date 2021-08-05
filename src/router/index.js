import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pendidikan from '../views/Pendidikan.vue'
import Usaha from '../views/Usaha.vue'
import Hubungisaya from '../views/Hubungisaya.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pendidikan',
    name: 'Pendidikan',
    component: Pendidikan 
  },
  {
    path: '/usaha',
    name: 'Usaha',
    component: Usaha 
  },
  {
    path: '/hubungisaya',
    name: 'Hubungisaya',
    component: Hubungisaya 
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
