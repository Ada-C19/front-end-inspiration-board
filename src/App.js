import React, { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import './App.css';
import axios from 'axios';

const App = () => {
  const [boards, setBoards] = useState([]); 
// boards is a piece of state
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


