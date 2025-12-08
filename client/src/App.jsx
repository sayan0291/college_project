import { useEffect } from 'react'
import './App.css'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from './Navbar'
import Home from './Home'
import Notice from './Notice'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import Notes from './Notes'
import Admin from './Admin'
import { Route, Routes } from 'react-router-dom'

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
    <>
      <Navbar />
      <Notice />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App
