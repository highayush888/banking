import React from 'react';
import './ComponentWithULs.css'; // Import CSS file for styling

const ComponentWithULs = () => {
  return (
    <div className="component-container">
      {/* Render 6 unordered lists */}
      {[...Array(6)].map((_, index) => (
        <ul key={index} className="dot-list">
          <li className="dot">Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      ))}
    </div>
  );
};

export default ComponentWithULs;



.component-container {
    display: flex;
    justify-content: space-around;
  }
  
  .dot-list {
    list-style: none;
    padding-left: 20px;
  }
  
  .dot {
    position: relative;
  }
  
  .dot:before {
    content: '\2022';
    position: absolute;
    left: -20px;
  }
  
