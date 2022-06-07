import { useContext } from 'react'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { Row, Col } from 'antd'
import { Spin as Hamburger } from 'hamburger-react'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
import './Navbar.scss'

const Navbar = () => {
  const menu = useContext(MenuContext)
  const isMenuOpen = menu.isMenuOpen

  return (
    <div className='navbar'>
      <Row justify='space-between' align='middle'>
        <Col>
          <Hamburger
            direction='right'
            toggled={isMenuOpen}
            toggle={menu.openMenu}
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
