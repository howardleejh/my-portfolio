import { Fade } from 'react-awesome-reveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Autoplay } from 'swiper'
import { projects } from '../../Utilities/Projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './SectionProjects.scss'

const SectionProjects = () => {
  return (
    <div className='projects-section'>
      <Fade delay={50}>
        <h1 className='projects-section-title'>Projects</h1>
      </Fade>
      <p>
        Here are some of the projects that I developed while at General
        Assembly. I am currently working on personal projects to further expand
        my blockchain skill sets.
      </p>
      <Swiper
        modules={[Pagination, FreeMode, Autoplay]}
        // spaceBetween={1}
        slidesPerView={3}
        speed={10000}
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        freeMode
        loop
      >
        {projects.map((slide) => {
          return (
            <SwiperSlide key={slide.name}>
              <ProjectCard
                title={slide.name}
                bg={slide.logo}
                hover={slide.hover}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default SectionProjects
