import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import './Error404.scss'

const Error404 = () => {
  return (
    <div className='error-404'>
      <Row>
        <Col>
          <h1>Work in Progress.</h1>
          <Link to='/' replace>
            Home
          </Link>
        </Col>
      </Row>
    </div>
  )
}
export default Error404
