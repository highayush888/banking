
import React from 'react';

const cardClasses = "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white py-12 px-4";
const headingClasses = "text-center text-3xl font-bold mb-10";
const flexClasses = "flex justify-center items-center gap-8";
const columnClasses = "flex flex-col items-center";
const imageClasses = "mb-2";
const screenshotClasses = "shadow-lg";

const BankingSolutions = () => {
    return (
        <div className={cardClasses}>
            <h2 className={headingClasses}>OUR BANKING SOFTWARE SOLUTIONS INCLUDE</h2>
            <div className={flexClasses}>
                <div className={columnClasses}>
                    <img src="https://placehold.co/100x100" alt="Placeholder" className={imageClasses} />
                    <img src="https://placehold.co/100x100" alt="Placeholder" className={imageClasses} />
                    <img src="https://placehold.co/100x100" alt="Placeholder" className={imageClasses} />
                </div>
                <div>
                    <img src="https://placehold.co/300x200" alt="Mobile Banking App Screenshot" className={screenshotClasses} />
                </div>
                <div className={columnClasses}>
                    <img src="https://placehold.co/100x100" alt="Placeholder" className={imageClasses} />
                    <img src="https://placehold.co/100x100" alt="Placeholder" className={imageClasses} />
                    <img src="https://placehold.co/100x100" alt="Placeholder" className={imageClasses} />
                </div>
            </div>
        </div>
    );
};

export default BankingSolutions;
