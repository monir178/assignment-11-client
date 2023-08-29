import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [editedDescription, setEditedDescription] = useState('');

    // get reviews by email
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/reviews?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('capture-token')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        logOut()
                    }
                    return res.json()
                })
                .then(data => {
                    setMyReview(data.data);
                });

        }
    }, [user?.email, logOut]);

    const openEditModal = (review) => {
        setSelectedReview(review);
        setEditedDescription(review.description);
        setModalVisible(true);
    };

    const closeEditModal = () => {
        setSelectedReview(null);
        setEditedDescription('');
        setModalVisible(false);
    };

    //updating the data
    const saveEditedDescription = async () => {
        try {
            const response = await fetch(`http://localhost:5000/reviews/${selectedReview._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: editedDescription }),
            });
            const data = await response.json();
            if (data.success) {
                const updatedReviews = myReview.map(review =>
                    review._id === selectedReview._id ? { ...review, description: editedDescription } : review
                );
                setMyReview(updatedReviews);
                Swal.fire(data.message);
                closeEditModal();
            }
            else {
                Swal.fire(data.error)
            }
        }
        catch (err) {
            Swal.fire(err.message)
        }
    };


    // method for deleting the data
    const deleteReview = async (review) => {
        try {
            const response = await fetch(`http://localhost:5000/reviews/${review._id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                // Remove the deleted review from UI
                const updatedReviews = myReview.filter(r => r._id !== review._id);
                setMyReview(updatedReviews);
                Swal.fire(data.message);
            } else {
                Swal.fire(data.error);
            }
        }
        catch (err) {
            Swal.fire(err.message)
        }
    };

    // delete confirmation modal
    const showDeleteConfirmation = (review) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this review!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    deleteReview(review);
                }
            });
    };


    return (
        <div
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4',
            }}
            className="mx-auto w-full lg:w-5/6 my-8 p-6 rounded-2xl"
        >
            <div className="overflow-x-auto">
                <table className="table min-w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className='text-center'>Review</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myReview.length > 0 ? (
                            myReview.map((review, index) => (
                                <tr key={index}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={review?.service_img} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{review?.service}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-center'>{review.description}</p>
                                    </td>


                                    <td >

                                        <button
                                            className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 rounded mb-2 w-20"
                                            onClick={() => openEditModal(review)}
                                        >
                                            Edit
                                        </button>

                                        <div>
                                            <button
                                                onClick={() => showDeleteConfirmation(review)}
                                                className="bg-gradient-to-b from-red-700 to-red-500 text-white font-bold py-2 px-4 w-20 rounded" >Delete</button>
                                        </div>
                                    </td>




                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">
                                    No review added.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* the modal for editing the review */}
            {selectedReview && (
                <div className={`fixed z-20 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${modalVisible ? '' : 'hidden'}`}>
                    <div className="flex justify-center items-center h-full">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-4">Edit Review</h2>
                            <textarea
                                className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
                                placeholder='write your message'
                                onChange={e => setEditedDescription(e.target.value)}
                            />
                            <div className="flex justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                    onClick={saveEditedDescription}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                    onClick={closeEditModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyReview;
