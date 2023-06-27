import React, { useState } from 'react';
import './App.css';

import CardList from './components/CardList';
import cardData from './data/cards.json';

import Board from './components/Board';
// import Board from './components/CardList';
import boardData from './data/boards.json';

import NewCardForm from './components/NewCardForm';
import BoardSelectRadio from './components/BoardSelectRadio';

// use ${process.env.REACT_APP_BACKEND_URL} to make API calls


const App = () => {
  const [cards, setCards] = useState(cardData);
  const [boards, setBoards] = useState(boardData);

  const handleLike = id => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (id === card.id) {
          return { ...card, likesCount: card.likesCount + 1 };
        } else {
          return card;
        };
      })
    })
  }
  const displayCards = (id) => {

    for (let board of boards) {
      if (board.id === id) {
        return (
          <CardList cards={board.cards} onClick={handleLike} />
        );
      };
    };
  };

  const handleSubmitCard = (newCard) => {

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
        <BoardSelectRadio boards={boards} displayCards={displayCards} />
        {displayCards(1)}
        {/* <CardList cards={cards} onClick={handleLike} /> */}
        <Board board={boards} cards={cards} />
        <NewCardForm addCard={handleSubmitCard} />
      </main>
    </div>
  );
}

export default App;
