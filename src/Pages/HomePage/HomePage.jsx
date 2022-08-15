import { Parallax } from 'react-scroll-parallax'
import SectionIntro from '../../Components/SectionInto/SectionInto'
import SectionAbout from '../../Components/SectionAbout/SectionAbout'
import SectionAbilities from '../../Components/SectionAbilities/SectionAbilties'
import Temp from '../../Components/Temp/Temp'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Parallax speed={-15}>
        <SectionIntro />
      </Parallax>
      <Parallax speed={15}>
        <SectionAbout />
      </Parallax>
      <SectionAbilities />
      <Temp />
    </div>
  )
}
export default HomePage
