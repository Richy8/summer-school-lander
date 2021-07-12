import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "AppLayout" */ "@/layout/app-layout"),
    children: [
      {
        path: '',
        name: 'Summerschool',
        component: () => import(/* webpackChunkName: "Summerschool" */ '@/views/Summerschool'),
      },
      {
        path: '/course/coding',
        name: 'CourseCoding',
        component: () => import(/* webpackChunkName: "CoursePage" */ '@/views/Course'),
      },
      {
        path: '/course/video-editing',
        name: 'CourseVideoEditing',
        component: () => import(/* webpackChunkName: "CoursePage" */ '@/views/Course'),
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
