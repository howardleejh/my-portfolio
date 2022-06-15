import { Row, Col, Button } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
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
      <Row align='middle' justify='space-around' id='overlay-footer'>
        <Fade direction='up'>
          <Col id='overlay-footer-items'>
            <h1>HOWARD LEE</h1>
            <h3>BLOCKCHAIN • FULL STACK MERN DEVELOPER</h3>
            <h5>+65 8322 2931 | vault2howard@gmail.com</h5>
          </Col>
          <Col>
            <Button
              ghost
              href='https://www.linkedin.com/in/howardleejh'
              target='_blank'
              className='overlay-footer-btn'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Button>
            <Button
              ghost
              href='https://t.me/howardleejh'
              target='_blank'
              className='overlay-footer-btn'
            >
              <FontAwesomeIcon icon={faTelegram} />
            </Button>
            <Button
              ghost
              href={`https://wa.me/6583222931?text=I'm%20interested%20to%20connect%20with%20you!`}
              target='_blank'
              rel='noreferrer'
              className='overlay-footer-btn'
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Button>
            <Button
              ghost
              href='https://www.github.com/howardleejh'
              target='_blank'
              className='overlay-footer-btn'
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Col>
        </Fade>
      </Row>
    </div>
  )
}
export default MenuOverlay
