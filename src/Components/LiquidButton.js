import React from 'react';
import '../Css/LiquidButton.css'; // Import the CSS file

const LiquidButton = ({ color, href, children }) => {
  return (
    <a className={`btn btn-invert ${color}`} href={href}>
      <div className="liquid-fill"></div>
      {children}
    </a>
  );
};

export default LiquidButton;
