import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/ViewHome.vue';
import Login from '@/views/admin/ViewLogin.vue';
import Registro from '@/views/admin/ViewRegistro';
import Error from '@/views/error/ViewError.vue';

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    
    {
        path: '/login',
        name: 'ViewLogin',
        component: Login
    },
    {
        path: '/registro',
        name: 'ViewRegistro',
        component: Registro
    },
    {
        path: '/*',
        name: 'ViewError',
        component: Error
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;