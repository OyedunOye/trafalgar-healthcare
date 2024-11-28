import React from 'react'
import './Introduction.css'
import { illustration } from '../../assets'

const Introduction = () => {
  return (
    <section className='introduction_container section__container'>
      <div className='introduction-texts section__texts'>
        <h1>Virtual healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </p>
        <button className='introduction-button'>Consult today</button>
      </div>
      <div className='introduction-image section__image'>
        <img src={illustration} alt='health KPIs illustration' />
      </div>
    </section>
  )
}

export default Introduction