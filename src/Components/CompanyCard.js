import React from 'react';

// Define classNames as a constant for better readability and reusability
const cardClasses = "bg-white shadow-lg rounded-lg overflow-hidden";
const headerClasses = "bg-blue-500 p-4";
const imageClasses = "h-20 w-20 mx-auto";
const titleClasses = "text-lg font-semibold";
const categoryClasses = "text-sm text-zinc-600 mt-1";
const descriptionClasses = "text-zinc-700 mt-4";

const CompanyCard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {/* Render multiple Card components */}
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

const Card = () => {
    return (
        <div className={cardClasses}>
            <div className={headerClasses}>
                {/* Image should have an appropriate alt text */}
                <img className={imageClasses} src="https://placehold.co/100x100" alt="Company logo" />
            </div>
            <div className="p-4">
                {/* Ensure text is properly formatted and descriptive */}
                <h3 className={titleClasses}>Company Name: Service Description</h3>
                <p className={categoryClasses}>Category</p>
                <p className={descriptionClasses}>
                    Company partnered with Client to develop a prototype for a groundbreaking project that would unlock immersive virtual reality exploration for users.
                </p>
            </div>
        </div>
    );
};

export default CompanyCard;
