import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const BoardSelectRadio = ({boards, onBoardSelect}) => {
    const onPickBoard = (event) => {
        let boardIndex = event.target.value - 1;
        console.log('preparing to display board', boardIndex, boards[boardIndex].title)
        onBoardSelect(boardIndex);
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


