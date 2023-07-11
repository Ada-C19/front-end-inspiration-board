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
  const [selectedBoard, setSelectedBoard] = useState([])

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

  // ######## Increase Like Count ########

  const increaseLikesCount = id => {
    const updatedCards = cards.map(card => {
      if (card.id == id) {
        return {
          ...card,
          likesCount: card.likesCount + 1
        };
      };
      return card;
    });
    setCards(updatedCards);
  };

  //  ######## Keep Count of Total Likes ########

  // const totalLikes = () => {
  //   let total = 0;
  //   console.log('total:', total)
  //   console.log('cards:', cards)
  //   for(let card of cards) {
  //     console.log('card:', card)
  //     total += card.likesCount
  //   }
  //   return total;
  // }

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
        increaseLikesCount={increaseLikesCount}
        />
        <NewBoardForm 
        addBoard={addBoard}
        />
        {/* <p>Total likes: {totalLikes()}</p> */}
      </main>
    </div>
  );
};

export default App;
