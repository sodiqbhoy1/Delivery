import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (

    < >


<Router>

      <Navbar/>
    <div className='sm:mx-10 mx-3 '>
      
      <Home />
      <About/>
      <Services/>
      <Contact/>

    </div>
</Router>
    </>
  )
}

export default App
