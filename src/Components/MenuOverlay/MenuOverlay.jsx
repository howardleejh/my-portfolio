import { Fade } from 'react-awesome-reveal'
import './MenuOverlay.scss'

const MenuOverlay = () => {
  return (
    <div className='menu-overlay'>
      <Fade cascade direction='down' duration={500}>
        {/* <ul>
          <li>
            <h1>Home</h1>
          </li>
          <li>
            <h1>Token</h1>
          </li>
          <li>
            <h1>NFT</h1>
          </li>
          <li>
            <h1>Vault</h1>
          </li>
          <li>
            <h1>Trade</h1>
          </li>
          <li>
            <h1>Road Map</h1>
          </li>
          <li>
            <h1>FAQ</h1>
          </li>
        </ul> */}
        <h1 style={{ color: 'white' }}>Work in Progress</h1>
      </Fade>
    </div>
  )
}
export default MenuOverlay
