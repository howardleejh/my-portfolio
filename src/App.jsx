import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuProvider from './Components/MenuProvider/MenuProvider'
import AppLayout from './Components/AppLayout/AppLayout'
import Home from './Pages/Home/Home'
import Page404 from './Pages/Page404/Page404'
// import Tokens from './Pages/Tokens/Tokens'
// import Nfts from './Pages/Nfts/Nfts'
// import Vault from './Pages/Vault/Vault'
// import Lottery from './Pages/Lottery/Lottery'
// import Roadmap from './Pages/Roadmap/Roadmap'
// import Faq from './Pages/Faq/Faq'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <MenuProvider>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path='*' element={<Page404 />} />
              <Route path='/' element={<Home />} />
              {/* <Route path='tokens' element={<Tokens />} />
              <Route path='nft' element={<Nfts />} />
              <Route path='vault' element={<Vault />} />
              <Route path='lottery' element={<Lottery />} />
              <Route path='roadmap' element={<Roadmap />} />
              <Route path='faq' element={<Faq />} /> */}
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </MenuProvider>
    </div>
  )
}

export default App
