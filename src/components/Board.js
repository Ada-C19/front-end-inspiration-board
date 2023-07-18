import React from "react";
import PropTypes from 'prop-types';
import TrashIcon from "./TrashIcon";
import './Board.css';

const Board = ( {board_id, title, owner, cards, deleteBoard} ) => {

    // delete board API call not working, throws error.
    const handleDeleteBoard = () => {deleteBoard(board_id)}

    return (
        <div className="board">
            <h1 className="h1-board">Board: {title}</h1>
            <p>Created By: {owner}</p>
            <TrashIcon onClick={() => handleDeleteBoard(board_id)} />
        </div>
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
}

export default Board;