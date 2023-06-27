import React from 'react';
import PropTypes from "prop-types";
import './Board.css'

const Board = (props) => {
    const boardTitles =  props.data.map((board)=>{
        return(
            <p>{board.title}</p>
        )
    })
    return( 
    <section>
    <h2>Boards</h2>
        
    <div className='board'>
        
        {boardTitles}</div>
    </section>)
};


Board.propType={
    data: PropTypes.shape({id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        owner:PropTypes.string.isRequired})
}




export default Board

