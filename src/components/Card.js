import React from 'react';
import './Card.css'
// import PostLikes from './PostLikes';
// import DeleteCard from './DeleteCard';
import PropTypes from 'prop-types';

const Card = ( props ) => {
    
    const handleDeleteCard = () => {
        props.onDelete(props.id)
    }

    // const handleUpdateCard = () => {
    //     props.onUpdateCard(props.id)
    // }

    const handleLikeCount = () => {
        props.updateLikeCount(props.id)
    }


    return (
        <div className="card">
            <p>{props.message}</p>
            <p>Likes: {props.likesCount}</p>
            <button onClick={handleLikeCount}>Like</button>
            {/* <button onClick={handleUpdateCard}>Update Card</button> */}
            <button onClick={handleDeleteCard}>Delete Card</button>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    // onUpdateCard: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    updateLikeCount: PropTypes.func.isRequired,
};

export default Card;