import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: false,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/aboutme',
    component: Layout,
    redirect: '/aboutme/index',
    hidden: false,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [{
      path: 'index',
      component: () => import('@/views/aboutme/index')
    }]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/report/index',
    hidden: false,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [{
      path: 'index',
      component: () => import('@/views/report/index')
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
