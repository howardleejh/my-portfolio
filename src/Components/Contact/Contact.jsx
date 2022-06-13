import { Row, Col, Carousel } from 'antd'
import linkedin from '../../Media/linkedin.png'
import github from '../../Media/github.png'
import './Contact.scss'

/*
Feature: Slider in iphone mockup
Author: sanjay
Link: https://codepen.io/snjy07/pen/ExayJGK
*/

const Contact = () => {
  return (
    <div className='contact'>
      <Row align='middle' justify='space-around'>
        <Col>
          <div class='dm-width'>
            <div class='dm-device'>
              <div class='device'>
                <div class='screen'>
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
        <Col>
          <h1>Let's Connect!</h1>
        </Col>
      </Row>
    </div>
  )
}
export default Contact
