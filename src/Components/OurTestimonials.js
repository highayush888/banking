
import React from 'react';

const testimonialClasses = "max-w-md p-6 border border-zinc-300 rounded-lg shadow-lg";
const quoteClasses = "text-6xl text-zinc-400";
const borderClasses = "w-10 border-t-2 border-zinc-400";
const textClasses = "text-zinc-600";
const authorClasses = "mt-4 font-semibold";

const Testimonial = ({ quote, text, author }) => {
    return (
        <div className={testimonialClasses}>
            <div className="flex items-center gap-2 mb-4">
                <span className={quoteClasses}>“</span>
                <div className={borderClasses}></div>
            </div>
            <p className={textClasses}>{text}</p>
            <div className="flex items-center gap-2">
                <div className={borderClasses}></div>
                <span className={quoteClasses}>”</span>
            </div>
            <p className={authorClasses}>{author}</p>
        </div>
    );
};

const OurTestimonials = () => {
    return (
        <div className="bg-white p-8">
            <h2 className="text-center text-3xl font-semibold mb-10">Hear What Our Clients Have to Say</h2>
            <div className="flex flex-wrap justify-center gap-10">
                <Testimonial
                    quote="“"
                    text="We could not have done this without Chetu. We really appreciate the high standards and ethics the Chetu team members have shown throughout this project, which is a really good reflection on your company. It is difficult in today's world to find people who have a work ethic like this, so it has been a very refreshing change. The new “whiteboard” feature is super cool as are all the cool viewing features you added for the images and videos."
                    author="Creative Director, Entertainment Industry"
                />
                <Testimonial
                    quote="“"
                    text="We are very pleased so far with the work by Pankaj and his team at Chetu. We are incredibly impressed with the level of organization, communication, speed, skill and understanding that Chetu has shown in regards to our requests and needs for a custom made CRM. We 100% know we made the right choice in trusting Chetu with this major undertaking."
                    author="Director of Operation, Hospitality Industry"
                />
            </div>
        </div>
    );
};

export default OurTestimonials;
