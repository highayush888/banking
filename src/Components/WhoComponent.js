import React from 'react';

const cardClasses = "flex flex-col items-center p-4 shadow-lg rounded-lg";
const textClasses = "text-sm text-zinc-600 mt-2";

const Card = ({ imageUrl, altText, title, description }) => {
    return (
        <div className={cardClasses}>
            <img src={imageUrl} alt={altText} className="mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className={textClasses}>{description}</p>
        </div>
    );
};

const WhoComponent = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                    imageUrl="https://placehold.co/100x100"
                    altText="Real-Time Communication"
                    title="Real-Time Communication"
                    description="Our application developers work within your time zone to allow real-time collaboration and a true 'branch location' feel, ensuring full availability during your business hours."
                />
                <Card
                    imageUrl="https://placehold.co/100x100"
                    altText="Scalability & Support"
                    title="Scalability & Support"
                    description="We work with you based on your software development objectives to bring you the most value and the quickest return on investment while defining tactics and a dedicated team to your project."
                />
                <Card
                    imageUrl="https://placehold.co/100x100"
                    altText="Innovation & Efficiency"
                    title="Innovation & Efficiency"
                    description="Our team leverages the latest technologies to deliver innovative solutions efficiently, ensuring your business stays ahead of the competition."
                />
                <Card
                    imageUrl="https://placehold.co/100x100"
                    altText="Dedicated Teams"
                    title="Dedicated Teams"
                    description="We provide dedicated teams tailored to your project's needs, ensuring focused efforts and consistent progress towards your goals."
                />
            </div>
        </div>
    );
};

export default WhoComponent;
