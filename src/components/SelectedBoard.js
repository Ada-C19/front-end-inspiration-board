import React from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = (props) => {

    return (
        <main className="selectedBoard">
            <h3>Current Selected Board:</h3>
            <h3>{props.boardState ? props.boardState[0].title : 'None Selected'}</h3>
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