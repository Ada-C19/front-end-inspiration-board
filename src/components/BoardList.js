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
    
    const BoardTitle = ({ id, title }) => {
        return (
            <li key={id}>{title}</li>
        )
    }
    
    return (
        <div>
            <section>
                {boards.map(({ title }) => title)}
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