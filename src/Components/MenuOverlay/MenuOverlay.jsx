import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import './MenuOverlay.scss'

const MenuOverlay = () => {
  return (
    <div className='menu-overlay'>
      <Fade direction='down'>
        <Row justify='center' align='middle'>
          <Col>
            <ul>
              <li>Home</li>
              <li>Token</li>
              <li>NFT</li>
              <li>Vault</li>
              <li>Lottery</li>
              <li>Roadmap</li>
              <li>FAQ</li>
            </ul>
          </Col>
        </Row>
      </Fade>
    </div>
  )
}
export default MenuOverlay
