import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js';
// import './BoardList.css';

const BoardList = (props) => {
  return (
     <ul>
        {props.boards.map((board) => (
          <Board
          key={board.boardId}
          boardId={board.boardId}
          title={board.title}
          owner={board.owner}
          updateBoard={props.updateBoard}
          deleteBoard={props.deleteBoard}
          // cards={board.cards}
          />
        ))}  
      </ul>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
}

export default BoardList;