import { Row, Col } from 'antd'
import './TokensStep2.scss'

const TokensStep2 = () => {
  return (
    <div className='token-step-2'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <h2>Trivia Question?</h2>
        </Col>
        <Col>
          <ul>
            <li>TRIVIA QUESTION IS HERE</li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default TokensStep2
