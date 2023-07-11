import React from 'react'

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
        <ol>{boardTitles}</ol>
    )
}

export default BoardList;