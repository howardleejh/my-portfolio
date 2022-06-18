import { useContext } from 'react'
import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import { MenuContext } from '../MenuProvider/MenuProvider'
import SocialButtons from '../SocialButtons/SocialButtons'

import './MenuOverlay.scss'

const MenuOverlay = () => {
  const menu = useContext(MenuContext)

  const menuItems = [
    {
      key: 'Home',
      path: '/',
    },
    {
      key: 'DUMB Tokens',
      path: 'tokens',
    },
    {
      key: 'NFT',
      path: 'nft',
    },
    {
      key: 'Vault',
      path: 'vault',
    },
    {
      key: 'Lottery',
      path: 'lottery',
    },
    {
      key: 'Road Map',
      path: 'roadmap',
    },
    {
      key: 'FAQ',
      path: 'faq',
    },
  ]

  const clickHandler = () => {
    menu.openMenu()
  }

  return (
    <div className='menu-overlay'>
      <Fade direction='down'>
        <Row justify='center' align='middle'>
          <Col>
            <ul>
              {menuItems.map((item) => {
                let objItem = Object.values(item)

                return (
                  <Link key={objItem[0]} to={objItem[1]} onClick={clickHandler}>
                    <li>{objItem[0]}</li>
                  </Link>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Fade>
      <Row align='middle' justify='space-between' id='overlay-footer'>
        <Fade direction='up'>
          <Col id='overlay-footer-items'>
            <h1>HOWARD LEE</h1>
            <h3>BLOCKCHAIN • FULL STACK MERN DEVELOPER</h3>
            <h5>+65 8322 2931 | vault2howard@gmail.com</h5>
          </Col>
          <Col>
            <SocialButtons />
          </Col>
        </Fade>
      </Row>
    </div>
  )
}
export default MenuOverlay
