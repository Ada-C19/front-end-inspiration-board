import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';


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
function App() {
  const [cards, setCards] = useState(cardData)
  const [likes, setLikes] = useState(0)
  const [selectedBoard, setSelectedBoard] = useState(null)

  console.log('cardData.likesCount', cardData)

  const boardSelect = (id, title) => {
      setSelectedBoard({id, title})
  }

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
        boardData={boardData}
        />
        <Board 
        cardData={cards} 
        deleteCard={deleteCard}
        />
      </main>
    </div>
  );
}

export default App;
