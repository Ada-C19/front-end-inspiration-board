import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';

const CardList = ( { cardsData, addOneLikeToCard, removeOneLikeToCard, deleteCard, selectedBoard }) => {

  const cardElements = cardsData.map((card) => {
    return (<Card
        card={card}
        addOneLikeToCard={addOneLikeToCard}
        removeOneLikeToCard={removeOneLikeToCard}
        deleteCard={deleteCard}
        />)
        
  });

    return (
        <div className='cardslist-container'>
          <h1>{selectedBoard.owner}'s Board for {selectedBoard.title}</h1>
        </div>
    );
};


export default CardList;

//create new card  form is in the card list? its a child??? based off the example
//shows all card COMPONENTS
//card list only shows when we click on board title in board component