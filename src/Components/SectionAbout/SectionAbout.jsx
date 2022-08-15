import { Row, Col, Space } from 'antd'
import { Fade } from 'react-awesome-reveal'
import './SectionAbout.scss'

const SectionAbout = () => {
  return (
    <div className='about-section'>
      <Row align='middle' justify='center'>
        <Col>
          <Fade cascade fraction={0.4}>
            <h1 className='about-me-title'>About Me</h1>
            <Space direction='vertical' size='large'>
              <p className='about-me-main'>
                I specialize in building decentralized applications that
                interact with EVM compatible blockchains such as Ethereum and
                Polygon. I have experience in building single page apps and
                progressive web apps that are responsive and support cross
                platforms.
              </p>
              <p className='about-me-desc'>
                I am also a proud career switcher, a boot camp graduate and a
                tech enthusiast who is passionate about all things Blockchain.
              </p>
            </Space>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}
export default SectionAbout
