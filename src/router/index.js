// no-mixed-spaces-and-tabs
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

// 清除同路由点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: process.env.VUE_APP_BASEURL,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: [
    { path: '/Login', hidden: true, name: 'Login', component: () => import('@/views/Login') },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      hidden: true,
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home'),
          redirect: '/home/calendar',
          name: 'Home',
          meta: {
            title: 'home',
            icon: 'home',
            affix: true,
          },
          children: [
            {
              path: 'dendrogram',
              component: () => import('@/views/Home/Dendrogram'),
              name: 'Dendrogram',
              meta: {
                title: 'dendrogram',
                icon: 'dendrogram',
                affix: true,
              },
            },
            {
              path: 'recursion',
              component: () => import('@/views/Home/Recursion'),
              name: 'Recursion',
              meta: {
                title: 'recursion',
                icon: 'recursion',
                affix: true,
              },
            },
            {
              path: 'calendar',
              component: () => import('@/views/Home/Calendar'),
              name: 'Calendar',
              meta: {
                title: 'calendar',
                icon: 'calendar',
                affix: true,
              },
            },
            {
              path: 'virtualList',
              component: () => import('@/views/Home/VirtualList'),
              name: 'VirtualList',
              meta: {
                title: 'virtualList',
                icon: 'virtualList',
                affix: true,
              },
            },
            {
              path: 'shoppingTrolley',
              component: () => import('@/views/Home/ShoppingTrolley'),
              name: 'ShoppingTrolley',
              meta: {
                title: 'shoppingTrolley',
                icon: 'shoppingTrolley',
                affix: true,
              },
            },
            {
              path: 'dragLayout',
              component: () => import('@/views/Home/DragLayout'),
              name: 'DragLayout',
              meta: {
                title: 'dragLayout',
                icon: 'dragLayout',
                affix: true,
              },
            },
            {
              path: 'table',
              component: () => import('@/views/Home/Table'),
              name: 'Table',
              meta: {
                title: 'table',
                icon: 'table',
                affix: true,
              },
            },
            {
              path: 'dragLayout',
              component: () => import('@/views/Home/DragLayout'),
              name: 'DragLayout',
              meta: {
                title: 'dragLayout',
                icon: 'dragLayout',
                affix: true,
              },
            },
          ],
        },
        {
          path: 'visual',
          component: () => import('@/views/Visual'),
          name: 'Visual',
          meta: {
            title: 'visual',
            icon: 'visual',
            affix: true,
          },
        },
        {
          path: 'permission',
          component: () => import('@/views/Permission'),
          name: 'Permission',
          meta: {
            title: 'permission',
            icon: 'permission',
            affix: true,
          },
        },
        {
          path: 'notes',
          component: () => import('@/views/Notes'),
          name: 'Notes',
          meta: {
            title: 'notes',
            icon: 'notes',
            affix: true,
          },
        },
      ],
    },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/board',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'board',
    //       component: () => import('@/views/Board'),
    //       name: 'Board',
    //       meta: {
    //         title: 'board',
    //         icon: 'board',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/permission',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'permission',
    //       component: () => import('@/views/Permission'),
    //       name: 'Permission',
    //       meta: {
    //         title: 'permission',
    //         icon: 'permission',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/Notes',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'notes',
    //       component: () => import('@/views/Notes'),
    //       name: 'Notes',
    //       meta: {
    //         title: 'notes',
    //         icon: 'notes',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/VirtualList',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'virtualList',
    //       component: () => import('@/views/VirtualList'),
    //       name: 'VirtualList',
    //       meta: {
    //         title: 'virtualList',
    //         icon: 'virtualList',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/Recursion',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'recursion',
    //       component: () => import('@/views/Recursion'),
    //       name: 'Recursion',
    //       meta: {
    //         title: 'recursion',
    //         icon: 'recursion',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/DragLayout',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'dragLayout',
    //       component: () => import('@/views/DragLayout'),
    //       name: 'DragLayout',
    //       meta: {
    //         title: 'dragLayout',
    //         icon: 'dragLayout',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/ShoppingTrolley',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'shoppingTrolley',
    //       component: () => import('@/views/ShoppingTrolley'),
    //       name: 'ShoppingTrolley',
    //       meta: {
    //         title: 'shoppingTrolley',
    //         icon: 'shoppingTrolley',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/Calendar',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'calendar',
    //       component: () => import('@/views/Calendar'),
    //       name: 'Calendar',
    //       meta: {
    //         title: 'calendar',
    //         icon: 'calendar',
    //         affix: true,
    //       },
    //     },
    //   ],
    // },
  ],
})
export default router
