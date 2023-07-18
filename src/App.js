import React, { useState, useEffect } from "react";
import './App.css';
import Board from './components/Board/Board';
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

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <p>hello world :)</p>
      <Board board_id={1} 
      owner={"Abby"} 
      title={"tamagotchis i have loved"} 
      cards={test_board.cards}/>
    </div>
  );
}

export default App;
