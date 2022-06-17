import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import './SocialButtons.scss'

const SocialButtons = (props) => {
  return (
    <div className='social-btns-container'>
      <Button
        title='LinkedIn'
        ghost
        type={props.type ? props.type : null}
        href='https://www.linkedin.com/in/howardleejh'
        target='_blank'
        className='social-btn'
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Button>
      <Button
        title='Telegram'
        ghost
        type={props.type ? props.type : null}
        href='https://t.me/howardleejh'
        target='_blank'
        rel='noreferrer'
        className='social-btn'
      >
        <FontAwesomeIcon icon={faTelegram} />
      </Button>
      <Button
        title='Whatsapp'
        ghost
        type={props.type ? props.type : null}
        href={`https://wa.me/6583222931?text=I'm%20interested%20to%20connect%20with%20you!`}
        target='_blank'
        rel='noreferrer'
        className='social-btn'
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Button>
      <Button
        title='Github'
        ghost
        type={props.type ? props.type : null}
        href='https://www.github.com/howardleejh'
        target='_blank'
        className='social-btn'
      >
        <FontAwesomeIcon icon={faGithub} />
      </Button>
    </div>
  )
}
export default SocialButtons
