import { Row, Col } from 'antd'
import WordCloud from '../WordCloud/WordCloud'
import './TechStack.scss'

const TechStack = () => {
  return (
    <div className='tech-stack'>
      <Row align='middle' justify='center'>
        <Col>
          <WordCloud />
        </Col>
      </Row>
    </div>
  )
}
export default TechStack
