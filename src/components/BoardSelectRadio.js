import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import './BoardSelectRadio.css';

const BoardSelectRadio = ({ boards, onBoardSelect, selectedBoardId }) => {
    const handleBoardSelect = (boardId) => {
        onBoardSelect(boardId);
    };

    const filteredBoards = boards.filter((board) => board.id !== Number(selectedBoardId));

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
