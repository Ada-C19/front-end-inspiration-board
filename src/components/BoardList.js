import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board';
import "./BoardList.css";

const BoardList = ({ boards, createCard, likeCard }) => {
    const boardComponents = boards.map((board) => {
        return (
            <Board 
            boardId = {board.boardId}
            title = {board.title} 
            owner = {board.owner}
            cards = {board.cards}
            createCard = {createCard}
            likeCard = {likeCard}
            />
            )
        })
    
    const boardTitles = (<h1>Boards</h1>)

    
    return (
        <div>
            <section>
                {boardTitles}
            </section>
        </div>
    )
}

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape = ({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
        })
    )
}
export default BoardList