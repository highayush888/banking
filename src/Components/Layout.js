import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/Layout.css';

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  useEffect(() => {
    const handleLayoutLoad = () => {
      // Animate the columns with stagger effect
      gsap.from('.ecolumn1', { opacity: 0, y: 50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: '.ecolumn1', start: 'top 80%' } });
      gsap.from('.ecolumn2', { opacity: 0, y: 50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: '.ecolumn2', start: 'top 80%' } });
      gsap.from('.ecolumn1 h2', { opacity: 0, y: 20, duration: 0.8, delay: 0.5, scrollTrigger: { trigger: '.ecolumn1', start: 'top 80%' } });
      gsap.from('.ecolumn2 img', { opacity: 0, scale: 0.8, duration: 0.8, delay: 1, scrollTrigger: { trigger: '.ecolumn2', start: 'top 80%' } });
    };

    window.addEventListener('load', handleLayoutLoad);

    return () => {
      window.removeEventListener('load', handleLayoutLoad);
    };
  }, []);

  return (
    <div className="containerlayout">
      <div className="ecolumn1">
        {/* Content for the first column */}
        <div className="top-links">
          <a href="#">DASHBOARD</a>
          <a href="#">PAYMENT GATEWAYS</a>
          <a href="#">AFFILIATE</a>
        </div>
        <div className="content-center">
          <h2 style={{ fontSize: '400%' }}>
            <span style={{ color: 'green' }}>MONITOR</span> <span style={{ color: 'white' }}>USER ACTIVITY</span>
          </h2>

          <div className='ccc' style={{ }}>
            <p style={{ marginBottom: '30px' }}>There are  variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available.</p>
            <p>There are  variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available.</p>
          </div>
          
        </div>
      </div>

      <div className="ecolumn2">
        {/* Content for the second column */}
        <img src="/ui.webp" alt="Example Image" />
        {/* <h2>Column 2</h2> */}
        {/* <p>This is the content of the second column.</p> */}
      </div>
    </div>
  );
};

export default Layout;
