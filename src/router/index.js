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
import Home from "../components/PageAcceuilComponent.vue"
import Dashboard from "../components/DashboardComponent.vue"
import AllEtudiant from "../components/AllStudentsComponent.vue"
import AllProfs from "../components/AllProfsComponent.vue"
import Note from "../components/NotesAllProfsComponent.vue"




const routes = [
  {
    path: '/home',
    name:"User",
    component: User
  },
  {
     path: "/dashboard",
     name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "",  // ✅ Route enfant par défaut (pas "/")
          name: "AllProfs",
          component: AllProfs
        },
        {
          path: "/allEtudiants",  // ✅ Route enfant par défaut (pas "/")
          name: "AllEtudiant",
          component: AllEtudiant
        },
        
        {
          path: "/note",  // ✅ Route enfant par défaut (pas "/")
          name: "Note",
          component: Note
        },
    ]
 },

  {
    path: '/',
    name:"Home",
    component: Home
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
    path: '/home',
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
