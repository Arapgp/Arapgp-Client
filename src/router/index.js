import Vue from 'vue'
import VueRouter from 'vue-router'
import PGP from '../views/pgp.vue'
import publicKey from '../views/publickey.vue'

Vue.use(VueRouter)

const routes = [
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

export default router
