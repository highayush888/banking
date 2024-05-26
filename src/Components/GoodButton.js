import React, { useState } from 'react';
import '../Css/GoodButton.css';
// import { watch } from 'fs';

export default function GoodButton({type, text, id, name, onClick, areaLabel, classd}) {
    const [value, setValue] = useState('');
    const handleClick = () => {
      setValue(value);
    };
  return (
    <button 
    className={classd}
    // img={watch.webp}
    type={type}
      id={id}
      name={name}
      onClick={onClick}
      aria-label={areaLabel}
      
      >
      {text}
  </button>

  );
}
  