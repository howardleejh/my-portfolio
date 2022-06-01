import { Row, Col } from 'antd'
import './HomeComponent.scss'

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <Row align='middle'>
        <Col span={24}>
          <p className='intro'>HI!</p>
          <p className='intro'>MY NAME</p>
          <p className='intro'>IS HOWARD!</p>
        </Col>
      </Row>
    </div>
  )
}
export default HomeComponent
