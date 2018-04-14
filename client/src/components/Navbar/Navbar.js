// import react
import React from 'react';

// import styles
import './navbar.css';

const Navbar = () => (
    <div>
    <div className="top-bar" id="responsive-menu">
        <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">MentorMeld</li>
                <li><a href="#0">Dashboard</a></li>
                <li><a href="#0">Post</a></li>
                <li><a href="#0">Profile</a></li>
            </ul>
        </div>
    <div className="top-bar-right">
        <ul className="menu">
            <li><a href='http://localhost:3001/auth/google'>Login</a></li>
            <li><input type="search" placeholder="Search" /></li>
            <li><button type="button" className="button">Search</button></li>
        </ul>
    </div>
    </div>
    </div>
);

// export navbar
export default Navbar;