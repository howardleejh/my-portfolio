import { useContext } from 'react'
import { Row, Col, BackTop } from 'antd'
import Profile from '../../Components/Profile/Profile'
import WelcomeMessage from '../../Components/WelcomeMessage/WelcomeMessage'
import TechStack from '../../Components/TechStack/TechStack'
import { Fade } from 'react-awesome-reveal'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
      <Fade>
        <WelcomeMessage />
      </Fade>
      <Row align='middle' justify='center' id='profile-container'>
        <Col>
          <Profile message='I am a' />
          <Profile />
          <Profile />
          <Profile />
        </Col>
      </Row>
      <Fade fraction={0.4}>
        <Profile
          message={
            <>
              Mid-Career <br /> Switcher
            </>
          }
        />
        <Profile
          message={
            <>
              Bootcamp <br /> Graduate
            </>
          }
        />
        <Profile message={<>Blockchain ...</>} />
        <Profile message={<>and a ...</>} />
        <Profile
          message={
            <>
              Full-stack <br /> Developer
            </>
          }
        />
      </Fade>
      <TechStack />
      {menu.isMenuOpen ? <></> : <BackTop />}
    </div>
  )
}
export default Home
