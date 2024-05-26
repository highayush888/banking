
import React from 'react';

const testimonialBgClasses = "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white p-8";
const testimonialTextClasses = "text-2xl font-bold mb-4";
const testimonialContentClasses = "mb-6";
const testimonialImageClasses = "w-full h-auto rounded-lg shadow-lg";
const testimonialQuoteClasses = "text-white dark:text-black text-sm bg-black dark:bg-white bg-opacity-50 p-4 rounded-lg";
const testimonialQuoteAuthorClasses = "text-lg mb-4";
const testimonialQuoteAuthorNameClasses = "font-semibold";

const Testimonial = () => {
    return (
        <div className={testimonialBgClasses}>
            <h2 className={testimonialTextClasses}>Client Testimonials</h2>
            <p className={testimonialContentClasses}>We are trusted by small to mid-sized organizations, Fortune 5000 companies, and major brands to advance their technology objectives through custom software solutions.</p>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <div className="relative">
                        <img src="https://placehold.co/500x300" alt="Client testimonial image" className={testimonialImageClasses} crossorigin="anonymous" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={testimonialQuoteClasses}>
                                "I had a great and pleasurable experience working with Chetu and would highly recommend their services to others."<br /><br />Doug Irwin<br />VP of Operations at LDK Logistics
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <p className={testimonialQuoteAuthorClasses}>"Chetu really helped us speed up the development of our new code projects without taking on expensive new in-house developers. The Chetu team has also given us greater flexibility as we develop new modules and features."</p>
                    <p className={testimonialQuoteAuthorNameClasses}>Will Atkinson, President of CAP Software</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
