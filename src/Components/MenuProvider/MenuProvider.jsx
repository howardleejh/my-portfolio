import { useState, createContext } from 'react'
import { ethers } from 'ethers'
import {
  TOKEN_CONTRACT,
  DISTRIBUTION_CONTRACT,
} from '../../Constants/Addresses'
import { GetProvider, Toast } from '../../Utilities/Helper'
import distributionAbi from '../../Abi/distribution.json'

const ethereum = window.ethereum

export const MenuContext = createContext({})

export default function MenuProvider({ children }) {
  const provider = GetProvider('alchemy')

  const distributionContract = new ethers.Contract(
    DISTRIBUTION_CONTRACT,
    distributionAbi,
    provider
  )

  const [isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [wallet, setWallet] = useState({})
  const [userIsReady, setUserIsReady] = useState(false)

  const openMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      return
    }
    setIsMenuOpen(false)
    return
  }

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      Toast('Please install Metamask!')
      return
    }
    if (ethereum.networkVersion !== '80001') {
      Toast('Please only use Mumbai Polygon Testnet')
      return
    }
    setIsLoading(true)
    try {
      const provider = GetProvider('metamask')
      await provider.send('eth_requestAccounts')
      const signer = provider.getSigner()
      await signer.signMessage(
        `Signing in to Howard's portfolio, no data or transactions will be collected upon successfully connecting your wallet.`
      )
      setWallet({
        network: `Mumbai`,
        address: ethereum.selectedAddress,
        connected: true,
      })
    } catch (err) {
      setIsLoading(false)
      Toast(err.message)
      return
    }
    setIsLoading(false)
  }

  const disconnectWallet = () => {
    setWallet({})
  }

  const getUserTokens = async () => {
    if (!wallet.connected) {
      return
    }
    setIsLoading(true)
    let obj
    try {
      await distributionContract.users(wallet.address).then((results) => {
        let d = new Date(parseInt(results.nextMint.toString() * 1000))
        let timestamp = d.toLocaleString('en-US')
        obj = {
          nextMint: timestamp,
          rewardRemaining: ethers.utils.formatEther(results.rewardRemaining),
          rewardWithdrawn: ethers.utils.formatEther(results.rewardWithdrawn),
          totalReward: ethers.utils.formatEther(results.totalReward),
        }
      })
    } catch (err) {
      setIsLoading(false)
      Toast(err.message)
      return
    }
    setIsLoading(false)
    return obj
  }

  const checkUserReady = async () => {
    if (!wallet.connected) {
      return
    }
    let balance
    let isEligible
    try {
      const provider = GetProvider('metamask')
      const signer = provider.getSigner()
      let connectedContract = distributionContract.connect(signer)
      balance = await signer.getBalance()
      isEligible = await connectedContract.checkEligibility()
    } catch (err) {
      Toast(err.message)
      return
    }
    if (isEligible === true && ethers.utils.formatEther(balance) > 0) {
      setUserIsReady(true)
      Toast('You are ready to mint!')
      return
    }
    return
  }

  const mintTokens = async () => {
    setIsLoading(true)
    let tx
    try {
      const provider = GetProvider('metamask')
      const signer = provider.getSigner()
      let connectedContract = distributionContract.connect(signer)
      tx = await connectedContract.userMint()
      await tx.wait()
    } catch (err) {
      setIsLoading(false)
      Toast(err.message)
      return
    }
    setIsLoading(false)
    return tx
  }

  const claimTokens = async (amount) => {
    setIsLoading(true)
    let tx
    try {
      const provider = GetProvider('metamask')
      const signer = provider.getSigner()
      let connectedContract = distributionContract.connect(signer)
      tx = await connectedContract.userWithdraw(amount)
      await tx.wait()
    } catch (err) {
      setIsLoading(false)
      Toast(err.message)
      return
    }
    setIsLoading(false)
    return Toast('Reward is successfully claimed!')
  }

  const addTokenToWallet = async () => {
    const tokenAddress = `${TOKEN_CONTRACT}`
    const tokenSymbol = `FUSE`
    const tokenDecimals = 18
    const tokenImage = `https://res.cloudinary.com/dgpk8awuz/image/authenticated/s--mqrHt5-V--/v1655828489/jozfrfpa3v4moh9ad2yr.png`
    setIsLoading(true)
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      })

      if (wasAdded) {
        setIsLoading(false)
        Toast('Successfully added to wallet!')
        return
      }
    } catch (err) {
      setIsLoading(false)
      Toast(err.message)
      return
    }
  }

  const addChainToWallet = async () => {
    let tx
    try {
      tx = await ethereum.request({
        id: 1,
        jsonrpc: '2.0',
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x13881',
            rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
            chainName: 'Polygon Testnet Mumbai',
            nativeCurrency: {
              name: 'tMATIC',
              symbol: 'tMATIC', // 2-6 characters long
              decimals: 18,
            },
            blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
          },
        ],
      })
    } catch (err) {
      Toast(err.message)
    }
    if (tx === null) {
      Toast('Successfully Added to Wallet!')
      return
    }
  }

  return (
    <MenuContext.Provider
      value={{
        isLoading,
        isMenuOpen,
        openMenu,
        wallet,
        connectWallet,
        disconnectWallet,
        checkUserReady,
        userIsReady,
        getUserTokens,
        mintTokens,
        claimTokens,
        addTokenToWallet,
        addChainToWallet,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
