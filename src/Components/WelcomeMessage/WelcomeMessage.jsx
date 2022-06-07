import { Row, Col } from 'antd'
import './WelcomeMessage.scss'

const WelcomeMessage = () => {
  return (
    <div className='welcome-message'>
      <Row align='middle' justify='center'>
        <Col>
          <h1>
            Hello <br />
            I'm Howard.
          </h1>
        </Col>
      </Row>
    </div>
  )
}
export default WelcomeMessage
