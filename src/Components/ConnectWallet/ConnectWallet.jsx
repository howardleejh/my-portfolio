import { useContext } from 'react'
import { Button } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import './ConnectWallet.scss'

const ConnectWallet = () => {
  const menu = useContext(MenuContext)

  const handleClick = async () => {
    menu.connectWallet()
  }

  return (
    <>
      <Button
        size='large'
        onClick={handleClick}
        loading={menu.isLoading}
        className='connect-wallet-btn'
      >
        Connect Wallet
      </Button>
    </>
  )
}
export default ConnectWallet
