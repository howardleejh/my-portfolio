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
      <Swiper
        modules={[Pagination, FreeMode, Autoplay]}
        breakpoints={{
          // when window width is >= 640px
          600: {
            width: 600,
            slidesPerView: 1,
          },
        }}
        speed={7000}
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
