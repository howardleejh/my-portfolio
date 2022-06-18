import { useState } from 'react'
import { Row, Col, Steps, Button, message } from 'antd'
import TokensStep1 from '../../Components/TokensStep1/TokensStep1'
import TokensStep2 from '../../Components/TokensStep2/TokensStep2'
import TokensStep3 from '../../Components/TokensStep3/TokensStep3'
import './Tokens.scss'

const { Step } = Steps

const steps = [
  {
    title: 'Log In',
    content: <TokensStep1 />,
  },
  {
    title: 'Second',
    content: <TokensStep2 />,
  },
  {
    title: 'Last',
    content: <TokensStep3 />,
  },
]

const Tokens = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <div className='tokens-page'>
      <Row align='middle' justify='center'>
        <Col className='tokens-container'>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className='steps-content'>{steps[current].content}</div>
          <div className='steps-action'>
            {current > 0 && (
              <Button
                style={{
                  margin: '0 8px',
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current === 0 && (
              <Button type='primary' onClick={() => next()}>
                Check Eligibility
              </Button>
            )}
            {current === 1 && (
              <Button type='primary' onClick={() => next()}>
                Submit
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type='primary'
                onClick={() => message.success('Token Minting complete!')}
              >
                Done
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Tokens
