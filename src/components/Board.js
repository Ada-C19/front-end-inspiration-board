import React from 'react'
import Card from './Card'
import "./Board.css"

function Board({boardsData, cards, increaseLikes, deleteBoard, deleteCard}) {

    const cardsForSpecificBoard = cards.filter(card => card.board_id ===boardsData.board_id)

    const card = cardsForSpecificBoard.map((card)=> {
        return (
            <li key = {card.card_id}>
                <Card id={card.card_id} message={card.message} likeCount={card.likes_count} increaseLikes={increaseLikes} deleteBoard={deleteBoard} deleteCard={deleteCard} />
            </li>
        )
    })
    return (
    <section className="board">
        <header className='header'> 
            <div className="board-title">
            {boardsData.title}
            </div>
            <div className="board-owner">
            {boardsData.owner}
            </div>
        </header>
        <ol className = "card-container">
            {card}
        </ol>
            <div className="board-delete-button">
                <button onClick={()=> deleteBoard(boardsData.board_id)}> Delete Board </button>
            </div>
    </section>
    )
}

export default Board;