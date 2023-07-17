import React from 'react';
import './BoardList.css';

function BoardList({ boardData, boardSelect }) {
    const boardTitles = boardData.map(board => {
        return (
        <ul key = {board.board_id}
          onClick={() => boardSelect(board.board_id, board.title, board.owner)}
        >
          {board.title}
        </ul>
        );
    });
    
    return (
      <ol className='list-boards'>{boardTitles}</ol>
    );
};

export default BoardList;