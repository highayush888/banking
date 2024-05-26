import React, { useState } from 'react';
import '../Css2/Contactus.css'; // Import your CSS file for Footer styling
import Header from '../Components/Header';
import Contactnew from './Contactnew';
import HelpdeskPage from '../Components/HelpdeskPage';

const handleButtonClick = () => {
  alert('Button clicked!');
};

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validate input
    if (name === 'name') {
      setErrors(prevState => ({
        ...prevState,
        name: value.length < 2 ? 'Name must be at least 2 characters long' : ''
      }));
    } else if (name === 'email') {
      setErrors(prevState => ({
        ...prevState,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : ''
      }));
    } else if (name === 'phone') {
      setErrors(prevState => ({
        ...prevState,
        phone: !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits' : ''
      }));
    } else if (name === 'message') {
      setErrors(prevState => ({
        ...prevState,
        message: value.length < 10 ? 'Message must be at least 10 characters long' : ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send formData to your backend or do any other processing here
    console.log(formData);
  };

  return (
    <>
     <Header
        backgroundImage="/company.PNG"
        heading="CONNECT WITH OUR TEAM"
        heading2="REACH OUT TO US TODAY"
        subheading="Innovative solutions tailored to your needs"
        buttonText="HIRE BANKING DEVELOPERS"
        buttonAction={handleButtonClick}
      />
      <h2 className='hehe'>Contact Us</h2>
      <Contactnew/>
      <HelpdeskPage/>
    </>
  );
};

export default Contactus;