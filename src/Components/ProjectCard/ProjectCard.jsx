import { useState } from 'react'
import './ProjectCard.scss'

const ProjectCard = (props) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      className='project-card'
      style={{ backgroundImage: `url(${hover ? props.hover : props.bg})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? null : (
        <>
          <div className='project-card-content'>
            <h1>{props.title}</h1>
          </div>
        </>
      )}
    </div>
  )
}
export default ProjectCard
