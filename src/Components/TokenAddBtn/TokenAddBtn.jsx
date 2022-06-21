import { useContext } from 'react'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { Button } from 'antd'
import './TokenAddBtn.scss'

const TokenAddBtn = (props) => {
  const menu = useContext(MenuContext)

  const handleClick = () => {
    menu.addTokenToWallet()
  }

  return (
    <>
      <Button
        ghost
        onClick={handleClick}
        disabled={props.disabled}
        loading={props.loading}
        className={props.className}
      >
        + FUSE to Wallet
      </Button>
    </>
  )
}
export default TokenAddBtn
