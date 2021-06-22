import crypto from 'crypto'
import * as openpgp from 'openpgp'

export function sha256 (msg) {
  return crypto.createHash('sha256').update(msg).digest('hex')
}

export async function encrypt (pubkey, file) {
  const options = {
    message: await openpgp.createMessage({ text: file }),
    encryptionKeys: await openpgp.readKey({ armoredKey: pubkey })
  }
  return (await openpgp.encrypt(options)).data
}

export async function decrypt (prikey, encryptedFile) {
  const options = {
    message: await openpgp.readMessage({ armoredMessage: encryptedFile }),
    decryptionKeys: await openpgp.decryptKey({
      privateKey: await openpgp.readKey({ armoredKey: prikey })
    })
  }
  return (await openpgp.decrypt(options)).data
}

export async function gen_keypair (name, email, passphrase) {
  const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
    type: 'ecc',
    curve: 'curve25519',
    userIDs: [{
      name,
      email
    }],
    passphrase
  })
  return {
    privateKey: privateKeyArmored,
    publicKey: publicKeyArmored
  }
}
