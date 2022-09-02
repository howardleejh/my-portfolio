import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import AbilitiesCard from '../AbilitiesCard/AbilitiesCard'
import { roles } from '../../Utilities/roles'
import './SectionRoles.scss'

const abilities = [
  {
    title: `MERN Stack`,
    desc: `Experience in developing with MongoDB, Express, React, Gatsby and NodeJS for static sites, single page and progress web applications.`,
    icons: roles.mern,
  },
  {
    title: `Solidity`,
    desc: `Professionally certified for Ethereum & Solidity. I ensure that all smart contract development adhere to the EIP standards with Open Zeppelin and Chainlink for external off-chain data processing.`,
    icons: roles.solidity,
  },
  {
    title: `Hardhat & Ethers`,
    desc: `Experience with deploying to multiple blockchains that are EVM compatible. Also have experiences with third party smart contract auditing.`,
    icons: roles.hardhat,
  },
]

const SectionRoles = () => {
  return (
    <div className='roles-section'>
      <Fade delay={50}>
        <h1 className='role-title'>What I DO</h1>
      </Fade>
      <Row align='middle' justify='center'>
        <Fade cascade direction='up' fraction={0.3} triggerOnce>
          {abilities.map((ability) => {
            return (
              <Col className='ability-card' key={ability.title}>
                <AbilitiesCard
                  title={ability.title}
                  desc={ability.desc}
                  icons={ability.icons}
                />
              </Col>
            )
          })}
        </Fade>
      </Row>
    </div>
  )
}
export default SectionRoles
