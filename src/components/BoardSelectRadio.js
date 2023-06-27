import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const BoardSelectRadio = ({boards}) => {
    const getBoardListJSX = boards => {
        return boards.map((board) => {
            return <div>
                <input
                type='radio'
                name='board'
                id={board.title}
                value={board.id}
                key={board.id}
                />
            <label htmlFor={board.title}>{board.title}</label>
            </div>
        })
    }

    return (
        <fieldset>
            <legend>Select a board to display:</legend>
            <ul>{getBoardListJSX(boards)}</ul>
        </fieldset>
    )
}


export default BoardSelectRadio;


