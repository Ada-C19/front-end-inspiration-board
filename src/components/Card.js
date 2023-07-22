import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './Card.css';
import TrashIcon from "./TrashIcon";
import LikesIcon from "./LikesIcon";

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Card = ({ id, message, likesCount, handleLike, deleteCard }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setRotation(getRandomInt(-8, 8));
    }, []);

    const handleLikeClick = () => handleLike(id);

    const handleDeleteCard = () => {
        deleteCard(id);
    };

    return (
        <div className="card" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="likes-container">
                <LikesIcon count={likesCount} handleLike={handleLikeClick} />
            </div>
            <TrashIcon onClick={() => handleDeleteCard()} />
            <div className="card-text">
                {/* <p>Card: {id}</p> */}
                <p>{message}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    handleLike: PropTypes.func.isRequired
};

export default Card;
