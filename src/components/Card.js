import React from 'react'
import PropTypes from 'prop-types'


const Card = ({ cardId, message, likes, boardId, likeCard }) => {
  
  return (
    <div>
      <section>
        {likes}
        <button onClick={() => likeCard(cardId)}>
          <img src="../assets/plus_button.jpeg" alt="Like button"/>
        </button>
      </section>
      <body>
        {message}
      </body>
    </div>
  )
}

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  boardId:PropTypes.number,
  likeCard: PropTypes.func.isRequired
}

export default Card


