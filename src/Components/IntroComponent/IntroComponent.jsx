import ThreeDRenderer from '../ThreeDRenderer/ThreeDRenderer'
import './IntroComponent.scss'

const IntroComponent = () => {
  return (
    <div className='intro-component'>
      <ThreeDRenderer />
      <div className='three-footer'>
        <h1>Hi! I'm Howard.</h1>
        <h3>
          Mid-Career Switcher • Boot Camp Graduate • Fullstack • Blockchain
        </h3>
      </div>
    </div>
  )
}
export default IntroComponent
