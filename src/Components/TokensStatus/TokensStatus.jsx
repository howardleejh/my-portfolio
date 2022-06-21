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
import { EllipseAdd } from '../../Utilities/Helper'
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
  const distributionAdd = `${DISTRIBUTION_CONTRACT}`

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
    menu.getUserTokens()
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
              {menu.userTokens.totalReward || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Unclaimed Reward'>
              {menu.userTokens.rewardRemaining || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Claimed Reward'>
              {menu.userTokens.rewardWithdrawn || <Spin indicator={antIcon} />}
            </Descriptions.Item>
            <Descriptions.Item label='Next Mint'>
              {menu.userTokens.nextMint || <Spin indicator={antIcon} />}
            </Descriptions.Item>
          </Descriptions>
          <Row align='middle' justify='space-evenly'>
            <Button
              ghost
              onClick={handleClaimRewards}
              disabled={
                menu.userTokens.totalReward &&
                menu.userTokens.rewardRemaining > 0
                  ? false
                  : true
              }
              loading={menu.isLoading}
              className='tokens-status-item tokens-status-btn'
            >
              Claim Rewards
            </Button>
          </Row>
        </Col>
      </Row>
      <Modal
        title='How much to withdraw?'
        centered
        visible={modal}
        onOk={handleConfirmClaims}
        onCancel={() => setModal(false)}
      >
        <Input suffix='FUSE' value={inputValue} onChange={handleInputChange} />
      </Modal>
    </div>
  )
}
export default TokensStatus
