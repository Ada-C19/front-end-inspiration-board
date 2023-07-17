import React from 'react'
import PropTypes from 'prop-types'


const Card = ({id, message, likes, likeCard}) => {
  return (
    <div>
      <section>
        {likes}
        <button onClick={() => likeCard(id)}><img src="plus_button.png" alt="Like button"/>
          </button>
      </section>
      <body>
        {message}
      </body>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  board: PropTypes.object,
  boardId:PropTypes.number,
  likeCard: PropTypes.func.isRequired
}

export default Card


