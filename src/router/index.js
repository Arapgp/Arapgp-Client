import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/login.vue'
import PGP from '../views/pgp.vue'
import publicKey from '../views/publickey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'PGP',
    component: PGP
  },
  {
    path: '/publickey',
    name: 'publicKey',
    component: publicKey
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (store.state.isLoggedIn) {
    if (to.name === 'login') {
      next({ name: 'PGP' })
    } else {
      next()
    }
  } else {
    if (to.name !== 'login') {
      next({ name: 'login' })
    } else {
      next()
    }
  }
})

export default router
