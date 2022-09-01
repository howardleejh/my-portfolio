import './SocialButton.scss'

const SocialButton = (props) => {
  return (
    <a
      className='btn-95'
      title={props.title ? props.title : null}
      onClick={props.onClick ? props.onClick : null}
      href={props.href ? props.href : null}
      rel={props.rel ? props.rel : null}
      target={props.target ? props.target : null}
    >
      {props.name}
    </a>
  )
}
export default SocialButton
