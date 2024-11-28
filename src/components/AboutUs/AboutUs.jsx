import React from 'react'
import './AboutUs.css'
import Divider from '../Divider/Divider'
import { quality_service } from '../../assets'

const AboutUs = () => {
  return (
    <div className='aboutus_container section__padding'>
      <div className='aboutus-image'>
        <img src={quality_service} alt='aboutus' />
      </div>
      <div className='aboutus-text section__texts'>
        <h3>Leading healthcare providers</h3>
        <Divider />
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver.
        </p>
        <button className='aboutus-button'>Learn more</button>
      </div>
    </div>
  )
}

export default AboutUs