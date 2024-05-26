import React from 'react';
import '../Css/TppWidget.css';

const TppWidget = () => {
  return (
    <div className="tpp_widget">
      {/* You can add inline styles if needed */}
      {/* <div className="tpp_widget" style={{ backgroundColor: '#00008b', color: 'white' }}> */}
      <div className="tpprow" style={{ width: '10px' }}>
        <div className="tppcol">Specialties</div>
        <div className="tppcol">Procedures</div>
        <div className="tppcol">Prohealth</div>
      </div>
    </div>
  );
}

export default TppWidget;
