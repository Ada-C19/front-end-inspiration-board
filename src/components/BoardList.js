import React from 'react';
import './BoardList.css';

function BoardList({ boardData, boardSelect }) {
    const boardTitles = boardData.map(board => {
        return (
        <li 
          onClick={() => boardSelect(board.id, board.title)}
        >
          {board.title}
        </li>
        )
    })
    
    return (
      <>
        <ol className='list-boards'>{boardTitles}</ol>
      </>
    )
}

export default BoardList;