import { Row, Col, Divider, Space, Tooltip } from 'antd'
import './AbilitiesCard.scss'

const AbilitiesCard = (props) => {
  const icons = props.icons

  return (
    <div className='abilities-card'>
      <Row align='middle' justify='center'>
        <Col>
          <h3>{props.title}</h3>
          <ul>
            <Space direction='horizontal' size='small'>
              {icons
                ? icons.map((icon, index) => {
                    return (
                      <Tooltip placement='bottom' title={icon.name}>
                        <li>
                          <img src={icon.icon} alt={index} />
                        </li>
                      </Tooltip>
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
