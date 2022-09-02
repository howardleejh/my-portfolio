import { Fade } from 'react-awesome-reveal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Autoplay } from 'swiper'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Projects } from '../../Utilities/Projects'
import './SectionProjects.scss'

const SectionProjects = () => {
  return (
    <div className='projects-section'>
      <Fade delay={50}>
        <h1 className='projects-section-title'>Projects</h1>
      </Fade>
      <p>
        Here are some of the projects that I've developed so far. I am currently
        working on multiple projects, both professionally and as a freelance to
        further expand my knowledge. Find out more on my Github!
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
        {Projects.map((slide) => {
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
