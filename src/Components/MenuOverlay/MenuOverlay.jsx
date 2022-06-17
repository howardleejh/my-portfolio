import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import SocialButtons from '../SocialButtons/SocialButtons'

import './MenuOverlay.scss'

const MenuOverlay = () => {
  return (
    <div className='menu-overlay'>
      <Fade direction='down'>
        <Row justify='center' align='middle'>
          <Col>
            <ul>
              <li>Home</li>
              <li>Token</li>
              <li>NFT</li>
              <li>Vault</li>
              <li>Lottery</li>
              <li>Roadmap</li>
              <li>FAQ</li>
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
