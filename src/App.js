import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';


// ######## Dummy Data ######## 

const boardData = [
  {
  "id": 1,
  "title": "Title 1",
  "owner": "Owner 1"
  },
  {
  "id": 2,
  "title": "Title 2",
  "owner": "Owner 2"
  }
]

const cardData = [
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

function App() {
  const [cards, setCards] = useState(cardData)
  const [boardsData, setBoardsData] = useState(boardData)
  const [likes, setLikes] = useState(0)
  const [selectedBoard, setSelectedBoard] = useState(null)

  console.log('cardData.likesCount', cardData)

  // ######## Select Board######## 
  // Need to fix this.

  const boardSelect = (id, title) => {
      setSelectedBoard({id, title})
  }

  // ######## Add new board ######## 

  const addBoard = newBoard => {
    const newBoardList = [...boardsData];
    const nextId = crypto.randomUUID();
    console.log('nextID', nextId)

    newBoardList.push({
      id: nextId,
      title: newBoard.title,
      owner: newBoard.owner
    })
    setBoardsData(newBoardList)
  };

// ######## Delete individual card ######## 

  const deleteCard = id => {
    console.log('click delete')
    setCards(currentCards => {
      const updatedCards =  currentCards.filter(card => card.id !== id);
      return updatedCards
    })
  }

  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <main>
        <BoardList 
        boardSelect={boardSelect} 
        boardData={boardsData}
        selectedBoard={selectedBoard}
        />
        <Board 
        cardData={cards} 
        deleteCard={deleteCard}
        />
        <NewBoardForm 
        addBoard={addBoard}
        />
      </main>
    </div>
  );
};

export default App;
