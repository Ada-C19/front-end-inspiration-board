import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {

    const toggleBoardSelection = () => {
        props.setSelectedBoard(!props.selectedBoard);
      };
    

    return (
        <li>
            <h3>{props.title}</h3>
            <button onClick={toggleBoardSelection}>Select Board</button>
        </li>
    );
};

Board.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Board;