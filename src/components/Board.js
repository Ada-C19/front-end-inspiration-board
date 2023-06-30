import React from 'react';
import CardList from './CardList';


function Board({ cardData, deleteCard }) {
    return (
        <div>
            <CardList 
            cardData={cardData} 
            deleteCard={deleteCard}
            />
        </div>
    )
}

export default Board;
