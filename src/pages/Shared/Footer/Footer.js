import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <hr />
            <footer className='footer-css'><small>copyright @{year}</small></footer>
        </div>
    );
};

export default Footer;