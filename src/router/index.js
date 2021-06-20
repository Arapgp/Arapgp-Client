import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from '../axios'
import store from '../store'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
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
    path: '/register',
    name: 'register',
    component: Register
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

// 页面跳转逻辑 由于后端没有登录检验 暂时先不做
// router.beforeEach((to, from, next) => {
//   axios.get('/api/v1/login').then(res => {
//     let isLoggedIn = false
//     let userData = {}
//     if (res.status === 200) {
//       const data = res.data
//       if (data.status === 'GET_SUCCESS') {
//         isLoggedIn = true
//         userData = {
//           username: data.username
//         }
//       }
//     }
//     if (isLoggedIn && !store.state.isLoggedIn) {
//       store.commit({
//         type: 'login',
//         userData
//       })
//     } else if (!isLoggedIn && store.state.isLoggedIn) {
//       store.commit('logout')
//     }

//     if (to.name === 'login' && isLoggedIn) {
//       if (from.name === 'login' || from.name === null) {
//         next({ name: 'PGP' })
//       } else if (from.name === 'register') {
//         next()
//       } else {
//         next(false)
//       }
//     } else if (to.name !== 'login' && !isLoggedIn) {
//       if (to.name === 'register') {
//         next()
//       } else if (from.name !== 'login') {
//         next({ name: 'login' })
//       } else {
//         next(false)
//       }
//     } else {
//       next()
//     }
//   })
// })

export default router
