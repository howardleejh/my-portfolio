import { Suspense, lazy } from 'react'
import { Row, Col } from 'antd'
import HomeComponent from '../../Components/HomeComponent/HomeComponent'
import ProfileComponent from '../../Components/ProfileComponent/ProfileComponent'
import WorkExperienceComponent from '../../Components/WorkExperienceComponent/WorkExperienceComponent'

import './Home.scss'

const ParticlesComponent = lazy(() =>
  import('../../Components/ParticlesEFX/ParticlesEFX')
)

const Home = () => {
  return (
    <div className='home-page'>
      <Row align='middle'>
        <Col>
          <Suspense>
            <ParticlesComponent />
          </Suspense>
          <HomeComponent />
        </Col>
        <Col>
          <ProfileComponent />
        </Col>
        <Col>
          <WorkExperienceComponent />
        </Col>
      </Row>
    </div>
  )
}
export default Home
