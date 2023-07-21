import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js';
import './BoardList.css';

const BoardList = (props) => {
  console.log(props.boards);
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
          selectBoard={props.selectBoard}
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
  selectBoard: PropTypes.func.isRequired,
}

export default BoardList;