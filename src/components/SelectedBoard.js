import React from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = (props) => {

    return (
        <main className="selectedBoard">
            <h3>{props.boardState ? `${props.boardState.title} Cards`: ""}</h3>
            <div className="board-owner-container">
            <p className="board-owner">{props.boardState ? `Owner: ${props.boardState.owner}`: ""}</p>
            </div>
        </main>
    );
}

SelectedBoard.propTypes = {
    boardState: PropTypes.shape({
            boardId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
};

export default SelectedBoard;