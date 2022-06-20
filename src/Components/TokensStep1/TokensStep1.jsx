import { useContext, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import './TokensStep1.scss'

const TokensStep1 = () => {
  const menu = useContext(MenuContext)

  useEffect(() => {
    // eslint-disable-next-line
    menu.checkUserReady()
    // eslint-disable-next-line
  }, [menu.userIsReady])

  return (
    <div className='token-step-1'>
      <Row align='middle' justify='center'>
        <Col>
          <h2>How to mint?</h2>
          <ul>
            <li>
              Install Metamask from:{' '}
              <Button
                size='small'
                href='https://metamask.io/download/'
                target='_blank'
                rel='noreferrer'
              >
                Install Metamask
              </Button>
            </li>
            <li>
              Get some MATIC Tokens from:{' '}
              <Button
                size='small'
                href='https://faucet.polygon.technology/'
                target='_blank'
                rel='noreferrer'
              >
                Free Mumbai MATIC
              </Button>
            </li>
            <li>Connect your Metamask Wallet on the top right corner.</li>
            <li>
              Once your wallet is connected and signed, please click on Check
              Eligibility button below.
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
            <li>Good Luck!</li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}
export default TokensStep1
