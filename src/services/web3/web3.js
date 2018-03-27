import Web3 from 'web3'
// import Web3Legacy from 'web3-0.20'
import * as providers from '../../helpers/providers'

export const getLocalWeb3 = ({ websockets }) => {
  const provider = providers.getLocalProvider({ websockets })
  if (!provider) console.log('could not instantiate provider')

  const web3 = new Web3(provider)
  if (!web3) console.log('could not instantiate web3')
  return web3
}

export const getInfuraWeb3 = ({ websockets }) => {
  const provider = providers.getInfuraProvider({ websockets })
  if (!provider) console.log('could not instantiate provider')

  const web3 = new Web3(provider)
  if (!web3) console.log('could not instantiate web3 object')
  return web3
}

export const getRemoteWeb3 = ({ websockets, url }) => {
  const provider = providers.getRemoteProvider({ websockets, url })
  if (!provider) console.log('could not instantiate provider')

  const web3 = new Web3(provider)
  if (!web3) console.log('could not instantiate web3 object')

  return web3
}

// Legacy Providers
// export const getLegacyWeb3 = ({ local, url }) => {
//   if (!local && !url) console.log('could not instantiate web3-0.20 object')

//   const provider = providers.getLegacyProvider({ local, url })
//   if (!provider) console.log('could not instantiate provider object')
//   const web3 = new Web3Legacy(provider)
//   if (!web3) console.log('could not instantiate web3 object')

//   return web3
// }

// export const getLocalLegacyWeb3 = () => {
//   const provider = providers.getLocalLegacyProvider()

//   const web3 = new Web3Legacy(provider)
//   if (!web3) console.log('could not instantiate local legacy web3 object')

//   return web3
// }

// export const getRemoteLegacyWeb3 = ({ url }) => {
//   const provider = providers.getRemoteLegacyProvider({ url })
//   if (!provider) console.log('could not instantiate remote legacy provider')

//   const web3 = new Web3Legacy(provider)
//   if (!web3) console.log('could not instantiate web3 object')

//   return web3
// }
