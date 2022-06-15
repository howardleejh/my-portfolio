import { Card } from 'antd'
import './ProjectCard.scss'

const ProjectCard = (props) => {
  return (
    <div className='project-card-container'>
      <Card hoverable className='project-card' style={props.style}>
        <section>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </section>
      </Card>
    </div>
  )
}
export default ProjectCard
