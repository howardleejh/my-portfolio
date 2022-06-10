import { BrowserRouter } from 'react-router-dom'
import MenuProvider from './Components/MenuProvider/MenuProvider'
import AppLayout from './Components/AppLayout/AppLayout'
import Home from './Pages/Home/Home'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <MenuProvider>
        <BrowserRouter>
          <AppLayout>
            <Home />
          </AppLayout>
        </BrowserRouter>
      </MenuProvider>
    </div>
  )
}

export default App
