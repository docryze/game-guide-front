import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', component: () => import('@/views/Index.vue') },
    { path: '/game', component: () => import('@/views/GameSVE.vue') }
  ],
})

export default router
