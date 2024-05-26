import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/TwoColumnLayout.css';
import Accordion from '../Components/Accordion';

gsap.registerPlugin(ScrollTrigger);

const TwoColumnLayout = () => {
  useEffect(() => {
    const handleTwoLoad = () => {
      // Animate the columns with stagger effect
      gsap.from('.ecolumnleft', { opacity: 0, y: 50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: '.ecolumnleft', start: 'top 80%' } });
      // Animate the first column's heading
      gsap.from('.ecolumnleft h2', { opacity: 0, y: 20, duration: 0.8, delay: 0.5, scrollTrigger: { trigger: '.ecolumnleft', start: 'top 80%' } });
      // Animate the second column's image
      gsap.from('.ecolumnright img', { opacity: 0, scale: 0.8, duration: 0.8, delay: 1, scrollTrigger: { trigger: '.ecolumnright', start: 'top 80%' } });

      // Color animation for the .container background
      const colors = ['#fffadc', '#ef8dfa7', '#d6ebff']; // Add your desired soft colors
      gsap.to('.container', {
        backgroundColor: () => {
          const color1 = colors[Math.floor(Math.random() * colors.length)];
          const color2 = colors[Math.floor(Math.random() * colors.length)];
          const color3 = colors[Math.floor(Math.random() * colors.length)];
          
          // Blend the colors
          const blendColor = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
          
          return blendColor;
        },
        duration: 3, // Duration of color change
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Reverse the animation to create a smooth transition
        ease: 'power1.inOut', // Adjust the easing function as needed
      });

    };

    // window.addEventListener('load', handleTwoLoad);

    // return () => {
    //   window.removeEventListener('load', handleTwoLoad);
    // };
  }, []);

  return (
    <div className="faqs-container">
      <div className="ecolumnleft">
        {/* Content for the first column */}
        <img src="/snip.png" alt="Example Image" className="snipimg" />
        <h2 style={{ fontSize: '2em' }}>You Can Customize Your Website As You Need.</h2>
        
          <Accordion />
        
        {/* <p>This is the content of the first column.</p> */}
      </div>

      <div className="ecolumnright">
        {/* Content for the second column */}
        <h2 style={{ fontSize: '2em', backgroundColor:'black',color:'white',borderRadius:'8px',padding:'15px'}}>Customize Your Nidhi Website As You Need.</h2>
        <img src="/side.png" alt="Example Image" style={{ width: '100%', padding:'50px'}} />
        {/* <h2>Column 2</h2> */}
        {/* <p>This is the content of the second column.</p> */}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
