import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Skill Development Platform</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Service</a>
                <a href="/internships">Internships</a>
                <a href="/login">Login</a>
            </nav>
        </header>
    );
};

export default Header;
