import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import Error404 from '../Pages/Error404/Error404'
import EscrowApp from '../Pages/NftTradePage/NftTradePage'
import App from '../App'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='nft-trading-post' element={<EscrowApp />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    </>
  )
)
