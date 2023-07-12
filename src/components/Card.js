import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, message, likesCount, deleteCard, increaseLikesCount }) => {
  console.log('Card props:', message)

  return (
    <section className='card-container'>
      <li className='each-card'>
        <p className='message-line'>
          {message}
        </p>
        <p className='likes-line'>
          {likesCount} 💕
        </p>
        <span className='like-delete-btns'>
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
        </span>
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