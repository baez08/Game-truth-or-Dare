import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="app__footer d-flex justify-content-center align-items-center">
            <span className="text-white"><FontAwesomeIcon icon={faCopyright} /> Vision Company 2021</span>
        </footer>
    )
}

export default Footer;
