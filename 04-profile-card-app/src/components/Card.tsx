import '../styles.css';
import React from 'react';
import Avatar from './Avatar';
import Info from './Info';

const Card: React.FC = () => {
    return (
        <div className='main-container'>
            <Avatar />
            <Info />
        </div>
    );
}

export default Card;    
