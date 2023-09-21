import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
{
  id: 2,
  image: IMG2,
  title: 'Impactful Data Visualizations in Figma',
  github: 'https://github.com',
  demo: 'https://cdn.dribbble.com/userupload/10142560/file/original-09dfdc662ec2d17e0abbca78c7a5074a.jpg?resize=1024x768'
},
{
  id: 3,
  image: IMG3,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
{
  id: 4,
  image: IMG4,
  title: 'Data presentation and dashboard templates',
  github: 'https://github.com',
  demo: 'https://cdn.dribbble.com/userupload/9967375/file/original-042ef809253f582746abf2da777f6679.jpg?resize=752x'
},
{
  id: 5,
  image: IMG5,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
{
  id: 6,
  image: IMG6,
  title: 'Crypto Currency Dashboard & Financial Visualization',
  github: 'https://github.com',
  demo: 'https://dribble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
}
]

const portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio