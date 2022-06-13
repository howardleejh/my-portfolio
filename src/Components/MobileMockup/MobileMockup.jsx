import { Row, Col, Carousel } from 'antd'
import linkedin from '../../Media/linkedin.png'
import github from '../../Media/github.png'
import './MobileMockup.scss'

/*
Feature: Slider in iphone mockup
Author: sanjay
Link: https://codepen.io/snjy07/pen/ExayJGK
*/

const MobileMockup = () => {
  return (
    <div className='mobile-container'>
      <Row>
        <Col>
          <div className='dm-width'>
            <div className='dm-device'>
              <div className='device'>
                <div className='screen'>
                  <Carousel autoplay dots={false}>
                    <>
                      <img src={linkedin} alt='test' />
                    </>
                    <>
                      <img src={github} alt='test' />
                    </>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default MobileMockup
