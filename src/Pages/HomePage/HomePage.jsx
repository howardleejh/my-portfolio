import { Parallax } from 'react-scroll-parallax'
import { BackTop } from 'antd'
import SectionIntro from '../../Components/SectionInto/SectionInto'
import SectionAbout from '../../Components/SectionAbout/SectionAbout'
import SectionRoles from '../../Components/SectionRoles/SectionRoles'
import SectionTechStack from '../../Components/SectionTechStack/SectionTechStack'
import SectionExperience from '../../Components/SectionExperience/SectionExperience'
import SectionProjects from '../../Components/SectionProjects/SectionProjects'
import SectionContact from '../../Components/SectionContact/SectionContact'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <section id='intro'>
        <Parallax speed={-15}>
          <SectionIntro />
        </Parallax>
      </section>
      <section id='about'>
        <Parallax speed={15}>
          <SectionAbout />
        </Parallax>
      </section>
      <section id='roles'>
        <Parallax speed={-15}>
          <SectionRoles />
        </Parallax>
      </section>
      <section id='tech'>
        <Parallax speed={15}>
          <SectionTechStack />
        </Parallax>
      </section>
      <section id='experience'>
        <Parallax speed={-5}>
          <SectionExperience />
        </Parallax>
      </section>
      <section id='projects'>
        <Parallax speed={-15}>
          <SectionProjects />
        </Parallax>
      </section>
      <section id='contact'>
        <Parallax speed={-15}>
          <SectionContact />
        </Parallax>
      </section>
      <BackTop visibilityHeight={150} />
    </div>
  )
}
export default HomePage
