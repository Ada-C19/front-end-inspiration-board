import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, message, likesCount, increaseLikeCount }) => {
  console.log('Card props:', message)
  return (
    <ul>
      <li>
      Quote: {message}
      </li>
      <li>
      Likes: {likesCount}
        <button onClick={() => increaseLikeCount(id)}>+1</button>
      </li>
    </ul>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired
}

export default Card