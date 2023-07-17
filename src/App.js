import React, { useEffect, useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import './App.css';
import BoardList from './components/BoardList';
import axios from 'axios';

export const URL = 'http://localhost:5000/boards'

const App = () => {
  const [boards, setBoards] = useState([]);
  const [boardData, setBoardData] = useState({
    boardId: '',
    title: '',
    owner: ''
  });

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newBoards = response.data.map((board) => ({
          boardId: board.boardId,
          title: board.title,
          owner: board.owner,
        }));
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <BoardList />
      </header>
    </div>
  );
}

export default App;
