import { Row, Col, Button } from 'antd'
import './TokensStep1.scss'

const TokensStep1 = () => {
  return (
    <div className='token-step-1'>
      <Row align='middle' justify='center'>
        <Col span={24}>
          <h2>How to mint?</h2>
        </Col>
        <ul>
          <li>
            Install Metamask from{' '}
            <Button
              ghost
              size='small'
              href='https://metamask.io/download/'
              target='_blank'
              rel='noreferrer'
            >
              Install Metamask
            </Button>
          </li>
          <li>
            Get some MATIC Tokens from{' '}
            <Button
              ghost
              size='small'
              href='https://faucet.polygon.technology/'
              target='_blank'
              rel='noreferrer'
            >
              Free Mumbai MATIC
            </Button>
          </li>
          <li>Connect your Metamask Wallet on the top right corner.</li>
          <li>You can only mint tokens once per day.</li>
          <li>Each minting amount varies from 1 ~ 10 FUSE tokens.</li>
          <li>
            Check the Next Mint time in the Status tab for minting eligibility.
          </li>
          <li>
            READY button will only be available if you are eligibile to mint.
          </li>
          <li>Good Luck!</li>
        </ul>
      </Row>
    </div>
  )
}
export default TokensStep1
