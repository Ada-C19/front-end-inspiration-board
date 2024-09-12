import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
    
    const handleBoardClick = () => {
        props.onSelectBoard(props.boardId);
    };

    return (
        <div>
            <li>
                <button id="board-button" onClick={handleBoardClick}>{props.title}</button>
            </li>
        </div>
    );
};

Board.propTypes = {
    boardId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};

export default Board;