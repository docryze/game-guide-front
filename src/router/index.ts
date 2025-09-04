import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', component: () => import('@/views/Index.vue') },
    { path: '/sve', component: () => import('@/views/sve/Index.vue') },
    { path: '/mbti', component: () => import('@/views/tool/MBTI.vue') }
  ],
})

export default router
