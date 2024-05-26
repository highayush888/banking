// Footer.js
import React, { useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP
import '../Css/Footer.css'; // Import your CSS file for Footer styling

const Footer = () => {
  // useEffect(() => {
    // Function to handle the GSAP animation
    const animateH3Elements = () => {
      gsap.from('.footer-column h2', {
        opacity: 0,
        y: -50,
        stagger: 0.2,
        duration: 3,
        repeat: -1,
        ease: 'power3.inOut',
      });
    };

  //   // Add event listener to the button

  //   window.addEventListener('load', animateH3Elements);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('load', animateH3Elements);
  //   };
  // }, []); // Run the animation only once when the component mounts

  return (
    <footer className="footer-container">
      <div className="footer-row" id="news-section">
        <div className="footer-left">
          <h3>AIHub is built for everyone.</h3>
          <p>Join us today and experience the power of AI-powered text creation for yourself!</p>
          <button className="animate-button">Get 100 words for free</button>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h2>MARKETERS</h2>
            <h2>STUDENTS</h2>
            <h2>WRITERS</h2>
            <h2>DEVELOPERS</h2>
            <h2>ENTREPRENEURS</h2>
          </div>
        </div>
      </div>
      <div className="footer-row" id="newsletter-section">
        <div className="footer-left">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and updates!</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="#">Account</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-column">
            <h3>PRESS</h3>
            <a href="#">Media</a>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </div>
      <br />
      <div className="footer-row" id="disclaimer-section">
        <p className="disclaimer">
          2024 &copy; NBFCSOFTWARES.PRO! . All images are for demo purposes only.
          These Terms will be applied fully and affect your use of this Website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
