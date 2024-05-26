import React, { useState, useEffect } from 'react';
import '../Css/Captcha.css';

const Captcha = () => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
      generateCaptcha();
    }, 60000); //60 seconds

    return () => clearTimeout(timer); //function to clear the timer if the component unmounts / message or captchaCode changes
  }, [message , captchaCode]);

  const generateCaptcha = () => {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';
    for (var i = 0; i < 6; i++) {
      code += alpha.charAt(Math.floor(Math.random() * alpha.length));
    }
    setCaptchaCode(code);
    setMessage('');
  };

  const validateCaptcha = () => {
    var string1 = captchaCode;
    var string2 = document.getElementById('txtInputCaptcha').value.trim();
    if (string1 === string2) {
      setMessage('CAPTCHA validation successful');
    } else {
      setMessage('CAPTCHA validation failed');
    }
  };

  return (
    <div className="flex flex-col items-center">
      {message && <div className={message.includes('successful') ? 'text-green-600' : 'text-red-600'}>{message}</div>}
      <div id="mainCaptcha" className="text-white text-l font-bold">{captchaCode}</div>
      <input type="text" id="txtInputCaptcha" className="border border-gray-300 rounded-md focus:outline-none" />
      <button onClick={validateCaptcha} className="bg-blue-500 text-white py-1 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Validate CAPTCHA</button>
      <button onClick={generateCaptcha} className="bg-gray-300 text-gray-700 rounded-md shadow-md ml-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">Generate New CAPTCHA</button>
    </div>
  );
};

export default Captcha;
