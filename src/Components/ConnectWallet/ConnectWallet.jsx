import { Button } from 'antd'
import './ConnectWallet.scss'

const ConnectWallet = () => {
  const clickHandler = () => {
    console.log('clicked!')
    return
  }

  return (
    <>
      <Button
        size='large'
        type='text'
        onClick={clickHandler}
        id='connect-wallet'
      >
        Connect Wallet
      </Button>
    </>
  )
}
export default ConnectWallet
