import React from "react";
import PropTypes from 'prop-types';
import Card from './Card.js';

const CardList = ({ cards, onClick }) => {
    const getCardListJSX = (cards) => {
        return cards.map((card) => {
            return (
                <Card
                    id={card.id}
                    key={card.id}
                    message={card.message}
                    board={card.board}
                    likesCount={card.likesCount}
                    onClick={onClick}
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