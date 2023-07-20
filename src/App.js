import React, { useState, useEffect } from "react";
import './App.css';
import Board from './components/Board/Board';
import BoardList from './components/BoardList/BoardList';
import Sidebar from './components/Sidebar/Sidebar';
import axios from 'axios';
import SortOrder from "./components/SortOrder/SortOrder";

const kBaseUrl = 'http://127.0.0.1:5000';

function App() {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(undefined);
  const [isSidebarShown, setIsSidebarShown] = useState(true)
  const [selectedSort, setSelectedSort] = useState(undefined); 
  
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((res) => setBoardData(res.data))
    .catch((err) => console.log(err));
}, []);


  useEffect(() => {
    if (selectedBoard) {
      let url = `${kBaseUrl}/boards/${selectedBoard}/cards`; 

      if (selectedSort) {
        url += `?sort=${selectedSort}`;
      }
    axios
      .get(url)
      .then((res) => setCardData(res.data))
      .catch((err) => console.log(err));
  }
}, [selectedBoard, selectedSort]);

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
      console.error(`Failed to assign card to board. Error: ${error}`);
    });
};

const handleLike = id => {
  return axios
  .patch(`${kBaseUrl}/cards/${id}`)
  .then((res) => {
    setCardData((prev) => {
      return prev.map((card) =>{
        if (id === card.id) {
          return {...card, likes_count: res.data.card.likes_count};
        } else {
          return card;
        }
      })
    })
  })
}

const deleteCard = id => {
  return axios
  .delete(`${kBaseUrl}/cards/${id}`)
  .then((res) => {
    setCardData((prev) => prev.filter((card) => card.id !== id))
  })
  .catch((err) => console.log(err))
};

const toggleSidebar = (prev) => {
  setIsSidebarShown((prev) => !prev);
}

const handleSortChange = (event) => {
  const selectedSortvalue = event.target.value;
  setSelectedSort(selectedSortvalue);
};

return (
  <div className="App">
    <div className="sidebar__container">
      <button onClick={toggleSidebar}>Show Sidebar</button>
      {isSidebarShown && <Sidebar 
        handleBoardSubmit={handleBoardSubmit} 
        handleCardSubmit={handleCardSubmit}/>}
    </div>
    <div className='body__container'>
    <h1 className="App-header">✨Inspiration Board✨</h1>
    <main className="board-container">
      <SortOrder handleSortChange={handleSortChange}/>
      <BoardList data={boardData} setSelectedBoard={setSelectedBoard}/>
      <Board
        cardData={cardData}
        onDelete={deleteCard}
        onLike={handleLike}
      />
    </main>
    </div>
    
  </div>
);
}

export default App;
