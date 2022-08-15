import { Suspense } from 'react'
import { Row, Col, Spin } from 'antd'
import TiltCard from '../../Components/TiltCard/TiltCard'
import ScrollButton from '../ScrollButton/ScrollButton'
import './SectionIntro.scss'

const SectionIntro = () => {
  return (
    <div className='intro-section'>
      <Row align='middle' justify='center'>
        <Col className='homepage-content'>
          <Suspense fallback={<Spin />}>
            <TiltCard />
          </Suspense>
          <h3 className='intro-desc'>DeFi Enthusiast • Coder • Gamer</h3>
        </Col>
        <ScrollButton />
      </Row>
    </div>
  )
}
export default SectionIntro
