import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);

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
        </div>


    );
};

export default Review;