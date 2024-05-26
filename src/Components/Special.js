import React from 'react';
import '../Css/Special.css';

const Special = () => {
  return (
    <div className='container-special'>
      <h1 className="spec-text">OUR BANKING SOFTWARE SOLUTIONS INCLUDE</h1>

      <div className='content-wrapper'>
        <div className='spec2-left'>
          <img className='spec2-pics-left' src="f1.png" alt="left-pic" />
          <img className='spec2-pics-left' src="f2.png" alt="left-pic" />
          <img className='spec2-pics-left' src="f3.png" alt="left-pic" />
        </div>

        <div className='spec2-middle'>
          <img className='spec2-pics' src="bank.png" alt="mid-pic" />
        </div>

        <div className='spec2-right'>
          <img className='spec2-pics-right' src="f4.png" alt="right-pic" />
          <img className='spec2-pics-right' src="f5.png" alt="right-pic" />
          <img className='spec2-pics-right' src="f6.png" alt="right-pic" />
        </div>
      </div>
    </div>
  );
}

export default Special;
