import React from 'react'
import './Publications.css'
import Divider from '../Divider/Divider'
import ArticleCards from '../ArticleCards/ArticleCards'
import { pubDotsDesign, blobB } from '../../assets'

const Publications = () => {
  return (
    <section id='publications' className='publications_container section_margin'>
      <div className='publications-dot-design'>
        <img src={pubDotsDesign} alt='dots design' />
      </div>
      <div className='publications-img-design'>
        <img src={blobB} alt='blob design' />
      </div>
      <div className='publications-holder'>
        <h2 className='publications-title'>
          Check out our latest article
        </h2>
        <Divider />
        <ArticleCards />
        <button className='publications-button'>View all</button>
      </div>
    </section>
  )
}

export default Publications