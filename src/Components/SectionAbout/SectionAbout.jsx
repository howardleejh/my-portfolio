import { Row, Col } from 'antd'
import './SectionAbout.scss'

const SectionAbout = () => {
  return (
    <div className='about-section'>
      <Row>
        <Col>
          <h1>About Me</h1>
          <p>
            I am a career switcher, a boot camp graduate and a tech enthusiast
            who is passionate about all things Blockchain. I specialize in
            building decentralized applications that interact with EVM
            compatible blockchains such as Ethereum and Polygon. I have
            experience in building single page apps and progressive web apps
            that are responsive and support cross platforms.
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default SectionAbout
