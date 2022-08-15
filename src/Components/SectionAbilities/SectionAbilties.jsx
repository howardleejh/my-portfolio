import { Row, Col } from 'antd'
// import AbilitiesCard from '../AbilitiesCard/AbilitiesCard'
import WheelCarousel from '../WheelCarousel/WheelCarousel'
import './SectionAbilities.scss'

const SectionAbilities = () => {
  return (
    <div className='abilities-section'>
      <WheelCarousel />
      <Row align='middle' justify='center'>
        <Col>some words</Col>
      </Row>
    </div>
  )
}
export default SectionAbilities
