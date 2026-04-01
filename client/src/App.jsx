import { useEffect } from 'react'
import './App.css'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from './Componenets/Shared/Navbar.jsx'
import Home from './Componenets/ui/Home.jsx'
import Notice from './Componenets/ui/Notice.jsx'
import About from './Componenets/ui/About.jsx'
import Footer from './Componenets/Shared/Footer.jsx'
import Contact from './Componenets/ui/Contact.jsx'
import Notes from './Componenets/ui/Notes.jsx'
import Login from './Componenets/ui/Login.jsx'
import Admin from './Form/Admin.jsx'
import Student from './Form/Student.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registration from './Form/Registration.jsx'
import StudentReg from './Form/StudentReg.jsx'
import ErrorPage from './Componenets/ui/ErrorPage.jsx'

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  
  return (
      <>
        <Navbar />
        <Notice />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/notes' element={!!isLoggedIn ? <Notes /> : <Navigate to="/Login" replace />} />
          <Route path='/login' element={isLoggedIn ? <ErrorPage/> : <Login/>} />
          <Route path='/admin' element={isLoggedIn ? <ErrorPage/> : <Admin />} />
          <Route path='/student' element={isLoggedIn ? <ErrorPage/> : <Student />} />
          <Route path='/studentregistration' element={isLoggedIn ? <ErrorPage/> : <StudentReg />} />
          <Route path='/registration' element={isLoggedIn ? <Registration/> : <ErrorPage />} />
        </Routes>
        <Footer />
      </>
  )
}


export default App
