import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({ cardData, increaseLikesCount, deleteCard }) => {

  const cardListComponents = cardData.map(card => {
    
    return (
      <ul key = {card.id}>
        <Card
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
    <ul className='card-list-container'>
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