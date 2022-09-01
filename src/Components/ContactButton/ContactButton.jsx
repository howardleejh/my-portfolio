import './ContactButton.scss'

const ContactButton = (props) => {
  return (
    <a
      className='btn-40'
      title={props.title}
      href={props.href ? props.href : null}
      rel={props.rel ? props.rel : null}
      target={props.target ? props.target : null}
    >
      <span className='new'>{props.text}</span>
      <span style={{ color: `${props.color}` }} className='old'>
        {props.icon}
      </span>
    </a>
  )
}
export default ContactButton
