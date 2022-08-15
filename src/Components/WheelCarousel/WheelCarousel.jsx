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
import classnames from 'https://cdn.skypack.dev/classnames@2.3.1'
import './WheelCarousel.scss'

const images = [
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
]

const initialSlidesState = images.map((slide, index) => ({
  coords: {
    x: 0,
    y: 0,
  },
  theta: 0,
  index: index + 1,
  icon: slide,
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
