import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


const BoardSelectRadio = ({boards, onSelect}) => {
    // const [selectedBoard, setSelectedBoard] = useState(1)

    const onPickBoard = (event) => {
        console.log(event.target.value)
        onSelect(event.target.value)
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
                // onChange={onPickBoard}
                />
            <label htmlFor={board.title}>{board.title}</label>
            </div>
        });
    };

    return (
        <form id='select-board' onChange={onPickBoard}>
            <fieldset form='select-board'>
            <legend>Select a board to display:</legend>
            <ul>{getBoardListJSX(boards)}</ul>
            </fieldset>
        </form>
    )
};


export default BoardSelectRadio;


