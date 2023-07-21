import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
    
    const handleBoardClick = () => {
        props.onSelectBoard(props.boardId);
    };

    return (
        <li>
            <button id="button" onClick={handleBoardClick}>{props.title}</button>
        </li>
    );
};

Board.propTypes = {
    boardId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};

export default Board;