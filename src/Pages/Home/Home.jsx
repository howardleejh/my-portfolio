import { useContext } from 'react'
import { Row, Col, BackTop } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import TitleMessage from '../../Components/TitleMessage/TitleMessage'
import ThreeDCarousel from '../../Components/ThreeDCarousel/ThreeDCarousel'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
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
              Mid-Career <br /> Switcher
            </>
          }
          message='4 years at Facebook, I had a blast with the Event Operations team in Singapore.'
        />
        <TitleMessage
          title={
            <>
              Bootcamp <br /> Graduate
            </>
          }
          message='6 months at General Assembly Singapore, I learnt the ropes.'
        />
        <TitleMessage
          title={
            <>
              Developer <br /> ...
            </>
          }
          message='I really am.'
        />
        <TitleMessage
          title={<>Full Stack</>}
          message='MongoDB • Express • React • Node'
        />
        <TitleMessage title={<>and ...</>} />
        <TitleMessage
          title={
            <>
              Blockchain <br /> Developer
            </>
          }
          message='Solidity • Hardhat • Ethers '
        />
      </Fade>
      <Row justify='center' align='middle' id='tech-stack'>
        <Col>
          <ThreeDCarousel />
        </Col>
      </Row>
      {menu.isMenuOpen ? <></> : <BackTop />}
    </div>
  )
}
export default Home
