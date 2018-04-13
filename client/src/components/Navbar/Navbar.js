// import react
import React from 'react';

// import styles
import './navbar.css';

const Navbar = () => (
    <header>
        <div className='logo'><h1>MentorMeld</h1></div>
        <div className='navigation'>
            <ul>
                <li><a href='http://localhost:3001/auth/google'>Login</a></li>
            </ul>
        </div>

    </header>
);

// export navbar
export default Navbar;