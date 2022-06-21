import { useContext } from 'react'
import { Row, Col, Button } from 'antd'
import { MenuContext } from '../MenuProvider/MenuProvider'
import {
  TOKEN_CONTRACT,
  DISTRIBUTION_CONTRACT,
} from '../../Constants/Addresses'
import TokenAddBtn from '../TokenAddBtn/TokenAddBtn'
import './TokensInfo.scss'

const TokensInfo = () => {
  const menu = useContext(MenuContext)

  const handleAddChain = () => {
    menu.addChainToWallet()
  }

  return (
    <div className='tokens-info'>
      <Row align='middle' justify='center'>
        <Col className='tokens-info-content'>
          <h1>Introducing FUSE Tokens</h1>
          <p>
            {' '}
            A set of 1 Billion FUSE tokens stored within a distribution smart
            contract that allows for anyone to mint. The only caveat is that
            each user only gets to mint a range of 1~10 Tokens per day and that
            you will have to pay for your own gas fee, which in Polygon MATIC,
            costs less than 0.01 MATIC. The objective of FUSE is that it will be
            used to purchase NFT in an upcoming NFT launch that is current work
            in progress. More information will provided nearing the launch date
            of this NFT project.
          </p>
          <Col>
            <Button
              ghost
              href={`https://mumbai.polygonscan.com/token/${TOKEN_CONTRACT}`}
              target='_blank'
              title='Tokens Contract'
              className='tokens-info-btn'
            >
              {' '}
              Tokens
            </Button>
            <Button
              ghost
              href={`https://mumbai.polygonscan.com/address/${DISTRIBUTION_CONTRACT}`}
              target='_blank'
              title='Distribution Smart Contract'
              className='tokens-info-btn'
            >
              {' '}
              Smart Contract
            </Button>
            <Button
              ghost
              href={`https://www.github.com/howardleejh/fuse-tokens`}
              target='_blank'
              title='Distribution Smart Contract'
              className='tokens-info-btn'
            >
              {' '}
              Github
            </Button>
            <TokenAddBtn
              type='ghost'
              tokenAdd={`${TOKEN_CONTRACT}`}
              loading={menu.isLoading}
              className='tokens-info-btn'
            />
            <Button ghost className='tokens-info-btn' onClick={handleAddChain}>
              + Polygon Mumbai
            </Button>
          </Col>
        </Col>
      </Row>
    </div>
  )
}
export default TokensInfo
