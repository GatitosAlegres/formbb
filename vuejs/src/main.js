import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GeneralData from './components/GeneralData.vue'   
import NewbornR from './components/NewbornR.vue'

const routes = [
    { 
        path: '/', 
        name: 'GeneralData',
        component: GeneralData
    },
    { 
        path: '/registro', 
        name: 'NewbornR',
        component: NewbornR 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');