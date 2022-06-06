import { useLayoutEffect, useContext } from 'react'
import { Row, Col } from 'antd'
import { Spin as Hamburger } from 'hamburger-react'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import OverlayMenu from '../OverlayMenu/OverlayMenu'
import { MenuContext } from '../MenuProvider/MenuProvider'
import './Navbar.scss'

const Navbar = () => {
  const menu = useContext(MenuContext)

  const isMenuOpen = menu.isMenuOpen

  useLayoutEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '0%'
      return
    }
    if (!isMenuOpen) {
      document.body.style.overflow = 'auto'
      document.body.style.height = '100%'
      return
    }
  }, [isMenuOpen])

  const handleClick = () => {
    menu.changeMenuState()
    return
  }

  return (
    <div className='navbar'>
      <Row align='middle' justify='space-between'>
        <Col>
          <div id='hamburger-menu'>
            <Hamburger
              label='MENU'
              size={45}
              distance='sm'
              easing='ease-in'
              direction='right'
              toggled={isMenuOpen}
              toggle={handleClick}
            />
          </div>
        </Col>
        <Col>
          <ConnectWallet />
        </Col>
      </Row>
      <Row>
        <Col>{isMenuOpen ? <OverlayMenu /> : null}</Col>
      </Row>
    </div>
  )
}
export default Navbar
