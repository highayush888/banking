import React from 'react';

// Define the CSS keyframes for the marquee animation
const marqueeKeyframes = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

// Apply styles using a style tag
const styles = `
  .marquee-container {
    display: flex;
    align-items: center;
    space-x-4;
    overflow: hidden;
    background-color: #e0e0e0; /* Equivalent to bg-zinc-200 */
    /* Dark mode background color */
  }
  .marquee-icon {
    height: 3rem; /* Equivalent to h-12 */
    width: 3rem; /* Equivalent to w-12 */
    animation: marquee 10s linear infinite;
  }
  /* Inject keyframes into the style */
  ${marqueeKeyframes}
`;

const ICONS = [
  "https://placehold.co/50",
  "https://placehold.co/50",
  "https://placehold.co/50",
  "https://placehold.co/50",
  "https://placehold.co/50",
  "https://placehold.co/50",
  "https://placehold.co/50",
  "https://placehold.co/50"
];

const MarqueeIcons = () => {
  return (
    <>
      {/* Inject styles into the document */}
      <style>{styles}</style>
      <div className="marquee-container">
        {ICONS.map((icon, index) => (
          <img key={index} alt={`Icon ${index + 1}`} src={icon} className="marquee-icon" />
        ))}
      </div>
    </>
  );
};

export default MarqueeIcons;
