import React from 'react'
import '../Css/Second.css';
import QAndA from './QAndA';
import Accordion from './Accordion';

const Second = () => {
  return (
    <div className='second-container'>
        <div className='secondleft-content'>
            <h2 style={{ fontSize: '2em', }}>NIDHI SOFTWARE Faqs</h2>
            {/* <img src="/side.png" alt="Example Image" className="snipimg" style={{ width: '100%'}} /> */}
            <Accordion/>
            
        </div>

        <div className='secondright-content'>
           <h2 style={{ fontSize: '2em' }}>NIDHI SOFTWARE Faqs</h2>
           <img src="/side.png" alt="Example Image" className="snipimg"  style={{ width: '100%'}}/>
           {/* <QAndA/> */}
           

        </div>
    </div>
  )
}

export default Second