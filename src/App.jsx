import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import styles from "./css/App.module.css"
export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}