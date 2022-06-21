import { useState } from 'react'
import { Tabs } from 'antd'
import { Fade } from 'react-awesome-reveal'
import TokensInfo from '../../Components/TokensInfo/TokensInfo'
import StepsComponent from '../../Components/StepsComponent/StepsComponent'
import TokensStatus from '../../Components/TokensStatus/TokensStatus'
import './Tokens.scss'

const { TabPane } = Tabs

const Tokens = () => {
  const [current, setCurrent] = useState(0)

  const handleTabSwitch = (tab) => {
    setCurrent(tab)
  }
  const handleClickOnDone = () => {
    setCurrent(1)
  }

  return (
    <div className='tokens-page'>
      <Tabs
        defaultActiveKey='0'
        centered
        activeKey={`${current}`}
        onTabClick={handleTabSwitch}
        tabPosition='top'
        destroyInactiveTabPane
        className='tokens-tab'
      >
        <TabPane tab={<h3>FUSE</h3>} key='0'>
          <Fade>
            <TokensInfo />
          </Fade>
        </TabPane>
        <TabPane tab={<h3>Status</h3>} key='1'>
          <Fade>
            <TokensStatus />
          </Fade>
        </TabPane>
        <TabPane tab={<h3>Mint</h3>} key='2'>
          <Fade>
            <StepsComponent onClickOnDone={handleClickOnDone} />
          </Fade>
        </TabPane>
      </Tabs>
    </div>
  )
}
export default Tokens
