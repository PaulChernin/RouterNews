import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Us from '../views/Us.vue'
//import Ru from '../views/Ru.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:country',
    //name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/language/:lang',
  //   name: 'languages',
  //   component: Languages
  // },
  // {
  //   path: '/us',
  //   name: 'us',
  //   component: Us
  // },
  // {
  //   path: '/ru',
  //   name: 'ru',
  //   component: Ru
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
