import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board';
import "./BoardList.css";

const BoardList = ({ boards, createBoard, createCard, likeCard }) => {
    const boardComponents = boards.map((board) => {
        return (
            <Board 
            boardId = {board.boardId}
            title = {board.title} 
            owner = {board.owner}
            cards = {board.cards}
            createBoard = {createBoard}
            createCard = {createCard}
            likeCard = {likeCard}
            />
        )
    })
    
    return (
        <div>
            <section className="board-list">
                {boardComponents}
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