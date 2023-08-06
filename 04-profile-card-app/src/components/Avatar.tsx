import React from 'react';
import '../styles.css';
import AvatarImage from '../images/avatar.jpg';


const Avatar: React.FC = () => {
    return (
        <div className='avatar'>
            <img
                src={AvatarImage}
                id='avatar-img'
                alt='Avatar'
                className='img-fluid rounded-circle'
            />
            <div className='description'>
                <h2 id='name'>Leuel Asfaw</h2>
                <h3 id='job'>Web Developer</h3>
            </div>
        </div>
    );
}

export default Avatar;
