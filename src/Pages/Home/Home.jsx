import { useContext } from 'react'
import { Row, Col, BackTop } from 'antd'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import IntroComponent from '../../Components/IntroComponent/IntroComponent'
import ThreeDCarousel from '../../Components/ThreeDCarousel/ThreeDCarousel'
import OtherTech from '../../Components/WordCloud/WordCloud'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  return (
    <div className='home-page'>
      <IntroComponent />
      <ThreeDCarousel />
      <OtherTech />
      {menu.isMenuOpen ? <></> : <BackTop />}
    </div>
  )
}
export default Home
