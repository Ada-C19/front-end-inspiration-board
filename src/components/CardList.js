import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ cardData, increaseLikesCount, deleteCard }) => {

  const cardListComponents = cardData.map(card => {
    
    return (
      <ul>
        <Card
        key = {card.id}
        id = {card.id}
        message = {card.message}
        likesCount = {card.likesCount}
        increaseLikesCount={increaseLikesCount}
        deleteCard={deleteCard}
        />
      </ul>
    )
  })

  return (
    <ul>
      {cardListComponents}
    </ul>
  )
}

CardList.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired
    })
  )
}

export default CardList;