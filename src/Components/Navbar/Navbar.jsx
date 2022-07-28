import { useContext, useLayoutEffect } from 'react'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { Row, Col } from 'antd'
import { Spin as Hamburger } from 'hamburger-react'
import { useLocation } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
import Wallet from '../Wallet/Wallet'
import './Navbar.scss'

const Navbar = () => {
  const menu = useContext(MenuContext)
  const isMenuOpen = menu.isMenuOpen

  const location = useLocation()

  useLayoutEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      return
    }
    if (!isMenuOpen) {
      document.body.style.overflow = 'auto'
      return
    }
  }, [isMenuOpen])

  return (
    <div className='navbar'>
      <Row justify='space-between' align='middle'>
        <Col className='navbar-item'>
          <Hamburger
            direction='right'
            toggled={isMenuOpen}
            toggle={menu.openMenu}
            easing='ease-in'
          />
        </Col>
        {location.pathname !== '/' ? (
          <Fade>
            <Col className='navbar-item'>
              {menu.wallet.connected ? <Wallet /> : <ConnectWallet />}
            </Col>
          </Fade>
        ) : (
          <></>
        )}
      </Row>
      {isMenuOpen ? <MenuOverlay /> : null}
    </div>
  )
}
export default Navbar
