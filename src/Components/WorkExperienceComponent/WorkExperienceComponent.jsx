import { Row, Col } from 'antd'
import './WorkExperienceComponent.scss'

const WorkExperienceComponent = () => {
  return (
    <div className='work-experience'>
      <Row>
        <Col span={24}>
          <h1>Work Experience</h1>
        </Col>

        <Col span={24}>Centaur Finance</Col>

        <Col span={24}>Igloo Insure</Col>
      </Row>
    </div>
  )
}
export default WorkExperienceComponent
