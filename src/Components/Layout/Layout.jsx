import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import OverlayMenu from '../OverlayMenu/OverlayMenu'

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
