import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
export default AppLayout
