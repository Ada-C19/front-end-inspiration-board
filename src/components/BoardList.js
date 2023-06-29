import React from 'react';
import Board from "./Board";
import PropTypes from "prop-types";
import './Board.css'

const BoardList = (props) =>{
    const getBoard = props.data.map((board)=>{
        return (
            <Board
            key = {board.id}
            id = {board.id}
            title = {board.title}
            owner={board.owner}
            clickBoard = {props.boardSelect}/>
        )
    })
    return (<section>
        <h2>Boards</h2>
    <ul className='board'>{getBoard}</ul></section>)

}
BoardList.propType={
    data: PropTypes.shape({id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        owner:PropTypes.string.isRequired}),
    boardSelect: PropTypes.func
}

export default BoardList;