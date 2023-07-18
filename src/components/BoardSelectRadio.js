// import React from 'react';
// import { useState } from 'react';
// import PropTypes from 'prop-types';


// const BoardSelectRadio = ({boards, onBoardSelect}) => {
//     // dont use index, use ID
//     const onPickBoard = (event) => {
//         let boardId = Number(event.target.value);
//         onBoardSelect(boardId);
//     };

//     const getBoardListJSX = boards => {
//         return boards.map((board) => {
//             return <div>
//                 <input
//                 type='radio'
//                 name='board'
//                 id={board.title}
//                 value={board.id}
//                 key={board.id}
//                 form='select-board'
//                 onClick={onPickBoard}
//                 />
//             <label htmlFor={board.title}>{board.title}</label>
//             </div>
//         });
//     };

//     return (
//         <form id='select-board'>
//             <fieldset form='select-board'>
//             <legend>Select a board to display:</legend>
//             <ul>{getBoardListJSX(boards)}</ul>
//             </fieldset>
//         </form>
//     )
// };


// export default BoardSelectRadio;

import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import './BoardSelectRadio.css';

const BoardSelectRadio = ({ boards, onBoardSelect, selectedBoardId }) => {
    const handleBoardSelect = (boardId) => {
        onBoardSelect(boardId);
    };

    const filteredBoards = boards.filter((board) => board.id !== selectedBoardId);

    return (
        <div className="board-select-container">
            {filteredBoards.map((board) => (
            <div
                key={board.id}
                className="mini-board"
                onClick={() => handleBoardSelect(board.id)}
            >
                <Board
                    board_id={board.id}
                    title={board.title}
                    owner={board.owner}
                    deleteBoard={() => {}} // Placeholder function for deleteBoard, since it's not needed here
                />
            </div>
        ))}
        </div>
    );
};

BoardSelectRadio.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
    })
    ).isRequired,
    onBoardSelect: PropTypes.func.isRequired,
selectedBoardId: PropTypes.number.isRequired,
};

export default BoardSelectRadio;
