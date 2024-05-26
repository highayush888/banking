import React from 'react'
import Feature from '../Components/Feature'
import Phone from '../Components/Phone'
import Cardrs from '../Components/Cardrs';
import Header from '../Components/Header';
import ApiDevelopmentComponent from '../Components/ApiDevelopmentComponent';
import WhoComponent from '../Components/WhoComponent';


const Products = () => {

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    
    <div className='product-container'>
      <Header
        backgroundImage="/company.PNG"
        heading="WHAT WE OFFER"
        heading2="DISCOVER OUR SERVICES"
        subheading="Innovative solutions tailored to your needs"
        buttonText="HIRE BANKING DEVELOPERS"
        buttonAction={handleButtonClick}
      />
     <h2 className='hehe'>Products</h2>
     <ApiDevelopmentComponent/>
     <WhoComponent/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <Cardrs/>
      <Feature/>
      <Phone/> */}
    </div>
  )
}

export default Products