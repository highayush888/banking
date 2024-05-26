import React from 'react'
import ModalWithForm from '../Components/ModalWithForm';
import DemoModal from '../Components/DemoModal';
import Cardrs3 from '../Components/Cardrs3';
import Header from '../Components/Header';
import OurTestimonials from '../Components/OurTestimonials';
import CompanyCard from '../Components/CompanyCard';

const Solutions = () => {

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='solu-container'>
      <Header
        backgroundImage="/company.PNG"
        heading="OUR TOP SERVICES"
        heading2="BEST-IN-CLASS SERVICES WE OFFER"
        subheading="Innovative solutions tailored to your needs"
        buttonText="HIRE BANKING DEVELOPERS"
        buttonAction={handleButtonClick}
      />
      
        <h2 className='hehe'>Solutions</h2>
        <OurTestimonials/>
        <CompanyCard/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        {/* <ModalWithForm/> */}
        {/* <DemoModal/>
        <Cardrs3/> */}
        
    </div>
  )
}

export default Solutions;