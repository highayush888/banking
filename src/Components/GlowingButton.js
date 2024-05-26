// GlowingButton.js

import React from 'react';
import '../Css/GlowingButton.css';

const GlowingButton = ({ children, onClick }) => {
  return (
    <button className="glowing-container" onClick={onClick}>
      click me here
    </button>
  );
};

export default GlowingButton;
