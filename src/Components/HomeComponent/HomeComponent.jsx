import { Row, Col } from 'antd'
import './HomeComponent.scss'

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <Row align='middle'>
        <Col>
          <p className='intro'>HI!</p>
          <p className='intro'>I AM</p>
          <p className='intro'>HOWARD!</p>
        </Col>
      </Row>
    </div>
  )
}
export default HomeComponent
