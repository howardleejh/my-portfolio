import { Row, Col, Divider } from 'antd'
import './QualitiesComponent.scss'

const QualitiesComponent = () => {
  return (
    <div className='qualities-component'>
      <Row align='start' justify='center'>
        <Col className='quality-container'>
          <h1>MERN STACK</h1>
          <p>
            Experienced in developing with MongoDB, Express, React and Node JS.
            Works mainly with functional components and hooks in React. Able to
            work with ES7 and above. Uses npm as package manager and github for
            version control. Also experienced in deploying to cloud platforms
            like Heroku, Digital Ocean and Vercel.
          </p>
        </Col>
        <Divider type='vertical' className='divider' />
        <Col className='quality-container'>
          <h1>SOLIDITY</h1>
          <p>
            Achieved professional certification for Ethereum & Solidity, and has
            been developing smart contracts since <strong> October 2021</strong>
            . Utilizes Open Zeppelin for development and adheres to the EIP
            standards. Developed in multiple networks including Ethereum and
            Polygon, main and test nets. Able to execute unit testing with Mocha
            and Chai.
          </p>
        </Col>
        <Divider type='vertical' className='divider' />
        <Col className='quality-container'>
          <h1>HARDHAT & ETHERS</h1>
          <p>
            Experienced with deploying to multiple networks including rinkeby,
            ropsten and polygon mumbai. Uses Etherscan and Tenderly for
            debugging transactions and is experienced with third party smart
            contract auditing. Understands various design concepts including the
            use of abstract contracts, interfaces, libraries, inheritance and
            gas fee optimization techniques.
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default QualitiesComponent
