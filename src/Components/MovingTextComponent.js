// MovingTextComponent.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/MovingTextComponent.css';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const MovingTextComponent = () => {
  useEffect(() => {
    // Define the moving animation
    const movingAnimation = () => {
      const texts = document.querySelectorAll('.moving-text');
      const containerWidth = document.querySelector('.moving-container').offsetWidth;

      gsap.fromTo(
        texts,
        { x: containerWidth },
        {
          x: -containerWidth,
          duration: 20,
          ease: 'linear',
          repeat: -1,
        }
      );
    };

    // Add event listener for the load event
    // window.addEventListener('load', movingAnimation);

    // // Cleanup function to remove the event listener
    // return () => {
    //   // Remove event listener when the component unmounts
    //   window.removeEventListener('load', movingAnimation);
    // };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="moving-container">
      {/* Repeat your text elements for the marquee effect */}
      <h1 className="moving-text">Generate Copy</h1>
      <h1 className="moving-text">Text Editor</h1>
      <h1 className="moving-text">Select Templates</h1>
      <h1 className="moving-text">Describe Your Idea</h1>
    </div>
  );
};

export default MovingTextComponent;
