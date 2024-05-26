import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';
import Cardrs1 from './Cardrs1';
import Cardrs2 from './Cardrs2';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
    if (showProductsDropdown)
      setShowProductsDropdown(false);

    if (showSolutionDropdown)
      setShowSolutionDropdown(false);
  };

  const toggleProdcutsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);

    if (showSolutionDropdown)
      setShowSolutionDropdown(false);
  };

  const toggleSolutionDropdown = () => {
    setShowSolutionDropdown(!showSolutionDropdown);

    if (showProductsDropdown)
      setShowProductsDropdown(false);
  };

  return (
    <div className={`mynavbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="logo">
      
      <img 
          src={scrolling ? "logo-new-home.png" : "chetu-logo-white.png"} 
          alt="Logo" 
          style={{ mixBlendMode: 'multiply' }} 
        />
      </div>

      {/* Navigation links for larger screens */}
      <div className={`nav-links ${showNav ? 'show' : ''}`}>
        <div className='home'>
          <Link to="/home" className="a">HOME</Link>
        </div>
        <div className='about'>
          <Link to="/aboutus" className="a">ABOUT</Link>
        </div>
        
        <div className='products'>  {/* Onclick function product dropdown */}
          <Link to="/products" className="a" onClick={toggleProdcutsDropdown}>
            SERVICES {showProductsDropdown ? <div className="square-icon">-</div> : <div className="square-icon">+</div>}
          </Link>
          <div className={`products-dropdown ${showProductsDropdown ? 'show' : ''}`}> {/* show class added for  product dropdown */}
            {/* <span className='dropdown-span'>Products</span> */}
            <ul className='products-dropdown-modal'>
              <li className='products-dropdown-items'><a href='#'>Nidhi Company Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Micro Finance Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Gold Loan Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Group Loan Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Co-Operative Society Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Co-Operative Bank Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Money Transfer Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Recharge & Bill Payment Software</a></li>
              <li className='products-dropdown-items'><a href='#'>AePS & Micro-ATM Software</a></li>
              <li className='products-dropdown-items'><a href='#'>Path Lab Software</a></li>
              {/* <Cardrs1/> */}
              
            </ul>
         </div>
        </div>
        
        <div className='solutions'> {/* Onclick function solution dropdown */}
          <Link to="/solutions" className="a" onClick={toggleSolutionDropdown}>
            TOP SERVICES {showSolutionDropdown ? <div className="square-icon">-</div> : <div className="square-icon">+</div>}
          </Link>
          <div className={`solutions-dropdown ${showSolutionDropdown ? 'show' : ''}`}> {/* show class added for  solution dropdown */}
        <span className='dropdown-span'>Solutions</span>
            <ul className='solutions-dropdown-modal'>
              <li className='solutions-dropdown-items'><a href='#'>Website Development</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Portal Development</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Mobile App Development</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Banking Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'>loan & Finance Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Education & Online Exam Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Real e-State Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Accounting & Billing Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Institute & College Management Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Hospital Management Software</a></li>
              <li className='solutions-dropdown-items'><a href='#'> E-Commerce Software Development</a></li>
              <li className='solutions-dropdown-items'><a href='#'>Travel Booking Software Development</a></li>
              <li className='solutions-dropdown-items'><a href='#'></a></li>
              {/* <Cardrs2/> */}
              
            </ul>
        </div>
        </div>
        
        {/* <div className='partners'>
          <Link to="/partners" className="a">Partners</Link>
        </div>
        <div className='resources'>
          <Link to="/resources" className="a">Resources</Link>
        </div>
        <div className='support'>
          <Link to="/support" className="a">Support</Link>
        </div> */}
        <div className='contact'>
          <Link to="/contact" className="a">CONTACT</Link>
        </div>
      </div>

      {/* Language and Schedule Demo for larger screens */}
      {/* <div className='language-scheduleDemo'>
        <ul className="dropdown-modal">
          <li className="dropdown-modal-items"><a href="">English</a></li>
        </ul>
      </div> */}
      <div className='schedule-demo-button'>
        <button type="button" className="btn-btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Schedule Demo
        </button>
      </div>

      {/* Toggler button for small screens */}
      <button
        className={`navbar-toggler d-lg-none ${showNav ? 'open' : ''}`}
        type="button"
        onClick={toggleNav}
      >
        <span className="d-lg">
          {showNav ? <RxCross2 className="menu-button"/> : <FaBars className="menu-button"/>}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
