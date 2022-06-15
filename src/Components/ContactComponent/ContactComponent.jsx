import { Row, Col, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faTelegram,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import MobileMockup from '../MobileMockup/MobileMockup'
import pdf from '../../Media/Howard_LEE_Resume_2022.pdf'
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
              <Button
                size='large'
                href='https://www.linkedin.com/in/howardleejh'
                target='_blank'
                className='contact-btns'
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Button>
              <Button
                size='large'
                href='https://t.me/howardleejh'
                target='_blank'
                className='contact-btns'
              >
                <FontAwesomeIcon icon={faTelegram} />
              </Button>
              <Button
                size='large'
                href={`https://wa.me/6583222931?text=I'm%20interested%20to%20connect%20with%20you!`}
                target='_blank'
                rel='noreferrer'
                className='contact-btns'
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Button>
              <Button
                size='large'
                href='https://www.github.com/howardleejh'
                target='_blank'
                className='contact-btns'
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
              <Col className='contact-items'>
                <h1>Send me an Email!</h1>
                <Button
                  size='large'
                  href='mailto:vault2howard@gmail.com'
                  target='_blank'
                >
                  <p>
                    EMAIL ME <FontAwesomeIcon icon={faAt} />
                  </p>
                </Button>
              </Col>
            </Col>
            <Col className='contact-items'>
              <h4>RESUME FOR OFFLINE REFERENCE:</h4>
              <Button size='large' href={pdf} target='_blank'>
                <p>
                  DOWNLOAD <FontAwesomeIcon icon={faDownload} />
                </p>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default ContactComponent
