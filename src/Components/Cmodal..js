
import React from 'react';

const modalClasses = "fixed inset-0 bg-zinc-600 bg-opacity-50 flex justify-center items-center";
const modalContentClasses = "bg-white p-5 rounded-lg max-w-lg mx-auto flex";
const closeButtonClasses = "absolute top-3 right-3 text-zinc-600 hover:text-zinc-800";
const inputClasses = "mb-2 p-2 border rounded w-full";
const buttonClasses = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full";
const textClasses = "text-zinc-500";
const linkClasses = "text-blue-500";

const Cmodal = () => {
  const closeModal = () => {
    document.querySelector('.fixed').style.display = 'none';
  };

  return (
    <div className={modalClasses}>
      <div className={modalContentClasses}>
        <div className="bg-blue-500 w-1/6"></div>
        <div className="w-5/6 pl-5">
          <button className={closeButtonClasses} onClick={closeModal}>×</button>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/100x100" alt="Ebook Cover" className="mb-4" />
            <h2 className="text-lg font-semibold">Enter your email to unlock</h2>
            <h3 className="text-blue-500">9 Proven Strategies</h3>
            <p className={`${textClasses} text-sm mb-4`}>For Successful Software Development</p>
            <input type="text" placeholder="Full Name" className={inputClasses} />
            <input type="text" placeholder="Phone Number" className={inputClasses} />
            <input type="email" placeholder="Email" className={inputClasses} />
            <button className={buttonClasses}>YES! GIVE ME THE FREE E-BOOK</button>
            <p className={`${textClasses} text-xs mt-3`}>
              This site is protected by reCAPTCHA and the Google <a href="#" className={linkClasses}>Privacy Policy</a> and <a href="#" className={linkClasses}>Terms of Service</a> apply.
            </p>
            <p className={`${textClasses} text-xs`}>* By completing this form you are signing up to receive our emails and can unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cmodal;
