import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const BoardSelectRadio = ({boards}) => {
    // add state that reads selected board
    // pass that back up ?
    // add event handler to each input item to do above
    // smile :) 
    
    const getBoardListJSX = boards => {
        return boards.map((board) => {
            return (
            <div>
                <input
                type='radio'
                name='board'
                id={board.title}
                value={board.title}
                key={board.id}
                />
            <label for={board.title}>{board.title}</label>
            </div>
        )})
    }

    return (
        <fieldset>
            <legend>Select a board to display:</legend>
            <ul>{getBoardListJSX(boards)}</ul>
        </fieldset>
    )
}




export default BoardSelectRadio;