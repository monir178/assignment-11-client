import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../utils/LoadingSpinner';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data);
                } else {
                    Swal.fire(data.error);
                }
            })
            .catch(err => Swal.fire({ icon: 'error', title: err.message }));
    }, []);

    return (
        <div
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
            className="py-2 mx-auto w-full lg:w-11/12 my-8 rounded-2xl"
        >
            <h1 className="text-2xl text-blue-400  text-center lg:text-5xl font-extrabold  my-8">
                My Services
            </h1>

            {services.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 mx-auto'>
                    {services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </div>
            )}

            <Link className='flex justify-center' to='/allservices'>
                <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold text-xl my-8   px-12 py-3 rounded">
                    See All
                </button>
            </Link>
        </div>
    );
};

export default Services;
