import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import Echo from "laravel-echo"
import pusherJs from 'pusher-js'

const app = createApp(App)



window.Pusher = pusherJs;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "a3de3f4bec2cc0b1cddf",
    wsHost:store.state.host,
    wsPort: 6001,
    cluster: "mt1",
    forceTLS: false,
    disableStats: true,
    authEndpoint :store.state.api + 'broadcasting/auth',
    auth: {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwtToken') }
    },
});
app.config.globalProperties.$moment = moment
app.use(VueAxios, axios).use(router).use(store).mount('#app')
