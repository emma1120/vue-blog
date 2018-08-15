import Vue from 'vue'
import Router from 'vue-router'

import homePage from '@/view/home'
import blogPage from '@/view/blog'
import mePage from '@/view/me'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/blog',
      name: 'blogPage',
      component: blogPage
    },
    {
      path: '/me',
      name: 'mePage',
      component: mePage
    }

  ],
  linkActiveClass: 'active'
})
