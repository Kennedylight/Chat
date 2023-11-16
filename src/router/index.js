import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '@/components/HomeComponent';
import Login from '@/components/auth/LoginComponent';

const routes = [
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/',
    component: Acceuil
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
