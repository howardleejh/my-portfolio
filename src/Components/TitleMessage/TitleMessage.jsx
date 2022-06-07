import { Row, Col } from 'antd'
import './TitleMessage.scss'

const TitleMessage = (props) => {
  return (
    <div className='title-message-container'>
      <Row align='middle' justify='center'>
        <Col>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
        </Col>
      </Row>
    </div>
  )
}
export default TitleMessage
