import React from 'react'
import './Testimonials.css'
import Divider from '../Divider/Divider'
import founder from '../../assets/founder_ed.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className='testimonials_container section__container'>
      <div className='testimonials_main_content'>
        <h3 className='testimonials_title'>What our customer are saying</h3> 
        <div className='testimonials-divider'>
          <Divider />
        </div>
      
        <div className='founder'>
          <div className='founder_image'>
            <img src={founder} alt="The founder" />
          </div>
          <div className='founder-details'>
          <h4 className='edward'>Edward Newgate</h4>
          <p className='founder-title '>Founder Circle</p>
          </div>
          <div className='testimonial'>
            <p className='founder-words'>
            “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
            </p>
          </div>

        </div>
      </div>

      <div className='testimonials_pointer'>
          <div className='pointer'>
            <FaArrowLeft />
            <FaEllipsisH />
            <FaArrowRight />
          </div>
      </div>
          
    </div>
  )
}

export default Testimonials