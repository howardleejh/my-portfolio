import { useContext } from 'react'
import { BackTop } from 'antd'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import IntroComponent from '../../Components/IntroComponent/IntroComponent'
import TechStackComponent from '../../Components/TechStackComponent/TechStackComponent'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'
import ProjectsComponent from '../../Components/ProjectsComponent/ProjectsComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
      <section id='intro'>
        <IntroComponent />
      </section>
      <section id='exp'>
        <ExperienceComponent />
      </section>
      <section id='projects'>
        <ProjectsComponent />
      </section>
      <section id='tech'>
        <TechStackComponent />
      </section>
      <section id='contact'>
        <ContactComponent />
      </section>
      {menu.isMenuOpen ? <></> : <BackTop visibilityHeight={150} />}
    </div>
  )
}
export default Home
