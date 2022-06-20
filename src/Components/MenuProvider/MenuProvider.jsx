import { useState, createContext } from 'react'
import { ethers } from 'ethers'
import { TRIVIA_CONTRACT } from '../../Constants/Addresses'
import { GetProvider } from '../../Utilities/Helper'
import triviaAbi from '../../Abi/Trivia.json'

const ethereum = window.ethereum

export const MenuContext = createContext({})

export default function MenuProvider({ children }) {
  const provider = GetProvider('alchemy')

  const triviaContract = new ethers.Contract(
    TRIVIA_CONTRACT,
    triviaAbi,
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
  }

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      console.log('Please install Metamask!')
      return
    }
    if (ethereum.networkVersion !== '80001') {
      return console.log('Please only connect to Polygon Mumbai testnet.')
    }
    setIsLoading(true)
    const provider = GetProvider('metamask')
    try {
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
      return console.log(err.message)
    }
    setIsLoading(false)
  }

  const disconnectWallet = () => {
    setWallet({})
  }

  const getUserTokens = async () => {
    if (!wallet.connected) {
      return console.log('Please connect wallet')
    }

    let obj
    try {
      await triviaContract.users(wallet.address).then((results) => {
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
      return console.log(err.message)
    }

    return obj
  }

  const checkUserReady = async () => {
    let balance
    let isEligible
    try {
      const provider = GetProvider('metamask')
      const signer = provider.getSigner()
      balance = await signer.getBalance()
      isEligible = await triviaContract.checkEligibility()
    } catch (err) {
      return console.log(err.message)
    }
    console.log(isEligible)
    if (balance > 0 && isEligible === true) {
      return setUserIsReady(true)
    }

    return
  }

  const mintTokens = async () => {
    setIsLoading(true)
    let tx
    try {
      const provider = GetProvider('metamask')
      const signer = provider.getSigner()
      let connectedContract = triviaContract.connect(signer)
      tx = await connectedContract.userMint(true)
      await tx.wait()
    } catch (err) {
      setIsLoading(false)
      return console.log(err.message)
    }
    setIsLoading(false)
    return ethers.utils.formatEther(tx)
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
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
