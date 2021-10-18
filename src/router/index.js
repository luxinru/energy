import { createRouter, createWebHashHistory } from 'vue-router'
import ScreenPage from '@/views/ScreenPage'
import Home from '@/views/Home'
import SubOption from '@/views/SubOption'
import Inquire from '@/views/Inquire'
import Compared from '@/views/Compared'
import Test from '@/views/Test'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sub-option',
    component: SubOption
  },
  {
    path: '/screen',
    component: ScreenPage
  },
  {
    path: '/inquire',
    component: Inquire
  },
  {
    path: '/compared',
    component: Compared
  },
  {
    path: '/test',
    component: Test
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
