import { Row, Col, Button, Menu, Dropdown, Divider } from 'antd'
import { Link } from 'react-router-dom'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import './Navbar.scss'
import { MenuOutlined } from '@ant-design/icons'

const menu = (
  <Menu
    items={[
      {
        key: 'tokens',
        label: <Link to='tokens'>GET TOKENS</Link>,
      },
      {
        key: 'nft',
        label: <Link to='nft'>MINT NFT</Link>,
      },
      {
        key: 'vault',
        label: <Link to='vault'>VAULT</Link>,
      },
      {
        key: 'lottery',
        label: <Link to='lottery'>GET LUCKY!</Link>,
      },
      {
        key: 'roadmap',
        label: <Link to='roadmap'>ROADMAP</Link>,
      },
      {
        key: 'faq',
        label: <Link to='faq'>FAQ</Link>,
      },
    ]}
  />
)

const Navbar = () => {
  return (
    <div className='navbar'>
      <Row align='middle' justify='space-around'>
        <Col>
          <Button type='text' id='home-logo'>
            <Link to='/' id='home-logo'>
              Home
            </Link>
          </Button>
        </Col>
        <Col>
          <ConnectWallet id='connect-wallet' />
          <Divider type='vertical' />
          <Dropdown overlay={menu} placement='bottomRight'>
            <Button type='text'>
              <MenuOutlined />
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  )
}
export default Navbar
