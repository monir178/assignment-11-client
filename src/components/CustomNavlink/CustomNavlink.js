import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink
            to={to}
            className={` ${isActive ? 'underline underline-offset-4 font-extrabold text-blue-700' : 'text-blue-700'}`}
        >
            {children}
        </NavLink>
    );
};

export default CustomNavLink;
