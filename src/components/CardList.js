import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardList = ({ cards, likeCard }) => {
    // const cardComponents = cards.map(card => {
    //     return (
    //         <Card 
    //         cardId= {card.cardId}
    //         message= {card.message}
    //         likes= {card.likes}
    //         boardId = {card.boardId}
    //         likeCard= {likeCard} 
    //         />
    //     )
    // })
  return (
    <div>
        {/* <section>{cardComponents}</section> */}
    </div>
    
  )
}

CardList.propTypes = {
  cards: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    boardID: PropTypes.number,
    likeCard: PropTypes.bool.isRequired
  })
}

export default CardList