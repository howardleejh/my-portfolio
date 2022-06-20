import { useEffect, useContext } from 'react'
import { Col, Button } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { EllipseAdd } from '../../Utilities/Helper'
import './Wallet.scss'

const Wallet = () => {
  const menu = useContext(MenuContext)
  const wallet = menu.wallet

  useEffect(() => {
    const ethereum = window.ethereum

    ethereum.on('chainChanged', (chainId) => {
      // Handle the new chain.
      // Correctly handling chain changes can be complicated.
      // We recommend reloading the page unless you have good reason not to.
      window.location.reload()
    })

    ethereum.on('accountsChanged', (accounts) => {
      // Handle the new accounts, or lack thereof.
      // "accounts" will always be an array, but it can be empty.
      menu.disconnectWallet()
    })

    return () => {
      ethereum.removeListener('chainChanged', () => {})
      ethereum.removeListener('accountsChanged', () => {})
    }
    // eslint-disable-next-line
  }, [wallet])

  return (
    <div className='wallet-container'>
      <Col>
        <Button className='wallet-btn'>{menu.wallet.network}</Button>
        <Button className='wallet-btn'>{`${EllipseAdd(
          menu.wallet.address,
          6,
          6
        )}`}</Button>
      </Col>
    </div>
  )
}
export default Wallet
