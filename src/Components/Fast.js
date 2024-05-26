// Fast.js


import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin
import '../Css/Fast.css'; // Import the CSS file
import { GoArrowRight } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with gsap

const Fast = () => {
  // useEffect(() => {
    const handleFastLoad = () => {
      gsap.from('.fast-title', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.fast-title',
          start: 'top 90%',
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.bouncing-box',
          start: 'top 90%',
        },
      });

      tl.staggerFrom('.bouncing-box h3', 0.5, { opacity: 0, y: 50 }, 0.2);

      // Animate falling-box h3 elements
      gsap.from('.falling-box h3', {
        opacity: 0,
        y: -500,
        duration: 3,
        stagger: 0.2, // Stagger the animation for each element
        ease: 'power3.out', // Use an easing function for a natural fall effect
        scrollTrigger: {
          trigger: '.falling-box',
          start: 'top 90%',
        },
      });

      // Add event listeners for mouseover and mouseout
      const fallingBoxItems = document.querySelectorAll('.falling-box h3');

      // fallingBoxItems.forEach((item) => {
      //   item.addEventListener('mouseover', handleMouseOver);
      //   item.addEventListener('mouseout', handleMouseOut);
      // });

      // Handle mouseover event
      function handleMouseOver(event) {
        const target = event.target;
        gsap.to(target, { y: -500, duration: 3 });
      }

      // Handle mouseout event
      function handleMouseOut(event) {
        const target = event.target;
        gsap.to(target, { y: 0, duration: 3 });
      }
    };

  //   // Add event listener for the load event
  //   window.addEventListener('load', handleFastLoad);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     // Remove event listener when the component unmounts
  //     window.removeEventListener('load', handleFastLoad);
  //   };
  // }, []); // Empty dependency array to run the effect only once

  return (
    <div className="fast-container">
      
      <img className="arrowimg" src="/arrow.png" alt="Example" />
      <h1 className="fast-title">87x Faster</h1>
      <p className="fast-para">Compared to Manual Copywriting</p>
      {/* Six bouncing h3 elements */}
      <div className="bouncing-box">
        <h5>Help me plan my trip</h5>
        <h5>Suggest me something</h5>
        <h5>This is random text</h5>
        <h5>This will animate</h5>
        <h5>Making it work</h5>
        <h5>Life as Party Never Ends</h5>
      </div>

      {/* Six falling h3 elements */}
      <div className="bouncing-box">
        <h5>Create 3 cousre menu</h5>
        <h5>Help me get fit</h5>
        <h5>help me plan my trip</h5>
        <h5>Suggest a post title</h5>
        <h5>Make me a meal</h5>
        <h5>Help me write a story</h5>
      </div>
    </div>
  );
};

export default Fast;
