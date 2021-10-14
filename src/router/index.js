import { createRouter, createWebHashHistory } from 'vue-router'
import ScreenPage from '@/views/ScreenPage'

const routes = [
  {
    path: '/',
    redirect: '/screen'
  },
  {
    path: '/screen',
    component: ScreenPage
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
