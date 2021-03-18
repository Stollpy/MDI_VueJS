import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Annonce from '../views/Annonce.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/annonce/13',
    name: 'Annonce',
    component: Annonce
  },
  // {
  //   path:'/nouveau',
  //   name: 'Nouveau',
  //   component: () => import(/* webpackChunkName: "nouveau" */ '../views/Nouveau.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
