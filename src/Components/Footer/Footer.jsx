import { Row, Col, Button, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='footer'>
      <Row align='middle' justify='space-between'>
        <Col className='personal-title'>
          <Col className='personal-items'>
            <h1>HOWARD LEE</h1>
            <h3>BLOCKCHAIN • FULL STACK MERN DEVELOPER</h3>
            <h5>+65 8322 2931 | vault2howard@gmail.com</h5>
            <Space direction='horizontal'>
              <Button
                ghost
                href='https://www.linkedin.com/in/howardleejh'
                target='_blank'
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Button>
              <Button ghost href='https://t.me/howardleejh' target='_blank'>
                <FontAwesomeIcon icon={faTelegram} />
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
                href='https://www.github.com/howardleejh'
                target='_blank'
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Space>
            <h6>© Howard Lee. All Rights Reserved.</h6>
          </Col>
        </Col>
        <Col span={10} className='site-map'>
          <Row justify='start'>
            <Col className='site-map-items'>
              <h6>ABOUT</h6>
              <ul>
                <li>
                  <HashLink
                    smooth
                    to={'/#'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Howard
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#tech'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Tech Stack
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#exp'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Experience
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#cloud'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Skill Set
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#contact'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Contact
                  </HashLink>
                </li>
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
    </div>
  )
}
export default Footer
