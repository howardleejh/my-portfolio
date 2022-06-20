import { useContext } from 'react'
import { Button } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'

const ConnectWallet = () => {
  const menu = useContext(MenuContext)

  const handleClick = async () => {
    menu.connectWallet()
  }

  return (
    <>
      <Button onClick={handleClick} loading={menu.isLoading}>
        Connect Wallet
      </Button>
    </>
  )
}
export default ConnectWallet
