import React from 'react';
import CardList from './components/CardList';


const cardBoardData = [
    {
    "id": 1,
    "message": "This is a quote",
    "likesCount": 0
    },
    {
    "id": 2,
    "message": "This is a cooler quote",
    "likesCount": 0
    }
]

function Board() {
    return (
        <div>
            <CardList cardBoardData={cardBoardData} />
        </div>
    )
}

export default Board;