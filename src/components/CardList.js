import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';
import NewCardForm from './NewCardForm';

const CardList = ({ cards, boardId, likeCard, createCard, deleteCard, increaseLikes }) => {
  const [hideForm, setHideForm] = useState(true);
  // console.log(boardId)
  // console.log(cards)
  const cardComponents = cards.map(card => {
    return (
      <Card
        cardId={card.card_id}
        message={card.message}
        likes={card.likes_count}
        boardId={card.boardId}
        likeCard={likeCard}
        deleteCard={deleteCard}
        increaseLikes={increaseLikes}
      />
    )
  })
  return (
    <div>
      <section className="card-list">
        {cardComponents}
      </section>
      <section className="card-forms" style={{ display: hideForm ? 'block' : 'none' }}>
        <NewCardForm
          id='card-form'
          boardId={boardId}
          createCard={createCard}

        />
      </section>
      <button className='hide-forms-card' onClick={() => setHideForm(!hideForm)}>
        {hideForm ? 'Hide' : 'Show'} Card Form
      </button>
    </div>

  )
}

CardList.propTypes = {
  cards: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    boardId: PropTypes.number,
    likeCard: PropTypes.bool.isRequired
  })
}

export default CardList