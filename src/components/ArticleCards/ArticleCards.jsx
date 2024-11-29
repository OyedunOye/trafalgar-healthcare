import React from 'react'
import './ArticleCards.css'
import { articleA, articleB, articleC } from '../../assets'
import { FaArrowRight } from 'react-icons/fa'

let articles = [
  {
    id: 1,
    title: 'Disease detection, check up in the laboratory',
    content: 'In this case, the role of the health laboratory \
    is very important to do a disease detection...',
    photo : articleA,
  },
  {
    id: 2,
    title: 'Herbal medicines that are safe for consumption',
    content: 'Herbal medicine is very widely used at this \
    time because of its very good for your health...',
    photo : articleB,
  },
  {
    id: 3,
    title: 'Natural care for healthy facial skin',
    content: 'A healthy lifestyle should start from now and \
    also for your skin health.There are some...',
    photo : articleC,
  }
]

const ArticleCards = () => {
  return (
    <div className='articles-card section__margin'>
        {articles.map((article) => (
          <div className='article-card' key={article.id}>
            <img src={article.photo} alt='{article.title}' />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <a>Read more  <FaArrowRight /></a>
          </div>
        ))}
    </div>
  )
}

export default ArticleCards