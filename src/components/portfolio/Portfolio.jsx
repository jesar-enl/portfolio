import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17610570-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id: 2,
    image: IMG2,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id: 3,
    image: IMG3,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17341601-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 4,
    image: IMG4,
    title: "Templates for financial and cryptocurrency services",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17096550-Templates-for-financial-and-cryptocurrency-services"
  },
  {
    id: 5,
    image: IMG5,
    title: "Service templates for video streaming",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16955838-Service-templates-for-video-streaming"
  },
  {
    id: 6,
    image: IMG6,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16811959-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  }
]

const Portfolio = () => {
  return (
    <section className='portfolio' >
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target='_blank' className='btn'>Github</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Portfolio