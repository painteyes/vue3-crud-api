import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/Student/List.vue'
import Edit from "../components/Student/Edit.vue"
import Add from "../components/Student/Add.vue"
import View from "../components/Student/View.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
    {
        path: '/',
        name: 'students',
        component: List,

    },
    {
        path: '/add',
        name: 'add-student',
        component: Add,
    },
    {
        path: '/edit/:id',
        name: 'edit-student',
        component: Edit
    },
    {
        path: '/view/:id',  
        name: 'view-student',
        component: View
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router