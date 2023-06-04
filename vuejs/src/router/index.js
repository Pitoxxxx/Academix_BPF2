//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "home" */ '../views/dashboard.vue')
    },
    {
        path: '/login',
        name: 'posts.Login',
        component: () => import( /* webpackChunkName: "index" */ '../views/posts/Login.vue')
    },
    {
        path: '/mahasiswa',
        name: 'posts.T_mahasiswa',
        component: () => import( /* webpackChunkName: "index" */ '../views/posts/T_mahasiswa.vue')
    },
    {
        path: '/create',
        name: 'posts.create',
        component: () => import( /* webpackChunkName: "create" */ '../views/posts/create.vue')
    },
    {
        path: '/edit/:id',
        name: 'posts.edit',
        component: () => import( /* webpackChunkName: "edit" */ '../views/posts/edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router