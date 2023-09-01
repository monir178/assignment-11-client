import React from 'react';
import { Link } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { price, description, title, _id, img } = service;


    return (
        <div data-aos="fade-up" className="card w-96 bg-base-300 shadow-xl mx-auto">
            <figure >
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img
                            className="w-full h-60"
                            src={img}
                            alt=""
                        />
                    </PhotoView>
                </PhotoProvider>


            </figure>
            <div className="card-body">
                <h2 className="card-title text-blue-700">{title}</h2>
                <p>{description.slice(0, 70)}...</p>
                <p className='font-bold '>
                    Service charge: <span className="text-yellow-700"> ${price}</span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`} className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                        <p>View details</p>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default ServiceCard;