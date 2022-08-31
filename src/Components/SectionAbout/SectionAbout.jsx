import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import './SectionAbout.scss'

const SectionAbout = () => {
  return (
    <div className='about-section'>
      <Row align='middle' justify='center'>
        <Col>
          <Fade delay={'50'}>
            <h1 className='about-me-title'>About Me</h1>
          </Fade>
          <Fade triggerOnce>
            <p className='about-me-main'>
              I specialize in building decentralized applications that interact
              with EVM compatible blockchains such as Ethereum and Polygon. I
              have experience in building single page apps and progressive web
              apps that are responsive and support cross platforms.
            </p>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}
export default SectionAbout
