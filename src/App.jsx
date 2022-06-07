import MenuProvider from './Components/MenuProvider/MenuProvider'
import AppLayout from './Components/AppLayout/AppLayout'
import Home from './Pages/Home/Home'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <MenuProvider>
        <AppLayout>
          <Home />
        </AppLayout>
      </MenuProvider>
    </div>
  )
}

export default App
