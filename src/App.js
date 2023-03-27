import React from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
<<<<<<< HEAD


=======
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
// import components
import Navbar from './components/Navbar'
function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </Router>
=======
    <div>
      <h2>app component</h2>
    </div>
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
  )
}

export default App
