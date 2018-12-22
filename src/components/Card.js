import React from 'react';
import './Card.css';

const Card = ({name, email, image}) => {
    return  (
        <div className='tc bg-blue dib br3 pa4 ma2 grow bw2 shadow-5'>
            <img alt='profile' src={image} />
            <div className='white'>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;