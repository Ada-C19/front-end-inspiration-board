import React from 'react';
import './Card.css'
import PostLikes from './PostLikes';
import DeleteCard from './DeleteCard';
import PropTypes from 'prop-types';

const Card = ({ id, message, likesCount, updateCard, onDelete }) => {
    return (
        <div className="card">
            <p>{message}</p>
            <p>Likes: {likesCount}</p><PostLikes />
            <DeleteCard id={id} onDelete={onDelete} />
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number,
    onUpdateCard: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Card;