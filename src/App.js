import React, { useState, useEffect } from "react";
import './App.css';
import Board from './components/Board/Board';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';

const test_cards = [
  {"message": "hello world",
  "id": 5,
  "likes_count": 6,},
  {"message": "hello computer",
  "id": 6,
  "likes_count": "10000000"}
];

const test_board = {
  cards: test_cards,
}

const kBaseUrl = 'http://127.0.0.1:5000';

function App() {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((res) => setBoardData(res.data))
      .catch((err) => console.log(err));
    }, []);
    
    const handleBoardSubmit = (newBoardData) => {
      axios
      .post(`${kBaseUrl}/boards`, newBoardData)
      .then((res) => {
        setBoardData((prev) => ({...prev}))
      })
    };

  return (
    <div className="App">
      <p>hello world :)</p>
      <Board board_id={1} 
      owner={"Abby"} 
      title={"tamagotchis i have loved"} 
      cards={test_board.cards}/>
      <Sidebar handleBoardSubmit={handleBoardSubmit}/>
    </div>
  );
}

export default App;
