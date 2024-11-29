import React from 'react'
import './Publications.css'
import Divider from '../Divider/Divider'
import ArticleCards from '../ArticleCards/ArticleCards'

const Publications = () => {
  return (
    <section id='publications' className='publications_container'>
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