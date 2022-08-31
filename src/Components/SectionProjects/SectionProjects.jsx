import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Autoplay } from 'swiper'
import { projects } from '../../Utilities/Projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './SectionProjects.scss'

const SectionProjects = () => {
  return (
    <div className='projects-section'>
      <h1>Projects Section</h1>
      <h3>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </h3>
      <Swiper
        modules={[Pagination, FreeMode, Autoplay]}
        spaceBetween={10}
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
            <SwiperSlide>
              <ProjectCard title={slide.name} bg={slide.hover} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default SectionProjects
