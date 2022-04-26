import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/ViewHome.vue';
import Login from '@/views/user/ViewLogin.vue';
import Registro from '@/views/user/ViewRegistro';
import Error from '@/views/error/ViewError.vue';
import Producto from '@/views/admin/product/ViewProd';
import LoginAdmin from '@/views/admin/login/ViewLoginAdmin';
import Detalle from '@/views/producto/ViewDetalle';

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
        path: '/:pathMatch(.*)*',
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
    },
    {
        path: '/detalle/:id',
        name: 'ViewDetalle',
        component: Detalle
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;