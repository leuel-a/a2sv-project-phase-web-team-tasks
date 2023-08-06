import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Info: React.FC = () => {
    return (
        <div className='information'>
            <div className='socials-container'>
                <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={ faFacebook } />
                </a>
                <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
                <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={ faLinkedinIn } />
                </a>
                <a href='https://github.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={ faGithub } />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={ faTwitter } />
                </a>
            </div>
            <h1>This how info will be displayed</h1>
        </div>
    );
};

export default Info;
