import React from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = (props) => {

    return (
        <main className="selectedBoard">
            <h2>Current Selected Board:</h2>
            <h3>{props.boardState ? props.boardState.title : 'None Selected'}</h3>
        </main>
    );
};

SelectedBoard.propTypes = {
    boardState: PropTypes.arrayOf(
        PropTypes.shape({
            boardId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
    )
};

export default SelectedBoard;