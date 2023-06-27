import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, message, likesCount }) => {
  console.log('Card props:', message)
  return (
    <div>
      <li>
      Quote: {message}
      </li>
      <li>
      Likes: {likesCount}
      </li>
   </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired
}

export default Card