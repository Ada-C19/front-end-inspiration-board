import React from 'react'
import PropTypes from 'prop-types'
import './BoardList.css'

function BoardList({boards, callBack}) {
    console.log(boards)
    const board = boards.map((board)=> {
        return (
            <li className="board-list-items" onClick = {()=>{callBack(board.board_id)}} key={board.board_id}> {board.title} <br/> by {board.owner}</li>
    )})

    return (
    <div className="board-list-container">
        {board}
    </div>
    )
}

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
      PropTypes.shape({
        board_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired
      })
    ),
    callBack: PropTypes.func.isRequired,
  };

export default BoardList;