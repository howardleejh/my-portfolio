import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuProvider from './Components/MenuProvider/MenuProvider'
import AppLayout from './Components/AppLayout/AppLayout'
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
      <MenuProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='tokens' element={<Tokens />}></Route>
              <Route path='nft' element={<Nfts />}></Route>
              <Route path='vault' element={<Vault />}></Route>
              <Route path='lottery' element={<Lottery />}></Route>
              <Route path='roadmap' element={<Roadmap />}></Route>
              <Route path='faq' element={<Faq />}></Route>
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </MenuProvider>
    </div>
  )
}

export default App
