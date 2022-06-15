import { Row, Col } from 'antd'
import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsComponent.scss'
import img1 from '../../Media/ChessLogo.png'
import img2 from '../../Media/BazaarMalamLogo.png'
import img3 from '../../Media/TeamUpLogo.png'
import img4 from '../../Media/GachaLogo.png'
import img5 from '../../Media/comingSoon.png'

const ProjectsComponent = () => {
  return (
    <div className='projects-component'>
      <h1>Projects</h1>
      <Row align='middle' justify='center'>
        <Col className='projects-item'>
          <ProjectCard
            title={`3D Chess`}
            description={`A classic game of chess with 3D implementations.`}
            style={{
              background: `#ffffff url(${img1}) no-repeat center`,
              backgroundSize: '20em',
              backgroundPosition: 'contain',
            }}
          />
        </Col>
        <Col className='projects-item'>
          <ProjectCard
            title={`Bazaar Malam`}
            description={`My first Mock NFT Marketplace. No smart contacts were written yet.`}
            style={{
              background: `#ffffff url(${img2}) no-repeat center`,
              backgroundSize: '20em',
              backgroundPosition: 'contain',
            }}
          />
        </Col>
        <Col className='projects-item'>
          <ProjectCard
            title={`TeamUp`}
            description={`An app to manage events, a Team Project. `}
            style={{
              background: `#ffffff url(${img3}) no-repeat `,
              backgroundSize: '20em',
              backgroundPosition: 'contain',
            }}
          />
        </Col>
        <Col className='projects-item'>
          <ProjectCard
            title={`Gacha10`}
            description={`A platform that simulates an NFT marketplace.`}
            style={{
              background: `#ffffff url(${img4}) no-repeat center`,
              backgroundSize: '20em',
              backgroundPosition: 'contain',
            }}
          />
        </Col>
        <Col className='projects-item'>
          <ProjectCard
            title={`DUMB Tokens [ERC20]`}
            description={`A Token project for my upcoming NFT project.`}
            style={{
              background: `#ffffff url(${img5}) no-repeat top left`,
              backgroundSize: '20em',
              backgroundPosition: 'contain',
            }}
          />
        </Col>
        <Col className='projects-item'>
          <ProjectCard
            title={`Namecard NFT [ERC721]`}
            description={`A free mintable NFT project for everyone! `}
            style={{
              background: `#ffffff url(${img5}) no-repeat top right`,
              backgroundSize: '20em',
              backgroundPosition: 'contain',
            }}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ProjectsComponent
