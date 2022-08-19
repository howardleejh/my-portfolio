import { Row, Col, Divider, Space } from 'antd'
import './AbilitiesCard.scss'

const AbilitiesCard = (props) => {
  const icons = props.icons

  return (
    <div className='abilities-card'>
      <Row align='middle' justify='center'>
        <Col>
          <h3>{props.title}</h3>
          <ul>
            <Space direction='horizontal' size='large'>
              {icons
                ? icons.map((icon, index) => {
                    return (
                      <li>
                        <img src={icon} alt={index} width='50em' />
                      </li>
                    )
                  })
                : null}
            </Space>
          </ul>
          <Divider className='divider' />
          <p>{props.desc}</p>
        </Col>
      </Row>
    </div>
  )
}
export default AbilitiesCard
