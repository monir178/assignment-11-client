import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Review = ({ serviceData }) => {
    const { user } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault()
        const review = {
            email: event.target.email.value,
            name: event.target.name.value,
            service: event.target.service.value,
            description: event.target.description.value,
        };

    }

    return (

        <div
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
            className=" mx-auto w-full lg:w-5/6 my-8 p-6 rounded-2xl"
        >

            <h1 className="text-2xl lg:text-5xl font-bold gradient-text text-center mb-8">
                Reviews
            </h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=''>
                                <th>Name</th>
                                <th className='text-center'>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.displayName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-center'>reviewwwwwwww</p>
                                </td>


                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            {
                user?.email ?
                    <>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 rounded flex items-center justify-center mt-6" onClick={() => window.my_modal_1.showModal()}>Add Review</button>

                        <dialog id="my_modal_1" className="modal">
                            <form onSubmit={handleAddReview} method="dialog" className="modal-box">
                                <div className="modal-action">

                                    <button className="btn" onClick={() => window.my_modal_1.close()}>X</button>
                                </div>
                                <div className="mt-4">
                                    <label className="block  text-sm font-bold mb-2">Your Service Name</label>
                                    <input
                                        className="bg-gray-200 text-gray-700 focus:outline-none 
                
                focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                        type="text"
                                        name="name"
                                        id="name"
                                        readOnly
                                        defaultValue={user?.displayName}
                                        required />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-sm font-bold mb-2">Email</label>
                                    <input
                                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                        type="email"
                                        name="email"
                                        id="email"
                                        readOnly
                                        defaultValue={user?.email}
                                        required />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-sm font-bold mb-2">Your Service Description</label>
                                    <input
                                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                        type="text"
                                        name="service"
                                        id="service"
                                        readOnly
                                        defaultValue={serviceData?.title}
                                        required />
                                </div>

                                <div className="mt-4">
                                    <label className="block  text-sm font-bold mb-2">Write your review</label>
                                    <input
                                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder='write your review'
                                        required />
                                </div>


                                <div className="mt-8">
                                    <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 w-56 rounded" >Add Review</button>
                                </div>

                            </form>

                        </dialog>
                    </>
                    :

                    <p className='mt-6'>Please <Link to="/login" className='text-blue-500 underline'>Login</Link> to add a review</p>
            }


        </div>


    );
};

export default Review;