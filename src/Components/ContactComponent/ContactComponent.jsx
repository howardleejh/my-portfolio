import { Row, Col, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import SocialButtons from '../SocialButtons/SocialButtons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import MobileMockup from '../MobileMockup/MobileMockup'
import pdf from '../../Assets/Howard_LEE_Resume_2022.pdf'
import './ContactComponent.scss'

const ContactComponent = () => {
  return (
    <div className='contact-component'>
      <Row align='middle' justify='center'>
        <Col>
          <MobileMockup />
        </Col>
        <Col>
          <Row align='middle' className='connect-container'>
            <Col className='contact-items'>
              <h1>Let's CONNECT!</h1>
              <SocialButtons type='primary' />
              <Col className='contact-items'>
                <h1>Send me an Email!</h1>
                <Button
                  type='primary'
                  size='large'
                  href='mailto:vault2howard@gmail.com'
                  target='_blank'
                >
                  <p>
                    EMAIL ME <FontAwesomeIcon icon={faAt} />
                  </p>
                </Button>

                <Col className='contact-items'>
                  <h4>RESUME FOR OFFLINE REFERENCE:</h4>
                  <Button
                    type='primary'
                    size='large'
                    href={pdf}
                    target='_blank'
                  >
                    <p>
                      DOWNLOAD <FontAwesomeIcon icon={faDownload} />
                    </p>
                  </Button>
                </Col>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default ContactComponent
