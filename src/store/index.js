import { createStore } from 'vuex'

export default createStore({
  state: {
    picture: 'http://127.0.0.1:8000/avatars/',
    cv: 'http://127.0.0.1:8000/CV/',
    api: 'http://127.0.0.1:8000/api/',
    server: 'http://127.0.0.1:8000/',
    host: '127.0.0.1',
    personne:[],
    joueur:[],
    config:{ headers: {
      'Authorization': `Bearer ${localStorage.getItem("jwtoken")}`, // Récupère le token depuis localStorage
    }},
  },
    getters: {

    },
    mutations: {
    },
    actions: {

    },
    modules: {
    }
  })

