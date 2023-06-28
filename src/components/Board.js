import React from "react";
import PropTypes from 'prop-types';
import './Board.css';
// change card list to take in an argument (board id)
// add a selector to App that toggles which boards display
// card list only gets cards for selected board

import CardList from './CardList';
import cardData from '../data/cards.json';

//cardlist should fetch cards with specific board_id
//boardlistJSX (own component?) - radio form in app to choose what board to display
//cardlist only produces cards === board.id
//board.id needs to be saved in state

const Board = ( {board_id, title, owner, cards} ) => {
    return (
        <div className="board">
            <h1 className="h1-board">Board:</h1>
            <div>{title}</div>
            <p>Created By:</p>
            <div>{owner}</div>
        </div>
    );
};

Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
}

export default Board;