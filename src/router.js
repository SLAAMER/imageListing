import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Account.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component:Gallery
    },
    {
      path: '/singleImage',
      name: 'singleImage',
      component: () => import('./views/SingleImage.vue')
    }
  ]
})
