import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink
            to={to}
            className={` ${isActive ? 'font-bold' : ''}`}
        >
            {children}
        </NavLink>
    );
};

export default CustomNavLink;
