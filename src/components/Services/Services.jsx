import React from 'react'
import './Services.css'
import ServicesCard from '../ServicesCard/ServicesCard'
import Divider from '../Divider/Divider'
import blob from '../../assets/blob.svg'
import servicesDotsDesign from '../../assets/dotsDesign.svg'

const Services = () => {
  return (
    <div className='services_container section__container' id='services'>
      
      <div className='services-intro'>
        <h1>Our Services</h1>
        <Divider />
        <p>
          We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors, you can consult with us which type of sercive is suitable for your health.
        </p>
      </div>
      <div className='services-cards-container'>
        <div className='services-bgA'>
          <img className='services-bgA-blob' src={blob} alt='blob background design' />
        </div>
        <div className='services-bgB'>
          <img className='services-bgB-dots' src={servicesDotsDesign} alt='dots background design' />
        </div>
        <ServicesCard />
      </div>
      <div className='services-button'>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default Services