import React from 'react';
import CardList from './CardList';


function Board({ cardData, increaseLikesCount, deleteCard }) {

    return (
        <div>
          <section>
            <h3 className='sect-heading'>Selected Board</h3>
          </section>
          <CardList 
          cardData={cardData} 
          deleteCard={deleteCard}
          increaseLikesCount={increaseLikesCount}
          />
        </div>
    )
}

export default Board;
