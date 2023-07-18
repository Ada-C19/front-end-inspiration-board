import React from 'react';
import './Card.css'
// import PostLikes from './PostLikes';
// import DeleteCard from './DeleteCard';
import PropTypes from 'prop-types';

const Card = ( props ) => {
    
    // const handleDeleteCard = () => {
    //     props.deleteCard(props.id)
    // }

    // const handleUpdateCard = () => {
    //     props.updateCard(props.id)
    // }

    // const handleIncrementLikeCount = () => {
    //     props.incrementLikeCount(props.id)
    // }

    // const handleDecrementLikeCount = () => {
    //     props.decrementLikeCount(props.id)
    // }


    return (
        <div className="card">
            <p>{props.message}</p>
            <p>Likes: {props.likesCount}</p>
            {/* <button onClick={handleIncrementLikeCount}>Like</button>
            <button onClick={handleDecrementLikeCount}>Dislike</button>
            <button onClick={handleUpdateCard}>Update Card</button>
            <button onClick={handleDeleteCard}>Delete Card</button> */}
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number,
    updateCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    incrementLikeCount: PropTypes.func.isRequired,
    decrementLikeCount: PropTypes.func.isRequired,
};

export default Card;