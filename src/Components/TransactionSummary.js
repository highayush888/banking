
import React from 'react';

const cardClasses = "bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 max-w-sm";
const buttonClasses = "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 py-1 px-3 rounded-lg text-sm flex items-center";
const statusClasses = {
    "Payout Pending": "bg-yellow-400",
    "Payout Success": "bg-green-500",
    "Payout Failed": "bg-red-500",
    "Money In": "bg-blue-500",
    "Money Out": "bg-zinc-400"
};

const TransactionSummary = () => {
    return (
        <div className={cardClasses}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Transaction Summary</h2>
                <button className={buttonClasses}>
                    Today
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
            <div className="flex justify-between space-x-4">
                <div className="space-y-3">
                    {Object.entries(statusClasses).map(([status, color]) => (
                        <div key={status} className="flex items-center">
                            <span className={`h-3 w-3 ${color} rounded-full mr-2`}></span>
                            <span>{status}</span>
                            <span className="ml-auto font-bold">
                                {status === "Payout Pending" ? "10,586" :
                                    status === "Payout Success" ? "55,589" :
                                        status === "Payout Failed" ? "30,478" :
                                            status === "Money In" ? "39,269" :
                                                "26,111"}
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <img src="https://placehold.co/100" alt="Transaction chart" className="w-24 h-24 rounded-full" crossorigin="anonymous" />
                </div>
            </div>
        </div>
    );
};

export default TransactionSummary;
