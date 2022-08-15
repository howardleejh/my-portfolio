import { Parallax } from 'react-scroll-parallax'
import { BackTop } from 'antd'
import SectionIntro from '../../Components/SectionInto/SectionInto'
import SectionAbout from '../../Components/SectionAbout/SectionAbout'
import SectionRoles from '../../Components/SectionRoles/SectionRoles'
import SectionTechStack from '../../Components/SectionTechStack/SectionTechStack'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <section>
        <Parallax speed={-15}>
          <SectionIntro />
        </Parallax>
      </section>
      <section>
        <Parallax speed={15}>
          <SectionAbout />
        </Parallax>
      </section>
      <section>
        <SectionRoles />
      </section>
      <section>
        <SectionTechStack />
      </section>
      <BackTop visibilityHeight={150} />
    </div>
  )
}
export default HomePage
