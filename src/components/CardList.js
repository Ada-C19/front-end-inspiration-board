import React from "react";
import PropTypes from 'prop-types';
import Card from './Card.js';

const CardList = ({ cards, handleLike, deleteCard }) => {
    const getCardListJSX = (cards) => {
        // before we map it, sort it!
        let cardsAlphabetical = cards.sort((a, b) => a.message > b.message);
        let cardsByLikes = cards.sort((a, b) => a.likesCount > b.likesCount);
        let cardsById = cards.sort((a, b) => a.id > b.id);
        let sortedCards = cardsByLikes;
        return sortedCards.map((card) => {
            return (
                <Card
                    id={card.id}
                    key={card.id}
                    message={card.message}
                    board={card.board}
                    likesCount={card.likesCount}
                    handleLike={handleLike}
                    deleteCard={deleteCard}
                />
            )
        })
    }

    return (
        <div>
            <ul className='card-list'>{getCardListJSX(cards)}</ul>
        </div>
    )
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired,
        })).isRequired,
    handleLike: PropTypes.func
}

export default CardList;