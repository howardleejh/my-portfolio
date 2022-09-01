import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegram,
  faHackerrank,
  faEthereum,
} from '@fortawesome/free-brands-svg-icons'
import ContactButton from '../ContactButton/ContactButton'
import './SectionContact.scss'

const socialMedia = [
  {
    name: 'Whatsapp',
    icon: faWhatsapp,
    color: '#25D366',
  },
  {
    name: 'Telegram',
    icon: faTelegram,
    color: '#2AABEE',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    color: '#0077B5',
  },
  {
    name: 'Github',
    icon: faGithub,
    color: '#333333',
  },
  {
    name: 'Hackerrank',
    icon: faHackerrank,
    color: '#49C060',
  },
  {
    name: 'ENS',
    icon: faEthereum,
    color: '#5F00F9',
  },
]

const SectionContact = () => {
  return (
    <div className='contact-section'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <h1>Lets Connect!</h1>
        </Col>
        {socialMedia.map((item) => {
          return (
            <Col className='contact-btn' key={item.name}>
              <ContactButton
                text={item.name}
                icon={<FontAwesomeIcon icon={item.icon} />}
                color={item.color}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default SectionContact
