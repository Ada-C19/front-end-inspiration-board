import React from 'react';
import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import './CardList.css';

const CardList = ( { cardsData, addOneLikeToCard, removeOneLikeToCard, deleteCard, selectedBoard, cardObject }) => {

  const cardElements = cardsData.map((card) => {
    return (<Card
        card={card}
        addOneLikeToCard={addOneLikeToCard}
        removeOneLikeToCard={removeOneLikeToCard}
        deleteCard={deleteCard}
        cardObject={cardObject}
        />)
        
  });

    return (
        // <div className='cardslist-container'>
        <>
          {/* Add conditional rendering */}
          <h1>{selectedBoard.owner}'s Board for {selectedBoard.title}</h1>
          {/* Card Components */}
          {cardElements}
        </>
    );
};


export default CardList;

//create new card  form is in the card list? its a child??? based off the example
//shows all card COMPONENTS
//card list only shows when we click on board title in board component