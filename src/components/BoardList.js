import React from 'react';
import PropTypes from 'prop-types';
import './BoardList.css';

function BoardList({ boardData, boardSelect }) {
    const boardTitles = boardData.map(board => {
        return (
        <div key = {board.board_id}
          onClick={() => boardSelect(board.board_id, board.title, board.owner)}
        >
          {board.title}
        </div>
        );
    });
    
    return (
      <ol className='list-boards'>{boardTitles}</ol>
    );
};

BoardList.propTypes ={
  boardData: PropTypes.array.isRequired,
  boardSelect: PropTypes.func.isRequired
};

export default BoardList;