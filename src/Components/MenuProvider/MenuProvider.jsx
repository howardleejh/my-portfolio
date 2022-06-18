import { useState, createContext } from 'react'
import { ethers } from 'ethers'

const ethereum = window.ethereum

export const MenuContext = createContext({})

export default function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [wallet, setWallet] = useState({})

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
    if (ethereum.networkVersion !== '4') {
      return console.log('Please only connect to Rinkeby test net.')
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum, 'any')
      await provider.send('eth_requestAccounts')
      const signer = provider.getSigner()
      await signer.signMessage(
        `Signing in to Howard's portfolio, no data or transactions will be collected upon successfully connecting your wallet.`
      )
      setWallet({
        network: `Rinkeby`,
        address: ethereum.selectedAddress,
        connected: true,
      })
    } catch (err) {
      return console.log(err.message)
    }
  }

  const disconnectWallet = () => {
    setWallet({})
  }

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, openMenu, wallet, connectWallet, disconnectWallet }}
    >
      {children}
    </MenuContext.Provider>
  )
}
