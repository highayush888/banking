// Pricing.js

import React from 'react';
import '../Css/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'BASIC',
      price: 'Free',
      // description: '10,000 words of AI text usage per month.',
      features: ['X', 'X', 'X', '25', '300 Words', 'Limited'],
    },
    {
      name: 'PRO',
      price: '$7/mo',
      // description: '200,000 words of AI text usage per month.',
      features: ['X', 'X', 'X', '25', '4000 Words', 'Priority Support'],
    },
    {
      name: 'DIAMOND',
      price: '$23/mo',
      // description: 'Contact us For Custom Plans tailored to Your business',
      features: ['X', 'X', 'X', '25', 'Unlimited', 'Priority Support'],
    },
    // Add more plans as needed
  ];

  const featureList = [
    { name: 'VOLUME BASED PRICING' },
    { name: 'CONTENT' },
    { name: 'API ACCESS' },
    { name: 'TEMPLATES' },
    { name: 'AI TEXT USAGE' },
    { name: 'SUPPORT' },
  ];

  return (
    <div className="pricing-container">
      <h2 className="pricing-heading" style={{ fontSize: '3em', marginLeft: '20px' }}>Flexible Pricing</h2>
      <div className="outer_table overflow_auto">
      <table className="pricing-table">
        <thead>
          <tr>
            <th></th>
            {plans.map((plan, index) => (
              <th key={index} style={{ borderBottom: '1px solid #ccc' }}>{plan.name}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {plans.map((plan, index) => (
              <th key={index} style={{ fontSize: '2em' }}>{plan.price}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {plans.map((plan, index) => (
              <th key={index} style={{ textAlign: 'center', verticalAlign: 'middle', borderBottom: '1px solid #ccc' }}>
                {plan.description}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Pricing rows */}
          {featureList.map((feature, featureIndex) => (
            <tr key={featureIndex} className="feature-row">
              <td className="feature-name" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                {feature.name}
              </td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex} className="plan-features" style={{ textAlign: 'center', verticalAlign: 'middle', borderBottom: '1px solid #ccc' }}>
                  {plan.features[featureIndex]}
                </td>
              ))}
            </tr>
          ))}
          {/* Separate row for "GET STARTED" buttons */}
          <tr className="get-started-row">
            <td></td>
            {plans.map((plan, planIndex) => (
              <td key={planIndex} style={{ textAlign: 'center', verticalAlign: 'middle'}}>
                <button className="get-started-button">GET STARTED</button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
      
      <img src="/blackline.png" alt="Description of the image" style={{ width: '100%', backgroundColor: 'white', marginTop: '10px' }} />
    </div>
  );
};

export default Pricing;
