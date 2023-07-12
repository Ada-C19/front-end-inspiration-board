import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, message, likesCount, deleteCard, increaseLikesCount }) => {
  console.log('Card props:', message)

  return (
    <section className='card-container'>
      <li className='each-card'>
        <li className='message-line'>
          {message}
        </li>
        <li className='likes-line'>
          {likesCount} 💕
        </li>
        <li className='like-delete-btns'>
          <button 
          className='likes-btn likes-delete' 
          onClick={() => increaseLikesCount(id)}
          >
            +1
          </button>
          <button 
            className='delete-btn likes-delete' 
            onClick={() => deleteCard(id)}
          >
            Delete
          </button>
        </li>
    </li>
    </section>
  )
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired
};

export default Card;