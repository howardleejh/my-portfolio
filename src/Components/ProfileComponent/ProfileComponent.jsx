import { Row, Col } from 'antd'
import './ProfileComponent.scss'

const ProfileComponent = () => {
  return (
    <div className='profile'>
      <Row justify='center' align='middle'>
        <Col span={24} id='profile-container'>
          <h1>Mid Career Switcher</h1>
        </Col>
        <Col span={16}>
          <p>
            My experience at Facebook taught me so much! I had a blast being a
            part of the Event Operations team in Singapore. I spent every single
            day of the 4 years learning and creating new tools, developing
            improved workflows and enhancing the experience for our attendees
            who were a part of our events both onsite and offsite.
          </p>
        </Col>

        <Col span={24} id='profile-container'>
          <h1>Bootcamp Graduate</h1>
        </Col>
        <Col span={16}>
          <p>
            I am proud to be a Bootcamp Graduate! I learnt so much from my
            instructors at General Assembly Singapore, going through the
            Software Engineering Immersive course while still working full time
            at Facebook. That didn't stop me from picking up Blockchain
            development immediately after graduation!
          </p>
        </Col>

        <Col span={24} id='profile-container'>
          <h1>Blockchain | Full Stack</h1>
          <h1>Developer</h1>
        </Col>
        <Col span={16}>
          <p>
            A full stack blockchain developer, an advocate for Decentralised
            Finance as a disruptor, also a mid career switcher that believes in
            the future of blockchain technologies, strives and continuously
            seeks knowledge, technical skill sets and know-hows and has been
            very active in the blockchain community.
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default ProfileComponent
