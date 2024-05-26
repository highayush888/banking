
import React from 'react';

const cardClasses = "max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden";
const flexClasses = "flex items-center p-3 rounded-lg";
const textClasses = "text-sm font-semibold";

const BankCard = () => {
    return (
        <div className={cardClasses}>
            <div className="p-5">
                <img src="https://placehold.co/300x150" alt="Business Meeting Illustration" className="w-full" />
                <h2 className="text-lg font-semibold text-zinc-900 mt-2 mb-4">Business Banking Summary</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className={`${flexClasses} bg-blue-100`}>
                        <img src="https://placehold.co/24" alt="Withdrawal Icon" className="mr-2" />
                        <div>
                            <p className={`text-blue-800 ${textClasses}`}>AePS Withdrawal</p>
                            <p className="text-lg font-semibold text-blue-900">₹ 8552447</p>
                        </div>
                    </div>
                    <div className={`${flexClasses} bg-pink-100`}>
                        <img src="https://placehold.co/24" alt="Statement Icon" className="mr-2" />
                        <div>
                            <p className={`text-pink-800 ${textClasses}`}>Mini-Statement</p>
                            <p className="text-lg font-semibold text-pink-900">₹ 14016</p>
                        </div>
                    </div>
                    <div className={`${flexClasses} bg-zinc-100`}>
                        <img src="https://placehold.co/24" alt="Registration Icon" className="mr-2" />
                        <div>
                            <p className={`text-zinc-800 ${textClasses}`}>Registration</p>
                            <p className="text-lg font-semibold text-zinc-900">18066</p>
                        </div>
                    </div>
                    <div className={`${flexClasses} bg-red-100`}>
                        <img src="https://placehold.co/24" alt="Female Icon" className="mr-2" />
                        <div>
                            <p className={`text-red-800 ${textClasses}`}>Female</p>
                            <p className="text-lg font-semibold text-red-900">19001</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankCard;
