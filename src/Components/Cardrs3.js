// Cardrs.js

import React, { useEffect } from 'react';
import '../Css/Cardrs3.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Cardrs3 = () => {
  const cardrsItems = [
    {
      id: 1,
      title: 'Website Development',
    //   content: 'Hustle and Cashflow is a blog that aims to educate millennials on personal',
      date: '2024-02-24',
      image: 'news1.webp',
      link: '/website-development',
    },

    {
      id: 2,
      title: 'Portal Development',
    //   content: 'I think that you should be able to select more than one reason for rating.',
      date: '2024-02-25',
      image: 'news2.webp',
      link: '/Portal-Development',
    },

    {
      id: 3,
      title: 'Mobile App Development',
    //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
      date: '2024-02-25',
      image: 'news3.webp',
      link: '/Mobile-App-Development',
    },

    {
      id: 4,
      title: 'Banking Software',
    //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
      date: '2024-02-25',
      image: 'news3.webp',
      link: '/Banking-Software',
    },

    {
        id: 5,
        title: 'loan & Finance Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/loan-&-Finance-Software',
      },

      {
        id: 6,
        title: 'Education & Online Exam Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Education-&-Online-Exam-Software',
      },

      {
        id: 7,
        title: 'Real e-State Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Real-e-State-Software',
      },
      
      {
        id: 8,
        title: 'Accounting & Billing Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Accounting-&-Billing-Software',
      },

      {
        id: 9,
        title: 'Institute & College Management Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Institute-&-College-Management-Software',
      },

      {
        id: 10,
        title: 'Hospital Management Software',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Hospital-Management-Software',
      },

      {
        id: 11,
        title: 'E-Commerce Software Development',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/E-Commerce-Software-Development',
      },

      {
        id: 12,
        title: 'Travel Booking Software Development',
      //   content: 'Join us for upcoming events to learn more about the latest trends in technology.',
        date: '2024-02-25',
        image: 'news3.webp',
        link: '/Travel-Booking-Software-Development',
      }
    
  ];

 return (
    <div className="cardrs3-container">
      {/* <h2>Services</h2> */}
      <div className="cardrs3-wrapper">
        {cardrsItems.map((cardrs3) => (
          // <Link to={cardrs2.link} key={cardrs2.id} className="cardeee-link">
          <div className="sol3-card" key={cardrs3.id}>
          <Link to={cardrs3.link} className="card-link">
            <img src={cardrs3.image} alt={cardrs3.title} />
            <div className="cardrs3-content">
              <h3>{cardrs3.title}</h3>
              <p className="cardrs3content">{cardrs3.content}</p>
            </div>
            </Link>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Cardrs3;