
import React from 'react';

const cardClasses = 'w-full md:w-1/2 lg:w-1/3 p-4';
const textClasses = 'mb-2';
const titleClasses = 'font-semibold text-lg mb-2';

const ApiDevelopmentComponent = () => {
    return (
        <div className="bg-white text-zinc-800 p-6">
            <h2 className="text-xl font-bold mb-4">Hire Experienced and Dedicated API Developers</h2>
            <p className="mb-6">Chetu's custom API solutions support a range of integration protocols, including REST, SOAP, XML, and RPC API. Our developers have extensive experience creating custom application programming interfaces using these protocols to ensure seamless integration between your systems.</p>
            <div className="flex flex-wrap justify-between">
                <div className={cardClasses}>
                    <img src="https://placehold.co/100x100" alt="Custom Artificial Intelligence API Solutions" className={textClasses} />
                    <h3 className={titleClasses}>Custom Artificial Intelligence API Solutions</h3>
                    <p>Our developers integrate artificial intelligence software using machine learning algorithms, natural language processing, computer vision, and other AI techniques to build web APIs that can be used for various applications, such as customer service chatbots, fraud detection, recommendation engines, and predictive analytics.</p>
                </div>
                <div className={cardClasses}>
                    <img src="https://placehold.co/100x100" alt="Custom API Interface Integrations" className={textClasses} />
                    <h3 className={titleClasses}>Custom API Interface Integrations</h3>
                    <p>We specialize in building custom REST APIs to enhance your current off-the-shelf solution or integrate third-party public APIs that enables your software solution to seamlessly interface with other apps, devices, and business systems.</p>
                </div>
                <div className={cardClasses}>
                    <img src="https://placehold.co/300x500" alt="API Mobile App Example" className={textClasses} />
                </div>
            </div>
        </div>
    );
};

export default ApiDevelopmentComponent;
