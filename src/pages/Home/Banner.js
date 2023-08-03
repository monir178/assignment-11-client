// Banner.js
import React from 'react';
import './Banner.css';
import { MdContactMail } from 'react-icons/md';
const Banner = () => {
    return (
        <div
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
            className="hero py-8 lg:py-20 mx-auto w-full lg:w-11/12 my-8 rounded-2xl text-center"
        >
            <div className="hero-content">
                <div className="w-full">
                    <h1 className="text-3xl lg:text-7xl font-bold gradient-text">
                        <span className=''>Snapshot</span> Stories
                    </h1>
                    <p className="py-12 w-4/5 mx-auto text-gray-800">
                        Welcome to Snapshot Stories, where captivating photography meets timeless memories. Our skilled photographers capture vivid moments and create compelling stories through their lens. Explore our diverse gallery and immerse yourself in the beauty and emotion of our photographs. Be a part of our ever-growing collection of Snapshot Stories.
                    </p>
                    <div className="flex justify-center items-center">
                        <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 w-5/6 lg:w-64 rounded flex items-center justify-center">
                            Contact Us
                            <MdContactMail className='ms-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
