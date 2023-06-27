import React, { useState } from 'react';
import './App.css';

import CardList from './components/CardList';
import cardData from './data/cards.json';

// import Board from './components/CardList';
// import boardData from './data/boards.json';

import NewCardForm from './components/NewCardForm';

// use ${process.env.REACT_APP_BACKEND_URL} to make API calls


const App = () => {
  const [cards, setCards] = useState(cardData);
  // const [boards, setBoards] = useState(boardData);

  const handleLike = id => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (id === card.id) {
          return {...card, likesCount: card.likesCount + 1};
        } else {
          return card;
        };
      })
    })
  }

  const handleSubmitCard = (newCard) => {
    // const newCardData = [...cards];

    const nextId = Math.max(...cards.map(card => card.id)) + 1;

    const newCardObject = {
      id: nextId,
      message: newCard.message,
      board: newCard.board,
      likesCount: 0,
    };
    setCards((prevData) => [newCardObject, ...prevData])
  }

  return (
    <div className="App">
      <header>
        <h1>MMNJ INSPO BOARD</h1>
      </header>
      <main>
        <CardList cards={cards} onClick={handleLike}/>
        {/* <Board boards={boards}/> */}
        <NewCardForm onSubmit={handleSubmitCard}/>
      </main>
    </div>
  );
}

export default App;
