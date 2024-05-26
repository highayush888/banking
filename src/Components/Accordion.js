import React, { useState, useEffect } from 'react';
import '../Css/Accordion.css';
import gsap from 'gsap';

const Accordion = ({ index, title, content, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);

    
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={handleToggle}>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
        <button className={` ${isOpen ? 'green-bg' : ''} rounded-button`} >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accord = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    { title: 'Adding Multiple pages', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Running Google ads on your Website', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Fully Responsive Website', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Adding Multiple Styling', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Adding Animations', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Adding Transitions', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Fully Creative!', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Fully Interactive!', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Fully Attractive!', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
  ];

  // useEffect(() => {
  //   const handleAccordLoader = () => {
  //     // GSAP animations for the platform section
  //     // gsap.from('.accordion', { x: -50, delay: 2 });
  //     gsap.to('.accordion-header', { delay: 4});
  //   };

  //   // Add event listener for the load event
  //   window.addEventListener('load', handleAccordLoader);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     // Remove event listener when the component unmounts
  //     window.removeEventListener('load', handleAccordLoader);
  //   };
  // }, []); // Empty dependency array to run the effect only once

  return (
    <div className='acc-body'>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={index}
          index={index}
          title={accordion.title}
          content={accordion.content}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default Accord;
