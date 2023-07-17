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
            cards = {b}
            createBoard, 
            createCard, 
            likeCard}
            />
        )
    })
    return (
        <div>BoardList</div>
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