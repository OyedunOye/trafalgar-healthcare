import React from 'react'
import './MobileApp.css'
import { FaArrowDown } from "react-icons/fa";
import Divider from '../Divider/Divider';
import app from '../../assets/app.png'

const MobileApp = () => {
  return (
    <div className='mobileapp_container section__container' id='mobileapp'>
      <div className='mobileapp-text section__texts'>
        <h3>Download our mobile apps</h3>
        <div className='mobileapp-divider'>
          <Divider />
        </div>
        <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
        <button className='mobileapp-button'>Download <FaArrowDown /> </button>
      </div>
      <div className='mobileapp-image section__image'>
        <img src={app} alt="mobile app" />
      </div>
    </div>
  )
}

export default MobileApp