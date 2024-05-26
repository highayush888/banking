
import React from 'react';

// Shared Tailwind CSS classes
const flexItemsCenter = 'flex items-center';
const flex = 'flex';
const block = 'block';
const mt1 = 'mt-1';
const px3 = 'px-3';
const py2 = 'py-2';
const border = 'border';
const roundedMd = 'rounded-md';
const shadowSm = 'shadow-sm';
const focusOutlineNone = 'focus:outline-none';
const focusRingIndigo = 'focus:ring-indigo-500';
const focusBorderIndigo = 'focus:border-indigo-500';
const textZinc700 = 'text-zinc-700';

const Contactnew = () => {
    return (
        <div className="bg-zinc-800 text-white p-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                    <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className="space-y-4">
                        <ContactInfo iconUrl="https://placehold.co/40x40" title="Address" info="4671 Sugar Camp Road, Owatonna, Minnesota, 55060" />
                        <ContactInfo iconUrl="https://placehold.co/40x40" title="Phone" info="507-475-60945-6094" />
                        <ContactInfo iconUrl="https://placehold.co/40x40" title="Email" info="wrub7d78ioe@temporary-mail.net" />
                    </div>
                </div>
                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <SendMessageForm />
                </div>
            </div>
        </div>
    );
};

const ContactInfo = ({ iconUrl, title, info }) => {
    return (
        <div className={flexItemsCenter}>
            <img src={iconUrl} alt={title + " Icon"} className="mr-4" />
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    );
};

const SendMessageForm = () => {
    return (
        <div className="bg-white text-zinc-800 p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="fullName" className={`block text-sm font-medium ${textZinc700}`}>Full Name</label>
                    <input type="text" id="fullName" name="fullName" className={`${mt1} ${block} w-full ${px3} ${py2} ${border} ${roundedMd} ${shadowSm} ${focusOutlineNone} ${focusRingIndigo} ${focusBorderIndigo}`} placeholder="Full Name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className={`block text-sm font-medium ${textZinc700}`}>Email</label>
                    <input type="email" id="email" name="email" className={`${mt1} ${block} w-full ${px3} ${py2} ${border} ${roundedMd} ${shadowSm} ${focusOutlineNone} ${focusRingIndigo} ${focusBorderIndigo}`} placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className={`block text-sm font-medium ${textZinc700}`}>Message</label>
                    <textarea id="message" name="message" rows="4" className={`${mt1} ${block} w-full ${px3} ${py2} ${border} ${roundedMd} ${shadowSm} ${focusOutlineNone} ${focusRingIndigo} ${focusBorderIndigo}`} placeholder="Type your Message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contactnew;
