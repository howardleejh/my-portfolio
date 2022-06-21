import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import MenuProvider from './Components/MenuProvider/MenuProvider'
import AppLayout from './Components/AppLayout/AppLayout'
import Home from './Pages/Home/Home'
import Page404 from './Pages/Page404/Page404'
import Tokens from './Pages/Tokens/Tokens'
import TokensStatus from './Components/TokensStatus/TokensStatus'
import StepsComponent from './Components/StepsComponent/StepsComponent'
import ScrollToTop from './Utilities/ScrollToTop/ScrollToTop'
// import Nfts from './Pages/Nfts/Nfts'
// import Vault from './Pages/Vault/Vault'
// import Lottery from './Pages/Lottery/Lottery'
// import Roadmap from './Pages/Roadmap/Roadmap'
// import Faq from './Pages/Faq/Faq'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MenuProvider>
        <BrowserRouter>
          <AppLayout>
            <ScrollToTop>
              <Routes>
                <Route path='*' element={<Page404 />} />
                <Route path='/' element={<Home />} />
                <Route path='tokens' element={<Tokens />} />
                <Route path='/tokens/#status' element={<TokensStatus />} />
                <Route path='/tokens/#mint' element={<StepsComponent />} />
                {/* <Route path='nft' element={<Nfts />} />
              <Route path='vault' element={<Vault />} />
              <Route path='lottery' element={<Lottery />} />
              <Route path='roadmap' element={<Roadmap />} />
              <Route path='faq' element={<Faq />} /> */}
              </Routes>
            </ScrollToTop>
          </AppLayout>
        </BrowserRouter>
      </MenuProvider>
    </div>
  )
}

export default App
