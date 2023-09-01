import React from 'react';
import img1 from '../../assests/images/steve.jpg';
import img2 from '../../assests/images/robert.jpg';
import img3 from '../../assests/images/ansel.jpg';

const Trusted = () => {
    return (
        <div
            className="mx-auto w-full lg:w-11/12 my-8 rounded-2xl p-12"
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
        >
            <div className='justify-between  flex flex-col sm:flex-row  items-center gap-8  '>
                <div data-aos="fade-right" >
                    <h3 className='lg:text-4xl text-2xl text-blue-400 font-extrabold'> <span className='text-yellow-500 text-6xl'>T</span>rusted by the <br /> <span className='text-yellow-500'>world’s </span> best <br /> photographers</h3>
                    <p className='mt-8 font-semibold'>
                        Whether you shoot landscapes, people, architecture, <br /> or weddings, get inspired by our collection of photography <br /> website examples – all Made with Squarespace.
                    </p>
                </div>
                <div data-aos="fade-left" className='w-full lg:w-1/2'>
                    <div className='flex items-center mb-4'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={img1} alt='' />
                            </div>
                        </div>
                        <div className='ms-2'>
                            <h3 className="text-blue-500 text-2xl font-bold">Steve McCurry</h3>
                            <p className='font-bold '>Steve McCurry is an American photographer, freelancer, and photojournalist. His photo Afghan Girl, of a girl with piercing green eyes, has appeared on the cover of National Geographic several times.</p>
                        </div>
                    </div>
                    <div className='flex items-center mb-4'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={img2} alt='' />
                            </div>
                        </div>
                        <div className='ms-2'>
                            <h3 className="text-blue-500 text-2xl font-bold">Robert Capa</h3>
                            <p className='font-bold text-lg'>Hungarian photojournalist and war photographer who risked his life numerous times so that he could capture soldiers in action.</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={img3} alt='' />
                            </div>
                        </div>
                        <div className='ms-2'>
                            <h3 className="text-blue-500 text-2xl font-bold">Ansel Adams</h3>
                            <p className='font-bold text-lg'>Ansel Adams is perhaps the most well known photographer in the world and is responsible for some of the most iconic images of the United States National Parks.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Trusted;