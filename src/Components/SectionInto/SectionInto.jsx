import { Row, Col } from 'antd'
import TiltCard from '../../Components/TiltCard/TiltCard'
import './SectionIntro.scss'

const SectionIntro = () => {
  return (
    <div className='intro-section'>
      <Row align='middle' justify='center'>
        <Col className='homepage-content'>
          <TiltCard />
          <h3>DeFi Enthusiast • Coder • Gamer</h3>
        </Col>
      </Row>
    </div>
  )
}
export default SectionIntro
