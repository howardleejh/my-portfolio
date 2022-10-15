import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import AbilitiesCard from '../AbilitiesCard/AbilitiesCard'
import { Roles } from '../../Utilities/Roles'
import './SectionRoles.scss'

const abilities = [
  {
    title: `MERN Stack`,
    desc: `Experienced in developing with MongoDB, Express, React, Gatsby and NodeJS for static sites, single page and progressive web applications.`,
    icons: Roles.Mern,
  },
  {
    title: `Blockchain`,
    desc: `Professionally certified for Ethereum & Solidity. I ensure that all smart contract development adhere to EIP standards with Open Zeppelin and Chainlink for external off-chain data processing.`,
    icons: Roles.Solidity,
  },
  {
    title: `Hardhat & Ethers`,
    desc: `Experienced with deploying to multiple blockchains that are EVM compatible. Also have experiences with third party smart contract auditing.`,
    icons: Roles.Hardhat,
  },
]

const SectionRoles = () => {
  return (
    <div className='roles-section'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <Fade delay={'50'}>
            <h1 className='role-title'>What I DO</h1>
          </Fade>
        </Col>
        <Fade cascade direction='up' triggerOnce>
          {abilities.map((ability) => {
            return (
              <Col className='roles-card-container'>
                <AbilitiesCard
                  key={abilities.title}
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
