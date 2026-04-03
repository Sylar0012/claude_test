import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/find-password',
    name: 'FindPassword',
    component: () => import('../views/FindPasswordView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
