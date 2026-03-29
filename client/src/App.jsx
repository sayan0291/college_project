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
import { Route, Routes } from 'react-router-dom'
import Registration from './Form/Registration.jsx'
import StudentReg from './Form/StudentReg.jsx'
import { UserProvider } from './Context/UserContext.jsx'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  
  return (
    <UserProvider>
      <>
        <Navbar />
        <Notice />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/student' element={<Student />} />
          <Route path='/studentregistration' element={<StudentReg />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        <Footer />
      </>
    </UserProvider>
  )
}


export default App
