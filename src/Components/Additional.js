import React from 'react';
import '../Css/Additional.css';

const Additional = () => {
  // Data for the cards
  const cardData = [
    { name: 'JOE WATSON SBF', number: '0000 000 000 0000', validity: 'VALID', expiry: '01/28' },
    { name: 'JANE DOE', number: '1111 111 111 1111', validity: 'VALID', expiry: '02/29' },
    { name: 'JOHN SMITH', number: '2222 222 222 2222', validity: 'VALID', expiry: '03/30' },
    { name: 'EMMA JOHNSON', number: '3333 333 333 3333', validity: 'VALID', expiry: '04/31' },
    { name: 'JOE WATSON SBF', number: '0000 000 000 0000', validity: 'VALID', expiry: '01/28' },
    // { name: 'JANE DOE', number: '1111 111 111 1111', validity: 'VALID', expiry: '02/29' },
    // { name: 'JOHN SMITH', number: '2222 222 222 2222', validity: 'VALID', expiry: '03/30' },
    // { name: 'EMMA JOHNSON', number: '3333 333 333 3333', validity: 'VALID', expiry: '04/31' },
    // { name: 'EMMA JOHNSON', number: '3333 333 333 3333', validity: 'VALID', expiry: '04/31' },
    // { name: 'EMMA JOHNSON', number: '3333 333 333 3333', validity: 'VALID', expiry: '04/31' },
    

  ];

  return (
    
    
    <div className="container-add">
    <h1 className='add-text'>Additional Development</h1>
    {cardData.map((cardadd, index) => (
     <div className="cards-add-container">
        {/* Mapping over card data to generate cards */}
          <div key={index} className="box-add">
            <span className="title-add">GLASS EFFECT</span>
            <div>
              <strong>{cardadd.name}</strong>
              <p>{cardadd.number}</p>
              <span>{cardadd.validity}</span> <span>{cardadd.expiry}</span>
            </div>
          </div>
      </div>
    
    ))}
    </div>
    
  );
};

export default Additional;

