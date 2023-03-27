import React from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
import logo from '../logo.svg'

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to='/'>
          <img src={logo} alt='cocktail db logo' className='logo'></img>
        </NavLink>
      </div>
      <div className='nav-links'>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/about'>About </NavLink>
      </div>
    </nav>
=======
    <div>
      <h2>navbar component</h2>
    </div>
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
  )
}

export default Navbar
