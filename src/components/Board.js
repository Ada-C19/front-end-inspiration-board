import React from 'react';
import PropTypes from "prop-types";
import './Board.css';


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

