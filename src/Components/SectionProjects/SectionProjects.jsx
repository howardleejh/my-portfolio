import { Row, Col } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Autoplay } from 'swiper'
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
        slidesPerView={3}
        speed={5000}
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  )
}
export default SectionProjects
