import React from 'react'
import './Footer.css'
import logoFooter from '../../assets/logoFooter.png'
import footerDotsDesign from '../../assets/footerDotsDesign.png'
import pubDotsDesign from '../../assets/pubDotsDesign.png'

const Footer = () => {
  return (
    <div className='footer_container' id='aboutUs'>
      <div className='footer_bgd-imgA'>
        <img src={footerDotsDesign} alt='dotted_designA' />
      </div>
      <div className='footer_bgd-imgB'>
        <img src={pubDotsDesign} alt='dotted_designB' />
      </div>
      <div className='footer-section-a'>
        <img src={logoFooter} alt='trafalgar logo' />
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <p>©Trafalgar PTY LTD 2024. All rights reserved</p>
      </div>
      <div className='footer-section-b'>
        <h3>Company</h3>
        <a>About</a>
        <a>Testimonials</a>
        <a>Find a doctor</a>
        <a>Apps</a>
      </div>
      <div className='footer-section-c'>
        <h3>Region</h3>
        <a>Indonesia</a>
        <a>Singapore</a>
        <a>Hongkong</a>
        <a>Canada</a>
      </div>
      <div className='footer-section-d'>
        <h3>Help</h3>
        <a>Help center</a>
        <a>Contact support</a>
        <a>Instructions</a>
        <a>How it works</a>
      </div>
    </div>
  )
}

export default Footer