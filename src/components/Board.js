import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import "./Board.css"

function Board({boardsData, cards, increaseLikes, deleteCard}) {

    const cardsForSpecificBoard = cards.filter(card => card.board_id ===boardsData.board_id)

    const card = cardsForSpecificBoard.map((card)=> {
        return (
            <li key = {card.card_id}>
                <Card id={card.card_id} message={card.message} likeCount={card.likes_count} increaseLikes={increaseLikes} deleteCard={deleteCard}/>
            </li>
        )
    })
    return (
    <section className="board">
        <header className='header'> 
            {boardsData.title}
        </header>
        <ol className = "card-container">
            {card}
        </ol>
    </section>
    )
}

// Board.PropTypes = {
//     //fill in proptypes
//     //cards = dictionary
//boardOwnder
//boardTitle
// }

export default Board;