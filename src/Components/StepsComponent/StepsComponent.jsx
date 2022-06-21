import { useState, useContext, useEffect } from 'react'
import { Row, Col, Steps, Button } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import TokensStep1 from '../TokensStep1/TokensStep1'
import TokensStep2 from '../TokensStep2/TokensStep2'
import TokensStep3 from '../TokensStep3/TokensStep3'
import './StepsComponent.scss'

const { Step } = Steps

const steps = [
  {
    title: 'Log In',
    content: <TokensStep1 />,
  },
  {
    title: 'Mint',
    content: <TokensStep2 />,
  },
  {
    title: 'Claim',
    content: <TokensStep3 />,
  },
]

const StepsComponent = (props) => {
  const menu = useContext(MenuContext)

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const handleClickOnReady = () => {
    next()
  }

  const handleClickOnSubmit = () => {
    menu.mintTokens().then((results) => {
      if (results.hash) {
        next()
        return
      }
    })
  }

  const handleClickOnDone = () => {
    setCurrent(0)
    props.onClickOnDone()
  }

  useEffect(() => {
    console.log(current)
    // eslint-disable-next-line
    menu.checkUserReady()
    // eslint-disable-next-line
  }, [menu.wallet, current])

  return (
    <div className='steps-component'>
      <Row align='middle' justify='center'>
        <Col className='steps-container'>
          <Steps
            current={current}
            size='small'
            direction='horizontal'
            labelPlacement='vertical'
          >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className='steps-content'>{steps[current].content}</div>
          <div className='steps-action'>
            {current === 0 && (
              <Button
                size='large'
                type='danger'
                onClick={handleClickOnReady}
                disabled={
                  menu.wallet.connected && menu.userIsReady ? false : true
                }
              >
                READY
              </Button>
            )}
            {current === 1 && (
              <Button
                size='large'
                type='primary'
                onClick={handleClickOnSubmit}
                loading={menu.isLoading}
              >
                MINT
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type='primary' onClick={handleClickOnDone}>
                Done
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default StepsComponent
