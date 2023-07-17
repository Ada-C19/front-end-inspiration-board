import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const BoardSelectRadio = ({boards, onBoardSelect}) => {
    // dont use index, use ID
    const onPickBoard = (event) => {
        console.log("on Pick Board", Number(event.target.value));
        let boardId = Number(event.target.value);
        onBoardSelect(boardId);
    };

    const getBoardListJSX = boards => {
        return boards.map((board) => {
            return <div>
                <input
                type='radio'
                name='board'
                id={board.title}
                value={board.id}
                key={board.id}
                form='select-board'
                onClick={onPickBoard}
                />
            <label htmlFor={board.title}>{board.title}</label>
            </div>
        });
    };

    return (
        <form id='select-board'>
            <fieldset form='select-board'>
            <legend>Select a board to display:</legend>
            <ul>{getBoardListJSX(boards)}</ul>
            </fieldset>
        </form>
    )
};


export default BoardSelectRadio;


