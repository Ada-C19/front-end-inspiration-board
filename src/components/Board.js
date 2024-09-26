import React, {useState} from 'react';
import PropTypes from "prop-types";
import './Board.css';



const Board = (props) => {
    const helper = () =>{
        props.clickBoard(props.id)
        props.selectCard(props.id)
    }
    return (
        <li onClick={()=>helper()}>{props.title} <button className='del' onClick={()=>props.deleteBoard(props.id)}>DEL</button> </li>
    
    )
};


Board.propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        clickBoard: PropTypes.func,
        selectCard: PropTypes.func,
        deleteBoard:PropTypes.func
    };

export default Board;

