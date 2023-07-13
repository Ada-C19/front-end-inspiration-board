import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';


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

// ######## Add new card ########

  const addCard = newCard => {
    const newCardList = [...cards];
    const nextId = crypto.randomUUID();
    
    newCardList.push({
      id: nextId,
      message: newCard.message,
      likesCount: 0
    })
    setCards(newCardList)
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

  return (
    <div className="App grid-container">
      <header className="App-header">
        <h3 className='heading'>Inspiration Board</h3>
      </header>
      <section className='board-list'>
        <h3 className='sect-heading'>Boards</h3>
        <BoardList 
        boardSelect={boardSelect} 
        boardData={boardsData}
        selectedBoard={selectedBoard}
        />
      </section>
      <section className='selected-board'>
        <h3 className='sect-heading'>Selected Board</h3>
      </section>
      <section className='board-form'>
        <h3 className='sect-heading'>Create a New Board</h3>
        <NewBoardForm 
          className='board-input'
          addBoard={addBoard}
        />
      </section>
      <section className='cards-list'>
        <Board 
        cardData={cards} 
        deleteCard={deleteCard}
        increaseLikesCount={increaseLikesCount}
        />
      </section>
      <aside className='card-form'>
        <h3 className='sect-heading'>Create a New Card</h3>
        <NewCardForm 
          addCard={addCard}
        />
      </aside>
    </div>
  );
};

export default App;
