import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/NavbarV1/navbar1.jsx'
import LandingPage from './pages/LandingPage/landingPage.jsx'
import Footer from './components/Footer/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/signUp.jsx'
import Login from './pages/Login/login.jsx'
import Navbar2 from './components/Navbar2/navbar2.jsx'
import Feeds from './pages/Feeds/feeds.jsx'

function App() {
     
   const isLogin = true; // This can be used to conditionally render components based on login state
  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border'>
   {isLogin? <Navbar2 />:<Navbar1 />}
    <Routes >
      <Route  path='/' element={<LandingPage />} />
      <Route  path='/signUp' element={<SignUp />} />
      <Route  path='/login' element={<Login />} />
      <Route  path='/feeds' element={<Feeds />} />

    </Routes>
    <Footer />
    </div>
  )
}

export default App
