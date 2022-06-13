import { Row, Col, Button, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <Row align='middle' justify='space-between'>
        <Col span={10} className='personal-title'>
          <Row>
            <Col className='personal-items'>
              <h1>HOWARD LEE</h1>
              <h3>BLOCKCHAIN • FULL STACK MERN DEVELOPER</h3>
              <h5>+65 8322 2931 | vault2howard@gmail.com</h5>
              <Space direction='horizontal'>
                <Button
                  ghost
                  href='mailto:vault2howard@gmail.com'
                  target='_top'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faAt} />
                </Button>
                <Button
                  ghost
                  href={`https://wa.me/6583222931?text=I'm%20interested%20to%20connect%20with%20you!`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Button>
                <Button
                  ghost
                  href='https://www.linkedin.com/in/howardleejh'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Button>
                <Button
                  ghost
                  href='https://www.github.com/howardleejh'
                  target='_blank'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={10} className='site-map'>
          <Row justify='start' gutter={[16, 16]}>
            <Col className='site-map-items'>
              <h6>ABOUT</h6>
              <ul>
                <li>Howard</li>
                <li>Tech Stack</li>
                <li>Experience</li>
                <li>Skill Sets</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col className='site-map-items'>
              <h6>TOKENS</h6>
              <ul>
                <li>How To</li>
                <li>Mint Tokens</li>
              </ul>
            </Col>
            <Col className='site-map-items'>
              <h6>NFT</h6>
              <ul>
                <li>How To</li>
                <li>Mint NFT</li>
              </ul>
            </Col>

            <Col className='site-map-items'>
              <h6>VAULT</h6>
              <ul>
                <li>How It Works</li>
                <li>Use Vault</li>
              </ul>
            </Col>
            <Col className='site-map-items'>
              <h6>LOTTERY</h6>
              <ul>
                <li>How It Works</li>
                <li>Join Lottery</li>
              </ul>
            </Col>
            <Col className='site-map-items'>
              <h6>Road Map</h6>
              <h6>FAQ</h6>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row align='middle' justify='center'>
        <Col>
          <h6>© Howard Lee. All Rights Reserved.</h6>
        </Col>
      </Row>
    </div>
  )
}
export default Footer
