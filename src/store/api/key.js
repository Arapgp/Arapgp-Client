import axios from '@/axios'

export default {
  actions: {
    async get_pubkey (context) {
      const res = await axios.get('api/v1/pubKey', {
        param: {
          username: context.rootState.username
        }
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
      return res.data.pubKey
    }
  }
}
