// Cardrs.js

import React, { useEffect } from 'react';
import '../Css/Cardrs1.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Cardrs1 = () => {
  const cardrsItems = [
    {
      id: 1,
      title: 'Nidhi Company Software',
    //   content: 'Hustle and Cashflow is a blog that aims to educate millennials on personal',
      date: '2024-02-24',
      image: 'news1.webp',
      link: '/Nidhi-Company-Software',
    },

    {
      id: 2,
      title: 'Micro Finance Software',
    //   content: 'I think that you should be able to select more than one reason for rating.',
      date: '2024-02-25',
      image: 'news2.webp',
      link: '/Micro-Finance-Software',
    },

    {
      id: 3,
      title: 'Gold Loan Software',
    //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
      date: '2024-02-25',
      image: 'news3.webp',
      link: '/Gold-Loan-Software',
    },

    {
      id: 4,
      title: 'Group Loan Software',
    //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
      date: '2024-02-25',
      image: 'news3.webp',
      link: '/Group-Loan-Software',
    },

    {
        id: 5,
        title: 'Co-Operative Society Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Co-Operative-Society-Software',
      },

      {
        id: 6,
        title: 'Co-Operative Bank Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Co-Operative-Bank-Software',
      },

      {
        id: 7,
        title: 'Money Transfer Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Money-Transfer-Software',
      },
      
      {
        id: 8,
        title: 'Recharge & Bill Payment Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Recharge-&-Bill-Payment-Software',
      },

      {
        id: 9,
        title: 'AePS & Micro-ATM Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/AePS-&-Micro-ATM-Software',
      },

      {
        id: 10,
        title: 'Path Lab Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Path-Lab-Software',
      }
    
  ];

 return (
    <div className="cardrs1-container">
      {/* <h2>Services</h2> */}
      <div className="cardrs1-wrapper">
        {cardrsItems.map((cardrs1) => (
          <div className="serv1-card" key={cardrs1.id}>
            <Link to={cardrs1.link} className="card-link">
            <img src={cardrs1.image} alt={cardrs1.title} />
            <div className="cardrs1-content">
              <h3>{cardrs1.title}</h3>
              <p className="cardrs1content">{cardrs1.content}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardrs1;