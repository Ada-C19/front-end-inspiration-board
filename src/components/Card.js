import React from 'react'
import PropTypes from 'prop-types'
import './Card.css';


const Card = ({ cardId, message, likes, boardId, increaseLikes, deleteCard }) => {

  return (
    <div>
      <section className="card">
        {/* {likes}👍 */}
        <div className="likes">
          <p> {likes}👍 </p>
          <button className="add-like" onClick={() => increaseLikes(cardId)}>
            +1
          </button>
        </div>
        <div>
          {message}
        </div>
        <section>
          <button
            type="delete"
            className="deleteCard"
            onClick={() => deleteCard(cardId)}
          >
            X
          </button>
        </section>
      </section>
    </div>
  )
}

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  boardId: PropTypes.number,
  likeCard: PropTypes.func.isRequired
}

export default Card
// 

