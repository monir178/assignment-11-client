import React from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const service = {
            title: event.target.name.value,
            img: event.target.photoURL.value,
            price: parseInt(event.target.charge.value),
            description: event.target.description.value,
        };

        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message)
                }
                else {
                    Swal.fire(
                        data.error
                    )
                }
            })
            .catch(err => {
                Swal.fire(err.message)
            })
    }


    return (
        <div
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
            className='w-full lg:w-5/6 mx-auto my-8 p-8 rounded-xl'>
            <h1 className="text-2xl lg:text-5xl font-bold gradient-text text-center mb-4">
                Fill out your service form
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="block  text-sm font-bold mb-2">Your Service Name</label>
                    <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        name="name"
                        id="name"
                        placeholder='service name'
                        required />
                </div>
                <div className="mt-4">
                    <label className="block  text-sm font-bold mb-2">Your Service Description</label>
                    <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        name="description"
                        id="description"
                        placeholder='service description'
                        required />
                </div>
                <div className="mt-4">
                    <label className="block  text-sm font-bold mb-2">Your Service Charge</label>
                    <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        name="charge"
                        id="charge"
                        placeholder='service charge' />
                </div>
                <div className="mt-4">
                    <label className="block  text-sm font-bold mb-2">Your Service Image</label>
                    <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        name="photoURL"
                        id="photoURL"
                        placeholder='photoURL' />
                </div>


                <div className="mt-8">
                    <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 w-56 rounded" >Add Your Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;