import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import TitleMessage from '../TitleMessage/TitleMessage'
import './IntroComponent.scss'

const IntroComponent = () => {
  return (
    <div className='intro-component-container'>
      <Fade>
        <TitleMessage
          title={
            <>
              Hello <br /> I'm Howard.
            </>
          }
        />
      </Fade>
      <Row align='middle' justify='center' id='profile-container'>
        <Col>
          <TitleMessage title='I am a' />
        </Col>
      </Row>
      <Fade fraction={0.4}>
        <TitleMessage
          title={
            <>
              Mid-Career <br /> Switcher.
            </>
          }
          message='4 years at Facebook, I had a blast with the Event Operations team in Singapore.'
        />
        <TitleMessage
          title={
            <>
              Bootcamp <br /> Graduate.
            </>
          }
          message='6 months at General Assembly Singapore, I learnt the ropes.'
        />
        <TitleMessage
          title={
            <>
              Software <br /> Developer.
            </>
          }
          message='Really...'
        />
        <TitleMessage
          title={<>Full Stack</>}
          message='MongoDB • Express • React • Node'
        />
        <TitleMessage title={<>and ...</>} />
        <TitleMessage
          title={
            <>
              Blockchain <br /> Developer.
            </>
          }
          message='Solidity • Hardhat • Ethers '
        />
      </Fade>
    </div>
  )
}
export default IntroComponent
