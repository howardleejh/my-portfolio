import { Row, Col } from 'antd'
import { HashLink } from 'react-router-hash-link'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'></div>
      <Row align='middle' justify='space-around'>
        <Col className='personal-items'>
          <h1>HOWARD LEE</h1>
          <h3>BLOCKCHAIN • FULL STACK MERN DEVELOPER</h3>
          <h3>vault2howard@gmail.com</h3>
        </Col>
        <Col xl={12} xs={22} className='site-map'>
          <Row justify='start'>
            <Col className='site-map-items'>
              <h6>ABOUT</h6>
              <ul>
                <li>
                  <HashLink
                    smooth
                    to={'/#intro'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    Howard
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#roles'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    What I Do
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#tech'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  >
                    Tech Stack
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to={'/#experience'}
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
                    to={'/#projects'}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  >
                    Projects
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
                <li>FUSE</li>
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
