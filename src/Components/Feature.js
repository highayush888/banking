import React from 'react';
import '../Css/Feature.css';

const Feature = () => {
  // Data for the feature cards
  const featureData = [
    { id: 1, icon: 'f1.png', name: 'Nidhi Company Software' },
    { id: 2, icon: 'f2.png', name: 'Patho Lab Software' },
    { id: 3, icon: 'f3.png', name: 'Co-Operative Society Software' },
    { id: 4, icon: 'f4.png', name: 'Gold Loan Software' },
    { id: 5, icon: 'f5.png', name: 'Employee Management Software' },
    { id: 6, icon: 'f6.png', name: 'Micro-Finance Software' },
    { id: 7, icon: 'f7.png', name: 'Product Loan Software' },
    { id: 8, icon: 'f8.png', name: 'Customer Mobile App' },
    { id: 9, icon: 'f9.png', name: 'Agent Mobile App' },
    { id: 10, icon: 'f10.png', name: 'eNACH (Auto-Debit)' },
    { id: 11, icon: 'f11.png', name: 'Cibil/Credit Score' },
    { id: 12, icon: 'f12.png', name: 'Website Deliver' },
    { id: 13, icon: 'f13.png', name: 'Dedicated Support' },
    
    
    // Add more features as needed
  ];

  return (
    <div className='feature-container'>
      <h1 style={{fontSize:'2em',borderRadius:'5px', backgroundColor:'#0202a7',color:'white', width:'100%'}} className='mb-5'>Our Popular Products</h1>
      <div className='feature-cards-container'>
        {featureData.map((feature) => (
          <div key={feature.id} className='feature-card'>
            <img src={feature.icon} alt={`Icon for ${feature.name}`}  />
            <p style={{fontSize:'1 em'}}>{feature.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
