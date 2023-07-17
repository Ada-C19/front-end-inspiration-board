import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({ cardData, increaseLikesCount, deleteCard }) => {

  const cardListComponents = cardData.map(card => {
    return (
      <ul key = {card.card_id}>
        <Card
          id = {card.card_id}
          message = {card.message}
          likesCount = {card.likes_count}
          increaseLikesCount={increaseLikesCount}
          deleteCard={deleteCard}
        />
      </ul>
    );
  });

  return (
    <ul className='card-list-container'>
      {cardListComponents}
    </ul>
  );
};

CardList.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likesCount: PropTypes.number.isRequired
      }
    )
  )
};

export default CardList;