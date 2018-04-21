// import class component from react
import React, { Component } from 'react';
// import the connect helper from react-redux
import { connect } from 'react-redux';
// import styles
import './landing.css';
// import images
import jack from '../../images/jack.png';
import stephen from '../../images/stephen.jpeg';
import ruhi from '../../images/ruhi.png';
import akshay from '../../images/akshay.jpeg';

const Landing = () => (
    <div>
        <h3>Our Team</h3>
            <div className="row">
                <img className="profile" src={jack} alt="jack" />
                <img className="profile" src={stephen} alt="jack" />
                <img className="profile" src={ruhi} alt="jack" />
                <img className="profile" src={akshay} alt="jack" />
            </div>
        <h3>Our Roles</h3>
            <p></p>
    </div>
);

// export 
export default Landing;