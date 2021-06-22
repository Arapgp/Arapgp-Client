import Vue from 'vue'
import Vuex from 'vuex'

import user from './api/user'
import file from './api/file'
import keys from './api/keys'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null,
    session: '',
    publicKey: null,
    privateKey: null
  },
  mutations: {
    set_profile (state, payload) {
      state.isLoggedIn = true
      state.username = payload.username
      state.session = payload.session
    },
    clear_profile (state) {
      state.isLoggedIn = false
      state.username = null
      state.session = null
      state.publicKey = null
      state.privateKey = null
    },
    set_pubkey (state, { pubkey }) {
      state.publicKey = pubkey
    }
  },
  modules: {
    user,
    file,
    keys
  }
})
