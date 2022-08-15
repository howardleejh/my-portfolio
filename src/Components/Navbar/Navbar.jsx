import { useState, useLayoutEffect } from 'react'
import { Row, Col } from 'antd'
import { Spin as Hamburger } from 'hamburger-react'
import MenuOverlay from '../MenuOverlay/MenuOverlay'
import './Navbar.scss'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleClickMenu = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  useLayoutEffect(() => {
    menu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [menu])

  return (
    <div className='main-navbar'>
      <Row align='middle' justify='end'>
        <Col className='hamburger-menu'>
          <Hamburger
            direction='left'
            easing='ease-in-out'
            label='MENU'
            onToggle={handleClickMenu}
            toggled={menu}
            rounded
          />
          <h6>MENU</h6>
        </Col>
      </Row>
      {menu ? <MenuOverlay /> : null}
    </div>
  )
}
export default Navbar
