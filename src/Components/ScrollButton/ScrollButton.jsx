import { Row, Col } from 'antd'
import './ScrollButton.scss'

const ScrollButton = () => {
  return (
    <div className='scroll-btn'>
      <Row align='middle' justify='center'>
        <Col>
          <h6 className='scroll-title'>Scroll</h6>
          <div className='scroll-line'></div>
        </Col>
      </Row>
    </div>
  )
}
export default ScrollButton
