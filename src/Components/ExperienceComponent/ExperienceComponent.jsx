import { Row, Col, Descriptions, Space } from 'antd'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import './ExperienceComponent.scss'

const ExperienceComponent = () => {
  return (
    <div className='experience-component'>
      <Descriptions
        bordered
        title='Work Experience'
        layout='vertical'
        column={4}
        size='small'
      >
        <Descriptions.Item label='Years of Work'>Prepaid</Descriptions.Item>
        <Descriptions.Item label='Years of Experience'>
          18:00:00
        </Descriptions.Item>
        <Descriptions.Item label='Amount of Coffee'>a lot</Descriptions.Item>
        <Descriptions.Item label='Organizations'>$20.00</Descriptions.Item>
        <Descriptions.Item label='Currently at'>$60.00</Descriptions.Item>
      </Descriptions>
      <Row align='middle' justify='center' className='card-container'>
        <Col className='exp-card'>
          <ExperienceCard
            source='https://archives.bulbagarden.net/media/upload/4/49/Ash_Pikachu.png'
            alt='an image'
            title='test'
            description='hello world'
          />
        </Col>
        <Col className='exp-card'>
          <ExperienceCard
            source='https://archives.bulbagarden.net/media/upload/4/49/Ash_Pikachu.png'
            alt='an image'
            title='test'
            description='hello world'
          />
        </Col>
        <Col className='exp-card'>
          <ExperienceCard
            source='https://archives.bulbagarden.net/media/upload/4/49/Ash_Pikachu.png'
            alt='an image'
            title='test'
            description='hello world'
          />
        </Col>
      </Row>
    </div>
  )
}
export default ExperienceComponent
