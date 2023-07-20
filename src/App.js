import React, { useState, useEffect } from "react";
import './App.css';
import Board from './components/Board/Board';
import BoardList from './components/BoardList/BoardList';
import NewCardForm from './components/NewCardForm';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';

const DEFAULT_BOARD_ID = 2; // TODO: Remove 

const test_cards = [
  {
    "message": "hello world",
    "id": 5,
    "likes_count": 6,
  },
  {
    "message": "hello computer",
    "id": 6,
    "likes_count": "10000000"
  }
];

const test_board = {
  cards: test_cards,
};

const kBaseUrl = 'http://127.0.0.1:5000';

function App() {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(2);
  const [isSidebarShown, setIsSidebarShown] = useState(true)
  
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((res) => setBoardData(res.data))
    .catch((err) => console.log(err));
}, []);

  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards/${selectedBoard}/cards`)
      .then((res) => setCardData(res.data))
      .catch((err) => console.log(err))
  }, [selectedBoard]);

const handleBoardSubmit = (newBoardData) => {
  axios
    .post(`${kBaseUrl}/boards`, newBoardData)
    .then((res) => {
      setBoardData((prev) => [...prev, res.data.board]);
    })
    .catch((err) => console.log(`Failed to assign card to board. Error: ${err}`));
};

const handleCardSumbit = (newCardFormProps) => {
  // Handle UI after card has been created from the form
  return axios
    .post(
      `${kBaseUrl}/boards/${newCardFormProps.boardId}/cards`,
      { message: newCardFormProps.message },
    )
    .then((response) => {
      console.log(`Assigned card to a boardId=${newCardFormProps.boardId}. Response: ${response}`);
      // UI change
    })
    .catch((error) => {
      console.log(`Failed to assign card to board. Error: ${error}`);
    });
};

const toggleSidebar = (prev) => {
  setIsSidebarShown((prev) => !prev);
}

return (
  <div className="App">
    <h1 className="App-header">✨Inspiration Board✨</h1>
    <main className="board-container">
      <BoardList data={boardData} setSelectedBoard={setSelectedBoard}/>
      <Board
        cardData={cardData}
        // onLike={handleLike}
      />
      </main>
      <div className="sidebar">
        {isSidebarShown && <Sidebar handleBoardSubmit={handleBoardSubmit} />}
        <NewCardForm boardId={DEFAULT_BOARD_ID} handleCardSumbit={handleCardSumbit} />
      </div>
      <button onClick={toggleSidebar}>Show Sidebar</button>
  </div>
);
}

export default App;
