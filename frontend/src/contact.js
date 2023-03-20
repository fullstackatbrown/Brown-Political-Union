import './App.css';
import React, { useState } from "react";

const FORM_ENDPOINT = "";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div className="text-center h-40 mt-32">
                <div className="text-2xl font-bold">Thank you!</div>
                <div className="mt-6 text-l">We'll be in touch soon.</div>
            </div>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div className="h-40 mt-32 justify-center">
                <div className="text-center text-3xl text-black font-bold">
                    Contacts
                </div>
            </div>
            <div className="ml-6 mb-3 pt-0">
                <div className="text-xl text-black font-bold">
                    First Name
                </div>
                <input
                    type="text"
                    placeholder="Your First name"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-2/5"
                    required
                />
            </div>
            <div className="ml-6 mb-3 pt-0">
                <div className="text-xl text-black font-bold">
                    Last Name
                </div>
                <input
                    type="text"
                    placeholder="Your Last name"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-2/5"
                    required
                />
            </div>
            <div className="ml-6 mb-3 pt-0">
                <div className="text-xl text-black font-bold">
                    Email
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-1/2"
                    required
                />
            </div>
            <div className="ml-6 mb-3 pt-0">
                <div className="text-xl text-black font-bold">
                    Messages
                </div>
                <textarea
                placeholder="Your message"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-gray rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/5"
                required
                />
            </div>
            <div className="flex justify-center mb-3 pt-0">
                <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default Contact;
