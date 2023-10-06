
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <ToastContainer></ToastContainer>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}


export default Root
