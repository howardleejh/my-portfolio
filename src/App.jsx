import Layout from './Components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Tokens from './Pages/Tokens/Tokens'
import Nfts from './Pages/Nfts/Nfts'
import Vault from './Pages/Vault/Vault'
import Lottery from './Pages/Lottery/Lottery'
import Roadmap from './Pages/Roadmap/Roadmap'
import Faq from './Pages/Faq/Faq'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tokens' element={<Tokens />} />
          <Route path='nft' element={<Nfts />} />
          <Route path='vault' element={<Vault />} />
          <Route path='lottery' element={<Lottery />} />
          <Route path='roadmap' element={<Roadmap />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
