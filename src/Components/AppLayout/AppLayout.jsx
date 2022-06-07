import Navbar from '../Navbar/Navbar'

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default AppLayout
