import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board';
import "./BoardList.css";

const BoardList = ({ boards, selectBoard, createCard, likeCard }) => {
    const boardComponents = boards.map(board => {
        return (
            <Board 
            boardId = {board.board_id}
            title = {board.title} 
            owner = {board.owner}
            cards = {board.cards}
            selectBoard = {selectBoard}
            createCard = {createCard}
            likeCard = {likeCard}
            />
            )
        })
    
    return (
        <div>
            <section>
                <ul className="board-titles">
                    {boardComponents}
                </ul>
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