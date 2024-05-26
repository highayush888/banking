import React, { useState, useEffect } from 'react';
import { BiLike } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import '../Css/Portfolio.css';

const Portfolio = () => {
    const [jobsDone, setJobsDone] = useState(0);
    const [happyCustomers, setHappyCustomers] = useState(0);
    const [marketInEurope, setMarketInEurope] = useState(0);
    const [developers, setDevelopers] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const targetJobsDone = 20000;
        const targetHappyCustomers = 700000;
        const targetMarketInEurope = 95;
        const targetDevelopers = 2800;

        const animationDuration = 2000; // Animation duration in milliseconds
        const animationInterval = animationDuration / 100; // Interval to update values
        const steps = 100; // Number of steps for animation

        let currentStep = 0;

        const intervalId = setInterval(() => {
            setJobsDone((targetJobsDone / steps) * currentStep);
            setHappyCustomers((targetHappyCustomers / steps) * currentStep);
            setMarketInEurope((targetMarketInEurope / steps) * currentStep);
            setDevelopers((targetDevelopers / steps) * currentStep);

            currentStep++;

            if (currentStep > steps) {
                clearInterval(intervalId);
                setAnimationComplete(true);
            }
        }, animationInterval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="portfolio">
            <div className="bg-teal-500 full-width">
                <div className="flex justify-between items-center p-4">
                    <div className="text-white text-2xl font-bold">Our Portfolio</div>
                    <button className="bg-white text-teal-500 px-4 py-2 rounded">Contact Us</button>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4">
                    {/* Your images */}
                    {/* <img className='' src="f4.png" alt="right-pic" /> */}
                    
                </div>

                <div className="bg-teal-700 p-4 text-white">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="icon-text-container">
                                <BiLike size={50}/>
                                <div className="text-3xl font-bold">{Math.round(jobsDone)}+</div>
                            </div>
                            <div className="text-lg">JOBS DONE</div>
                        </div>
                        <div className="text-center">
                            <div className="icon-text-container">
                                <FaPeopleGroup size={50}/>
                                <div className="text-3xl font-bold">{Math.round(happyCustomers)}+</div>
                            </div>
                            <div className="text-lg">HAPPY CUSTOMERS</div>
                        </div>
                        <div className="text-center">
                            <div className="icon-text-container">
                                <BsFillSuitHeartFill size={50}/> 

                                <div className="text-3xl font-bold">{Math.round(marketInEurope)}%</div>
                            </div>
                            <div className="text-lg">MARKET IN EUROPE</div>
                        </div>
                        <div className="text-center">
                            <div className="icon-text-container">
                                <FaUserTie  size={50}/>
                                <div className="text-3xl font-bold">{Math.round(developers)}+</div>
                            </div>
                            <div className="text-lg">DEVELOPERS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
