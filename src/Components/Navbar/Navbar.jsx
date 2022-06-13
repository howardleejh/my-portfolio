import { useContext, useLayoutEffect } from 'react'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { Row, Col } from 'antd'
import { Spin as Hamburger } from 'hamburger-react'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
import './Navbar.scss'

const Navbar = () => {
  const menu = useContext(MenuContext)
  const isMenuOpen = menu.isMenuOpen

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
        <Col span={8}>
          <Hamburger
            direction='right'
            toggled={isMenuOpen}
            toggle={menu.openMenu}
            easing='ease-in'
          />
        </Col>
        <Col>
          <ConnectWallet />
        </Col>
      </Row>
      {isMenuOpen ? <MenuOverlay /> : null}
    </div>
  )
}
export default Navbar
