import React from 'react'
import PropTypes from 'prop-types'

function BoardList({boards, callBack}) {
    const board = boards.map((board)=> {
        return (
        <section onClick = {()=>{callBack(board.board_id)}} key={board.board_id}>
            <li> {board.title}</li>
        </section>
    )})


    return (
    <div className="board_list">
        Select Your Board:
        {board}
    </div>
    )
}

// BoardList.propTypes = {
//     //boards is a dictionary
//     //cards is a dictionary
// }

BoardList.propTypes = {
    boardData: PropTypes.arrayOf(
      PropTypes.shape({
        boardId: PropTypes.number.isRequired,
        boardTitle: PropTypes.string.isRequired,
        boardOwner: PropTypes.string.isRequired,
        cards: PropTypes.arrayOf(
          PropTypes.shape({
            message: PropTypes.string.isRequired,
            likeCount: PropTypes.number.isRequired
          })
        )
      })
    )
  };

export default BoardList;