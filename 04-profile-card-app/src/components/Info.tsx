import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Info: React.FC = () => {
    return (
        <div className='information'>
            <p className='description-text'>
                Passionate React developer experienced in Next.js and Node.js, focused on robust websites with top-notch
                performance and user experience. Continuous learning for innovative digital experiences.
            </p>
            <div className='description-email'>
                <a href="mailto:leuel.asfaw@a2sv.org">leuel.asfaw@gmail.com</a>
            </div>
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
        </div>
    );
};

export default Info;
