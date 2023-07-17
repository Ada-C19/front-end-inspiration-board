import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card, onLike, onDelete }) => {
  return (
    <div>
      <h3>{card.message}</h3>
      <span>
        {card.likes_count}
        {'  '}❤️
      </span>
      {'  '}
      <button onClick={() => onLike(card)}>+1</button>
      <button onClick={() => onDelete(card.card_id)}>delete</button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
  }),
};

export default Card;
