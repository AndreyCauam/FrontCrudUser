import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import CreateUser from '../views/User/CreateUpdateUser/index.vue'
import UpdateUser from '../views/User/CreateUpdateUser/index.vue'
import ShowUser from '../views/User/ShowUser/index.vue'
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
      path: '/createUser',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/updateUser',
      name: 'CreateUser',
      component: UpdateUser
    },
    {
      path: '/showUser',
      name: 'ShowUser',
      component: ShowUser
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
  ],
})

export default router
