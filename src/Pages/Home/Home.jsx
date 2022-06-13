import { useContext, lazy, Suspense } from 'react'
import { BackTop } from 'antd'
import { MenuContext } from '../../Components/MenuProvider/MenuProvider'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import IntroComponent from '../../Components/IntroComponent/IntroComponent'
import ThreeDCarousel from '../../Components/ThreeDCarousel/ThreeDCarousel'
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import './Home.scss'

const Home = () => {
  const menu = useContext(MenuContext)

  const loadingIcon = <LoadingOutlined />

  const LazyWordCloud = lazy(() =>
    import('../../Components/WordCloud/WordCloud')
  )

  return (
    <div className='home-page'>
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
        <Suspense fallback={<Spin indicator={loadingIcon} />}>
          <LazyWordCloud />
        </Suspense>
      </section>
      <section id='contact'>
        <ContactComponent />
      </section>
      {menu.isMenuOpen ? <></> : <BackTop visibilityHeight={150} />}
    </div>
  )
}
export default Home
