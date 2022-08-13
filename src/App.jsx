import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <ParallaxProvider>
          <HomePage />
        </ParallaxProvider>
      </Layout>
    </div>
  )
}

export default App
