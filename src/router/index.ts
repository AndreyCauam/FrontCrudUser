import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import CreatePessoa from '../views/Pessoa/CreateUpdatePessoa/index.vue'
import UpdatePessoa from '../views/Pessoa/CreateUpdatePessoa/index.vue'
import ShowPessoa from '../views/Pessoa/ShowPessoa/index.vue'
import Error from '../views/Error/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeList',
      component: Home,
    },
    {
      path: '/createPessoa',
      name: 'CreatePessoa',
      component: CreatePessoa
    },
    {
      path: '/updatePessoa',
      name: 'UpdatePessoa',
      component: UpdatePessoa
    },
    {
      path: '/showPessoa',
      name: 'ShowPessoa',
      component: ShowPessoa
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
  ],
})

export default router
