import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ServiceCard from '../Home/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a delay for fetching data from the server
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        // Cleanup function to clear the timeout when component unmounts
        return () => clearTimeout(delay);
    }, []);

    //Loading spinner function
    const LoadingSpinner = () => {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="h-96 shadow rounded-md p-4 w-96 mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    // load all services from server
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data);
                    console.log();
                }
                else {
                    Swal.fire(
                        data.error
                    )
                }
            })
            .catch(err => Swal.fire({
                icon: 'error',
                title: err.message,
            }))
    }, [])

    return (
        <div className="py-8 mx-auto w-full lg:w-fit px-0 lg:px-8  my-8 rounded-2xl"
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
        >

            <h1 className="text-2xl lg:text-5xl font-bold gradient-text text-center mb-8">
                All Services
            </h1>
            {
                isLoading ?
                    <LoadingSpinner></LoadingSpinner>
                    :
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 mx-auto '>
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            >
                            </ServiceCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllServices;