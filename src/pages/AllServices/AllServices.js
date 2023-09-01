import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ServiceCard from '../Home/ServiceCard';
import LoadingSpinner from '../../utils/LoadingSpinner';
import Head from '../../layout/Head/Head';

const AllServices = () => {
    const [services, setServices] = useState([]);

    // load all services from server
    useEffect(() => {
        fetch('https://capture-craze-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data);
                    // console.log();
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
            <Head title="All Services"></Head>

            <h1 className="text-2xl lg:text-5xl font-bold gradient-text text-center mb-8">
                All Services
            </h1>
            {
                services.length === 0 ?
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