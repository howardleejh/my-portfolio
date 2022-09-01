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
    href: `https://wa.me/6583222931?text=I'm%20interested%20to%20connect%20with%20you!`,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    name: 'Telegram',
    icon: faTelegram,
    color: '#2AABEE',
    href: 'https://t.me/howardleejh',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    color: '#0077B5',
    href: 'https://www.linkedin.com/in/howardleejh',
    target: '_blank',
  },
  {
    name: 'Github',
    icon: faGithub,
    color: '#333333',
    href: 'https://www.github.com/howardleejh',
    target: '_blank',
  },
  {
    name: 'Hackerrank',
    icon: faHackerrank,
    color: '#49C060',
    href: 'https://www.hackerrank.com/howardleejh',
    target: '_blank',
  },
  {
    name: 'ENS',
    icon: faEthereum,
    color: '#5F00F9',
    href: 'https://opensea.io/0x1EEE5175281D43E5d46E018C5dA759D89D6B0000',
    target: '_blank',
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
                href={item.href}
                target={item.target}
                rel={item.rel}
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
