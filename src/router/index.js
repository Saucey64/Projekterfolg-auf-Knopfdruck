import {createRouter, createWebHistory} from 'vue-router'
import Info from '../views/Info.vue'
import Home from '../views/Home.vue'

//import { create } from 'core-js/core/object'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/info',
        name: 'Info',
        component: Info,
      },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router