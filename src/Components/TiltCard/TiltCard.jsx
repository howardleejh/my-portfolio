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
                    title='Whatsapp'
                    href={`https://wa.me/6583222931?text=I'm%20interested%20to%20connect%20with%20you!`}
                    target='_blank'
                    rel='noreferrer'
                  />
                  <SocialButton
                    title='Telegram'
                    name={<FontAwesomeIcon icon={faTelegram} />}
                    href='https://t.me/howardleejh'
                    target='_blank'
                    rel='noreferrer'
                  />
                  <SocialButton
                    title='LinkedIn'
                    name={<FontAwesomeIcon icon={faLinkedinIn} />}
                    href='https://www.linkedin.com/in/howardleejh'
                    target='_blank'
                  />
                  <SocialButton
                    title='Github'
                    name={<FontAwesomeIcon icon={faGithub} />}
                    href='https://www.github.com/howardleejh'
                    target='_blank'
                  />
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
