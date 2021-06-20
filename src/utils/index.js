import crypto from 'crypto'
import * as openpgp from 'openpgp'

export function sha256 (msg) {
  return crypto.createHash('sha256').update(msg).digest('hex')
}

export async function encrypt (pubkey, file) {
  const options = {
    message: openpgp.message.fromText(file),
    publicKeys: (await openpgp.key.readArmored(pubkey)).keys
  }
  return (await openpgp.encrypt(options)).data
}

export async function decrypt (prikey, encryptedFile) {
  const options = {
    message: await openpgp.message.readArmored(encryptedFile),
    privateKeys: (await openpgp.key.readArmored(prikey)).keys
  }
  return (await openpgp.decrypt(options)).data
}
