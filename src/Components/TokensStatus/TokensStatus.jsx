import { useContext } from 'react'
import { Row, Col, Button, Tooltip, Descriptions } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { ellipseAdd } from '../../Utilities/Helper'
import Clock from 'react-live-clock'
import './TokensStatus.scss'

const TokensStatus = (props) => {
  const menu = useContext(MenuContext)

  const tokenAdd = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  const triviaAdd = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

  return (
    <div className='tokens-status'>
      <Row align='middle' justify='center'>
        <Col>
          <h2 className='tokens-status-item'>
            <Clock format={'HH:mm:ss A'} ticking={true} />
          </h2>
          <Descriptions
            bordered
            layout='vertical'
            size='small'
            className='tokens-status-item'
          >
            <Descriptions.Item label='Contracts' span={4}>
              <Row align='middle' justify='space-around'>
                <Tooltip title='View on Etherscan'>
                  <Button
                    type='link'
                    href={`https://etherscan.io/token/${tokenAdd}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Tokens Contract
                  </Button>
                </Tooltip>

                <Tooltip title='View on Etherscan'>
                  <Button
                    type='link'
                    href={`https://etherscan.io/token/${tokenAdd}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Trivia Contract
                  </Button>
                </Tooltip>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label='Total Rewards'>
              asdasdsa
            </Descriptions.Item>
            <Descriptions.Item label='Reward to Withdraw'>
              asdasdsa
            </Descriptions.Item>
            <Descriptions.Item label='Reward Withdrawn'>
              asdasdsa
            </Descriptions.Item>
            <Descriptions.Item label='Next Mint'>asdasdsa</Descriptions.Item>
          </Descriptions>
          <Button type='primary' className='tokens-status-item'>
            Withdraw Rewards
          </Button>
        </Col>
      </Row>
    </div>
  )
}
export default TokensStatus
