// import class component from react
import React, { Component } from 'react';
// import the connect helper from react-redux
import { connect } from 'react-redux';
// import styles
import './navbar.css';

class Navbar extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
            default:
                return (
                    <div className="navigation-links">
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/dashboard/newpost">Post</a></li>
                        <li><a href="/dashboard/profile">Profile</a></li>
                        <li><a href="/api/logout">Logout</a></li>
                    </div>    
            );
        }
    }
    
    
    render() {
        return (
            <div>
                <div className="top-bar" id="responsive-menu">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text">MentorMeld</li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

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

// calls the entire state object out of the redux store
function mapStateToProps({ auth }) {
    return { auth };
}

// export navbar
export default connect(mapStateToProps) (Navbar); 