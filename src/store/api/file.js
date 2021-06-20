import axios from '@/axios'
import { encrypt, decrypt } from '@/utils'

export default {
  actions: {
    // file: { fileName: string, fileContent: string }
    async upload_file (context, { file }) {
      const encryptedFile = await encrypt(context.rootState.publicKey, file.fileContent)
      const res = await axios.post(`/v1/user/${context.rootState.username}/file`, {
        name: file.fileName,
        content: encryptedFile,
        pubKey: context.rootState.publicKey
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async download_file (context, { fileName }) {
      const privateKey = context.rootState.privateKey
      if (privateKey) {
        const res = await axios.get(`/v1/user/${context.rootState.username}/file`, {
          params: {
            name: fileName
          }
        })
        if (res.data.status !== 'OK') {
          throw Error(res.data.status)
        }
        const encryptedFile = res.data.content
        return await decrypt(privateKey, encryptedFile)
      } else {
        throw Error('Private key does not exist!\nPlease upload private key first.')
      }
    },

    // file: { fileName: string, fileContent: string }
    async change_file (context, { file }) {
      const encryptedFile = await encrypt(context.rootState.publicKey, file.fileContent)
      const res = await axios.put(`/v1/user/${context.rootState.username}/file`, {
        name: file.fileName,
        content: encryptedFile
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async delete_file (context, { fileName }) {
      const res = await axios.delete(`/v1/user/${context.rootState.username}/file`, {
        name: fileName
      })
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
    },

    async get_files (context) {
      const res = await axios.get(`/v1/user/${context.rootState.username}/filesinfo`)
      if (res.data.status !== 'OK') {
        throw Error(res.data.status)
      }
      return res.data.info
    }
  }
}
