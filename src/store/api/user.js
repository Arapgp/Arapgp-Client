import axios from '@/axios'
import { sha256 } from '@/utils'

export default {
  actions: {
    async signup (context, { username, password }) {
      const res = await axios.post('/v1/signup', {
        username,
        password: sha256(password)
      })
      return res.data
    },
    async login (context, { username, password }) {
      const res = await axios.post('/v1/login', {
        username,
        password: sha256(password)
      })
      return res.data
    },
    async logout () {
      return await axios.post('/v1/logout')
    },
    async search_user (context, { username }) {
      const res = await axios.get('/v1/user', {
        params: {
          query: username
        }
      })
      return res.data
    }
  }
}
