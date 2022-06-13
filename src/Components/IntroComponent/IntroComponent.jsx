import { Row, Col } from 'antd'
import TitleMessage from '../TitleMessage/TitleMessage'
import './IntroComponent.scss'

const IntroComponent = () => {
  return (
    <div className='intro-component-container'>
      <section>
        <TitleMessage
          title={
            <>
              Hello <br /> I'm Howard.
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
      <section>
        <TitleMessage
          title={<>Full Stack</>}
          message='MongoDB • Express • React • Node'
        />
      </section>
      <section>
        <TitleMessage title={<>and ...</>} />
      </section>
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
    </div>
  )
}
export default IntroComponent
