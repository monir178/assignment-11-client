import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import animation from '../../assests/animation/camera.json';
import { FaBars } from 'react-icons/fa';
import CustomNavLink from '../../components/CustomNavlink/CustomNavlink.js';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const handleHamburgerMenuToggle = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    // const handleNavLinkClick = () => {

    //     setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    // };

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <div className="sticky z-10 top-0 drop-shadow-lg" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="px-0 lg:px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-center">
                        <Link to="/" className="btn-ghost pr-2 rounded-xl font-extrabold normal-case text-xl flex items-center justify-center text-sky-600">
                            <div className="w-14">
                                <Lottie animationData={animation} loop={true} />
                            </div>
                            <p>Capture Craze</p>
                        </Link>
                    </div>
                    <div className="hidden md:block lg:block">
                        <div className="flex items-center justify-center space-x-4 ">

                            <CustomNavLink to="/blogs">Blogs</CustomNavLink>
                            <CustomNavLink to="/">Home</CustomNavLink>
                            {user?.uid ? (
                                <>
                                    <CustomNavLink className="font-semibold" to="/addservice">Add Service</CustomNavLink>
                                    <CustomNavLink className="font-semibold" to="/myreview">My Reviews</CustomNavLink>
                                    <button onClick={handleLogOut} className="bg-gradient-to-b text-white from-blue-500 to-sky-300 rounded-lg px-3">
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <CustomNavLink className="font-semibold" to="/login">Login</CustomNavLink>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center md:ml-6">

                        {user?.uid ? (
                            <img src={user?.photoURL} alt="Profile" className="h-8 w-8 rounded-full" />
                        ) : (
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                alt="Profile"
                                className="h-8 w-8 rounded-full"
                            />
                        )}

                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={handleHamburgerMenuToggle}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            aria-controls="mobile-menu"
                            aria-expanded={isHamburgerMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isHamburgerMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div className="flex flex-col text-end">

                        <CustomNavLink
                            to="/blogs">Blogs</CustomNavLink>

                        <CustomNavLink to="/">Home</CustomNavLink>
                        {user?.uid ? (
                            <>
                                <CustomNavLink className="font-semibold" to="/addservice">Add Service</CustomNavLink>
                                <CustomNavLink className="font-semibold" to="/myreview">My Reviews</CustomNavLink>
                                <button onClick={handleLogOut} className="bg-gradient-to-b from-blue-500 to-sky-300 text-white rounded-lg px-3">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <CustomNavLink className="font-semibold" to="/login">Login</CustomNavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
