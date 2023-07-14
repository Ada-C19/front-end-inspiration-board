import React from 'react';
import CardList from './CardList';


function Board({ cardData, increaseLikesCount, deleteCard, cardSelect}) {

    return (
        <div>
          <CardList 
          cardData={cardData} 
          deleteCard={deleteCard}
          increaseLikesCount={increaseLikesCount}
          cardSelect={cardSelect}
          />
        </div>
    )
}

export default Board;
