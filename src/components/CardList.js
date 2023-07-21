import React from 'react';
import Card from './Card';

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
        <>
          <h1>{selectedBoard.owner}'s Board for {selectedBoard.title}</h1>
          <div className='board-of-cards'>
            {cardElements}
          </div>
          <button className='delete-button' onClick={() => deleteBoard(selectedBoard)}>delete board</button>
        </>
    );
};

export default CardList;