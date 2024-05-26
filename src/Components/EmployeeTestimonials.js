import React from 'react';

const testimonialClasses = {
    container: 'bg-white text-zinc-800 p-8',
    title: 'text-3xl font-semibold text-center mb-6',
    flexContainer: 'flex flex-col md:flex-row md:items-start justify-center gap-8',
    imageContainer: 'max-w-md',
    image: 'w-24 h-24 rounded-full mx-auto mb-4',
    quote: 'text-center italic',
    name: 'font-semibold text-center mt-4',
    position: 'text-center text-sm',
    videoContainer: 'max-w-xl',
    video: 'w-full',
    playButton: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center',
    playIcon: 'w-8 h-8',
    time: 'text-center text-xs mt-1'
};

const EmployeeTestimonials = () => {
    return (
        <div className={testimonialClasses.container}>
            <h2 className={testimonialClasses.title}>Employee Testimonials</h2>
            <div className={testimonialClasses.flexContainer}>
                <div className={testimonialClasses.imageContainer}>
                    <img className={testimonialClasses.image} src="https://placehold.co/96x96" alt="Employee Photo" />
                    <blockquote className={testimonialClasses.quote}>
                        "Chetu promotes an atmosphere that embraces continual learning at both the industrial and technological levels. The fact that each day I am faced with a new opportunity to learn and grow is one reason I love working at Chetu."
                    </blockquote>
                    <p className={testimonialClasses.name}>Atit Shah</p>
                    <p className={testimonialClasses.position}>Director of Operations</p>
                </div>
                <div className={testimonialClasses.videoContainer}>
                    <div className="relative">
                        <img className={testimonialClasses.video} src="https://placehold.co/640x360" alt="Employee Video" />
                        <button className={testimonialClasses.playButton} aria-label="Play Video">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={testimonialClasses.playIcon}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12L15.75 7.5V16.5L6.75 12z" />
                            </svg>
                        </button>
                    </div>
                    <p className={testimonialClasses.time}>0:00 / 1:38</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTestimonials;
