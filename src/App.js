import React, { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import Board from './components/Board';
import './App.css';
import axios from 'axios';

const App = () => {
  const [boards, setBoards] = useState([]); 
// boards is a piece of state
// setBoards is a function
  const [selectedBoard, setSelectedBoard] = useState([]);
// create a state for selected board 

  useEffect(()=>{ 
    fetchBoardData().then((boardList)=>{setBoards(boardList)})
  },[])



  return (
    <div className="App">
      <BoardList boards={boards}></BoardList>
      {boards.map((board) => (
      <Board
        key={board.board_id}
        board_id={board.board_id}
        title={board.title}
      />
    ))}
    </div>
  );
}

export default App;

const fetchBoardData = () => {
  return (
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
  .then((response) => {return response.data})  
  )
}

  // Event handler to update the selectedd board
  const handleBoardUpdate = (event) => {
    const selectedBoardId = event.target.value;
    const selectedBoard = boards.find((board);
    setSelectedBoard(selectedBoard);
  };


return (
  <div className="App">
    <BoardList boards={boards} />
    
      {/* {boards.map((board) => (
      <Board
        board_id={board.board_id}
        title={board.title} */}
  </div>
);
