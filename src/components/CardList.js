import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ cardData, deleteCard }) => {
  console.log('CL props:', cardData)

  const cardListComponents = cardData.map(card => {
    
    return (
      <ul>
        <Card
        id = {card.id}
        message = {card.message}
        likesCount = {card.likesCount}
        deleteCard = {deleteCard}
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