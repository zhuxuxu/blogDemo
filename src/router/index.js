import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '@/components/addBlog'
import showBlog from '@/components/showBlog'
import singleBlog from '@/components/singleBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: showBlog
    },
    {
      path: '/addBlog',
      component: addBlog
    },
    {
      path: '/blog/:id',
      component: singleBlog
    },
  ],
  mode:"history"
})
