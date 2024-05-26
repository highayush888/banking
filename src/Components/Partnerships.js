import React from 'react';

const partnerLogos = [
  { alt: 'Microsoft', src: 'https://placehold.co/100x50' },
  { alt: 'AWS', src: 'https://placehold.co/100x50' },
  { alt: 'Salesforce', src: 'https://placehold.co/100x50' },
  { alt: 'SAP', src: 'https://placehold.co/100x50' },
  { alt: 'UiPath', src: 'https://placehold.co/100x50' },
  { alt: 'BigCommerce', src: 'https://placehold.co/100x50' },
  { alt: 'Oracle', src: 'https://placehold.co/100x50' },
  { alt: 'Autodesk', src: 'https://placehold.co/100x50' }
];

const containerClasses = 'bg-white text-zinc-800 p-8';
const headingClasses = 'text-2xl font-semibold mb-6';
const paragraphClasses = 'mb-6';
const logoGridClasses = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center';
const logoClasses = 'mx-auto';

const Partnerships = () => {
  return (
    <div className={containerClasses}>
      <h2 className={headingClasses}>Partnerships & Affiliations</h2>
      <p className={paragraphClasses}>
        Chetu prides itself on having holistic industry and technological expertise to create, integrate, and deploy truly superior custom software solutions for our clients. To accomplish this goal, Chetu has cultivated a vast ecosystem of partnerships with industry and technology leaders.
      </p>
      <div className={logoGridClasses}>
        {partnerLogos.map((partner, index) => (
          <img key={index} src={partner.src} alt={partner.alt} className={logoClasses} />
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
