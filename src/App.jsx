import { ParallaxProvider } from 'react-scroll-parallax'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Error404 from './Pages/Error404/Error404'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <ParallaxProvider>
          <Routes>
            <Route path='*' element={<Error404 />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </ParallaxProvider>
      </Layout>
    </div>
  )
}

export default App
