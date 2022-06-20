import { useContext, useEffect, useState } from 'react'
import { Row, Col, Button, Tooltip, Descriptions, Spin } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import { TOKEN_CONTRACT, TRIVIA_CONTRACT } from '../../Constants/Addresses'
import { LoadingOutlined } from '@ant-design/icons'
import Clock from 'react-live-clock'
import './TokensStatus.scss'

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
)

const TokensStatus = () => {
  const menu = useContext(MenuContext)

  const tokenAdd = `${TOKEN_CONTRACT}`
  const triviaAdd = `${TRIVIA_CONTRACT}`

  const [userRewards, setUserRewards] = useState({})

  useEffect(() => {
    // eslint-disable-next-line
    if (!menu.wallet.connected) {
      return
    }
    // eslint-disable-next-line
    menu.getUserTokens().then((results) => setUserRewards(results))
    // eslint-disable-next-line
  }, [menu.wallet])

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
            column={4}
            className='tokens-status-item'
          >
            <Descriptions.Item label='Contracts' span={4}>
              <Row align='middle' justify='space-around'>
                <Tooltip title='View on Etherscan'>
                  <Button
                    type='link'
                    href={`https://mumbai.polygonscan.com/token/${tokenAdd}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Tokens Contract
                  </Button>
                </Tooltip>

                <Tooltip title='View on Etherscan'>
                  <Button
                    type='link'
                    href={`https://mumbai.polygonscan.com/address/${triviaAdd}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Trivia Contract
                  </Button>
                </Tooltip>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label='Total Rewards'>
              {userRewards.totalReward || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Reward to Withdraw'>
              {userRewards.rewardRemaining || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Reward Withdrawn'>
              {userRewards.rewardWithdrawn || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Next Mint'>
              {userRewards.nextMint || <Spin indicator={antIcon} />}
            </Descriptions.Item>
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
