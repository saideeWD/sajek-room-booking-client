import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css';

const Header = () => {
    return (
        <div className='app-bar'>
            <h1>Sajek Room Booking</h1>
           
        
            <nav className='content'>
            <Link to="/room">Room</Link>
            <Link to="/book">Booking</Link>
            <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;