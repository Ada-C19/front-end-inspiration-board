import React from 'react';
import PropTypes from "prop-types";


const Board = (props) => {
    return (
        <li onClick={()=>props.clickBoard(props.id)}>{props.title}</li>
    )

};


Board.propType={
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        clickBoard : PropTypes.func
    }

export default Board

