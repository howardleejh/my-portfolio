import { Row, Col } from 'antd'
// import AbilitiesCard from '../AbilitiesCard/AbilitiesCard'
import CircularCarousel from '../CircularCarousel/CircularCarousel'
import './SectionAbilities.scss'

const SectionAbilities = () => {
  return (
    <div className='abilities-section'>
      <Row>
        <Col>
          <CircularCarousel />
        </Col>
      </Row>
    </div>
  )
}
export default SectionAbilities
