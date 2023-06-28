import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ cardBoardData }) => {
  console.log('CL props:', cardBoardData)

  const cardListComponents = cardBoardData.map(card => {
    
    return (
      <li>
        <Card
        id = {card.id}
        message = {card.message}
        likesCount = {card.likesCount}
        />
      </li>
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