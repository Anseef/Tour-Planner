import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>

  )
}

export default App
