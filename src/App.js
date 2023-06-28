import React, { useState } from 'react';
import './App.css';

import CardList from './components/CardList';


import Board from './components/Board';
// import Board from './components/CardList';
import boardData from './data/boards.json';

import NewCardForm from './components/NewCardForm';
import BoardSelectRadio from './components/BoardSelectRadio';

// use ${process.env.REACT_APP_BACKEND_URL} to make API calls


const App = () => {
  const [boards, setBoards] = useState(boardData);
  const [targetBoard, setTargetBoard] = useState(0);
  const [cards, setCards] = useState(boards[targetBoard].cards);

  const handleSelectBoard = (boardId) => {
    setTargetBoard(boardId);
    // should the next line be something with useEffect instead?
    setCards(boards[targetBoard].cards);
  };

  const displayCards = (id) => {
    return (
      <CardList cards={cards} onClick={handleLike}/>
    )
  };

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
        <BoardSelectRadio boards={boards} onBoardSelect={handleSelectBoard}/>
        {displayCards(targetBoard)}
        {/* <CardList cards={cards} onClick={handleLike} /> */}
        {/* <Board board={boards} cards={cards} /> */}
        <NewCardForm addCard={handleSubmitCard} />
      </main>
    </div>
  );
}

export default App;
