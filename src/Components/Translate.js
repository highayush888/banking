// import React, { useState, useEffect } from 'react';
// import googleTranslate from 'google-translate-api';


// const Translate = ({ children, targetLanguage }) => {
//   const [translatedText, setTranslatedText] = useState('');

//   const handleTranslate = async () => {
//     try {
//       const textToTranslate = String(children);
//       const translation = await googleTranslate(textToTranslate, {
//         to: targetLanguage,
//         // Use the CORS Anywhere proxy
//         baseUrl: 'https://cors-anywhere.herokuapp.com/https://translate.google.com',
//       });
//       setTranslatedText(translation.text);
//     } catch (error) {
//       console.error('Translation error:', error);
//     }
//   };

//   useEffect(() => {
//     if (targetLanguage !== 'en') {
//       handleTranslate();
//     } else {
//       // Reset translation if the target language is English
//       setTranslatedText('');
//     }
//   }, [children, targetLanguage]);

//   return (
//     <div className="translation-container">
//       {translatedText && (
//         <div className="translated-text">
//           <strong>Translated:</strong> {translatedText}
//         </div>
//       )}
//       {children}
//     </div>
//   );
// };

// export default Translate;
