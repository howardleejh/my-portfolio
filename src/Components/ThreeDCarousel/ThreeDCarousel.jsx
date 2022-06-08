import { Row, Col, Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faSass,
  faBootstrap,
  faNodeJs,
  faEthereum,
  faGitSquare,
  faDigitalOcean,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import './ThreeDCarousel.scss'

const ThreeDCarousel = () => {
  return (
    <div className='three-d-carousel'>
      <Row align='middle' justify='center'>
        <Col>
          <h1>Tech Stack</h1>
          <ul>
            <li>
              <Tooltip title='HTML 5'>
                <FontAwesomeIcon icon={faHtml5} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='CSS 3'>
                <FontAwesomeIcon icon={faCss3Alt} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='React JS'>
                <FontAwesomeIcon icon={faReact} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Javascript'>
                <FontAwesomeIcon icon={faJsSquare} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='SASS'>
                <FontAwesomeIcon icon={faSass} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Bootstrap'>
                <FontAwesomeIcon icon={faBootstrap} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Node JS'>
                <FontAwesomeIcon icon={faNodeJs} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Solidity'>
                <FontAwesomeIcon icon={faEthereum} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Git'>
                <FontAwesomeIcon icon={faGitSquare} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='MongoDB'>
                <FontAwesomeIcon icon={faDatabase} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Digital Ocean'>
                <FontAwesomeIcon icon={faDigitalOcean} />
              </Tooltip>
            </li>
            <li>
              <Tooltip title='Spotify'>
                <FontAwesomeIcon icon={faSpotify} />
              </Tooltip>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default ThreeDCarousel
