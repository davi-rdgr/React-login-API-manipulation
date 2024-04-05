import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}