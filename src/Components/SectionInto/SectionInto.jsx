import { Row, Col } from 'antd'
import TiltCard from '../../Components/TiltCard/TiltCard'
import ScrollButton from '../ScrollButton/ScrollButton'
import './SectionIntro.scss'

const SectionIntro = () => {
  return (
    <div className='intro-section'>
      <Row align='middle' justify='center'>
        <Col className='homepage-content'>
          <TiltCard />
          <h3 className='intro-desc'>DeFi Enthusiast • Coder • Gamer</h3>
        </Col>
        <ScrollButton />
      </Row>
    </div>
  )
}
export default SectionIntro
