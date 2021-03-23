import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdsItem from '../views/AdsItem.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import ChangePassword from '../views/ChangePassword.vue'
import AdsAll from '../views/AdsAll.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/annonce/:id',
    name: 'AdsItem',
    component: AdsItem
  },
  {
    path: '/annonces',
    name: 'AdsAll',
    component: AdsAll
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/account/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  // {
  //   path:'/nouveau',
  //   name: 'Nouveau',
  //   component: () => import(/* webpackChunkName: "nouveau" */ '../views/Nouveau.vue')
  // }
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
