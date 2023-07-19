import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';

const CardList = (props) => {
    return (
        <div>
        <h2>{props.board.owner}'s Cards for {props.board.title}</h2>
        </div>
    );
};


export default CardList;

//create new card  form is in the card list? its a child??? based off the example
//shows all card COMPONENTS
//card list only shows when we click on board title in board component