import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contacts from "./views/contacts.vue"

import './assets/style.css'

// VUE ROUTER
const routes =  [
    {path: "/", component: Home},
    {path: "/about", component: About },
    { path: "/contacts", component: Contacts }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active-nav',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
},
);

createApp(App).use(router).mount('#app')
