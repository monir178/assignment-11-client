import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Review = ({ serviceData }) => {
    // console.log(serviceData);
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;

        const review = {
            service_id: serviceData._id,
            email: form.email.value,
            name: form.name.value,
            service: form.service.value,
            description: form.description.value,
            img: user?.photoURL,
            service_img: serviceData.img,
        };


        fetch("https://capture-craze-server.vercel.app/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('capture-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message);
                    setReviews(prevReviews => [...prevReviews, review])

                }
                else {
                    Swal.fire(data.error);
                }
            })
            .catch(err => {
                Swal.fire(err.message);
            });

        form.reset();
        window.my_modal_1.close();
    };

    useEffect(() => {
        fetch(`https://capture-craze-server.vercel.app/reviews/${serviceData._id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReviews(data.data);
                }
            })
            .catch(err => {
                console.error(err.message);
            });
    }, [serviceData._id]);

    return (
        <div data-aos="fade-up"
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
            className="mx-auto w-full lg:w-5/6 my-8 p-6 rounded-2xl"
        >
            <h1 className="text-2xl lg:text-5xl font-bold gradient-text text-center mb-8">
                Reviews
            </h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className='text-center'>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.length > 0 ?
                                    reviews?.map((review, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={review?.img} alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{review.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='text-center'>{review.description}</p>
                                            </td>
                                        </tr>
                                    ))
                                    : (
                                        <tr>
                                            <td colSpan="2" className="text-center">
                                                No review added.
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {user?.email ? (
                <>
                    <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 rounded flex items-center justify-center mt-6" onClick={() => window.my_modal_1.showModal()}>Add Review</button>

                    <dialog id="my_modal_1" className="modal">
                        <div >
                            <div className="modal-action">
                                <button className="btn" onClick={() => window.my_modal_1.close()}>X</button>
                            </div>
                            <form onSubmit={handleAddReview} method="dialog" className="modal-box">

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
                        </div>
                    </dialog>
                </>
            ) : (
                <p className='mt-6'>Please <Link to="/login" className='text-blue-500 underline'>Login</Link> to add a review</p>
            )}
        </div>
    );
};

export default Review;
