import { Row, Col, Button } from 'antd'
import './TokensStep3.scss'

const TokensStep3 = () => {
  return (
    <div className='token-step-3'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <h1>Claim your Tokens!</h1>
        </Col>
        <Col>
          <Button>CLAIM</Button>
        </Col>
      </Row>
    </div>
  )
}
export default TokensStep3
