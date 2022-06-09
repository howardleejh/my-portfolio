import { Row, Col, Space } from 'antd'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import './ExperienceComponent.scss'
import img1 from '../../Media/GA.png'
import img2 from '../../Media/Centaur-md.png'
import img3 from '../../Media/Igloo.png'

const ExperienceComponent = () => {
  return (
    <div className='exp-component'>
      <Row align='middle' justify='center' gutter={[16, 16]}>
        <Col>
          <ExperienceCard
            title='General Assembly Singapore'
            id='card1'
            style={{
              background: `#ffffff url(${img1}) no-repeat center`,
              backgroundSize: 'contain',
            }}
          />
        </Col>
        <Col>
          <ExperienceCard
            title='Centaur Finance'
            id='card1'
            style={{
              background: `#ffffff url(${img2}) no-repeat center`,
              backgroundSize: 'contain',
            }}
          />
        </Col>
        <Col>
          <ExperienceCard
            title='Igloo Insure'
            id='card1'
            style={{
              background: `#ffffff url(${img3}) no-repeat center`,
              backgroundSize: 'cover',
            }}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ExperienceComponent
