import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';


const cardBoardData = [
  {
  "id": 1,
  "message": "This is a quote",
  "likesCount": 0
  },
  {
  "id": 2,
  "message": "This is a cooler quote",
  "likesCount": 0
  }
]
const boardData = [
  {
  "id": 1,
  "title": "Title 1",
  // "likesCount": 0
  },
  {
  "id": 2,
  "title": "Title 2",
  // "likesCount": 0
  }
]
function App() {
  const [likes, setLikes] = useState(cardBoardData)
  const [selectedBoard, setSelectedBoard] = useState(null)
  const boardSelect = (id, title) => {
      setSelectedBoard({id, title})
  }
  console.log(selectedBoard)
  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <main>
        <BoardList boardSelect={boardSelect} boardData={boardData}/>
        <Board cardBoardData={cardBoardData}/>
      </main>
    </div>
  );
}

export default App;
