import React from 'react'
import '../Css/Faqs.css';
import QAndA from './QAndA';
import Accordion from './Accordion';

const Faqs = () => {
  return (
    <div className='faqs-container'>
        <div className='faqsleft-content'>
            <h2 style={{ fontSize: '2em', }}>NIDHI SOFTWARE Faqs</h2>
            <img src="/side.png" alt="Example Image" className="snipimg" style={{ width: '100%'}} />
            
        </div>

        <div className='faqsright-content'>
           <h2 style={{ fontSize: '2em' }}>NIDHI SOFTWARE Faqs</h2>
           {/* <img src="/side.png" alt="Example Image" className="snipimg"  style={{ width: '100%'}}/> */}
           {/* <QAndA/> */}
           <Accordion/>

        </div>
    </div>
  )
}

export default Faqs;