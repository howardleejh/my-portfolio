import { Outlet } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import MainLayout from './Components/MainLayout/MainLayout'

const App = () => {
  return (
    <div className='App'>
      <MainLayout>
        <ParallaxProvider>
          <Outlet />
        </ParallaxProvider>
      </MainLayout>
    </div>
  )
}

export default App
