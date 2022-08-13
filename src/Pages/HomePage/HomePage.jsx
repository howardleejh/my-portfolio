import { Parallax } from 'react-scroll-parallax'
import SectionIntro from '../../Components/SectionInto/SectionInto'
import SectionAbout from '../../Components/SectionAbout/SectionAbout'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Parallax speed={-15}>
        <SectionIntro />
      </Parallax>
      <Parallax speed={20}>
        <SectionAbout />
      </Parallax>
    </div>
  )
}
export default HomePage
