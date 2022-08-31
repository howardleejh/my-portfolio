import './ProjectCard.scss'

const ProjectCard = (props) => {
  return (
    <div
      className='project-card'
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      <h1>{props.title}</h1>
    </div>
  )
}
export default ProjectCard
