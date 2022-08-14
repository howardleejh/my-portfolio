import { Row, Col, Space } from 'antd'
import { Parallax } from 'react-scroll-parallax'
import './SectionAbout.scss'

const SectionAbout = () => {
  return (
    <div className='about-section'>
      <Row align='middle' justify='center'>
        <Col>
          <Parallax opacity={[0, 10]}>
            <h1 className='about-me-title'>About Me</h1>
          </Parallax>
          <Space direction='vertical' size='large'>
            <Parallax opacity={[0, 10]}>
              <p className='about-me-main'>
                I specialize in building decentralized applications that
                interact with EVM compatible blockchains such as Ethereum and
                Polygon. I have experience in building single page apps and
                progressive web apps that are responsive and support cross
                platforms.
              </p>
            </Parallax>
            <Parallax opacity={[0, 10]}>
              <p className='about-me-desc'>
                I am a career switcher, a boot camp graduate and a tech
                enthusiast who is passionate about all things Blockchain.
              </p>
            </Parallax>
          </Space>
        </Col>
      </Row>
    </div>
  )
}
export default SectionAbout
