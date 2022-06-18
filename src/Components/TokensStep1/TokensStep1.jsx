import { Row, Col, Button } from 'antd'
import Clock from 'react-live-clock'
import './TokensStep1.scss'

const TokensStep1 = () => {
  return (
    <div className='token-step-1'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <h1>How to mint DUMB Tokens?</h1>
        </Col>
        <Col span={24}>
          <h2>
            <Clock format={'HH:mm:ss A Z'} ticking={true} />
          </h2>
        </Col>
        <Col>
          <ul>
            <li>
              Install Metamask from:{' '}
              <span>
                <Button
                  size='small'
                  href='https://metamask.io/download/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Install Metamask
                </Button>
              </span>
            </li>
            <li>Connect your Metamask Wallet on the top right corner.</li>
            <li>
              Once your wallet is connected and signed, please click on the NEXT
              button below.
            </li>
            <li>
              To mint your free tokens, you'll first need to answer a trivia
              question.
            </li>
            <li>
              Only if you get it right, will you be able to mint your free
              tokens.
            </li>
            <li>You can only mint tokens once per day.</li>
            <li>Each mint amount varies from 1 ~ 10 DUMB tokens.</li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default TokensStep1
