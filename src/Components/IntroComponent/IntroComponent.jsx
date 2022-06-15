import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import TitleMessage from '../TitleMessage/TitleMessage'
import './IntroComponent.scss'

const IntroComponent = () => {
  return (
    <div className='intro-component-container'>
      <section id='intro'>
        <TitleMessage
          title={
            <>
              <Fade cascade damping={1}>
                <span>Hello</span>
                <span>I'm Howard.</span>
              </Fade>
            </>
          }
        />
      </section>
      <section id='sticky-container'>
        <Row align='middle' justify='center'>
          <Col>
            <TitleMessage message='I am a' />
          </Col>
        </Row>
      </section>
      <Fade fraction={0.3}>
        <section>
          <TitleMessage
            title={
              <>
                Mid-Career <br /> Switcher.
              </>
            }
            message='4 years at Facebook, I had a blast with the Event Operations team in Singapore.'
          />
        </section>
      </Fade>
      <Fade fraction={0.3}>
        <section>
          <TitleMessage
            title={
              <>
                Bootcamp <br /> Graduate.
              </>
            }
            message='6 months at General Assembly Singapore, I learnt the ropes.'
          />
        </section>
      </Fade>
      <Fade fraction={0.3}>
        <section>
          <TitleMessage
            title={
              <>
                Software <br /> Developer.
              </>
            }
            message='Really...'
          />
        </section>
      </Fade>
      <Fade fraction={0.3}>
        <section>
          <TitleMessage
            title={<>Full Stack</>}
            message='MongoDB • Express • React • Node'
          />
        </section>
      </Fade>
      <Fade fraction={0.3}>
        <section>
          <TitleMessage
            title={
              <>
                Blockchain <br /> Developer.
              </>
            }
            message='Solidity • Hardhat • Ethers '
          />
        </section>
      </Fade>
    </div>
  )
}
export default IntroComponent
