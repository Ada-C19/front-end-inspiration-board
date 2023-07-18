import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {

    // const toggleBoardSelection = (boardId) => {
    //     props.setSelectedBoard(!props.selectedBoard);
    //   };
    
    const handleBoardClick = () => {
        props.onSelectBoard(props.boardId);
      };

    return (
        <li>
            <h3>{props.title}</h3>
            <button onClick={handleBoardClick}>Select Board</button>
        </li>
    );
};

Board.propTypes = {
    boardId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};

export default Board;