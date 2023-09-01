import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import animation from '../../assests/animation/register.json';
import Lottie from 'lottie-react';
import Head from '../../layout/Head/Head';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        // console.log(name, photoURL, phone, email, password, confirmPassword);


        if (password === confirmPassword) {
            //Create Account
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    // console.log(user);
                    setError('');
                    form.reset();
                    navigate(from, { replace: true })


                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Registration Successful.',
                        showConfirmButton: false,
                        timer: 3000
                    });
                })
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                    Swal.fire(error.message);
                });
        } else {
            setError('Passwords do not match');
        }
    }

    return (
        <div data-aos="zoom-in" className="my-8">
            <div className="flex flex-col lg:flex-row-reverse rounded-lg shadow-xl overflow-hidden mx-auto w-full lg:w-4/5 justify-center items-center"
                style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',

                }}
            >
                <Head title="Register"></Head>
                <div className="w-[200px] lg:w-1/2 bg-cover">
                    <div className='w-full flex items-center justify-center  mb-0 lg:mb-24 lg:w-4/5 lg:mx-auto h-56 sm:h-96 '>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="w-full p-6 lg:w-1/2 bg-cover">
                    <p className="text-xl font-semibold text-center mt-20 lg:mt-0 md:mt-0">Register Now!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Full Name</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                name="name"
                                id="name"
                                placeholder='your full name'
                                required />
                        </div>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Email Address</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                name="email"
                                id="email"
                                placeholder='email'
                                required />
                        </div>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Your Phone Number</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder='phone' />
                        </div>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Your Photo URL</label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text"
                                name="photoURL"
                                id="photoURL"
                                placeholder='photoURL' />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block  text-sm font-bold mb-2">Password</label>

                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" placeholder='password' required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block  text-sm font-bold mb-2">Confirm Password</label>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="confirm" placeholder='confirm password' required />
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="mt-8">
                            <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 w-full rounded" >Sign Up</button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b border-blue-400 w-1/5 md:w-1/4"></span>
                        <Link to="/login" className="text-base font-semibold text-white hover:text-blue-400">or Login</Link>
                        <span className="border-b border-blue-400 w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;