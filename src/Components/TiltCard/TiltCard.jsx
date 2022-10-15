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
    <>
      <Tilt
        className='tilt-card'
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <Row className='tilt-card-content'>
          <Col className='renderer'>
            <ThreeRenderer />
          </Col>
          <Col className='details'>
            <Row align='middle' justify='center'>
              <Col>
                <h3>Howard Lee</h3>
                <h6>Fullstack | Blockchain</h6>
                <h6>howardleejh.eth</h6>
                <Space
                  direction='horizontal'
                  size='middle'
                  className='button-group'
                >
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
      </Tilt>
    </>
  )
}
export default TiltCard
