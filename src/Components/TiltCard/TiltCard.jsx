import { Row, Col, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import Tilt from 'react-parallax-tilt'
import ThreeRenderer from '../ThreeRenderer/ThreeRenderer'
import SocialButton from '../SocialButton/SocialButton'
import './TiltCard.scss'

const TiltCard = () => {
  return (
    <Tilt
      className='tilt-card'
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <ThreeRenderer />
      <Row className='tilt-card-content' justify='start'>
        <Row align='middle'>
          <Col>
            <h2 className='card-number'>0x1EEE...0000</h2>
            <Row align='middle' justify='center'>
              <Col className='card-details'>
                <h3>Howard Lee</h3>
                <h6>Full-Stack Blockchain Dev</h6>
                <h6>howardleejh.eth</h6>
              </Col>
              <Col>
                <Space direction='horizontal'>
                  <SocialButton
                    name={<FontAwesomeIcon icon={faWhatsapp} />}
                    onClick={() => console.log('clicked!')}
                  />
                  <SocialButton name={<FontAwesomeIcon icon={faTelegram} />} />
                  <SocialButton
                    name={<FontAwesomeIcon icon={faLinkedinIn} />}
                  />
                  <SocialButton name={<FontAwesomeIcon icon={faGithub} />} />
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Tilt>
  )
}
export default TiltCard
