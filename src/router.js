import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/ViewHome.vue';
import Login from '@/views/user/ViewLogin.vue';
import Registro from '@/views/user/ViewRegistro';
import Error from '@/views/error/ViewError.vue';
import Producto from '@/views/admin/product/ViewProd';
import LoginAdmin from '@/views/admin/login/ViewLoginAdmin';

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
        path: '/**',
        name: 'ViewError',
        component: Error
    },
    {
        path: '/admin/producto',
        name: 'ViewProd',
        component: Producto
    },
    {
        path: '/admin',
        name: 'ViewLoginAdmin',
        component: LoginAdmin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;