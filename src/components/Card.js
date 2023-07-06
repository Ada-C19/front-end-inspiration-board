import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ message, likesCount}) => {
    return (
        <div className="card">
            <p>{message}</p>
            <p>Likes: {likesCount}</p>
        </div>
    );
};

Card.propTypes = {
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number,
};

export default Card;