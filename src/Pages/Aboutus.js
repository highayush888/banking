import React from 'react'
import '../Css2/Aboutus.css'; // Import your CSS file for Footer styling
import Faqs from '../Components/Faqs';
import Header from '../Components/Header';
import EmployeeTestimonials from '../Components/EmployeeTestimonials';
import PrivacyComponent from '../Components/k';

const Aboutus = () => {

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Header
        backgroundImage="/company.PNG"
        heading="OUR STORY AND MISSION"
        heading2="WHOW WE ARE AND WHAT WE DO"
        subheading="Innovative solutions tailored to your needs"
        buttonText="HIRE BANKING DEVELOPERS"
        buttonAction={handleButtonClick}
      />
    <h1 className='hehe'>About Us</h1>
    <EmployeeTestimonials/>
    <PrivacyComponent/>
    <div className='aboutus-container'>
        
        {/* <div className='left-aboutus'>
        <img className='' src="team.png" alt="Logo" />
        </div>
        
        <div className='right-aboutus'>
          <h1 className='ty'>INFOCART GROUP</h1>
          <p>
            INFOCART GROUP
            This INFOCART GROUP is a group of companies having company like IDSHAAT ECOMMERCE AND SERVICES PRIVATE LIMITED by Idshaat Ecommerce And Services Private Limited. Idshaat Ecommerce And Services Private Limited is a Private incorporated on 18 January 2019. It is classified as Non-govt company and is registered at Registrar of Companies, Kanpur. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 1,000,000. It is inolved in Business activities n.e.c.
            Idshaat Ecommerce And Services Private Limited's Annual General Meeting (AGM) was last held on 30 November 2021 and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 31 March 2021.
            Directors of Idshaat Ecommerce And Services Private Limited are Prakash Kumar, Ravind Prasad and .
            Idshaat Ecommerce And Services Private Limited's Corporate Identification Number is (CIN) U74999UP2019PTC112555 and its registration number is 112555.Its Email address is prakashkr2081@gmail.com and its registered address is C-339, ALPHA-1 GREATER NOIDA GAUTAM BUDH NAGAR Gautam Buddha Nagar UP 201310 IN .</p>
                    
        </div> */}

      
    </div>
    {/* <Faqs/> */}
    </>
  )
}

export default Aboutus;