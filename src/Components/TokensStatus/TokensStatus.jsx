import { useContext, useEffect, useState } from 'react'
import {
  Row,
  Col,
  Button,
  Tooltip,
  Descriptions,
  Spin,
  Modal,
  Input,
} from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import {
  TOKEN_CONTRACT,
  DISTRIBUTION_CONTRACT,
} from '../../Constants/Addresses'
import { EllipseAdd, Toast } from '../../Utilities/Helper'
import { LoadingOutlined } from '@ant-design/icons'
import TokenAddBtn from '../TokenAddBtn/TokenAddBtn'
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
  const distributionAdd = `${DISTRIBUTION_CONTRACT}`

  const [userRewards, setUserRewards] = useState({})
  const [modal, setModal] = useState(false)
  const [inputValue, setInputValue] = useState()

  const handleClaimRewards = () => {
    setModal(true)
  }

  const handleConfirmClaims = () => {
    setModal(false)
    let input = inputValue
    setInputValue()
    menu.claimTokens(input)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    // eslint-disable-next-line
    if (!menu.wallet.connected) {
      setUserRewards({})
      Toast('Please connect your wallet.')
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
            <Clock format={'M/DD/YYYY h:mm:ss A'} ticking={true} />
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
                <Tooltip title={`${EllipseAdd(tokenAdd, 10, 6)}`}>
                  <Button
                    type='link'
                    href={`https://mumbai.polygonscan.com/token/${tokenAdd}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Tokens Contract
                  </Button>
                </Tooltip>

                <Tooltip title={`${EllipseAdd(distributionAdd, 10, 6)}`}>
                  <Button
                    type='link'
                    href={`https://mumbai.polygonscan.com/address/${distributionAdd}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Distribution Contract
                  </Button>
                </Tooltip>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label='Total Rewards' span={2}>
              {userRewards.totalReward || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Unclaimed Reward'>
              {userRewards.rewardRemaining || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Claimed Reward'>
              {userRewards.rewardWithdrawn || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Next Mint'>
              {userRewards.nextMint || <Spin indicator={antIcon} />}
            </Descriptions.Item>
          </Descriptions>
          <ul>
            <li>
              <TokenAddBtn
                tokenAdd={`${tokenAdd}`}
                disabled={userRewards.totalReward ? false : true}
                loading={menu.isLoading}
                className='tokens-status-item tokens-status-btn'
              />
            </li>
            <li>
              <Button
                type='primary'
                onClick={handleClaimRewards}
                disabled={userRewards.totalReward ? false : true}
                loading={menu.isLoading}
                className='tokens-status-item tokens-status-btn'
              >
                Claim Rewards
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
      <Modal
        title='How much to withdraw?'
        centered
        visible={modal}
        onOk={handleConfirmClaims}
        onCancel={() => setModal(false)}
      >
        <Input suffix='DUMB' value={inputValue} onChange={handleInputChange} />
      </Modal>
    </div>
  )
}
export default TokensStatus
