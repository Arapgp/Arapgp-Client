import axios from '@/axios'

export default {
  actions: {
    async get_pubkey (context) {
      const res = await axios.get('/v1/pubKey', {
        param: {
          username: context.rootState.username
        }
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
      return res.data.pubKey
    },

    async upload_pubkey (context) {
      const res = await axios.post('/v1/pubKey', {
        pubKey: context.rootState.publicKey
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async change_pubkey (context) {
      const res = await axios.put('/v1/pubKey', {
        pubKey: context.rootState.publicKey
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async delete_pubKey () {
      const res = await axios.delete('/v1/pubKey')
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    }
  }
}
