import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './Card.css';

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Cards = ({ id, message, likesCount, handleLike }) => {

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setRotation(getRandomInt(-8,8));
    }, []);

    const heartDisplay = likesCount > 0 ? '❤️' : '🤍';

    const handleClick = () => handleLike(id);

    return (
        <div className="card" onClick={handleClick} style={{transform: `rotate(${rotation}deg)`}}>
            <div className="card-text">
                <p>Card: {id}</p>
                <p>{message}</p>
            </div>
            <div>
                <button>{heartDisplay} {likesCount}</button>
                <br />
            </div>
        </div>
    )
}

Cards.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    // handleLike: PropTypes.func
}

export default Cards;