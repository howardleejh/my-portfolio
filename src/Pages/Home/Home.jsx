import { useContext } from 'react'
import { BackTop } from 'antd'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import IntroComponent from '../../Components/IntroComponent/IntroComponent'
import ThreeDCarousel from '../../Components/ThreeDCarousel/ThreeDCarousel'
import WordCloud from '../../Components/WordCloud/WordCloud'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
      <IntroComponent />
      <ThreeDCarousel />
      <WordCloud />
      <ExperienceComponent />
      {menu.isMenuOpen ? <></> : <BackTop />}
    </div>
  )
}
export default Home
