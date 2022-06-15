import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import MenuProvider from './Components/MenuProvider/MenuProvider'
import AppLayout from './Components/AppLayout/AppLayout'
import Home from './Pages/Home/Home'
import './App.scss'

const App = () => {
  const loadingIcon = <LoadingOutlined />

  return (
    <div className='App'>
      <MenuProvider>
        <BrowserRouter>
          {/* <Suspense fallback={<Spin indicator={loadingIcon} />}> */}
          <AppLayout>
            <Home />
          </AppLayout>
          {/* </Suspense> */}
        </BrowserRouter>
      </MenuProvider>
    </div>
  )
}

export default App
