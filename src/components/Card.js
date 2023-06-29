import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, message, likesCount, deleteCard }) => {
  console.log('Card props:', message)

  return (
    <li>
      Quote: {message}
      Likes: {likesCount} 💕
      <button>
        +1
      </button>
      <button onClick={() => deleteCard(id)}>
        Delete
      </button>
    </li>
  )
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired
};

export default Card;