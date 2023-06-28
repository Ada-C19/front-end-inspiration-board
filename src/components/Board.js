import React from 'react';
import CardList from './CardList';


function Board({ cardBoardData }) {
    return (
        <div>
            <CardList cardBoardData={cardBoardData} />
        </div>
    )
}

export default Board;
