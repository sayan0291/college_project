import { use, useRef } from 'react'
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

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

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
      <Navbar homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Notice />
      <section ref={homeRef}><Home /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={contactRef}><Contact /></section>
      <Footer />
    </>
  )
}


export default App
