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
                <li><a href="#0"><i className="fi-home style3"/>Dashboard</a></li>
                <li><a href="#0"><i className="fi-results style3"/>Post</a></li>
                <li><a href="#0"><i className="fi-widget style3"/>Profile</a></li>
            </ul>
        </div>
    <div className="top-bar-right">
        <ul className="menu">
            <li><a href='/auth/google'>Login</a></li>
            <li><a href='/api/logout'>Logout</a></li>
            <li><input type="search" placeholder="Search" /></li>
            <li><button type="button" className="button">Search</button></li>
        </ul>
    </div>
    </div>
    </div>
);

/*const Navbar = () => (
        <div className='logo'><h1>MentorMeld</h1></div>
        <div className='navigation'>
            <ul>
                <li><a href='/auth/google'>Login</a></li>
                <li><a href='/api/logout'>Logout</a></li>
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
);*/

// export navbar
export default Navbar;