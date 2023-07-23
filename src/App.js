import React, { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import './App.css';
import axios from 'axios';

const App = () => {
  const [boards, setBoards] = useState([]); 
  const [selectedBoard, setSelectedBoard] = useState(null);
  // create a state for selected board 
  const [selectedCard, setSelectedCard] = useState([]);
  // create a state for currently selected cards

  useEffect(()=>{ 
    fetchBoardData().then((boardList)=>{setBoards(boardList)})
  },[])


  return (
    <div className="App">
      <BoardList boards={boards}>

      </BoardList>
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


// Event handler to update the selected board
//   const handleBoardChange = (event) => {
//     const selectedBoardId = event.target.value;
//     const selectedBoard = boards.find((board) => board.board_id === selectedBoardId);
//     setSelectedBoard(selectedBoard);
//   };
