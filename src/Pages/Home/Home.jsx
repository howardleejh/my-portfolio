import { useContext } from 'react'
import { BackTop } from 'antd'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import IntroComponent from '../../Components/IntroComponent/IntroComponent'
import ThreeDCarousel from '../../Components/ThreeDCarousel/ThreeDCarousel'
import WordCloud from '../../Components/WordCloud/WordCloud'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'
import ParticlesEFX from '../../Components/ParticlesEFX/ParticlesEFX'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
      <ParticlesEFX />
      <IntroComponent />
      <ThreeDCarousel />
      <ExperienceComponent />
      <WordCloud />
      {menu.isMenuOpen ? <></> : <BackTop />}
    </div>
  )
}
export default Home
