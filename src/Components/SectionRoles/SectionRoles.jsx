import { Row, Col } from 'antd'
import { Fade } from 'react-awesome-reveal'
import { RoleIcons } from '../../Utilities/RoleIcons'
import AbilitiesCard from '../AbilitiesCard/AbilitiesCard'
import './SectionRoles.scss'

const abilities = [
  {
    title: `MERN Stack`,
    desc: `Experienced in developing with MongoDB, Express, React and Node JS. Works mainly with functional components and hooks in React. Able to work with ES7 and above. Uses npm as package manager and github for version control. Also experienced in deploying to cloud platforms like Heroku, Digital Ocean and Vercel.`,
    icons: RoleIcons.mern,
  },
  {
    title: `Solidity`,
    desc: `Achieved professional certification for Ethereum & Solidity, and has been developing smart contracts since October 2021. Utilizes Open Zeppelin for development and adheres to the EIP standards. Developed in multiple networks including Ethereum and Polygon, main and test nets. Able to execute unit testing with Mocha and Chai.`,
    icons: RoleIcons.solidity,
  },
  {
    title: `Hardhat & Ethers`,
    desc: `Experienced with deploying to multiple networks including rinkeby, ropsten and polygon mumbai. Uses Etherscan and Tenderly for debugging transactions and is experienced with third party smart contract auditing. Understands various design concepts including the use of abstract contracts, interfaces, libraries, inheritance and gas fee optimization techniques.`,
    icons: RoleIcons.hardhat,
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
