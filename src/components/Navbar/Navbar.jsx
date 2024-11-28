import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='navbar section__margin'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-links'>
          <nav>
            <a href='#home' className='navbar-link'>Home</a>
            <a href='#services' className='navbar-link'>Find a doctor</a>
            <a href='#mobileapp' className='navbar-link'>Apps</a>
            <a href='#testimonials' className='navbar-link'>Testimonials</a>
            <a href='#publications' className='navbar-link'>About Us</a>
          </nav>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar