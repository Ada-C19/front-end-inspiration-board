import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
    return (
        <li>
            <h3>{props.title}</h3>
        </li>
    );
};

Board.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Board;