import React from "react";
import "./Portfolio.css";
import mailboxclient from '../../assets/mailboxclient.png'
import resturant from '../../assets/resturant.png';
import expensetracker from '../../assets/expensetracker.png'
import ecommerce from '../../assets/ecommerce.png'


const portfolioProjects = [
  {
    id: 1,
    image: mailboxclient,
    title: 'Mail Box Client App',
    github: 'https://github.com/kharerishabh/Mail-Box-Client',
    demo: 'https://rishabh-mail-box-client.vercel.app/'
  },
  {
    id: 2,
    image: ecommerce,
    title: 'Ecommerce App',
    github: 'https://github.com/kharerishabh/Project-E-Commerce-',
    demo: 'https://rishabh-e-commerce.vercel.app/home'
  },
  {
    id: 3,
    image: expensetracker,
    title: 'Daily Expense Tracker App',
    github: 'https://github.com/kharerishabh/Expense-Tracker-App',
    demo: 'https://expense-tracker-app-eta-hazel.vercel.app/'
  },
  {
    id: 4,
    image: resturant,
    title: 'Static Resturant App',
    github: 'https://github.com/kharerishabh/Resturant-Project-Module---4',
    demo: 'https://resturant-project-deployment.vercel.app/'
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioProjects.map(({id, image, title, github, demo}) => {
          return (<article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn" target="_blank">Github</a>
          <a href={demo} className="btn btn-primary" target="_blank">Demo</a>
          </div>
        </article>)
        })}
      </div>
    </section>
  );
};

export default Portfolio;
