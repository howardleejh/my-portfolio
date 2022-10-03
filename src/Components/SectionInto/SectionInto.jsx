import { Suspense } from 'react'
import { Row, Col, Spin } from 'antd'
import TiltCard from '../../Components/TiltCard/TiltCard'
import ScrollButton from '../ScrollButton/ScrollButton'
import './SectionIntro.scss'

const SectionIntro = () => {
  return (
    <div className='intro-section'>
      <Row align='middle' justify='center'>
        <Col xl={11} xs={20}>
          <Suspense fallback={<Spin />}>
            <TiltCard />
          </Suspense>
        </Col>
        <Col className='intro-title' span={20}>
          <h3>DeFi Enthusiast • Coder • Gamer</h3>
        </Col>
        <ScrollButton className='scroll-btn' />
      </Row>
    </div>
  )
}
export default SectionIntro
