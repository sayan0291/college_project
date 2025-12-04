import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Notice from './Notice'
import About from './About'
import Footer from './Footer'

function App() {
  
  return (
    <>
      <Navbar />
      <Notice />
      <Home />
      <About />
      <Footer />
    </>
  )
}

export default App
