import { useEffect, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from './Componenets/Shared/Navbar.jsx'
import Notice from './Componenets/ui/Notice.jsx'
import Footer from './Componenets/Shared/Footer.jsx'
const Home = lazy(() => import('./Componenets/ui/Home.jsx'))
const About = lazy(() => import('./Componenets/ui/About.jsx'))
const Contact = lazy(() => import('./Componenets/ui/Contact.jsx'))
const Notes = lazy(() => import('./Componenets/ui/Notes.jsx'))
const Login = lazy(() => import('./Componenets/ui/Login.jsx'))
const Admin = lazy(() => import('./Form/Admin.jsx'))
const Student = lazy(() => import('./Form/Student.jsx'))
const Registration = lazy(() => import('./Form/Registration.jsx'))
const StudentReg = lazy(() => import('./Form/StudentReg.jsx'))
const ErrorPage = lazy(() => import('./Componenets/ui/ErrorPage.jsx'))

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
        <Suspense fallback={<div className='w-screen h-screen bg-transparent text-lg text-red-400'>Loading page...</div>}>
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
            <Route path='/registration' element={isLoggedIn ? <ErrorPage/> : <Registration />} />
          </Routes>
        </Suspense>
        <Footer />
      </>
  )
}


export default App
