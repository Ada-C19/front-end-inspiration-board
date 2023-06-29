import React from 'react';
import PropTypes from "prop-types";


const Board = (props) => {
    return (
        <li>{props.title}</li>
    )
  
};


Board.propType={
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired
    }

export default Board

