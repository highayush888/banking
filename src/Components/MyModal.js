import React, { useState, useEffect } from 'react';
import Captcha from './Captcha';
// import HCaptcha from '@hcaptcha/react-hcaptcha';

function MyModal() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [captcha, setCaptcha] = useState('');


  // const [errorMessage, setErrorMessage] = useState('');
  // const [captchaValue, setCaptchaValue] = useState('');
  // const [captchaError, setCaptchaError] = useState('');

  // Function to generate a random captcha
  // const generateCaptcha = () => {
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   let newCaptcha = '';
  //   for (let i = 0; i < 6; i++) {
  //     newCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   setCaptcha(newCaptcha);
  // };

  // useEffect(() => {
  //   // Generate captcha when the modal is opened
  //   generateCaptcha();
  // }, []);

  // const handleSaveChanges = () => {
  //   if (!captchaValue) {
  //     setCaptchaError('Please complete the CAPTCHA');
  //     return;
  //   }
  //   // Validate the form fields here
  //   if (!name || !mobile || !email || !country || !state || !captcha) {
  //     setErrorMessage('Please fill in all fields.');
  //     return;
  //   }
  //   // Proceed with saving changes
  //   console.log('Saving changes...');
  // };

  // const onVerifyCaptcha = (token) => {
  //   setCaptchaValue(token);
  //   // Clear captcha error when captcha value changes
  //   setCaptchaError('');
  // };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Schedule DEMO</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* Input fields */}
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="mobile" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="state" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            {/* <div className="mb-3">
              <div className="input-group">
                <input type="text" className="form-control" id="captcha" placeholder="Enter Captcha" value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button" onClick={generateCaptcha}>Refresh Captcha</button>
              </div>
            </div> */}
            <div>
             <Captcha/>
            </div>
           
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyModal;