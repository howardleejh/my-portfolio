import { Suspense } from 'react'
import { Row, Col, Spin } from 'antd'
import TiltCard from '../../Components/TiltCard/TiltCard'
import ScrollButton from '../ScrollButton/ScrollButton'
import './SectionIntro.scss'

const SectionIntro = () => {
  return (
    <div className='intro-section'>
      <Row align='middle' justify='center'>
        <TiltCard />
        <Col span={20} className='intro-title'>
          <h3>DeFi Enthusiast • Coder • Gamer</h3>
        </Col>
        <ScrollButton className='scroll-btn' />
      </Row>
    </div>
  )
}
export default SectionIntro
