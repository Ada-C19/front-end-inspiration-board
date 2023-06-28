import React from 'react';
import CardList from './CardList';


function Board({ cardBoardData, increaseLikeCount }) {
    return (
        <div>
            <CardList cardBoardData={cardBoardData} />
        </div>
    )
}

export default Board;
