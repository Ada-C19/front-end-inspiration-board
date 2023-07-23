import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardsList.css';

const CardsList = ({ cards, increaseLikedCount, deleteCard, selectedTheme }) => {
    const cardComponents = cards.map( (card, index) => {
        return (
            <div key={index} className={`${selectedTheme}-display-card`}>
                <Card
                    card_id={card.card_id}
                    message={card.message}
                    liked_count = {card.liked_count}
                    increaseLikedCount={increaseLikedCount}
                    deleteCard={deleteCard}
                    selectedTheme={selectedTheme}
                />
            </div>
        )
    })


    return (
        <div className={`${selectedTheme}-display-cards-list`}>
            {cardComponents}
        </div>
    )
};

CardsList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            liked_count: PropTypes.number.isRequired,
        })
    ).isRequired,
    increaseLikedCount: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};      

export default CardsList;