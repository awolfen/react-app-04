import './Card.css';
import React from 'react';

const Card = (props) => {
    return (
        <div className={`card ${props.className}`}>{props.children}</div>
    )
};

export default Card;