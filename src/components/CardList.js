import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';
import NewCardForm from './NewCardForm';

const CardList = ({ cards, boardId, likeCard, createCard, deleteCard }) => {

  // console.log(boardId)
  console.log(cards)
  const cardComponents = cards.map(card => {
    return (
      <Card
        cardId={card.card_id}
        message={card.message}
        likes={card.likes}
        boardId={card.boardId}
        likeCard={likeCard}
        deleteCard={deleteCard}
      />
    )
  })
  return (
    <div>
      <section className="card-list">
        {cardComponents}
      </section>
      <section className="card-forms">
        <NewCardForm
          id='card-form'
          boardId={boardId}
          createCard={createCard}
        />
      </section>
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