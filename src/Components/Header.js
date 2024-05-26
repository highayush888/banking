// import React, { useEffect } from 'react';
// import '../Css/Header.css';





// const Header = () => {
  
//  return (
//     <div className='header-section'>
      
//       <div className="centered-image" >
//       <h1 className='head-text'>CUSTOM MOBILE BANKING <br></br>SOFTWARE DEVELOPMENT</h1>
//       <button className='hire-btn'>HIRE BANKING DEVELOPERS</button>
//       </div>
      
      
//     </div>
//   );
// };

// export default Header;



import React from 'react';
import PropTypes from 'prop-types';
import '../Css/Header.css';

const Header = ({ backgroundImage, heading, heading2, subheading, buttonText, buttonAction }) => {
  return (
    <div className='header-section' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="centered-content">
        <h1 className='head-text'>{heading}</h1>
        <h1 className='head-text'>{heading2}</h1>
        <h2 className='subhead-text'>{subheading}</h2>
        <button className='hire-btn' onClick={buttonAction}>{buttonText}</button>
      </div>
    </div>
  );
};


export default Header;
