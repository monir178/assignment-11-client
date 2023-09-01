import React from 'react';
import img from '../../assests/images/about.jpg';
const About = () => {
    return (
        <div
            className="py-2 mx-auto w-full lg:w-11/12 my-8 rounded-2xl"
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
        >
            <h1
                className="text-2xl text-center text-blue-400 lg:text-5xl font-extrabold  my-8">
                About Me
            </h1>
            <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mb-6 w-full py-6 text-justify'>

                <p data-aos="fade-right" className='w-full lg:w-1/2 px-4 text-lg '>
                    <span className='text-xl '> My name is <span className='text-yellow-500'>Joe</span>!</span> <br /> <br />
                    Greetings! I'm thrilled to welcome you to my world of photography. I have the honor of freezing life's most special moments through my lens.
                    Photography has been an inseparable part of my life since I first picked up a camera. Over the years, this passion has grown into a deep-rooted commitment to capturing the essence of people's emotions, the splendor of nature, and the intricate details of everyday life.
                    My photography journey has been a colorful tapestry of experiences, from capturing intimate weddings to exploring the breathtaking landscapes of distant lands. Each frame is a labor of love, an attempt to encapsulate the emotions, the stories, and the beauty that surround us.</p>

                <div data-aos="fade-left" className='w-full lg:w-1/2' >
                    <img className='w-5/6 mx-auto rounded-lg' src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;