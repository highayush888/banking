import React from 'react'
import '../Css/Vertical.css'; // Import the CSS file

export const Vertical = () => {
  return (
    <div className='vertical-container'>
     <div className='left-vertical'>
        <p>Enabling payments of 8,000,000+ businesses powered by Razorpay Group</p>
        <p>We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users.</p>
        <button>Get Started</button>
     </div>
     
     <div className='right-vertical'>
     <div className='vertical-img'>
        <img src="vertical.png" alt="Description of your image" />
     </div>
     </div>
    </div>
  )
}

export default Vertical;