import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({ cardData, increaseLikesCount, deleteCard, sortCards }) => {
  
  const cardListComponents = cardData.map(card => {
    return (
      <li key = {card.card_id}>
        <Card
          id = {card.card_id}
          message = {card.message}
          likesCount = {card.likes_count}
          increaseLikesCount={increaseLikesCount}
          deleteCard={deleteCard}
          sortCards={sortCards}
        />
      </li>
    );
  });

  return (
    <ul className='card-list-container'>
      {cardListComponents}
    </ul>
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
  increaseLikesCount: PropTypes.func.isRequired,
  sortCards: PropTypes.func.isRequired
};

export default CardList;