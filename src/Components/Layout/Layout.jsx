import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
