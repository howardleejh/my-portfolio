import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import './Page404.scss'

const Page404 = () => {
  return (
    <div className='page-404'>
      <Row align='middle' justify='center' className='page-404-container'>
        <Col>
          <h1>COMING SOON</h1>
          <h2>Under Maintenance</h2>
          <Link to='/'>Go Home</Link>
        </Col>
      </Row>
    </div>
  )
}
export default Page404
