import React, { useState, useEffect } from "react";
import './App.css';
import Board from './components/Board/Board';
import BoardList from './components/BoardList/BoardList';
import NewCardForm from './components/NewCardForm';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';

const kBaseUrl = 'http://127.0.0.1:5000';

function App() {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(undefined);
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

const handleCardSubmit = (newCardFormProps) => {
  // Handle UI after card has been created from the form
  return axios
    .post(
      `${kBaseUrl}/boards/${selectedBoard}/cards`,
      { message: newCardFormProps.message },
    )
    .then((res) => {
      console.log(`Assigned card to a boardId=${selectedBoard}. Response: ${res}`);
      // UI change
      setCardData((prev) => [...prev, res.data.card]);
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
        //onLike={handleLike}
      />
    </main>
    <div className="sidebar">
      {isSidebarShown && <Sidebar 
        handleBoardSubmit={handleBoardSubmit} 
        handleCardSubmit={handleCardSubmit}/>}
    </div>
    <button onClick={toggleSidebar}>Show Sidebar</button>
  </div>
);
}

export default App;
