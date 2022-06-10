import { useContext } from 'react'
import { BackTop } from 'antd'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import IntroComponent from '../../Components/IntroComponent/IntroComponent'
import ThreeDCarousel from '../../Components/ThreeDCarousel/ThreeDCarousel'
import WordCloud from '../../Components/WordCloud/WordCloud'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'
import ContactForm from '../../Components/ContactForm/ContactForm'
// import ParticlesEFX from '../../Components/ParticlesEFX/ParticlesEFX'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
      {/* <ParticlesEFX /> */}
      <section id='intro'>
        <IntroComponent />
      </section>
      <section id='tech'>
        <ThreeDCarousel />
      </section>
      <section id='exp'>
        <ExperienceComponent />
      </section>
      <section id='cloud'>
        <WordCloud />
      </section>
      <section id='contact'>
        <ContactForm />
      </section>
      {menu.isMenuOpen ? <></> : <BackTop />}
    </div>
  )
}
export default Home
