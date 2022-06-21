import { useState } from 'react'
import { Row, Col, Tabs } from 'antd'
import StepsComponent from '../../Components/StepsComponent/StepsComponent'
import TokensStatus from '../../Components/TokensStatus/TokensStatus'
import './Tokens.scss'

const { TabPane } = Tabs

const Tokens = () => {
  const [current, setCurrent] = useState(1)

  const handleTabSwitch = () => {
    if (current === 1) {
      setCurrent(2)
      return
    }
    setCurrent(1)
  }

  return (
    <div className='tokens-page'>
      <Row align='middle' justify='center'>
        <Col>
          <h1>DUMB TOKENS</h1>
          <Tabs
            defaultActiveKey='1'
            centered
            activeKey={`${current}`}
            onTabClick={handleTabSwitch}
            tabPosition='top'
            destroyInactiveTabPane
            className='tokens-tab'
          >
            <TabPane tab={<h3>STATUS</h3>} key='1'>
              <section id='tokens-status'>
                <TokensStatus />
              </section>
            </TabPane>
            <TabPane tab={<h3>MINT TOKENS</h3>} key='2'>
              <section id='tokens-mint'>
                <StepsComponent onClickOnDone={handleTabSwitch} />
              </section>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  )
}
export default Tokens
