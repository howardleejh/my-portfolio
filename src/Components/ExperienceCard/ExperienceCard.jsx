import './ExperienceCard.scss'

const ExperienceCard = (props) => {
  return (
    <div className='exp-card'>
      <div className='exp-card-inner'>
        <div className='exp-card-front' style={props.style}>
          <section>
            <h3>{props.title}</h3>
          </section>
        </div>
        <div className='exp-card-back'>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  )
}
export default ExperienceCard
