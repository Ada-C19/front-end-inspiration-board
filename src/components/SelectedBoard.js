import React from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = (props) => {

    return (
        <main>
            <h3>{props.boardState ? `${props.boardState.title} Cards`: ""}</h3>
            {props.boardState &&(<hr className="board-title-divider" />)}
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