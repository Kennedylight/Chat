import { createRouter, createWebHistory } from 'vue-router'
//import Acceuil from '../components/AcceuilComponent.vue'
//import Home from "../components/HomeComponent.vue"
import Register from "../components/RegisterComponent.vue"
import Login from "../components/LoginComponent.vue"
import User from "../components/homeAfterConnexionComponent.vue"
// import Test from "../components/TestComponent.vue"
import Devoir from "../components/DevoirComponent.vue"
import Dame from "../components/DamierComponent.vue"
import Chat from "../components/ChatComponent.vue"
import AcceuilChat from "../components/AcceuilChatComponent.vue"



const routes = [
  {
    path: '/home',
    name:"User",
    component: User
  },
  {
    path: '/chat',
    name:"Chat",
    component: Chat
  },
  {
    path: '/dame',
    name:"Dame",
    component: Dame
  },
  {
    path: '/devoir',
    name:"Devoir",
    component: Devoir
  },
   {
    path: '/',
    name:"AcceuilChat",
    component: AcceuilChat
  },
  {
    path: '/login',
    name:"Login",
    component: Login
  },
   {
    path: '/register',
    name:"Register",
    component: Register
  },
  {
    path: '/user',
    name:"User",
    component: User
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
