import './ContactButton.scss'

const ContactButton = (props) => {
  return (
    <a
      className='btn-40'
      title={props.title}
      href={props.href}
      target={props.target}
    >
      <span className='new'>{props.text}</span>
      <span style={{ color: `${props.color}` }} className='old'>
        {props.icon}
      </span>
    </a>
  )
}
export default ContactButton
