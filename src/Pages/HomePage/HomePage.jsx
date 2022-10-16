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
        <SectionIntro />
      </section>
      <section id='about'>
        <Parallax speed={25}>
          <SectionAbout />
        </Parallax>
      </section>
      <section id='roles'>
        <SectionRoles />
      </section>
      <section id='tech'>
        <SectionTechStack />
      </section>
      <section id='experience'>
        <SectionExperience />
      </section>
      <section id='projects'>
        <SectionProjects />
      </section>
      <section id='contact'>
        <SectionContact />
      </section>
      <BackTop visibilityHeight={150} />
    </div>
  )
}
export default HomePage
