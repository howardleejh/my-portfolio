import { Row, Col } from 'antd'
import './ProfileComponent.scss'

const ProfileComponent = () => {
  return (
    <div className='profile'>
      <Row justify='center' align='middle'>
        <Col span={24} id='profile-container'>
          <h1>Blockchain | Full Stack</h1>
          <h1>Developer</h1>
        </Col>
        <Col span={16}>
          <p>
            A full stack blockchain developer, an advocate for Decentralised
            Finance as a disruptor, also a mid career switcher that believes in
            the future of blockchain technologies, strives and continuously
            seeks knowledge, technical skill sets and know-hows and is very
            active in the blockchain community.
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default ProfileComponent
