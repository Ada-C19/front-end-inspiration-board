import React from 'react';
import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import './CardList.css';

const CardList = ( { cardsData, addOneLikeToCard, removeOneLikeToCard, deleteCard, selectedBoard, deleteBoard}) => {

  const cardElements = cardsData.map((card) => {
    return (<Card
        card={card}
        addOneLikeToCard={addOneLikeToCard}
        removeOneLikeToCard={removeOneLikeToCard}
        deleteCard={deleteCard}
        />)
        
  });

    return (
        // <div className='cardslist-container'>
        <>
          {/* Add conditional rendering */}
          <h1>{selectedBoard.owner}'s Board for {selectedBoard.title}</h1>
          {/* Card Components */}
          <div className='board-of-cards'>
            {cardElements}
          </div>
          <button className='delete-button' onClick={() => deleteBoard(selectedBoard)}>delete board</button>
        </>
    );
};


export default CardList;

//create new card  form is in the card list? its a child??? based off the example
//shows all card COMPONENTS
//card list only shows when we click on board title in board component