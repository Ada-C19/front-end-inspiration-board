import React from 'react'
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({card_id, message, liked_count, increaseLikedCount, deleteCard, selectedTheme}) => {
    return (
        <section className={`${selectedTheme}-single-card-section`}>
            <p>{message}</p>
            <div className={`${selectedTheme}-card-interactions-div`}>
                <p>{liked_count}❤️s</p>
                <button className={`${selectedTheme}-button plus-one-button`} onClick = {() => increaseLikedCount(card_id)}>+1</button>
                <button className={`${selectedTheme}-button delete-card-button`} onClick = {() => deleteCard(card_id)}>Delete</button>
            </div>
        </section>
    )
}

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likedCount: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
    increaseLikedCount: PropTypes.func.isRequired,
};

export default Card;