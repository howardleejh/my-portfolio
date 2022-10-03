import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import Error404 from '../Pages/Error404/Error404'
import App from '../App'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error404 />}>
      <Route index element={<HomePage />} />
    </Route>
  )
)
