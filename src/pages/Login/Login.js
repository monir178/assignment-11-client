import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import animation from '../../assests/animation/login.json';
import Lottie from 'lottie-react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import Swal from 'sweetalert2'
import Head from '../../layout/Head/Head';

const Login = () => {
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const { providerLogin, setLoading, setUser, signInEmail, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Email Sign In Method
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signInEmail(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser);


                if (user?.email) {

                    //get jwt token
                    fetch('https://capture-craze-server.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);

                            //store jwt token in local storage
                            localStorage.setItem('capture-token', data.token)
                            navigate(from, { replace: true })
                        })

                    form.reset();
                    setError('');


                }
                else {
                    Swal.fire("Your email is not verified. Please check your email")
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })


    };

    //Reset password 
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                Swal.fire("Reset Link has been sent, please check your email")
            })
            .catch(error => Swal.fire(error.message))
    }

    // Google Sign In Method
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                // console.log(user);

                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser);


                if (user?.email) {

                    //get jwt token
                    fetch('https://capture-craze-server.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);

                            //store jwt token in local storage
                            localStorage.setItem('capture-token', data.token)
                            navigate(from, { replace: true })
                            setError('');
                        })

                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Logged In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })



                }
                else {
                    Swal.fire(
                        'No User Found',
                        'Your Email is not Verified',
                        'question'
                    )
                }
            })
            .catch(err => {
                console.error(err)
            });
    }

    //Github Sign In Method
    const githubSignIn = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubSignIn)
            .then(result => {
                const user = result.user;
                setUser(user);
                // console.log(user);

                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser);


                if (user?.email) {

                    //get jwt token
                    fetch('https://capture-craze-server.vercel.app/jwt', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);

                            //store jwt token in local storage
                            localStorage.setItem('capture-token', data.token)
                            navigate(from, { replace: true })
                            setError('');
                        })


                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Logged In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire(
                        'No User Found',
                        'Your Email is not Verified',
                        'question'
                    )
                }
            })
            .catch(err => console.error(err));
    }



    return (
        <div data-aos="fade-up" className="py-6">
            <div className="flex flex-col lg:flex-row-reverse rounded-lg shadow-xl overflow-hidden mx-auto w-full lg:w-4/5 justify-center items-center"
                style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',

                }}
            >
                <Head title="Login"></Head>
                <div className="w-3/4 lg:w-1/2 bg-cover">
                    <div className='w-full lg:w-4/5 lg:mx-auto h-56  sm:h-96 '>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl font-semibold text-center mt-0 md:mt-24">Welcome back!</p>



                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Email Address</label>
                            <input
                                onBlur={event => setUserEmail(event.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                name="email"
                                id="email"
                                placeholder='email' />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block  text-sm font-bold mb-2">Password</label>

                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" placeholder='password' required />
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="mt-8">
                            <button className="bg-gradient-to-b from-blue-700 to-sky-400 text-white font-bold py-2 px-4 w-full rounded" >Login</button>
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button
                            onClick={handleReset}
                            className='text-sm mt-2 hover:underline text-blue-700'
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        onClick={handleGoogleSignIn}
                        className="mt-4 py-3 rounded-lg shadow-md hover:bg-sky-300 w-full">
                        <div className="flex justify-center items-center">
                            <FcGoogle className='w-6 h-6 mr-2'></FcGoogle>
                            <p className="font-bold"> Sign in with Google</p>
                        </div>
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        className="mt-4 py-3 rounded-lg shadow-md hover:bg-sky-300 w-full">
                        <div className="flex justify-center items-center">
                            <FaGithub className='w-6 h-6 mr-2'></FaGithub>
                            <p className="font-bold"> Sign in with Github</p>
                        </div>
                    </button>


                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b border-blue-400 w-1/5 md:w-1/4"></span>
                        <Link to="/register" className="text-base font-semibold text-white hover:text-blue-400">or Sign up</Link>
                        <span className="border-b border-blue-400 w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;