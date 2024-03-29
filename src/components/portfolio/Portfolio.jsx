import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MERN E-Commerce Web App',
    github: 'https://github.com/Naman1219/E-Commerce-Web-Application',
    demo: 'https://namanecomm.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Google Keeper Clone',
    github: 'https://github.com/Naman1219/Google-Keep-Clone',
    demo: 'https://naman1219.github.io/Google-Keep-Clone/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React based Portfolio Website',
    github: 'https://github.com/Naman1219/portfolioWebsite',
    demo: 'https://namanguptaa.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Theme Change Extension',
    github: 'https://github.com/Naman1219/Theme-Change-Extension',
    demo: 'https://chrome.google.com/webstore/search/guptanaman1995'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Live Code Editor Project',
    github: 'https://github.com/Naman1219/Live-Code-Editor',
    demo: 'https://github.com/Naman1219'
  },
  {
    id: 6,
    image: IMG6,
    title: 'New Project Coming Soon',
    github: 'https://www.github.com/Naman1219',
    demo: 'https://www.github.com/Naman1219'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;