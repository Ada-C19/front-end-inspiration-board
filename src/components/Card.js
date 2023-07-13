import React from 'react';
import './Card.css'
import PostLikes from './PostLikes';
import PropTypes from 'prop-types';

const Card = ({ id, message, likesCount, updateCard}) => {
    return (
        <div className="card">
            <p>{message}</p>
            <p>Likes: {likesCount}</p><PostLikes />
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number,
    onUpdateCard: PropTypes.func.isRequired,
};

export default Card;