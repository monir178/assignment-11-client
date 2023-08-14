import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';


const ServiceDetails = () => {
    const singleService = useLoaderData();
    console.log(singleService.data);

    const { img, title, description, price } = singleService.data;

    return (
        <div>
            <div
                style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    opacity: '4',
                }}
                className=" mx-auto w-full lg:w-5/6 my-8 p-6 rounded-2xl"
            >

                <div>
                    <img className='w-full rounded-xl' src={img} alt="" />
                </div>
                <h2 className="card-title font-extrabold my-6">Service name: {title} </h2>
                <p className='font-bold '>
                    Service charge: <span className="text-yellow-700"> ${price} </span>
                </p>
                <p className='my-8'>{description}</p>


            </div>

            <Review
                serviceData={singleService.data}
            ></Review>
        </div>
    );
};

export default ServiceDetails;