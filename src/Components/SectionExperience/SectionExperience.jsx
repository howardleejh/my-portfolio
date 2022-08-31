import { useRef } from 'react'
import { Row, Col } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Fade } from 'react-awesome-reveal'
import centaur from '../../Assets/Centaur.png'
import facebook from '../../Assets/Facebook.png'
import ga from '../../Assets/GA.png'
import igloo from '../../Assets/Igloo.png'
import './SectionExperience.scss'

const orgs = [
  {
    index: 0,
    name: 'Igloo Insure',
    logo: igloo,
    color: '#6B6CFF',
    period: 'April 2022 - PRESENT',
    desc: 'Currently at Igloo Insure as a Blockchain Developer. I work to incorporate blockchain technologies to the various insurance policies that will provide decentralization, transparency and confidence for our users.',
  },
  {
    index: 1,
    name: 'Centaur Finance',
    logo: centaur,
    color: '#33CC33',
    period: 'October 2021 - April 2022',
    desc: 'I joined Centaur Finance when I graduated from General Assembly, and immediately got into learning more about Blockchain and DEFI. With the amazing support from my CTO, I managed Solidity and writing Smart Contracts while working on NFT projects on the side.',
  },
  {
    index: 2,
    name: 'General Assembly',
    logo: ga,
    color: '	#E41A24',
    period: 'March 2021 - September 2021',
    desc: 'I was a part of class SEIF-5 at General Assembly for 6 months while still working full time at Facebook. I learnt so much about software engineering and made a lot of great contacts along the way.',
  },
  {
    index: 3,
    name: 'Meta',
    logo: facebook,
    color: '	#0183ff',
    period: 'December 2017 - October 2021',
    desc: 'Working at Facebook under Monolith Technologies was probably the most inspiring time of my career. It was what inspired me to pursue Software Engineering and step out to the next phase of my life, No regrets at all.',
  },
]

const SectionExperience = () => {
  const swiperRef = useRef(null)

  const handleClick = (e) => {
    swiperRef.current?.swiper.slideTo(e.target.id)
  }

  return (
    <div className='experience-section'>
      <Fade delay={50}>
        <h1 className='experience-title'>Experience</h1>
      </Fade>
      <Row align='middle' justify='space-evenly'>
        <Col xs={24} xl={12}>
          {/* Reference: https://codesandbox.io/s/bkpw8m?file=/src/App.jsx */}
          <Swiper
            modules={[Pagination]}
            initialSlide={0}
            ref={swiperRef}
            pagination={{ clickable: true, dynamicBullets: true }}
            grabCursor={true}
          >
            {orgs.map((org) => {
              return (
                <SwiperSlide key={org.name}>
                  <h1>{org.name}</h1>
                  <h3 id={`slide-${org.index}`}>{org.period}</h3>
                  <p>{org.desc}</p>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Col>
        <Col className='org-grid' xs={24} xl={8}>
          <Fade cascade direction='right' triggerOnce>
            {orgs.map((org) => {
              return (
                <div
                  key={org.name}
                  src={org.logo}
                  alt={org.name}
                  className='logo'
                  onClick={handleClick}
                  style={{ backgroundImage: `url(${org.logo})` }}
                  id={org.index}
                >
                  <h3 id={org.index}>{org.name}</h3>
                </div>
              )
            })}
          </Fade>
        </Col>
      </Row>
    </div>
  )
}
export default SectionExperience
