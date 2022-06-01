import { Button } from 'antd'
import './ConnectWallet.scss'

const ConnectWallet = () => {
  const clickHandler = () => {
    console.log('clicked!')
    return
  }

  return (
    <>
      <Button type='text' onClick={clickHandler}>
        Connect Wallet
      </Button>
    </>
  )
}
export default ConnectWallet
