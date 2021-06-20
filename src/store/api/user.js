import axios from '@/axios'
import { sha256 } from '@/utils'

export default {
  actions: {
    async signup (context, { username, password }) {
      const res = await axios.post('/v1/signup', {
        username,
        password: sha256(password)
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async login (context, { username, password }) {
      const res = await axios.post('/v1/login', {
        username,
        password: sha256(password)
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async logout () {
      const res = await axios.post('/v1/logout')
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async search_user (context, { username }) {
      const res = await axios.get('/v1/user', {
        params: {
          query: username
        }
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
      return res.data.userList
    }
  }
}
