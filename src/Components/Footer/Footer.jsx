import { Row, Col } from 'antd'
import './Footer.scss'
import { HashLink } from 'react-router-hash-link'
import SocialButtons from '../SocialButtons/SocialButtons'
const Footer = () => {
  return (
    <div className='footer'>
      <Row align='middle' justify='space-between'>
        <Col className='personal-items'>
          <h1>HOWARD LEE</h1>
          <h3>BLOCKCHAIN • FULL STACK MERN DEVELOPER</h3>
          <h5>+65 8322 2931 | vault2howard@gmail.com</h5>
          <SocialButtons />
          <h6>© Howard Lee. All Rights Reserved.</h6>
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
                    to={'/#exp'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    Experience
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#projects'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    Projects
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#tech'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'end' })
                    }
                  >
                    Tech Stack
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#contact'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
                <li>
                  <HashLink
                    smooth
                    to={'/tokens/#tokens-status'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Status
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/tokens/#tokens-mint'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Mint
                  </HashLink>
                </li>
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
