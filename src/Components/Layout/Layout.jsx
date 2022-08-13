import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className='main-layout'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <h6>footer</h6>
      </footer>
    </div>
  )
}
export default Layout
