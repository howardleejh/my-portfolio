import { Row, Col, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import MobileMockup from '../MobileMockup/MobileMockup'
import pdf from '../../Media/Howard_LEE_Resume_2022.pdf'
import './ContactComponent.scss'

const ContactComponent = () => {
  return (
    <div className='contact'>
      <Row>
        <Col>
          <h1>Let's Connect!</h1>
        </Col>
      </Row>
      <Row align='middle' justify='space-evenly'>
        <Col>
          <MobileMockup />
        </Col>
        <Col>
          <Row align='middle' justify='start' gutter={[16, 16]}>
            <Col>
              <h4>RESUME FOR OFFLINE REFERENCE:</h4>
              <Button type='primary' size='large' href={pdf} target='_blank'>
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
