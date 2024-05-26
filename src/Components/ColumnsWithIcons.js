import React, { useEffect } from 'react';
// import { FaCoffee, FaCode, FaCamera, FaStar, FaApple, FaPlane, FaMusic, FaHeart, FaBook, FaGamepad, FaFilm, FaSmile } from 'react-icons/fa';
import gsap from 'gsap';
import '../Css/ColumnsWithIcons.css';
import Btn from './Btn';

const iconData = [
  { icon: 'f1.png', title: 'Nidhi Company Software', content: 'There are  variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  { icon: 'f2.png', title: 'Patho Lab Software', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  { icon: 'f3.png', title: 'Co-Operative Society Software', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  { icon: 'f4.png', title: 'Gold Loan Software', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  { icon: 'f5.png', title: 'Employee Management Software', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  { icon: 'f6.png', title: 'Micro-Finance Software', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  { icon: 'f7.png', title: 'Product Loan Software', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  
  
];

const ColumnsWithIcons = () => {


    // iconData.forEach((item, index) => {
    //   const column = document.getElementById(`column-${index}`);

      
    // });

  

 
  return (
    <div className="columns-container">
       <h1 style={{fontSize:'2em',borderRadius:'5px', backgroundColor:'#0202a7',color:'white', width:'100%', textAlign:'center'}} className='tracking-in-contract-bck-bottom mb-5'>Our Popular Products</h1>
      {iconData.map((item, index) => (
        <div className="column" key={index} id={`column-${index}`}>
          <img  src={item.icon} className="img-src-feat mb-4" alt={`Icon for ${item.name}`}  />
          {/* <div className="icon-container">{item.icon}</div> */}
          <h3>{item.title}</h3>
          <p className="mb-3" style={{ color: 'black' }}>{item.content}</p>
          <div className='button-group'>
            <button className='good_btn mb-4'>Chat Now</button>
            {/* <button className='good_btn ml-4 mb-4 '>Know More</button> */}
            <button className='text-center text-white bg-blue-700 shadow-lg bg-gradient-to-r from-blue-900
    via-teal-400 to-purple-900 font-semibold p-0 rounded-md px-2 py-1 text-lg hover:from-rose-500 hover:to-violet-500 ml-4 mb-4'>Know More</button>
            {/* <Btn/> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColumnsWithIcons;