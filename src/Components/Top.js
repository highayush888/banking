import React, { useEffect } from 'react';
import '../Css/Top.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin
import GoodButton from './GoodButton';
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with gsap

const Top = () => {
  return (
    <div className="top-container">
      <div className="left-part">
        <h1 className='spec-text tracking-in-contract top-head'>Bank on the Go Anytime, Anywhere</h1>
        <p className='tracking-in-contract top-para'>Chetu’s banking software developers implement custom mobile banking solutions for financial institutions and customers. We make it possible for mobile banking software providers to customize features such as electronic bill payments, remote check deposit, P2P payments, fund transfers between accounts, text messaging and statement downloading and printing for your mobile banking app. Our mobile finance solutions put banking at your fingertips.</p>
      </div>
      <div className="right-part">
        {/* <GoodButton text="Chat" classd="good_btn rounded-2xl">
          <FaWhatsapp />
        </GoodButton> */}
        <button className='good_btn'>
          <span className="icon-text-1">
            <FaWhatsapp />
            <span>CHAT</span>
          </span>
        </button>
        <GoodButton text="Talk To Expert" classd="good_btn rounded-2xl ml-4"/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Change lg:grid-cols-4 to lg:grid-cols-2 */}
    {/* Card 1: Customized Mobile Banking Software */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex"> {/* Add 'flex' class */}
      <img src="https://placehold.co/100x100" alt="Customized Mobile Banking Software" className="mb-4 mr-4" /> {/* Add 'mr-4' class to add margin-right */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Customized Mobile Banking Software</h3>
        <p className="text-zinc-600 text-sm">
          We develop native mobile banking apps for iOS and Android, utilizing cross-platform tools such as Xamarin and Apache Cordova. Our mobile banking application development services feature easily navigable UI and speedy UX to enhance customer experience on smartphones, tablets, and wearable devices. We program traditional features, like personal financial management, and advanced qualities, like virtual agents.
        </p>
      </div>
    </div>
    {/* Card 2: Mobile Banking Security Solutions */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex"> {/* Add 'flex' class */}
      <img src="https://placehold.co/100x100" alt="Mobile Banking Security Solutions" className="mb-4 mr-4" /> {/* Add 'mr-4' class to add margin-right */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Mobile Banking Security Solutions</h3>
        <p className="text-zinc-600 text-sm">
          Security is a top concern when Chetu's developers create mobile banking apps. We deploy advanced security features to safeguard transactional data by using SSL encryption, Wireless Transport Layer Security (WTLS), device registration and two-factor authentication (2FA). We can utilize a native device’s hardware for biometric verification using Fingerprint ID, voice, facial recognition or a gesture-based password method.
        </p>
      </div>
    </div>
    {/* Card 3: CORE Banking System Integration */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex"> {/* Add 'flex' class */}
      <img src="https://placehold.co/100x100" alt="CORE Banking System Integration" className="mb-4 mr-4" /> {/* Add 'mr-4' class to add margin-right */}
      <div>
        <h3 className="text-lg font-semibold mb-2">CORE Banking System Integration</h3>
        <p className="text-zinc-600 text-sm">
          We integrate mobile banking apps with a financial institution's existing back-end CORE banking system, using RESTful APIs, which allow seamless cross-channel interactions. The integration offers the convenience of multiple banking features, such as the ability to transfer funds between accounts in real time, access bank statements and name debit and credit cards for identification.
        </p>
      </div>
    </div>
    {/* Card 4: Check Remote Deposit Capture */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex"> {/* Add 'flex' class */}
      <img src="https://placehold.co/100x100" alt="Check Remote Deposit Capture" className="mb-4 mr-4" /> {/* Add 'mr-4' class to add margin-right */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Check Remote Deposit Capture</h3>
        <p className="text-zinc-600 text-sm">
          Scan checks from mobile devices and deposit money quicker with remote deposit capture. We develop Remote Deposit Capture (RDC) modules integrated with your device’s camera function to allow for check deposit truncation and conversion of checks into ACH transactions in compliance with Check 21 mandates. We also develop custom integrations with CRMs to deliver confirmation emails and in-app messaging.
        </p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};

export default Top;
