import React from 'react';
import '../Css/Different.css';

const cardData = [
  {
    title: 'Explosive Growth',
    description: 'Perfect for your next content, leave to us and enjoy the result!',
    items: [
      '10 Launch Weeks',
      '10 Influencers Post',
      '100.000 Views',
      '10 Reddit Posts',
      '2 Hours Marketing Consultation'
    ]
  },

  {
    title: 'Explosive Growth',
    description: 'Perfect for your next content, leave to us and enjoy the result!',
    items: [
      '10 Launch Weeks',
      '10 Influencers Post',
      '100.000 Views',
      '10 Reddit Posts',
      '2 Hours Marketing Consultation'
    ]
  },

  {
    title: 'Explosive Growth',
    description: 'Perfect for your next content, leave to us and enjoy the result!',
    items: [
      '10 Launch Weeks',
      '10 Influencers Post',
      '100.000 Views',
      '10 Reddit Posts',
      '2 Hours Marketing Consultation'
    ]
  },

  // {
  //   title: 'Explosive Growth',
  //   description: 'Perfect for your next content, leave to us and enjoy the result!',
  //   items: [
  //     '10 Launch Weeks',
  //     '10 Influencers Post',
  //     '100.000 Views',
  //     '10 Reddit Posts',
  //     '2 Hours Marketing Consultation'
  //   ]
  // },

  
  // Add more objects for additional cards here
];

const Different = () => {
  return (
    <div className='container-different'>
    <h1 className='differ-text'>How We Are Different From Others.</h1>
    <div className='different-container'>
      
      {cardData.map((cardDiffer, index) => (
        <div className="card" key={index}>
          <div className="card__border"></div>
          <div className="card_title__container">
            <span className="card_title">{cardDiffer.title}</span>
            <p className="card_paragraph">{cardDiffer.description}</p>
          </div>
          <hr className="line" />
          <ul className="card__list">
            {cardDiffer.items.map((item, idx) => (
              <li className="card__list_item" key={idx}>
                <span className="check">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="check_svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="list_text">{item}</span>
              </li>
            ))}
          </ul>
          <button className="button">Book a Call</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Different;
