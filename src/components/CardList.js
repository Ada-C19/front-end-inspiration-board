import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardList = ({cards, likeCard}) => {
    const cardComponents = cards.map(card => {
        return (
            <Card 
            id= {card.id}
            message= {card.sender}
            likes= {card.likes}
            likeCard= {likeCard} 
            />
        )
    })
  return (
    <div>
        <section>{cardComponents}</section>
    </div>
    
  )
}

export default CardList