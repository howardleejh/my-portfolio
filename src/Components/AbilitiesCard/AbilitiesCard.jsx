import { Row, Col, Divider } from 'antd'
import './AbilitiesCard.scss'

const AbilitiesCard = (props) => {
  return (
    <div className='abilities-card'>
      <Row align='middle' justify='center'>
        <Col>
          <h1>MERN STACK</h1>
          <Divider className='divider' />
          <p>
            Experienced in developing with MongoDB, Express, React and Node JS.
            Works mainly with functional components and hooks in React. Able to
            work with ES7 and above. Uses npm as package manager and github for
            version control. Also experienced in deploying to cloud platforms
            like Heroku, Digital Ocean and Vercel.
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default AbilitiesCard
