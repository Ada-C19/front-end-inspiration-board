import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board';

const BoardList = ({boards}) => {
    const boardComponents = boards.map(board => {
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
        <div>{boardComponents}</div>
    )
}

// BoardList.PropTypes = {
//     boards: PropTypes.arrayOf(
//         PropTypes.shape = ({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             owner: PropTypes.string.isRequired
//         })
//     )
// }
export default BoardList