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
  github: 'https://github.com/onlinesmit',
  demo: 'https://cdn.dribbble.com/userupload/9967375/file/original-042ef809253f582746abf2da777f6679.jpg?resize=1200x900'
},
{
  id: 2,
  image: IMG2,
  title: 'Impactful Data Visualizations in Figma',
  github: 'https://github.com/onlinesmit',
  demo: 'https://cdn.dribbble.com/userupload/10142601/file/original-6c4da00fb1e2e8e45cdf6d20124277d3.jpg?resize=1200x900'
},
{
  id: 3,
  image: IMG3,
  title: 'data visualization and charts templates for Figma',
  github: 'https://github.com/onlinesmit',
  demo: 'https://cdn.dribbble.com/userupload/9631036/file/original-223cbf1d0e03434c17c99bb8b3667528.jpg?resize=1200x900'
},
{
  id: 4,
  image: IMG4,
  title: 'Data presentation and dashboard templates',
  github: 'https://github.com/onlinesmit',
  demo: 'https://cdn.dribbble.com/userupload/9967713/file/original-203311f73db79f8c627766a96c92d2b5.jpg?resize=1200x900'
},
{
  id: 5,
  image: IMG5,
  title: 'Global data visualization',
  github: 'https://github.com/onlinesmit',
  demo: 'https://cdn.dribbble.com/userupload/9631208/file/original-3660996893c469420f37a2022ad57d5e.jpg?resize=1200x900'
},
{
  id: 6,
  image: IMG6,
  title: 'mpactful Data Visualizations',
  github: 'https://github.com/onlinesmit',
  demo: 'https://cdn.dribbble.com/userupload/9454682/file/original-9f1683e03d34dd91ebb66790db48c39b.jpg?resize=1200x900'
}
]

const portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key ={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
            )
          })
         }
        

      </div>
    </section>
  )
}

export default portfolio