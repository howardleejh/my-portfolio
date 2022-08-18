import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faSass,
  faBootstrap,
  faNodeJs,
  faEthereum,
  faGitSquare,
  faDigitalOcean,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import classnames from 'https://cdn.skypack.dev/classnames@2.3.1'
import './WheelCarousel.scss'

const images = [
  {
    icon: faHtml5,
    title: 'HTML',
    desc: `The fundamentals of it all, I learnt about HTML and CSS during my time in General Assembly, I also picked up Search Engine Optimization using React Helmet with my projects to generate multiple document heads for better SEO performance.`,
  },
  {
    icon: faCss3Alt,
    title: 'CSS',
    desc: `I work mainly with SASS as it is a very powerful CSS pre-processor. I believe in the separation of concerns design pattern and prefer to separate my CSS from my logic code.`,
  },

  {
    icon: faSass,
    title: 'SASS',
    desc: `I use SASS but my file extensions are in SCSS. Well sometimes legacy methods are still pretty efficient and I'm not about to start a "which syntax is better" war here.`,
  },
  {
    icon: faBootstrap,
    title: 'Bootstrap',
    desc: `Bootstrap used to be my go-to solution, I've since moved on to Ant Design, Bulma, Material UI and so much more. I've even resorted to creating my own components so that I get access to more complex customizations and better reusability.`,
  },
  {
    icon: faNodeJs,
    title: 'NodeJS',
    desc: `NodeJS is my main backend solution when creating Web2 based web applications, though since working with blockchain, I'm slightly rusty with working with NodeJS, Express and MongoDB. Some documentation revisions ought to do!`,
  },
  {
    icon: faGitSquare,
    title: 'Git',
    desc: `I use Git for version control and CI/CD pipeline deployments. My preferred choice for cloud based hosting would be Github though I use Gitlab in my professional working environments for better DevOps support.`,
  },
  {
    icon: faReact,
    title: 'React',
    desc: `Yes, my main bread and butter. My main tech stack revolves around React and Javascript, while gaining experience with GatsbyJS for static website developments on the side. I am a functional components developer kind of guy.`,
  },
  {
    icon: faJsSquare,
    title: 'Javascript',
    desc: `This here is my primary language for web development, I have plans to pick up typescript some time soon but there's always something new to learn about with Javascript, my to-do list is never empty.`,
  },
  {
    icon: faEthereum,
    title: 'Solidity',
    desc: `The main language that I use when developing smart contracts for EVM compatible blockchains, I also use Open Zeppelin to adopt to the EIP and ERC standards, Chainlink for off-chain data processing, Mocha and Chai for unit testing and Tenderly for transaction debugging. Ethereum Remix online IDE for quick tests and drafting of smart contracts.`,
  },
  {
    icon: faSpotify,
    title: 'Spotify',
    desc: `This is a definite essential, along with good caffeine, an awesome gaming chair and crazy LED lights. No I'm just kidding, but the general consensus is true!`,
  },
  {
    icon: faDigitalOcean,
    title: 'Digital Ocean',
    desc: `My first production app was deployed with Digital Ocean. I also have experience with Vercel, Heroku, Github and Netlify just to name a few. These days I'm exploring deployment to Fleek, as they say, "welcome to the new internet".`,
  },
]

const initialSlidesState = images.map((image, index) => ({
  coords: {
    x: 0,
    y: 0,
  },
  theta: 0,
  index: index + 1,
  icon: image.icon,
  title: image.title,
  desc: image.desc,
}))

const numSlides = images.length
const angle = 360 / numSlides

const WheelCarousel = () => {
  const wheelRef = useRef(null)

  const [slides, setSlides] = useState(initialSlidesState)
  const [activeSlide, setActiveSlide] = useState(slides[8])
  const [wheelWidth, setWheelWidth] = useState(0)
  const [theta, setTheta] = useState(Math.PI / (numSlides / 2))
  const [center, setCenter] = useState({ x: 0, y: 0 })
  const [rotate, setRotate] = useState(0)

  const getInitialPositions = () => {
    const center = {
      x: parseFloat(getComputedStyle(wheelRef.current).width) / 2,
      y: parseFloat(getComputedStyle(wheelRef.current).width) / 2,
    }

    setCenter(center)
    setWheelWidth(parseFloat(getComputedStyle(wheelRef.current).width))
  }

  useEffect(() => {
    if (!wheelRef.current) {
      return
    }
    getInitialPositions()
    window.addEventListener('resize', getInitialPositions)
    return () => window.removeEventListener('resize', getInitialPositions)
  }, [])

  useEffect(() => {
    if (!wheelWidth) {
      return
    }

    const positionedSlides = slides.map((slide, index) => {
      const newTheta = theta * (index + numSlides)
      setTheta(newTheta)
      const wheelRadius = wheelWidth / 2
      const x = Math.cos(newTheta) * -wheelRadius
      const y = Math.sin(newTheta) * -wheelRadius

      return {
        ...slide,
        coords: { x, y },
      }
    })

    setSlides(positionedSlides)
    // eslint-disable-next-line
  }, [wheelWidth])

  const handleSlideClick = (e) => {
    console.log(e.target)
    const nextIndex = parseFloat(e.target.dataset.index)
    const currentIndex = activeSlide.index

    setActiveSlide(slides[nextIndex - 1])

    let numOfRotations = nextIndex - currentIndex

    if (numOfRotations < -numSlides / 2) {
      numOfRotations = numOfRotations + numSlides
    }

    if (numOfRotations > numSlides / 2) {
      numOfRotations = numOfRotations - numSlides
    }

    setRotate((prevRotate) => prevRotate + angle * numOfRotations)
  }

  const handleLeftClick = () => {
    const currentIndex = activeSlide.index
    const nextIndex = currentIndex < numSlides ? currentIndex + 1 : 1

    setActiveSlide(slides[nextIndex - 1])
    setRotate((prevRotate) => prevRotate + angle)
  }

  const handleRightClick = () => {
    const currentIndex = activeSlide.index
    const nextIndex = currentIndex === 1 ? numSlides : currentIndex - 1

    setActiveSlide(slides[nextIndex - 1])
    setRotate((prevRotate) => prevRotate - angle)
  }

  return (
    <div className='wheel-container'>
      <div
        ref={wheelRef}
        className='wheel'
        style={{
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        }}
      >
        {slides &&
          slides.map((slide, index) => {
            return (
              <div
                onClick={handleSlideClick}
                key={index}
                data-index={index + 1}
                className={classnames('slide', {
                  active: slide.index === activeSlide.index,
                })}
                style={{
                  top: center.x + slide.coords.x,
                  left: center.y + slide.coords.y,
                  transform: `translate(-50%, -50%) rotate(${-rotate}deg)`,
                }}
              >
                <p>
                  <FontAwesomeIcon icon={slide.icon} />
                </p>
              </div>
            )
          })}
      </div>
      <div className='text-box'>
        <Row align='top' justify='center'>
          <Fade cascade>
            <Col>
              <h1>{activeSlide.title}</h1>
              <p>{activeSlide.desc}</p>
            </Col>
          </Fade>
        </Row>
      </div>
      <div className='arrows'>
        <button onClick={handleLeftClick} className='arrow-left'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={handleRightClick} className='arrow-right'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default WheelCarousel
