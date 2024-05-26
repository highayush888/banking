// ScrollButton.js

import React from 'react';
import '../Css/ScrollButton.css';


const ScrollButton = ({ onClick }) => {
  return (
    <button className="scroll-button" onClick={onClick}>
      Schedule Demo.
    </button>
  );
};

export default ScrollButton;
