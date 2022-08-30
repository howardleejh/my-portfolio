import { useRef } from 'react'
import { Row, Divider } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
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
  SwiperCore.use([Pagination, Autoplay])

  const swiperRef = useRef(null)
  const buttonRef = useRef(null)

  const handleClick = (e) => {
    swiperRef.current?.swiper.slideTo(e.target.id)
  }

  return (
    <div className='experience-section'>
      <Row align='middle' justify='center' className='org-grid'>
        <Fade cascade triggerOnce>
          {orgs.map((org) => {
            return (
              <div
                key={org.name}
                src={org.logo}
                alt={org.name}
                className='logo'
                onClick={handleClick}
                ref={buttonRef}
                style={{ backgroundImage: `url(${org.logo})` }}
              >
                <h3 id={org.index}>
                  <ul>
                    <li>{org.name}</li>
                    <li>
                      <span>{org.period}</span>
                    </li>
                  </ul>
                </h3>
              </div>
            )
          })}
        </Fade>
      </Row>
      <Divider style={{ width: '15em', minWidth: '0', margin: '0 auto' }} />
      <Row>
        {/* Reference: https://codesandbox.io/s/bkpw8m?file=/src/App.jsx */}
        <Swiper
          initialSlide={0}
          ref={swiperRef}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
        >
          {orgs.map((org) => {
            return (
              <SwiperSlide>
                <h1>{org.name}</h1>
                <h3 id={`slide-${org.index}`}>{org.period}</h3>
                <p>{org.desc}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Row>
    </div>
  )
}
export default SectionExperience
