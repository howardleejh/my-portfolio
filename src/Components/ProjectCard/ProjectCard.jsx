import { Card, Button } from 'antd'
import './ProjectCard.scss'

const ProjectCard = (props) => {
  return (
    <div className='project-card-container'>
      <Card hoverable className='project-card' style={props.style}>
        <section>
          <Button
            href={props.href}
            target='_blank'
            type='primary'
            size='large'
            className='project-card-btn'
          >
            {props.title}
          </Button>
          <p>{props.description}</p>
        </section>
      </Card>
    </div>
  )
}
export default ProjectCard
