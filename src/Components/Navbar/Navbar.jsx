import { Row, Col } from 'antd'
import { Spin as Hamburger } from 'hamburger-react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='main-navbar'>
      <Row align='middle' justify='end'>
        <Col className='hamburger-menu'>
          <Hamburger
            color='red'
            direction='left'
            easing='ease-in-out'
            label='MENU'
            rounded
          />
          <p>MENU</p>
        </Col>
      </Row>
    </div>
  )
}
export default Navbar
