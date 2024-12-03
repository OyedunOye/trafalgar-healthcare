import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
      <div className='navbar section_margin' id='home'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='navbar-links'>
          <nav>
            <a href='#home' className='navbar-link'>Home</a>
            <a href='#services' className='navbar-link'>Find a doctor</a>
            <a href='#mobileapp' className='navbar-link'>Apps</a>
            <a href='#testimonials' className='navbar-link'>Testimonials</a>
            <a href='#aboutUs' className='navbar-link'>About Us</a>
          </nav>
        </div>

        <div className='navbar-smallscreen'>
          <GiHamburgerMenu color='#000' fontSize={27} onClick={()=>{setToggleMenu(true)}} />

          {toggleMenu && (

            <div className='navbar-smallscreen_overlay'>
            <MdOutlineClose color='#000' fontSize={27} className='overlay__close' onClick={()=>{setToggleMenu(false)}} />
            <nav className='small-menu'>
              <a href='#home' className='small-navbar-link'>Home</a>
              <a href='#services' className='small-navbar-link'>Find a doctor</a>
              <a href='#mobileapp' className='small-navbar-link'>Apps</a>
              <a href='#testimonials' className='small-navbar-link'>Testimonials</a>
              <a href='#aboutUs' className='small-navbar-link'>About Us</a>
            </nav>
            </div>
          )}
        </div>
        

      </div>
      
  )
}

export default Navbar