import { Row, Col, Divider } from 'antd'
import './AbilitiesCard.scss'

const AbilitiesCard = (props) => {
  return (
    <div className='abilities-card'>
      <Row align='middle' justify='center'>
        <Col>
          <h3>{props.title}</h3>
          <Divider className='divider' />
          <p>{props.desc}</p>
        </Col>
      </Row>
    </div>
  )
}
export default AbilitiesCard
