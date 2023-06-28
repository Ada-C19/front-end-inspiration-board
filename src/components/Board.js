import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import "./Board.css"

function Board({boardsData, cards, increaseLikes}) {

    const cardsForSpecificBoard = cards.filter(card => card.board_id ===boardsData.board_id)

    const card = cardsForSpecificBoard.map((card)=> {
        return (
            <li key = {card.card_id}>
                <Card id={card.card_id} message={card.message} likeCount={card.likes_count} increaseLikes={increaseLikes}/>
            </li>
        )
    })
    return (
    <section className="board">
        <header> 
            {boardsData.title}
        </header>
        <ul className = "card-container">
            {card}
        </ul>
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