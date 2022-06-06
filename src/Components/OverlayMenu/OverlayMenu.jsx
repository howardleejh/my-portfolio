import { useContext } from 'react'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import './OverlayMenu.scss'

const OverlayMenu = () => {
  const menu = useContext(MenuContext)

  const selectedItem = () => {
    menu.changeMenuState()
  }

  return (
    <div className='overlay-menu'>
      <Row justify='center' align='middle'>
        <Col>
          <ul>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='/'>HOME</Link>
              </Button>
            </li>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='tokens'>GET TOKENS</Link>
              </Button>
            </li>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='nft'>MINT NFT</Link>
              </Button>
            </li>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='vault'>VAULT</Link>
              </Button>
            </li>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='lottery'>GET LUCKY!</Link>
              </Button>
            </li>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='roadmap'>ROADMAP</Link>
              </Button>
            </li>
            <li>
              <Button type='text' onClick={selectedItem}>
                <Link to='faq'>FAQ</Link>
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default OverlayMenu
